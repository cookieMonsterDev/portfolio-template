const config = {
  photo_url: 'https://lh3.googleusercontent.com/ogw/AOLn63E4sQRGUcVaxFcnisIEjAxWa1C-faHCpXt_P5Rn=s32-c-mo',
  resume_url:
    "https://drive.google.com/uc?export=download&id=19miiyiy_Hn-_UxZWAo6WGPOr2WABhpdX",
  git: {
    api_url: "https://api.github.com/",
    github_user_name: "cookieMonsterDev",
    this_repo_name: "portfolio-template",
    this_repo_link: "https://github.com/cookieMonsterDev/portfolio-template",
  },
  socials: {
    github_link: "https://github.com/cookieMonsterDev",
    linkedin_link: "https://www.linkedin.com/in/mykhailo-toporkov/",
    telegram_Link: "https://t.me/Mykhailo_Toporkov",
    email: "mykhailo.toporkov@gmail.com",
    phone: "+380 096 050 33 48",
  },
  skils: [
    "JavaScript (ES6+)",
    "React",
    "TypeScript",
    "NextJs",
    "NestJs",
    "Styled-components",
    "Express",
    "MongoDB",
  ],
  experience: [
    {
      id: 0,
      title: "University",
      company_link: "https://kpi.ua/",
      start_date: "Sep 2017",
      end_date: "June 2021",
      responsibilities: [
        "Bachelor's Degree, Kyiv National Technical University of Ukraine “Igor Sikorsky Kyiv Polytechnic Institute”",
        "Field of Study: Electronics and telecommunications. Programme Subject Area: Telecommunications and Radio Engineering",
      ],
    },
    {
      id: 1,
      title: "Mate Academy",
      company_link: "https://mate.academy/",
      start_date: "Sep 2021",
      end_date: "December 2021",
      responsibilities: [
        'Course "Manual QA":  Conducting testing on all testing stages as part of regular SDLC.',
        "Test case development and maintenance with TestRail. Regression testing, smoke testing, sanity testing, acceptance testing.",
        'Sub course "Automate QA":  Unit testing (Jest) & API testing (Postman)',
      ],
    },
    {
      id: 2,
      title: "NetEnt",
      company_link: "https://www.netent.com/en/",
      start_date: "December 2021",
      end_date: "May 2022",
      responsibilities: [
        "Development and support testing documentation for Framework components of Slot games.",
        "Applying the test paradigm for all slot games, developing mono-repo test strategy.",
        "Development and support e2e autotests for Framework components ( Typescript, Cucumber, WebdriverIO ).",
        "Mentoring QAs",
      ],
    },
    {
      id: 3,
      title: "Evolution",
      company_link: "https://www.netent.com/en/",
      start_date: "May 2022",
      end_date: "Feb 2023",
      responsibilities: [
        "Developing and support slot games core framework ( NodeJs, Express )",
        "Developing new slot games keypad and support legacy one ( React, styled-components )",
        "Integrating support of e2e autotest ids for new and legacy keypads",
        "Leading scrum meetings",
      ],
    },
    {
      id: 4,
      title: "CubeX",
      company_link: "https://cubex-ua.com/",
      start_date: "Feb 2023",
      end_date: "Current",
      responsibilities: [
        "Integrating payment systems for marketplace applications ( Stripe, PayPal, etc.)",
        "Perform optimization for search engines ( SEO ) and migrations to TypeScript ( NextJs ).",
        "Developing e-commerce APIs ( NestJS )", 
      ],
    },
  ],
};

export default config;