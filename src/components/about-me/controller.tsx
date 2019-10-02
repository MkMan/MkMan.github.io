import React from "react";
import './styles.scss';

declare const Prism: any;

export default class AboutMe extends React.Component {

  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <pre className="language-javascript line-numbers">
        <code>
{`const mustafa = {
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
  }
};`}
        </code>
      </pre>
    );
  }
}