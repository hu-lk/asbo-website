"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const APPLIANCES = [
  "Washing Machine",
  "Dishwasher",
  "Microwave",
  "Refrigerator",
  "AC",
];
const COMPANIES = ["LG", "IFB", "Samsung", "Whirlpool"];
const ISSUES: Record<string, string[]> = {
  "Washing Machine": [
    "Not spinning",
    "Leaking water",
    "Door not closing",
    "Installation",
    "Other",
  ],
  Dishwasher: [
    "Not draining",
    "Leaves spots",
    "Door not locking",
    "Installation",
    "Other",
  ],
  Microwave: [
    "Not heating",
    "Display not working",
    "Turntable issue",
    "Installation",
    "Other",
  ],
  Refrigerator: [
    "Not cooling",
    "Water leakage",
    "Strange noise",
    "Installation",
    "Other",
  ],
  AC: [
    "Not cooling",
    "Leaking water",
    "Remote not working",
    "Installation",
    "Other",
  ],
};

const AGENT_INFO = {
  name: "Santhosh",
  phone: "+91 9676626307",
};

export default function AsboServicePage() {
  const [appliance, setAppliance] = useState<string>();
  const [brand, setBrand] = useState<string>();
  const [issue, setIssue] = useState<string>();
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 py-12">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl border">
        <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          Book a Service
        </h1>

        <div className="space-y-5">
          {/* Appliance Selection */}
          <div>
            <Label>Select Appliance</Label>
            <Select
              onValueChange={(val) => {
                setAppliance(val);
                setBrand(undefined);
                setIssue(undefined);
              }}
            >
              <SelectTrigger className="w-full mt-1">
                <SelectValue placeholder="Choose appliance" />
              </SelectTrigger>
              <SelectContent>
                {APPLIANCES.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Brand Selection */}
          {appliance && (
            <div>
              <Label>Select Brand</Label>
              <Select onValueChange={(val) => setBrand(val)}>
                <SelectTrigger className="w-full mt-1">
                  <SelectValue placeholder="Choose brand" />
                </SelectTrigger>
                <SelectContent>
                  {COMPANIES.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Issue Selection */}
          {brand && appliance && (
            <div>
              <Label>Select Issue</Label>
              <Select onValueChange={(val) => setIssue(val)}>
                <SelectTrigger className="w-full mt-1">
                  <SelectValue placeholder="Choose issue" />
                </SelectTrigger>
                <SelectContent>
                  {ISSUES[appliance].map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Popup Button */}
          {issue && (
            <Dialog open={showPopup} onOpenChange={setShowPopup}>
              <DialogTrigger asChild>
                <button
                  className="mt-6 w-full bg-blue-900 hover:bg-blue-800 text-white py-2 rounded-md font-medium"
                  onClick={() => setShowPopup(true)}
                >
                  Get Agent Info
                </button>
              </DialogTrigger>
              <DialogContent className="text-center space-y-2">
                <h2 className="text-xl font-semibold text-blue-900">
                  Please contact our Agent
                </h2>
                <p className="text-gray-700">
                  <strong>{AGENT_INFO.name}</strong>
                </p>
                <p className="text-gray-500">{AGENT_INFO.phone}</p>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </div>
  );
}
