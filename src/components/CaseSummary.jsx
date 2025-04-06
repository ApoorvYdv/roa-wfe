import React from "react";
import {
  Info,
  Calendar,
  FileText,
  User,
  Users,
  Truck,
  Briefcase,
} from "lucide-react";
import { caseSummary } from "../helper/constants";

const CaseManagementDashboard = () => {
  const { case_record } = caseSummary;
  const { defendant, charges, additional_parties } = case_record;

  // Format date function
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Format time function
  const formatTime = (timeString) => {
    if (!timeString) return "N/A";
    const time = new Date(`1970-01-01T${timeString}`);
    return time.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="dashboard">
      {/* Header with Case Number and Status */}
      <div className="dashboard__header">
        <div className="dashboard__header-title">
          <FileText className="icon" size={24} />
          <h1>Case Number: {case_record.case_number}</h1>
        </div>
        <div className="status-badge">STATUS: {case_record.case_status}</div>
      </div>

      {/* Main Content Grid */}
      <div className="dashboard__grid">
        {/* Case Details Section */}
        <div className="card">
          <div className="card__header">
            <Info size={20} className="icon" />
            <h2>Case Details</h2>
          </div>
          <div className="card__grid">
            <div className="data-item">
              <span className="label">Ticket Number</span>
              <span className="value">{case_record.ticket_number}</span>
            </div>
            <div className="data-item">
              <span className="label">Case Type</span>
              <span className="value">{case_record.case_type}</span>
            </div>
            <div className="data-item">
              <span className="label">County</span>
              <span className="value">{case_record.county_name}</span>
            </div>
            <div className="data-item">
              <span className="label">Violation Date</span>
              <span className="value">
                {formatDate(case_record.violation_date)}
              </span>
            </div>
            <div className="data-item">
              <span className="label">Location</span>
              <span className="value">{case_record.violation_location}</span>
            </div>
            <div className="data-item">
              <span className="label">Issuing Officer</span>
              <span className="value">{case_record.issuing_official_name}</span>
            </div>
            <div className="data-item">
              <span className="label">Badge</span>
              <span className="value">
                {case_record.issuing_official_badge_number}
              </span>
            </div>
            <div className="data-item">
              <span className="label">Fine</span>
              <span className="value">${case_record.fine.toFixed(2)}</span>
            </div>
            <div className="data-item">
              <span className="label">PD Reference</span>
              <span className="value">{case_record.pd_reference_number}</span>
            </div>
            <div className="data-item">
              <span className="label">Violation Order</span>
              <span className="value">{case_record.violation_order}</span>
            </div>
          </div>
        </div>

        {/* Defendant Details Section */}
        <div className="card">
          <div className="card__header">
            <User size={20} className="icon" />
            <h2>Defendant Details</h2>
          </div>
          <div className="card__grid">
            <div className="data-item">
              <span className="label">Name</span>
              <span className="value">{`${defendant.first_name} ${
                defendant.middle_name || ""
              } ${defendant.last_name} ${defendant.suffix || ""}`}</span>
            </div>
            <div className="data-item">
              <span className="label">SSN</span>
              <span className="value">{defendant.ssn_id}</span>
            </div>
            <div className="data-item">
              <span className="label">DOB</span>
              <span className="value">{formatDate(defendant.dob)}</span>
            </div>
            <div className="data-item">
              <span className="label">Race/Ethnicity</span>
              <span className="value">{`${defendant.race}, ${defendant.ethnicity}`}</span>
            </div>
            <div className="data-item">
              <span className="label">Physical</span>
              <span className="value">{`${defendant.eye_color} eyes, ${defendant.hair_color} hair, ${defendant.height}, ${defendant.weight} lbs`}</span>
            </div>
            <div className="data-item">
              <span className="label">License</span>
              <span className="value">{`${defendant.license_number} (${defendant.license_state_code})`}</span>
            </div>
            <div className="data-item">
              <span className="label">Address</span>
              <span className="value">
                {defendant.contacts[0].address_delivery_point}
              </span>
            </div>
            <div className="data-item">
              <span className="label">City/State</span>
              <span className="value">{`${defendant.contacts[0].location_city_name}, ${defendant.contacts[0].location_state_code} ${defendant.contacts[0].location_postal_code}`}</span>
            </div>
            <div className="data-item">
              <span className="label">Phone</span>
              <span className="value">
                {defendant.contacts[0].phone_number}
              </span>
            </div>
            <div className="data-item">
              <span className="label">Plea</span>
              <span className="value plea">
                {case_record.defendant_pretrial_plea}
              </span>
            </div>
          </div>
        </div>

        {/* Vehicle Details Section */}
        <div className="card">
          <div className="card__header">
            <Truck size={20} className="icon" />
            <h2>Vehicle Details</h2>
          </div>
          <div className="card__grid">
            <div className="data-item">
              <span className="label">Make</span>
              <span className="value">{case_record.vehicle_make}</span>
            </div>
            <div className="data-item">
              <span className="label">Model</span>
              <span className="value">{case_record.vehicle_model}</span>
            </div>
            <div className="data-item">
              <span className="label">Year</span>
              <span className="value">{case_record.vehicle_year}</span>
            </div>
            <div className="data-item">
              <span className="label">License Plate</span>
              <span className="value">
                {case_record.vehicle_registration_plate_no}
              </span>
            </div>
            <div className="data-item">
              <span className="label">Posted Speed</span>
              <span className="value">
                {case_record.driving_incident_legal_speed_rate} mph
              </span>
            </div>
            <div className="data-item">
              <span className="label">Recorded Speed</span>
              <span className="value speed-violation">
                {case_record.driving_incident_recorded_speed_rate} mph
              </span>
            </div>
            <div className="data-item full-width">
              <span className="label">Notes</span>
              <span className="value">{case_record.additional_notes}</span>
            </div>
          </div>
        </div>

        {/* Parties Section */}
        <div className="card">
          <div className="card__header">
            <Users size={20} className="icon" />
            <h2>Parties</h2>
          </div>
          <div className="card__parties">
            {additional_parties.map((party) => (
              <div key={party.id} className="party-card">
                <div className="party-name">{`${party.first_name} ${party.last_name} - ${party.party_category}`}</div>
                <div className="party-org">{party.party_organization}</div>
                <div className="party-details">
                  <span>{`${party.address_street}, ${party.city}, ${party.state}`}</span>
                  <span>{party.phone_number}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hearing Schedule Section */}
        <div className="card">
          <div className="card__header">
            <Calendar size={20} className="icon" />
            <h2>Hearing Schedule and History</h2>
          </div>
          <div className="hearing-info">
            <div className="hearing-date">
              <div className="hearing-label">Scheduled Date</div>
              <div className="hearing-value">
                {formatDate(case_record.hearing_date)}
              </div>
            </div>
            <div className="hearing-time">
              <div className="hearing-label">Time</div>
              <div className="hearing-value">
                {formatTime(case_record.hearing_time)}
              </div>
            </div>
            <div className="hearing-room">
              <div className="hearing-label">Room</div>
              <div className="hearing-value">{case_record.room_number}</div>
            </div>
          </div>
        </div>

        {/* Charges Section */}
        <div className="card">
          <div className="card__header">
            <Briefcase size={20} className="icon" />
            <h2>Charges and Judgements</h2>
          </div>
          <div className="charges-list">
            {charges.map((charge, index) => (
              <div key={index} className="charge-card">
                <div className="charge-header">
                  <span className="charge-title">
                    {charge.charge.charge_description}
                  </span>
                  <span
                    className={`charge-status ${
                      charge.is_charge_closed ? "closed" : "pending"
                    }`}
                  >
                    {charge.charge_status}
                  </span>
                </div>
                <div className="charge-details">
                  <span>Code: {charge.charge_code}</span>
                  <span>Type: {charge.charge.charge_type}</span>
                </div>
                <div className="charge-notes">
                  <div className="notes-label">Notes:</div>
                  <div className="notes-content">{charge.notes}</div>
                </div>
                <div className="charge-footer">
                  <span className="gl-account">
                    GL: {charge.charge.gl_name}
                  </span>
                  <span className="fine-amount">${charge.fine.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseManagementDashboard;
