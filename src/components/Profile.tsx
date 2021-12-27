import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {

    return (
        <div className={styles.profileContainer}>
            <img src="icons/meditation.svg" alt="Meditação"/>

            <div>
                <strong>
                    Quer mais dicas de
                    ergonomia? <a>Role para baixo e acompanhe
                    as melhores dicas! 🗣</a>.
                </strong>
            </div>
        </div>
    );
}