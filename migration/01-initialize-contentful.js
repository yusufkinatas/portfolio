// Migration command: npx contentful space migration --space-id=fydf0o2ery42 --management-token=CFPAT-wwlvFHgkGjmEgxccI3H19xeTDDwwmMbX04emthQ85Do -e test-env

const richTextValidations = [
  {
    enabledMarks: ['bold', 'italic', 'underline', 'code'],
    message: 'Only bold, italic, underline, and code marks are allowed',
  },
  {
    enabledNodeTypes: [
      'ordered-list',
      'unordered-list',
      'hr',
      'blockquote',
      'table',
      'hyperlink',
      'heading-1',
      'heading-2',
      'heading-3',
      'heading-4',
      'heading-5',
      'heading-6',
    ],
    message:
      'Only ordered list, unordered list, horizontal rule, quote, table, link to Url, heading 1, heading 2, heading 3, heading 4, heading 5, and heading 6 nodes are allowed',
  },
  {
    nodes: {},
  },
]
/**
 * @param migration {import('contentful-migration').default}
 */
module.exports = (migration) => {
  // Create person type
  const person = migration.createContentType('person', { name: 'Person', displayField: 'name' })

  person.createField('name', {
    name: 'Name',
    type: 'Symbol',
    required: true,
  })

  person.createField('slug', {
    name: 'Slug',
    type: 'Symbol',
    required: true,
    validations: [
      {
        unique: true,
      },
    ],
  })

  person.createField('title', {
    name: 'Title',
    type: 'Symbol',
    required: true,
  })

  person.createField('description', {
    name: 'Description',
    type: 'RichText',
    required: true,
    validations: richTextValidations,
  })

  person.createField('contactText', {
    name: 'Contact Text',
    type: 'RichText',
    required: true,
    validations: richTextValidations,
  })

  // Create experience type
  const experience = migration.createContentType('experience', {
    name: 'Experience',
    displayField: 'company',
  })

  experience.createField('company', {
    name: 'Company',
    type: 'Symbol',
    required: true,
  })
  experience.createField('title', {
    name: 'Title',
    type: 'Symbol',
    required: true,
  })
  experience.createField('year', {
    name: 'Year',
    type: 'Symbol',
  })

  // Create skill list type
  const skillList = migration.createContentType('skillList', {
    name: 'Skill List',
    displayField: 'title',
  })

  skillList.createField('title', {
    name: 'Title',
    type: 'Symbol',
    required: true,
  })
  skillList.createField('icon', {
    name: 'Icon',
    type: 'Link',
    required: true,
    linkType: 'Asset',
  })
  skillList.createField('skills', {
    name: 'Skills',
    type: 'Array',
    required: true,
    items: {
      type: 'Symbol',
      validations: [],
    },
  })

  // Create resume page type
  const resumePage = migration.createContentType('resumePage', {
    name: 'Resume Page',
  })

  resumePage.createField('experiences', {
    name: 'Experiences',
    type: 'Array',
    required: true,
    items: {
      type: 'Link',
      validations: [
        {
          linkContentType: ['experience'],
        },
      ],
      linkType: 'Entry',
    },
  })

  resumePage.createField('resumePdf', {
    name: 'Resume PDF',
    type: 'Link',
    validations: [
      {
        linkMimetypeGroup: ['pdfdocument'],
      },
    ],
    linkType: 'Asset',
  })
  ;[1, 2, 3, 4].forEach((num) => {
    resumePage.createField(`skillList${num}`, {
      name: `Skill List ${num}`,
      type: 'Link',
      required: true,
      validations: [
        {
          linkContentType: ['skillList'],
        },
      ],
      linkType: 'Entry',
    })
  })

  // Create project url type
  const projectUrl = migration.createContentType('projectUrl', {
    name: 'Project URL',
    displayField: 'url',
  })

  projectUrl.createField('url', {
    name: 'URL',
    type: 'Symbol',
    required: true,
  })

  projectUrl.createField('Type', {
    name: 'Type',
    type: 'Symbol',
    required: true,
    validations: [
      {
        in: ['GITHUB', 'GOOGLE_PLAY', 'APP_STORE', 'WEBSITE'],
      },
    ],
  })

  projectUrl.createField('title', {
    name: 'Name',
    type: 'Symbol',
    required: false,
  })

  // Create project type
  const project = migration.createContentType('project', {
    name: 'Project',
    displayField: 'name',
  })

  project.createField('name', {
    name: 'Name',
    type: 'Symbol',
    required: true,
  })
  project.createField('logo', {
    name: 'Logo',
    type: 'Link',
    required: true,
    validations: [
      {
        linkMimetypeGroup: ['image'],
      },
    ],
    linkType: 'Asset',
  })
  project.createField('primaryColor', {
    name: 'Primary Color',
    type: 'Symbol',
    required: true,
  })
  project.createField('urLs', {
    name: 'URLs',
    type: 'Array',
    items: {
      type: 'Link',
      validations: [
        {
          linkContentType: ['projectUrl'],
        },
      ],
      linkType: 'Entry',
    },
  })
  project.createField('categories', {
    name: 'Categories',
    type: 'Array',
    required: true,
    items: {
      type: 'Symbol',
      validations: [],
    },
  })
  project.createField('description', {
    name: 'Description',
    type: 'RichText',
    required: true,
    validations: richTextValidations,
  })
  project.createField('techStack', {
    name: 'Tech Stack',
    type: 'Array',
    required: true,
    items: {
      type: 'Symbol',
      validations: [],
    },
  })
  project.createField('youtubeVideoId', {
    name: 'Youtube Video ID',
    type: 'Symbol',
  })
  project.createField('images', {
    name: 'Images',
    type: 'Array',
    required: true,
    items: {
      type: 'Link',
      validations: [
        {
          linkMimetypeGroup: ['image'],
        },
      ],
      linkType: 'Asset',
    },
  })

  // Create project page type
  const projectPage = migration.createContentType('projectPage', {
    name: 'Project Page',
  })

  projectPage.createField('projects', {
    name: 'Projects',
    required: true,
    type: 'Array',
    items: {
      type: 'Link',
      validations: [
        {
          linkContentType: ['project'],
        },
      ],
      linkType: 'Entry',
    },
  })
}
