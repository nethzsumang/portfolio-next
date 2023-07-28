/**
 * Validates recaptcha value
 * @param token
 */
const validateRecaptcha = async (token: string) => {
  const response = await fetch('/api/verify-captcha', {
    method: 'POST',
    body: JSON.stringify({ token: token })
  });
  return response.ok;
};

export {
  validateRecaptcha
};