export default function handler(req, res) {
  res.status(200).json({
    version: '1.0.0',
    since: '2022-05-15 08:19:00 UTC+0800',
    author: 'Kenneth Sumang',
    email: 'dev@kennethsumang.com'
  });
}
  