import React from "react";
import ModificationCard from "./ModificationCard";

const ModificationTimeline = ({ groupedData }) => {
  return (
    <div className="modification-timeline">
      {groupedData &&
        Object.entries(groupedData).map(([date, modifications]) => (
          <div key={date} className="date-group">
            <h2 className="date-header">{date}</h2>
            <div className="modifications-list">
              {modifications.map((modification, index) => (
                <ModificationCard
                  key={`${date}-${modification.case_number}-${index}`}
                  data={modification}
                />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default ModificationTimeline;
