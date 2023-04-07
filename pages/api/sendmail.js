/**
 * Sends Mail
 * @param req
 * @param res
 * @author Kenneth Sumang
 * @since  2023.04.07
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(404).json({
      error: {
        code: 404,
        message: 'Invalid request method.'
      }
    });
    return;
  }

  const sendMailUri = process.env.MAILER_URI;
  const srcEmail = process.env.SRC_EMAIL;
  const destEmail = process.env.DEST_EMAIL;
  const content = `
    <b>From:</b> ${req.body.email}<br />
    <b>Name:</b> ${req.body.name}<br /><br />
    <b>Content:</b><br />
    <p>${req.body.content}</p>
  `;
  const formData = {
    from: srcEmail,
    to: destEmail,
    subject: req.body.subject,
    content: content
  };

  try {
    const response = await fetch(sendMailUri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    res.status(200).json({ success: true, data: response });
  } catch (e) {
    res.status(500).json({ success: false });
  }
}