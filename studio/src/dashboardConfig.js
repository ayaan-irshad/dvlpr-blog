export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb34f45a2b27c0174584ab5',
                  title: 'Sanity Studio',
                  name: 'dvlpr-blog-studio',
                  apiId: '774dd225-95c7-43bb-b2fa-08a9daeeba1f'
                },
                {
                  buildHookId: '5eb34f45eb169d01744df4e8',
                  title: 'Blog Website',
                  name: 'dvlpr-blog',
                  apiId: 'df4e7977-76f2-4a19-a6f7-d639a9c71e9e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ayaan-irshad/dvlpr-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://dvlpr-blog.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
