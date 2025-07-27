"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { generateBillPDF, BillItem } from "@/lib/pdfGenerator";

const spareTypes = [
  "Door lock",
  "Single Inlet valve",
  "Double Inlet valve",
  "3 way Inlet valve",
  "Sensor",
  "Drain motor",
  "Single drain pump",
  "Double drain pump",
  "Inlet pipe 1.5m",
  "Inlet pipe 2.3m",
  "Outlet pipe",
  "Door handle",
  "Dampers",
  "Suspension rods",
  "Gear box",
  "Triangle lg,samsung,ifb",
];

export default function BillingForm() {
  const [items, setItems] = useState<BillItem[]>([]);
  const [discountPercent, setDiscountPercent] = useState(0);
  const [includeGST, setIncludeGST] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gstin, setGstin] = useState("");

  const addItem = () => {
    setItems([...items, { name: "", price: 0, quantity: 1 }]);
  };

  const updateItem = (
    index: number,
    key: keyof BillItem,
    value: string | number
  ) => {
    setItems((prev) => {
      const updated = [...prev];
      const item = { ...updated[index] };

      if (key === "price" || key === "quantity") {
        item[key] = Number(value) as BillItem[typeof key];
      } else if (key === "name") {
        item[key] = value as BillItem[typeof key];
      }

      updated[index] = item;
      return updated;
    });
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const incrementPrice = (index: number) => {
    setItems((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], price: updated[index].price + 1 };
      return updated;
    });
  };

  const decrementPrice = (index: number) => {
    setItems((prev) => {
      const updated = [...prev];
      if (updated[index].price > 0) {
        updated[index] = { ...updated[index], price: updated[index].price - 1 };
      }
      return updated;
    });
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discountAmount = (subtotal * discountPercent) / 100;
  const total = subtotal - discountAmount;

  const handleGeneratePDF = () => {
    generateBillPDF({
      items,
      discountPercent,
      includeGST,
      customerName,
      phone,
      address,
      gstin,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-5xl mx-auto mt-10">
      <h1 className="text-2xl font-bold text-blue-900 mb-6">Generate Bill</h1>

      {/* Customer Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <Input
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <Input
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <textarea
          className="border rounded-md p-2 h-24 resize-none"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Input
          placeholder="GST Number (Optional)"
          value={gstin}
          onChange={(e) => setGstin(e.target.value)}
        />
      </div>

      {/* GST Checkbox */}
      <div className="flex items-center space-x-2 mb-4">
        <Checkbox
          id="gst"
          checked={includeGST}
          onCheckedChange={(checked) => setIncludeGST(Boolean(checked))}
        />
        <label htmlFor="gst" className="text-sm text-gray-700">
          Generate GST Bill
        </label>
      </div>

      {/* Items */}
      <h2 className="font-semibold mb-2">Items</h2>
      <table className="w-full text-sm text-left border rounded-md overflow-hidden">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-3 py-2">Item Name</th>
            <th className="px-3 py-2">Price</th>
            <th className="px-3 py-2">Quantity</th>
            <th className="px-3 py-2">Total</th>
            <th className="px-3 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr key={idx} className="border-t">
              <td className="px-3 py-2">
                <select
                  className="border rounded p-1 w-full"
                  value={item.name}
                  onChange={(e) => updateItem(idx, "name", e.target.value)}
                >
                  <option value="">Select item</option>
                  {spareTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </td>
              <td className="px-3 py-2">
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => decrementPrice(idx)}
                  >
                    -
                  </Button>
                  <Input
                    type="text"
                    value={item.price.toString()}
                    onChange={(e) => updateItem(idx, "price", e.target.value)}
                    className="w-20 text-center"
                  />
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => incrementPrice(idx)}
                  >
                    +
                  </Button>
                </div>
              </td>
              <td className="px-3 py-2">
                <Input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateItem(idx, "quantity", e.target.value)}
                />
              </td>
              <td className="px-3 py-2">₹{item.price * item.quantity}</td>
              <td className="px-3 py-2">
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => removeItem(idx)}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end mt-4">
        <Button className="bg-teal-500 text-white px-4" onClick={addItem}>
          Add Item
        </Button>
      </div>

      {/* Discount */}
      <div className="flex justify-end items-center gap-4 mt-6">
        <label className="text-gray-700">Discount (%):</label>
        <Input
          type="number"
          min="0"
          max="100"
          value={discountPercent}
          onChange={(e) => setDiscountPercent(Number(e.target.value))}
          className="w-32"
        />
      </div>

      {/* Summary */}
      <div className="text-right mt-4">
        <p className="text-sm text-gray-600">Subtotal: ₹{subtotal}</p>
        <p className="text-sm text-gray-600">
          Discount: ₹{discountAmount.toFixed(2)}
        </p>
        <p className="text-lg font-bold text-blue-900">
          Total: ₹{total.toFixed(2)}
        </p>
      </div>

      <div className="flex justify-end mt-6">
        <Button className="bg-blue-900 text-white" onClick={handleGeneratePDF}>
          Generate Bill (PDF)
        </Button>
      </div>
    </div>
  );
}
