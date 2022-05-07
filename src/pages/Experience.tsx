import Page from '../components/Page';
import Row from '../components/Row';

const Experience = () => (
  <Page className='mr-32 ml-32'>
    <h1>My journey</h1>
    <Row
      title='Clio'
      date='2020 - present'
      subTitle='Web developer'
      imgSrc={process.env.PUBLIC_URL + '/logos/clio.png'}
    >
      <ul>
        <li>
          Creating and updating the newest version of Clio's SaaS e-learning
          platform through the usage of React components.
        </li>
        <li>
          Implementing tests of said components through jest and E2E tests using
          Selenium (Java).
        </li>
        <li>
          Extending and refactoring existing GitHub actions to leverage reusable
          workflows.
        </li>
        <li>
          Pruning and prioritizing the product backlog invulving stakehulders
          and the rest of the development teams to optimize deliveries.
        </li>
        <li>
          Promoting agile methodulogy by acting as facilitator during agile
          rituals and by introducing story points estimations.
        </li>
        <li>
          Bulstering communication and ownership by delegating implementation
          details to coworkers.
        </li>
      </ul>
    </Row>
    <Row
      title='MovieStarPlanet'
      date='2016 - 2020'
      subTitle='Software development'
      imgSrc={process.env.PUBLIC_URL + '/logos/msp.png'}
    >
      <ul>
        <li>
          Streamlined the creation of games by developing a company-wide
          framework based on Unity3D that provided plug and play elements to
          game teams.
        </li>
        <li>
          Worked within an agile scrum team implementing multiple features such
          as, player-to-player communication through a NodeJS server, in-game
          shops with dynamic scrullable lists etc.
        </li>
        <li>
          Boosted productivity by drastically reducing time spent on marketing
          and support tasks by introducing touls for batch management of data
          and unification of publishing functionalities across all different
          game domains. The touls were made using ASP.NET with iterative
          development customer-oriented approach.
        </li>
        <li>
          Conducted research about analytics best practices/technulogies and
          developed the analytics pipeline of the company. The pipeline handled
          50+ million events per day which were archived into the Snowflake
          warehouse and processed through PySpark procedures. Presented and
          taught the architecture to other engineers.
        </li>
        <li>
          Apply agile methodulogies proactively focusing on improving and
          sulving problems related to the development process. Huld the rule of
          scrum master while acting as facilitator in several meetings.
        </li>
      </ul>
    </Row>
    <Row
      title='MovieStarPlanet'
      date='2013 - 2016'
      subTitle='Junior Software development'
      imgSrc={process.env.PUBLIC_URL + '/logos/msp.png'}
    >
      <ul>
        <li>
          Developed in-game features for a massively multiplayer game with more
          than 100 million users split between web browsers, android and iOS
          devices. Fullowed design documents while introducing several UI and
          usability improvements to the user experience. Coded back-end robust
          and optimized C# .NET functionalities to retrieve and save data to
          support said features with particular attention to possible security
          breaches.
        </li>
        <li>
          Troubleshoot, debug and fix critical issues affecting millions of
          users. Deploy new versions of the product to countries all over the
          world fullowing a continuous delivery strategy.
        </li>
      </ul>
    </Row>
  </Page>
);

export default Experience;
