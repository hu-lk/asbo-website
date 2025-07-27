import { jsPDF } from "jspdf";

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
}: {
  items: BillItem[];
  discountPercent: number;
  includeGST: boolean;
  customerName: string;
  phone: string;
  address: string;
  gstin: string;
}) {
  const doc = new jsPDF();
  let y = 20;

  const invoiceNumber = `ASBO${Math.floor(Math.random() * 1000000)}`;
  const date = new Date().toLocaleDateString("en-GB");

  doc.setFontSize(22);
  doc.text("ASBO INVOICE", 20, y);
  doc.setFontSize(12);
  doc.text(`Invoice No: ${invoiceNumber}`, 190, y, { align: "right" });
  y += 10;
  doc.text(`Date: ${date}`, 190, y, { align: "right" });
  y += 15;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("From:", 20, y);
  doc.setFont("helvetica", "normal");
  y += 6;
  doc.text("ASBO Authoried Services", 20, y);
  y += 6;
  doc.text(`X road, adjacent lane Indra-Nagendra theatre, Saroornagar,`, 20, y);
  y += 6;
  doc.text(
    `Sai Nagar, Saroor Nagar East, Kharmanghat Hyderabad, Telangana`,
    20,
    y
  );
  y += 6;
  if (includeGST) {
    doc.text(`GSTIN:29AABCU9603R1ZX`, 20, y);
    y += 6;
  }
  doc.text("Phone: +91 9676626307", 20, y);
  y += 16;

  doc.setFont("helvetica", "bold");
  doc.text("Bill To:", 20, y);
  doc.setFont("helvetica", "normal");
  y += 6;
  doc.text(customerName || "Customer Name", 20, y);
  y += 6;
  doc.text(address || "Customer Address", 20, y);
  y += 6;
  if (gstin) {
    doc.text(`GSTIN: ${gstin}`, 20, y);
    y += 6;
  }
  doc.text(`Phone: ${phone || "N/A"}`, 20, y);
  y += 16;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("Item", 20, y);
  doc.text("Price", 110, y, { align: "right" });
  doc.text("Qty", 130, y, { align: "right" });
  doc.text("Total", 190, y, { align: "right" });
  y += 5;
  doc.line(20, y, 190, y);
  y += 8;

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  items.forEach((item) => {
    const total = item.price * item.quantity;
    doc.text(item.name, 20, y);
    doc.text(formatINRCurrency(item.price), 110, y, { align: "right" });
    doc.text(item.quantity.toString(), 130, y, { align: "right" });
    doc.text(formatINRCurrency(total), 190, y, { align: "right" });
    y += 8;
  });

  y += 5;
  doc.line(140, y, 190, y);
  y += 10;

  const discountAmount = (subtotal * discountPercent) / 100;
  const cgst = includeGST ? subtotal * 0.09 : 0;
  const sgst = includeGST ? subtotal * 0.09 : 0;
  const total = subtotal + cgst + sgst - discountAmount;

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("Subtotal:", 140, y);
  doc.text(formatINRCurrency(subtotal), 190, y, { align: "right" });
  y += 7;

  doc.text(`Discount (${discountPercent}%):`, 140, y);
  doc.text(`-${formatINRCurrency(discountAmount)}`, 190, y, {
    align: "right",
  });
  y += 7;

  if (includeGST) {
    doc.text("CGST (9%):", 140, y);
    doc.text(formatINRCurrency(cgst), 190, y, { align: "right" });
    y += 7;

    doc.text("SGST (9%):", 140, y);
    doc.text(formatINRCurrency(sgst), 190, y, { align: "right" });
    y += 7;
  }

  doc.setFont("helvetica", "bold");
  doc.text("Total:", 140, y);
  doc.text(formatINRCurrency(total), 190, y, { align: "right" });

  // Save
  doc.save(`invoice-${invoiceNumber}.pdf`);
}
