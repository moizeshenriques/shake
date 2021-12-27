import styles from './landingPage.module.css';

export function LandingPage() {
    return (
        <div className={styles.container}>
            <section className={styles.asideRight}>
                <img src="icons/logo.svg" alt="Logo Shake" className={styles.logo}/>

                <div className={styles.phrases}>
                <h2>Bem-vindo(a)!</h2>

                <p>
                    Esperamos que aproveite <br/>
                    nossos serviços. 😉
                </p>
                </div>

                <div className={styles.ergonomy}>
                <img src="icons/ergonomy.svg" alt="Desenho de pessoa se exercitando"/>
                </div>
            </section>

            <section className={styles.asideLeft}>
                <p>
                    <img src="icons/botao.svg" alt="Botão"/>
                </p>

                <img src="icons/main.svg" alt="Traços"/>
            </section>
        </div>
    );
}