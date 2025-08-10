// === Separate Utility Function to Generate Invoice Number ===
export default function generateInvoiceNumber(count: number) {
  const date = new Date();
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const yy = String(date.getFullYear()).slice(-2);
  const paddedCount = String(count).padStart(4, "0");

  return `ASBO-${dd}-${mm}-${yy}-${paddedCount}`;
}
