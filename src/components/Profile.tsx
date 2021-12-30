import { useRouter } from 'next/dist/client/router';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const router = useRouter();

    async function redirect() {
        router.push('/ergonomy')
    }

    return (
        <div className={styles.profileContainer}>
            <img src="icons/meditation.svg" alt="Meditação"/>

            <div>
                <strong>
                    Quer mais dicas de
                    ergonomia? <a onClick={redirect}> Clique aqui e acompanhe
                    as melhores dicas!</a>
                </strong>
            </div>
        </div>
    );
}