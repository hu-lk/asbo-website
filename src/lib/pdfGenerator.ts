import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { logo } from "./logo";

export interface BillItem {
  name: string;
  price: number;
  quantity: number;
}

const formatINRCurrency = (amount: number) =>
  `Rs. ${amount.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`;

export function generateBillPDF({
  items,
  discountPercent,
  includeGST,
  customerName,
  phone,
  address,
  gstin,
  customerSignature,
  agentSignature,
}: {
  items: BillItem[];
  discountPercent: number;
  includeGST: boolean;
  customerName: string;
  phone: string;
  address: string;
  gstin: string;
  customerSignature?: string | null;
  agentSignature?: string | null;
}) {
  const doc = new jsPDF();

  const invoiceNumber = `ASBO${Math.floor(Math.random() * 1000000)}`;
  const date = new Date().toLocaleDateString("en-GB");

  // === Company Logo ===
  const logoBase64 = logo; // Replace with actual Base64
  doc.addImage(logoBase64, "PNG", 20, 10, 40, 20); // x, y, width, height

  // Header Section
  let y = 20;
  doc.setFontSize(22);
  doc.setTextColor(0, 174, 239);
  doc.text("INVOICE", 160, y);
  doc.setTextColor(0, 0, 0);

  y += 20;
  doc.setFontSize(12);
  doc.text("ASBO Authorized Services", 20, y);
  doc.setFontSize(10);
  y += 6;
  doc.text("GSTIN: 29AABCU9603R1ZX", 20, y);
  y += 6;
  doc.text("X road, adjacent lane Indra-Nagendra theatre, Saroornagar,", 20, y);
  y += 6;
  doc.text(
    "Sai Nagar, Saroor Nagar East, Kharmanghat Hyderabad, Telangana",
    20,
    y
  );
  y += 6;
  doc.text("Phone: +91 9676626307", 20, y);

  // Invoice info
  y += 10;
  doc.text(`Invoice No: ${invoiceNumber}`, 150, y);
  y += 5;
  doc.text(`Date: ${date}`, 150, y);

  // Customer Info
  y += 10;
  doc.setFont("helvetica", "bold");
  doc.text("Bill To:", 20, y);
  doc.setFont("helvetica", "normal");
  y += 6;
  doc.text(customerName || "Customer Name", 20, y);
  y += 5;
  doc.text(address || "Customer Address", 20, y);
  y += 5;
  if (gstin) {
    doc.text(`GSTIN: ${gstin}`, 20, y);
    y += 5;
  }
  doc.text(`Phone: ${phone || "N/A"}`, 20, y);
  y += 10;

  // AutoTable for Items
  autoTable(doc, {
    startY: y,
    head: [["Product", "Price", "Qty", "Total"]],
    body: items.map((item) => [
      item.name,
      formatINRCurrency(item.price),
      item.quantity.toString(),
      formatINRCurrency(item.price * item.quantity),
    ]),
    theme: "grid",
    styles: { fontSize: 10 },
    headStyles: { fillColor: [0, 174, 239] },
    columnStyles: {
      1: { halign: "right" },
      2: { halign: "right" },
      3: { halign: "right" },
    },
    margin: { left: 20, right: 20 },
  });

  const lastTable = (doc as unknown as { lastAutoTable?: { finalY: number } })
    .lastAutoTable;
  const finalY = lastTable?.finalY ?? 120;
  y = finalY + 10;

  // Summary Calculation
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discountAmount = (subtotal * discountPercent) / 100;
  const cgst = includeGST ? subtotal * 0.09 : 0;
  const sgst = includeGST ? subtotal * 0.09 : 0;
  const total = subtotal + cgst + sgst - discountAmount;

  // Summary Section
  doc.setFontSize(10);
  doc.text("Subtotal:", 140, y);
  doc.text(formatINRCurrency(subtotal), 190, y, { align: "right" });
  if (includeGST) {
    y += 6;
    doc.text("CGST (9%):", 140, y);
    doc.text(formatINRCurrency(cgst), 190, y, { align: "right" });
    y += 6;
    doc.text("SGST (9%):", 140, y);
    doc.text(formatINRCurrency(sgst), 190, y, { align: "right" });
  }
  y += 6;
  doc.text(`Discount (${discountPercent}%):`, 140, y);
  doc.text(`-${formatINRCurrency(discountAmount)}`, 190, y, { align: "right" });

  y += 6;
  doc.setFont("helvetica", "bold");
  doc.text("Total:", 140, y);
  doc.text(formatINRCurrency(total), 190, y, { align: "right" });

  // Terms and Conditions
  y += 10;
  doc.setFontSize(8);
  doc.text("Terms & Conditions:", 20, y);
  y += 4;
  doc.setFont("helvetica", "italic");
  doc.text("1. Goods once sold will not be taken back or exchanged.", 20, y);
  y += 4;
  doc.text("2. Please check items before taking delivery.", 20, y);

  // Signature Boxes
  y += 15;
  doc.setDrawColor(0);
  doc.setLineWidth(0.2);
  doc.rect(20, y, 70, 25); // Customer Signature box
  doc.rect(120, y, 70, 25); // Authorized Signature box

  // Add Base64 Signature Images (if available)
  if (customerSignature) {
    doc.addImage(customerSignature, "PNG", 21, y + 1, 68, 23);
  }
  if (agentSignature) {
    doc.addImage(agentSignature, "PNG", 121, y + 1, 68, 23);
  }

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text("Customer Signature", 22, y + 28);
  doc.text("Authorized Signature", 122, y + 28);

  // Save PDF
  doc.save(`invoice-${invoiceNumber}.pdf`);
}
