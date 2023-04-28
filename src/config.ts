const config = {
  resume_url: 'https://drive.google.com/uc?export=download&id=19miiyiy_Hn-_UxZWAo6WGPOr2WABhpdX',
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
  experience: [
    {
      id: 0,
      title: "University",
      company_link: "https://kpi.ua/",
      start_date: "Sep 2017",
      end_date: 'June 2021',
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
        'Course "Manual QA":  Conducting testing on all testing stages as part of regular SDLC. Test case development and maintenance with TestRail. Regression testing, smoke testing, sanity testing, acceptance testing. Defect management with Jira',
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
        "Development and support testing documentation for Framework components of Slot games, with Jira and TestRail. Leading onboarding for new QAs.",
        "Development and support e2e autotests for Framework components ( Typescript, Cucumber, WebdriverIO ).",
        "Leading scrum meetings",
      ],
    },
    {
      id: 3,
      title: "Evolution",
      company_link: "https://www.netent.com/en/",
      start_date: "May 2022",
      end_date: "Current",
      responsibilities: [
        "Fixing layout cross device / platforms bugs for slot-games keypads. ( React, styled-components ) and imporovment event tracking",
        "Support autotests integration: Adding states locators for DOM elements.",
        "Leading scrum meetings",
      ],
    },
  ],
};

export default config;
