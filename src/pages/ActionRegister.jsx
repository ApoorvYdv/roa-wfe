import React from "react";
import CaseSummary from "../components/CaseSummary";
import { TopInputBar } from "../components/TopInputBar";
import ModificationTimeline from "../components/ModificationTimeline";
import { modification } from "../helper/constants";

export default function ActionRegister() {
  return (
    <div className="action-register-page">
      <div>Action Register</div>
      <TopInputBar />
      <CaseSummary />
      <ModificationTimeline groupedData={modification} />
    </div>
  );
}
