import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {
    const { challengesCompleted, level } = useContext(ChallengesContext);

    return (
        <div className={styles.completedChallengesContainer}>
            <div className={styles.level}>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>

            <div className={styles.challengesCompleted}>
                <span>Desafios completos</span>
                <span>{challengesCompleted}</span>
            </div>
        </div>
    );
}