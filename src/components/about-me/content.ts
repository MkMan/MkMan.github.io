const mustafa: Dev = {
  profession: 'Frontend Developer',
  experience: [
    {
      company: 'MT Data',
      title: 'Software Engineer',
      dates: 'Aug 2019 - Present'
    },
    {
      company: 'Australia Post',
      title: 'Junior Frontend Developer',
      dates: 'July 2017 - Aug 2019'
    },
    {
      company: 'The BluePod Coffee Co.',
      title: 'Coffee machine technician',
      dates: 'July 2013 - Feb 2017'
    }
  ],
  skills: {
    technical: {
      frameworks: [
        'Angular',
        'Jasmine',
        'Protractor'
      ],
      languages: [
        'JavaScript',
        'TypeScript',
        'HTML',
        'CSS',
        'SCSS'
      ],
      technologies: [
        'Git'
      ]
    },
    soft: [
      'Communication',
      'Teamwork',
      'Time management'
    ]
  },
  education: [
    {
      degree: 'Bachelor of IT - Software Development',
      institute: 'Monash University',
      dates: '2016 - 2018',
      average: 86
    },
    {
      degree: 'Bachelor of Engineering - Mechanical',
      institute: 'Monash University',
      dates: '2009 - 2012',
      average: 76
    }
  ]
};


interface Dev {
  profession: string,
  experience: Role[],
  skills: {
    technical: {
      frameworks: string[],
      languages: string[],
      technologies: string[]
    },
    soft: string[]
  },
  education: Study[]
}

interface Role {
  company: string,
  title: string,
  dates: string,
  // responsibilities: string[]
}

interface Study {
  degree: string,
  institute: string,
  dates: string,
  average: number
}
