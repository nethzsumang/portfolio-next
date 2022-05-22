export default function handler(req, res) {
  res.status(200).json({
    version: '1.0.3',
    since: '2022-05-23 00:15:00 UTC+0800',
    author: 'Kenneth Sumang',
    email: 'dev@kennethsumang.com'
  });
}
  