export default function handler(req, res) {
  res.status(200).json({
    version: '1.0.6',
    since: '2022-07-15 10:47:00 UTC+0800',
    author: 'Kenneth Sumang',
    email: 'kdsumang@outlook.com',
    changelog: [
      {
        version: '1.0.6',
        since: '2022-07-15 10:47:00 UTC+0800',
        changes: [
          'Fix max height for index page.'
        ]
      },
      {
        version: '1.0.5',
        since: '2022-06-09 10:51:00 UTC+0800',
        changes: [
          'Added TDD in History Timeline.',
          'Updated /api/version endpoint to return changelog.'
        ]
      }
    ]
  });
}
  