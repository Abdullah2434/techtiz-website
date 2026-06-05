export type SledHubInquiryPayload = {
  needs: string;
  company: string;
  role: string;
  rfp: string;
  nda: string;
  vehicle: string;
  agency: string;
  email: string;
  phone: string;
  desc: string;
};

export function createSledHubAdminEmailTemplate(
  data: SledHubInquiryPayload,
): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New SLED Hub Inquiry</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #153A5F; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background: #f9f9f9; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #153A5F; }
    .value { margin-top: 5px; white-space: pre-wrap; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>U.S. SLED Hub Inquiry</h1>
      <p>Techtiz SLED Hub Form</p>
    </div>
    <div class="content">
      <div class="field"><div class="label">Needs:</div><div class="value">${data.needs || "—"}</div></div>
      <div class="field"><div class="label">Company:</div><div class="value">${data.company}</div></div>
      <div class="field"><div class="label">Role:</div><div class="value">${data.role || "Not provided"}</div></div>
      <div class="field"><div class="label">RFP / RFQ / solicitation:</div><div class="value">${data.rfp || "Not provided"}</div></div>
      <div class="field"><div class="label">NDA status:</div><div class="value">${data.nda || "Not provided"}</div></div>
      <div class="field"><div class="label">Contract vehicle:</div><div class="value">${data.vehicle || "Not provided"}</div></div>
      <div class="field"><div class="label">Agency / end customer:</div><div class="value">${data.agency || "Not provided"}</div></div>
      <div class="field"><div class="label">Email:</div><div class="value">${data.email}</div></div>
      <div class="field"><div class="label">Phone:</div><div class="value">${data.phone || "Not provided"}</div></div>
      <div class="field"><div class="label">Description:</div><div class="value">${data.desc || "(none provided)"}</div></div>
    </div>
    <div class="footer">
      <p>Submitted via the Techtiz U.S. SLED hub inquiry form.</p>
      <p>Timestamp: ${new Date().toLocaleString()}</p>
    </div>
  </div>
</body>
</html>
`;
}

export function createSledHubThankYouEmailTemplate(company: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Inquiry Received - Techtiz SLED</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #153A5F; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background: #f9f9f9; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Inquiry Received</h1>
      <p>Techtiz U.S. SLED Partnerships</p>
    </div>
    <div class="content">
      <p>Thank you for reaching out from ${company} about a U.S. SLED subcontract role.</p>
      <p>Our U.S.-based partner manager will reply within one business day with a mutual NDA template and a calendar slot for the capability conversation.</p>
      <p>All fields you submitted are treated as confidential. No public materials are exchanged before the NDA is signed.</p>
      <p>Best regards,<br>The Techtiz SLED Team</p>
    </div>
    <div class="footer">
      <p>Techtiz — SLED Partnerships</p>
      <p>Email: sled@techtiz.co</p>
    </div>
  </div>
</body>
</html>
`;
}
