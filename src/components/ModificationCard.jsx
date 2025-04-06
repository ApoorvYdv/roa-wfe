import React from "react";
import { MoveRight } from "lucide-react";

const ModificationCard = ({ data }) => {
  const {
    case_number,
    code,
    action,
    modifications,
    is_active,
    created_on,
    modified_on,
  } = data;

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const renderModifications = () => {
    if (!modifications?.modifications) return null;

    return Object.entries(modifications.modifications).map(([key, value]) => (
      <div key={key} className="modification-item">
        <span className="modification-label">{key.replace(/_/g, " ")}:</span>
        <div className="modification-value">
          {value.old && <span className="old-value">{value.old}</span>}
          <MoveRight />
          {value.new && <span className="new-value">{value.new}</span>}
        </div>
      </div>
    ));
  };

  return (
    <div className="case-modification-card">
      <div className="card-header">
        <h3 className="case-number">Case Number: {case_number}</h3>
        <span className="case-code">{code}</span>
      </div>

      <p className="action-text">{action}</p>

      {modifications && (
        <div className="modifications-container">{renderModifications()}</div>
      )}

      <div className="card-meta">
        <div>
          <span
            className={`status-badge ${
              is_active ? "status-active" : "status-inactive"
            }`}
          >
            {is_active ? "Active" : "Inactive"}
          </span>
          <span className="timestamp">Created: {formatDate(created_on)}</span>
        </div>
        <span className="timestamp">Modified: {formatDate(modified_on)}</span>
      </div>
    </div>
  );
};

export default ModificationCard;
