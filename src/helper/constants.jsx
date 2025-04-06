import dayjs from "dayjs";

export const formatFee = (val) => Number(val).toFixed(2);
export const bytesToKiloBytes = (bytes) => (bytes / 1024).toFixed(2);

export const formatDate = (date, dateFormat) => {
  return dayjs(date).format(dateFormat);
};

export const sortObjectByDate = (obj) => {
  if (!obj) return {};
  const sortedKeys = Object.keys(obj).sort((a, b) => new Date(b) - new Date(a));
  const sortedObj = {};

  sortedKeys.forEach((key) => {
    sortedObj[key] = obj[key];
  });

  return sortedObj;
};

export const returnDateTime = (dateObj) => {
  if (!dateObj) return null;
  return dayjs(`${dateObj.hearing_date} ${dateObj.hearing_time}`);
};

export const compareDates = (date1, date2, comparator = min) => {
  if (date1 === null) return date2;
  if (date2 === null) return date1;
  let minDate;
  switch (comparator) {
    case "min":
      minDate = returnDateTime(date1).isBefore(returnDateTime(date2))
        ? date1
        : date2;
      break;
  }

  return minDate;
};

export const caseSummary = {
  case_record: {
    ticket_number: "TK123456",
    case_type: "Traffic Violation",
    county_name: "Franklin",
    case_number: "CASE78910",
    hearing_date: "2025-04-15",
    hearing_time: "09:30:00",
    room_number: "101A",
    violation_date: "2025-03-10",
    violation_location: "Main Street and 2nd Ave",
    issue_datetime: "2025-03-10T08:15:00Z",
    observation_text: "Speeding in school zone",
    location_description_text: "Near Lincoln Elementary",
    issuing_official_badge_number: "PD9988",
    issuing_official_name: "Officer Jane Smith",
    driving_incident_legal_speed_rate: "25",
    driving_incident_recorded_speed_rate: "40",
    vehicle_year: "2018",
    vehicle_make: "Toyota",
    vehicle_model: "Camry",
    vehicle_registration_plate_no: "ABC1234",
    all_charge_start: "2025-03-10T08:15:00Z",
    all_charge_end: "2025-03-10T08:30:00Z",
    additional_notes: "Driver was cooperative.",
    violation_order: "1st offense",
    warrant_number: null,
    bench_warrant_number: null,
    pd_reference_number: "REF202504",
    case_status: "Open",
    fine: 150.0,
    is_case_closed: false,
    defendant_pretrial_plea: "Not Guilty",
    defendant: {
      ssn_id: "123-45-6789",
      first_name: "John",
      middle_name: "A.",
      last_name: "Doe",
      suffix: "Jr",
      dob: "1990-07-21",
      race: "White",
      sex: "Male",
      ethnicity: "Non-Hispanic",
      eye_color: "Blue",
      hair_color: "Brown",
      height: "5'10\"",
      weight: "170",
      license_number: "D1234567",
      license_state_code: "OH",
      contacts: [
        {
          address_delivery_point: "123 Maple St",
          mailing_address: "PO Box 123",
          location_city_name: "Columbus",
          location_state_code: "OH",
          location_postal_code: "43215",
          phone_number: "6145551234",
        },
      ],
    },
    charges: [
      {
        charge_code: "SPD001",
        charge_description: "Speeding over posted limit",
        notes: "School zone violation",
        fine: 150.0,
        charge_status: "Pending",
        is_charge_closed: false,
        charge: {
          charge_code: "SPD001",
          charge_description: "Speeding over posted limit",
          charge_type: "Traffic",
          gl_account: "TRAFFIC100",
          gl_name: "Traffic Violations",
        },
      },
    ],
    additional_parties: [
      {
        id: 1,
        first_name: "Emily",
        middle_name: null,
        last_name: "Doe",
        suffix: null,
        email: "emily.doe@example.com",
        address_street: "456 Oak St",
        city: "Columbus",
        state: "OH",
        zip: "43215",
        phone_number: "6145556789",
        party_organization: "Doe Law Group",
        party_category: "Attorney",
      },
      {
        id: 2,
        first_name: "Blake",
        middle_name: null,
        last_name: "Doe",
        suffix: null,
        email: "blake.doe@example.com",
        address_street: "456 Mark wood st",
        city: "Durango",
        state: "IL",
        zip: "43215",
        phone_number: "6145556789",
        party_organization: "Doe Law Group",
        party_category: "Attorney",
      },
    ],
  },
};
export const modification = {
  "2025-04-04": [
    {
      case_number: "CN1",
      code: "EDIT_CASE",
      action:
        "Updated case details: location description text changed from lucknow1 to lucknow.",
      modifications: {
        modifications: {
          location_description_text: {
            old: "lucknow1",
            new: "lucknow",
          },
        },
      },
      is_active: true,
      created_on: "2025-04-04 09:56:20.505739+00",
      modified_on: "2025-04-04 09:56:20.505745+00",
    },
    {
      case_number: "CN2",
      code: "STATUS_CHANGE",
      action: "Changed case status from Pending to Approved",
      modifications: {
        modifications: {
          status: {
            old: "Pending",
            new: "Approved",
          },
        },
      },
      is_active: true,
      created_on: "2025-04-04 11:30:00.000000+00",
      modified_on: "2025-04-04 11:30:00.000000+00",
    },
  ],
  "2025-04-03": [
    {
      case_number: "CN3",
      code: "CREATE_CASE",
      action: "Created new case",
      modifications: null,
      is_active: true,
      created_on: "2025-04-03 14:15:00.000000+00",
      modified_on: "2025-04-03 14:15:00.000000+00",
    },
  ],
};
