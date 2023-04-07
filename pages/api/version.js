export default function handler(req, res) {
  res.status(200).json({
    version: '1.5.3',
    since: '2023-04-07 19:25:00 UTC+0800',
    author: 'Kenneth Sumang',
    email: 'work@kennethsumang.com',
    changelog: [
      {
        version: '1.5.3',
        since: '2023-04-07 19:25:00 UTC+0800',
        changes: [
          'Properly verify recaptcha.'
        ]
      },
      {
        version: '1.5.2',
        since: '2023-04-07 19:05:00 UTC+0800',
        changes: [
          'Resets captcha after successfully submitting.'
        ]
      },
      {
        version: '1.5.1',
        since: '2023-04-07 19:00:00 UTC+0800',
        changes: [
          'Disabled button when contact form processing is ongoing.'
        ]
      },
      {
        version: '1.5.0',
        since: '2023-04-07 18:45:00 UTC+0800',
        changes: [
          'Added contact me form page.',
          'Changed copyright disclaimer to small tag.'
        ]
      },
      {
        version: '1.4.0',
        since: '2023-04-02 01:24:00 UTC+0800',
        changes: [
          'Added Jira and Confluence for What I Do section.',
          'Removed Vue and React entries in What I Do section.',
          'Edited Javascript entry in What I Do section.',
          'Added logo disclaimer.'
        ]
      },
      {
        version: '1.3.1',
        since: '2023-03-23 22:34:00 UTC+0800',
        changes: [
          'Added issued date in certificates.'
        ]
      },
      {
        version: '1.3.0',
        since: '2023-03-23 22:15:00 UTC+0800',
        changes: [
          'Added Certificates page.',
          'Changed email in API endpoint for version.'
        ]
      },
      {
        version: '1.2.0',
        since: '2023-02-22 17:05:00 UTC+0800',
        changes: [
          'Added language badges.',
          'Added history entries.',
          'Showed app version in footer.',
          'Refactor some codes.'
        ]
      },
      {
        version: '1.1.0',
        since: '2022-10-18 19:35:00 UTC+0800',
        changes: [
          'Updated resume.',
          'Removed language selector.'
        ]
      },
      {
        version: '1.0.9',
        since: '2022-09-12 14:10:00 UTC+0800',
        changes: [
          'Fix white section on Index Page with Dark Mode on mobile devices.'
        ]
      },
      {
        version: '1.0.8',
        since: '2022-08-02 11:25:00 UTC+0800',
        changes: [
          'Changed years of experience in skills and what i do section.'
        ]
      },
      {
        version: '1.0.7',
        since: '2022-07-16 16:32:00 UTC+0800',
        changes: [
          'Changed introduction text.',
          'Changed email in API Version endpoint.'
        ]
      },
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
  