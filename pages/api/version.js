export default function handler(req, res) {
  res.status(200).json({
    version: '1.0.2',
    since: '2022-05-22 23:51:00 UTC+0800',
    author: 'Kenneth Sumang',
    email: 'dev@kennethsumang.com'
  });
}
  