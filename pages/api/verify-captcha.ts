import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * Verifies recaptcha
 * @param req
 * @param res
 * @returns {Promise<void>}
 * @author Kenneth Sumang
 * @since  2023.04.07
 */
export default async function VerifyCaptcha(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(404).json({
      error: {
        code: 404,
        message: 'Invalid request method.'
      }
    });
    return;
  }

  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
  const recaptchaToken = req.body.token;

  try {
    await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaToken}`,
      {
        method: 'POST',
      }
    );

    res.status(200).json({ success: true });
  } catch (e) {
    res.status(500).json({ success: false });
  }
}