export default function handler(req, res) {
  res.status(200).json({
    version: '1.0.4',
    since: '2022-05-28 00:32:00 UTC+0800',
    author: 'Kenneth Sumang',
    email: 'kdsumang@outlook.com'
  });
}
  