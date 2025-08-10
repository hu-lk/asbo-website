"use client";

import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { generateBillPDF, BillItem } from "@/lib/pdfGenerator";
import SignaturePad from "react-signature-canvas";
import Select from "react-select";
import { spareTypes } from "@/lib/sparesTypes";
import { allServices } from "@/lib/allServices";

const serviceTypes = ["Installation", "Repair", "Maintenance", "Inspection"];

type ItemOption = {
  label: string;
  value: string;
  type: "service" | "spare";
};

export default function BillingForm() {
  const [items, setItems] = useState<BillItem[]>([]);
  const [discountPercent, setDiscountPercent] = useState(0);
  const [includeGST, setIncludeGST] = useState(true);
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gstin, setGstin] = useState("");
  const [serviceType, setServiceType] = useState(serviceTypes[0]);
  const customerSigRef = useRef<SignaturePad>(null);
  const agentSigRef = useRef<SignaturePad>(null);
  const [invoiceCount, setInvoiceCount] = useState(1);

  const addItem = () => {
    setItems([...items, { name: "", price: 0, quantity: 1, type: "service" }]);
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
      } else if (key === "type") {
        if (value === "service" || value === "spare") {
          item[key] = value;
        }
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

  const serviceItems: ItemOption[] = Object.entries(allServices).flatMap(
    ([_, services]) =>
      services.map((service) => ({
        label: service,
        value: service,
        type: "service",
      }))
  );

  const spareItems: ItemOption[] = spareTypes.map((spare) => ({
    label: spare,
    value: spare,
    type: "spare",
  }));

  const groupedItemOptions = [
    {
      label: "Services",
      options: serviceItems,
    },
    {
      label: "Spares",
      options: spareItems,
    },
  ];

  const spareItemsOnly = items.filter((item) => spareTypes.includes(item.name));
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discountAmount = spareItemsOnly.reduce(
    (sum, item) => sum + (item.price * item.quantity * discountPercent) / 100,
    0
  );
  const taxBase = subtotal - discountAmount;

  const cgstTotal = includeGST
    ? spareItemsOnly.reduce((sum, item) => {
        const itemTotal = item.price * item.quantity;
        const discount = (itemTotal * discountPercent) / 100;
        return sum + ((itemTotal - discount) * 9) / 100;
      }, 0)
    : 0;

  const sgstTotal = cgstTotal;
  const total = taxBase + cgstTotal + sgstTotal;

  const handleGeneratePDF = () => {
    const customerSignature = customerSigRef.current?.isEmpty()
      ? null
      : customerSigRef.current?.toDataURL();

    const agentSignature = agentSigRef.current?.isEmpty()
      ? null
      : agentSigRef.current?.toDataURL();

    if (
      !customerName.trim() ||
      !phone.trim() ||
      !address.trim() ||
      !customerSignature ||
      !agentSignature ||
      items.length === 0
    ) {
      alert(
        "Please fill in all required fields:\n- Name\n- Phone\n- Address\n- Add at least one item\n- Both Signatures"
      );
      return;
    }
    setInvoiceCount(invoiceCount + 1);
    alert("Bill generated successfully!");

    generateBillPDF({
      items,
      discountPercent,
      includeGST,
      customerName,
      phone,
      address,
      gstin,
      customerSignature,
      agentSignature,
      serviceType,
      invoiceCount,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 w-full max-w-full sm:max-w-5xl mx-auto">
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
        <select
          className="border rounded p-2 w-full"
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value)}
        >
          {serviceTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
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

      {/* Items Table */}
      <h2 className="font-semibold mb-2">Items</h2>
      <div className="overflow-x-auto w-full">
        <table className="w-full text-sm text-left border rounded-md overflow-hidden">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-3 py-2">Item Name</th>
              <th className="px-3 py-2">Price</th>
              <th className="px-3 py-2">Quantity</th>
              <th className="px-3 py-2">Item Total</th>
              <th className="px-3 py-2">CGST (9%)</th>
              <th className="px-3 py-2">SGST (9%)</th>
              <th className="px-3 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => {
              const isSpare = spareTypes.includes(item.name);
              const itemTotal = item.price * item.quantity;
              const itemDiscount = isSpare
                ? (itemTotal * discountPercent) / 100
                : 0;
              const taxableAmount = itemTotal - itemDiscount;
              const itemCGST =
                includeGST && isSpare ? (taxableAmount * 9) / 100 : 0;
              const itemSGST = itemCGST;

              return (
                <tr key={idx} className="border-t">
                  <td className="px-3 py-2 min-w-[200px]">
                    <Select
                      className="w-full"
                      menuPortalTarget={
                        typeof window !== "undefined" ? document.body : null
                      }
                      styles={{
                        control: (base) => ({
                          ...base,
                          backgroundColor: "white",
                          borderColor: "#d1d5db",
                          minHeight: "2.5rem",
                          boxShadow: "none",
                        }),
                        menu: (base) => ({
                          ...base,
                          zIndex: 9999,
                          backgroundColor: "white",
                          color: "black",
                        }),
                        menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                        option: (base, state) => ({
                          ...base,
                          backgroundColor: state.isFocused
                            ? "#e0f2fe"
                            : "white",
                          color: "black",
                        }),
                        input: (base) => ({ ...base, color: "black" }),
                        singleValue: (base) => ({ ...base, color: "black" }),
                      }}
                      value={groupedItemOptions
                        .flatMap((group) => group.options)
                        .find((opt) => opt.value === item.name)}
                      onChange={(selected) => {
                        if (!selected) return;
                        updateItem(idx, "name", selected.value);
                        updateItem(idx, "type", selected.type);
                      }}
                      options={groupedItemOptions}
                      isSearchable
                      placeholder="Select item"
                      formatGroupLabel={(group) => (
                        <div className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                          {group.label === "Services" ? "🛠️" : "🧩"}{" "}
                          {group.label}
                        </div>
                      )}
                    />
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
                        onChange={(e) =>
                          updateItem(idx, "price", e.target.value)
                        }
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
                      onChange={(e) =>
                        updateItem(idx, "quantity", e.target.value)
                      }
                    />
                  </td>
                  <td className="px-3 py-2">₹{itemTotal}</td>
                  <td className="px-3 py-2">₹{itemCGST.toFixed(2)}</td>
                  <td className="px-3 py-2">₹{itemSGST.toFixed(2)}</td>
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
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-4">
        <Button className="bg-teal-500 text-white px-4" onClick={addItem}>
          Add Item
        </Button>
      </div>

      {/* Discount Input */}
      <div className="flex justify-end items-center gap-4 mt-6">
        <label className="text-gray-700">Discount (%):</label>
        <Input
          type="number"
          min="0"
          max="100"
          value={discountPercent}
          onChange={(e) => {
            const value = parseFloat(e.target.value);
            if (!isNaN(value) && value >= 0 && value <= 100) {
              setDiscountPercent(value);
            } else if (e.target.value === "") {
              setDiscountPercent(0);
            }
          }}
          className="w-32"
        />
      </div>

      {/* Totals */}
      <div className="text-right mt-4">
        <p className="text-sm text-gray-600">
          Subtotal: ₹{subtotal.toFixed(2)}
        </p>
        <p className="text-sm text-gray-600">
          Discount: ₹{discountAmount.toFixed(2)}
        </p>
        <p className="text-sm text-gray-600">CGST: ₹{cgstTotal.toFixed(2)}</p>
        <p className="text-sm text-gray-600">SGST: ₹{sgstTotal.toFixed(2)}</p>
        <p className="text-lg font-bold text-blue-900">
          Total: ₹{total.toFixed(2)}
        </p>
      </div>

      {/* Signatures */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="font-semibold mb-2">Customer Signature</p>
          <SignaturePad
            ref={customerSigRef}
            canvasProps={{
              className: "border border-gray-300 rounded w-full h-32",
            }}
          />
          <Button
            variant="outline"
            className="mt-2"
            onClick={() => customerSigRef.current?.clear()}
          >
            Clear
          </Button>
        </div>
        <div>
          <p className="font-semibold mb-2">Agent Signature</p>
          <SignaturePad
            ref={agentSigRef}
            canvasProps={{
              className: "border border-gray-300 rounded w-full h-32",
            }}
          />
          <Button
            variant="outline"
            className="mt-2"
            onClick={() => agentSigRef.current?.clear()}
          >
            Clear
          </Button>
        </div>
      </div>

      {/* Final Generate Button */}
      <div className="flex justify-end mt-6">
        <Button className="bg-blue-900 text-white" onClick={handleGeneratePDF}>
          Generate Bill (PDF)
        </Button>
      </div>
    </div>
  );
}
