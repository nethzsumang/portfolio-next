import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * Application version API
 * @param {NextApiRequest} req
 * @param{NextApiResponse} res
 */
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    version: '1.14.0',
    since: '2023-09-30 16:30:00 UTC+0800',
    author: 'Kenneth Sumang',
    email: 'work@kennethsumang.com',
    changelog: [
      {
        version: '1.14.0',
        since: '2023-09-30 16:30:00 UTC+0800',
        changes: [
          'Add new entry in History page.',
        ]
      },
      {
        version: '1.13.2',
        since: '2023-07-28 11:00:00 UTC+0800',
        changes: [
          'Optimized handling of contact form.',
          'Refactored code for Timeline component.',
        ]
      },
      {
        version: '1.13.1',
        since: '2023-07-26 22:00:00 UTC+0800',
        changes: [
          'Optimized loading of some components.',
          'Merged pull request from dependabot.'
        ]
      },
      {
        version: '1.13.0',
        since: '2023-07-12 14:00:00 UTC+0800',
        changes: [
          'Refactored dark mode implementation.',
          'Refactored some codes.',
        ]
      },
      {
        version: '1.12.0',
        since: '2023-07-05 13:00:00 UTC+0800',
        changes: [
          'Added email validation.',
        ]
      },
      {
        version: '1.11.1',
        since: '2023-07-05 12:45:00 UTC+0800',
        changes: [
          'Fixed verification failed on Contact Me form submit.',
        ]
      },
      {
        version: '1.11.0',
        since: '2023-07-04 21:40:00 UTC+0800',
        changes: [
          'Added Next.js certificate.',
        ]
      },
      {
        version: '1.10.5',
        since: '2023-07-04 11:00:00 UTC+0800',
        changes: [
          'Updated resume.',
          'Updated Viber link.',
        ]
      },
      {
        version: '1.10.4',
        since: '2023-07-03 18:00:00 UTC+0800',
        changes: [
          'Fixed TypeScript issues.',
        ]
      },
      {
        version: '1.10.3',
        since: '2023-06-30 19:10:00 UTC+0800',
        changes: [
          'Added Github in Reach Out section.',
          'Fixed Recaptcha Validation.',
        ]
      },
      {
        version: '1.10.2',
        since: '2023-06-30 12:10:00 UTC+0800',
        changes: [
          'Converted Javascript to Typescript.',
          'Fix some lint issues.',
        ]
      },
      {
        version: '1.10.1',
        since: '2023-06-29 20:40:00 UTC+0800',
        changes: [
          'Fixed envelope icon not seen in dark mode.',
        ]
      },
      {
        version: '1.10.0',
        since: '2023-06-29 17:00:00 UTC+0800',
        changes: [
          'Updated resume.',
          'Provided links in Contact Me page.',
        ]
      },
      {
        version: '1.9.0',
        since: '2023-06-21 18:00:00 UTC+0800',
        changes: [
          'Add certificates.',
          'Refactor certificate handling.'
        ]
      },
      {
        version: '1.8.0',
        since: '2023-06-19 18:15:00 UTC+0800',
        changes: [
          'Update mobile number in resume.'
        ]
      },
      {
        version: '1.7.0',
        since: '2023-06-15 12:00:00 UTC+0800',
        changes: [
          'Updated work experience end year for Cafe24 in resume.',
          'Updated work experience end year for Cafe24 in history timeline.',
          'Removed resume with years of experience.'
        ]
      },
      {
        version: '1.6.1',
        since: '2023-06-07 17:05:00 UTC+0800',
        changes: [
          'Fixed bold typing in linkedin link in resume.'
        ]
      },
      {
        version: '1.6.0',
        since: '2023-06-07 17:00:00 UTC+0800',
        changes: [
          'Removed unpolished project from list.',
          'Adjusted years of experience.',
          'Updated resume.',
        ]
      },
      {
        version: '1.5.8',
        since: '2023-06-02 00:00:00 UTC+0800',
        changes: [
          'Adjusted years of experience.',
          'Removed unused i18n entries.',
          'Added certificates.',
        ]
      },
      {
        version: '1.5.7',
        since: '2023-04-09 00:05:00 UTC+0800',
        changes: [
          'Fixed white text on Show More container in Timeline.'
        ]
      },
      {
        version: '1.5.6',
        since: '2023-04-08 23:30:00 UTC+0800',
        changes: [
          'Implemented workaround to re-mount Recaptcha when theme changes.'
        ]
      },
      {
        version: '1.5.5',
        since: '2023-04-08 23:00:00 UTC+0800',
        changes: [
          'Implement dark mode on Contact Me form.',
          'Update bootstrap package to 5.3.0alpha3.'
        ]
      },
      {
        version: '1.5.4',
        since: '2023-04-07 23:50:00 UTC+0800',
        changes: [
          'Fix styling on Contact Me page in mobile.'
        ]
      },
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
  