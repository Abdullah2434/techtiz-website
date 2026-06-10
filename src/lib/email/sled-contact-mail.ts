export type SledContactPayload = {
  name: string;
  email: string;
  firm: string;
  role: string;
  vehicle: string;
  timing: string;
  intent: string;
  desc: string;
};

export function createSledAdminEmailTemplate(data: SledContactPayload): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New SLED Subcontract Inquiry</title>
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
      <h1>U.S. SLED Subcontract Inquiry</h1>
      <p>Techtiz SLED Intake</p>
    </div>
    <div class="content">
      <div class="field"><div class="label">Name:</div><div class="value">${data.name}</div></div>
      <div class="field"><div class="label">Work email:</div><div class="value">${data.email}</div></div>
      <div class="field"><div class="label">Prime firm:</div><div class="value">${data.firm}</div></div>
      <div class="field"><div class="label">Role:</div><div class="value">${data.role || "Not provided"}</div></div>
      <div class="field"><div class="label">Contract vehicle:</div><div class="value">${data.vehicle || "Not provided"}</div></div>
      <div class="field"><div class="label">Timing:</div><div class="value">${data.timing || "Not provided"}</div></div>
      <div class="field"><div class="label">Requesting:</div><div class="value">${data.intent}</div></div>
      <div class="field"><div class="label">Engagement (phase, scope, timing):</div><div class="value">${data.desc || "(none provided)"}</div></div>
    </div>
    <div class="footer">
      <p>Submitted via the Techtiz U.S. SLED intake form.</p>
      <p>Timestamp: ${new Date().toLocaleString()}</p>
    </div>
  </div>
</body>
</html>
`;
}

export function createSledThankYouEmailTemplate(name: string): string {
  const firstName = name.split(" ")[0] || name;

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
      <p>Dear ${firstName},</p>
      <p>Thank you for reaching out about a U.S. SLED subcontract role. Our U.S.-based partner manager will reply within one business day with a mutual NDA template and a calendar slot for the capability conversation.</p>
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
