"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./styles/ServiceSection.module.css";

const service_image_path = "/assets/service_image.jpg";

const APPLIANCES = [
  "Washing Machine",
  "Dishwasher",
  "Microwave",
  "Refrigerator",
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
};

// Dummy agent info
const AGENT_INFO = {
  name: "Santhosh",
  phone: "+91 9676626307",
};

export default function ServiceSection() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [appliance, setAppliance] = useState("");
  const [company, setCompany] = useState("");
  const [issue, setIssue] = useState("");
  const [lastSubmittedAppliance, setLastSubmittedAppliance] = useState("");
  const [assignedExperts, setAssignedExperts] = useState<
    Record<string, string>
  >({});

  const handleSubmit = () => {
    if (!appliance || !company || !issue) return;

    setAssignedExperts((prev) => ({
      ...prev,
      [appliance]: `${AGENT_INFO.name} - ${AGENT_INFO.phone}`,
    }));

    setLastSubmittedAppliance(appliance);
    setAppliance("");
    setCompany("");
    setIssue("");
  };

  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>Reliable Home Appliance Services</h2>
            <p className={styles.subtitle}>
              From installation to expert repairs and maintenance — we keep your
              appliances running like new. Professional service for all major
              brands and models.
            </p>

            <div className={styles.grid}>
              {APPLIANCES.map((item) => (
                <div key={item} className={styles.card}>
                  <strong>{item}</strong>
                  <span>{ISSUES[item]?.[0] || "Complete service"}</span>
                </div>
              ))}
            </div>

            <button
              className={styles.ctaButton}
              onClick={() => {
                setModalOpen(true);
                setLastSubmittedAppliance("");
              }}
            >
              Book a Service
            </button>
          </div>

          <div className={styles.imageContent}>
            <div className={styles.imageWrapper}>
              <Image
                src={service_image_path}
                alt="Appliance Services"
                width={600}
                height={500}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>Request Service</h3>

            <label>
              Select Appliance:
              <select
                value={appliance}
                onChange={(e) => {
                  setAppliance(e.target.value);
                  setIssue("");
                }}
              >
                <option value="">-- Choose Appliance --</option>
                {APPLIANCES.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Select Company:
              <select
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              >
                <option value="">-- Choose Company --</option>
                {COMPANIES.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Select Problem:
              <select
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                disabled={!appliance}
              >
                <option value="">-- Choose Issue --</option>
                {appliance &&
                  ISSUES[appliance].map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
              </select>
            </label>

            <div className={styles.modalActions}>
              <button onClick={handleSubmit}>Submit</button>
              <button
                onClick={() => setModalOpen(false)}
                className={styles.cancelBtn}
              >
                Cancel
              </button>
            </div>

            {lastSubmittedAppliance &&
              assignedExperts[lastSubmittedAppliance] && (
                <div className={styles.agentInfoModal}>
                  <h4>Assigned Expert:</h4>
                  <p>👨‍🔧 {assignedExperts[lastSubmittedAppliance]}</p>
                </div>
              )}
          </div>
        </div>
      )}
    </section>
  );
}
