import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from '../components/ChallengeBox';
import { LandingPage } from '../components/landing-page/landing-page';
import { Ergonomy } from '../components/ergonomy/ergonomy';

import { GetServerSideProps } from 'next';

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <LandingPage />

      <div className={styles.container}>
        <Head>
          <title>SHAKE.</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <ChallengeBox />
            </div>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
          </section>
        </CountdownProvider>
      </div>

      <Ergonomy />
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}