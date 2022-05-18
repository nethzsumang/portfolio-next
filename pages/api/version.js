export default function handler(req, res) {
  res.status(200).json({
    version: '1.0.1',
    since: '2022-05-18 16:05:00 UTC+0800',
    author: 'Kenneth Sumang',
    email: 'dev@kennethsumang.com'
  });
}
  