export async function sendEmail(subject: string, message: string) {
  const baseUrl = await import.meta.env.PUBLIC_API_EMAIL;
  fetch(`${baseUrl}/api/v1/email/send`, {
    headers: { 'Content-type': 'application/json;charset=UTF-8' },
    method: 'POST',
    body: JSON.stringify({ subject, body: message })
  });
}
