import styles from "../styles/pages/landingPage.module.css";
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { useAuth } from "../hooks/useAuth";

export default function LandingPage() {
  const router = useRouter();
  const { user, signInWithGoogle } = useAuth();

  async function handleEnterShake() {
    if(!user) {
      await signInWithGoogle();
    }

    router.push('/shake');
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>SHAKE. - Início</title>
      </Head>

      <section className={styles.asideRight}>
        <img src="icons/logo.svg" alt="Logo Shake" className={styles.logo} />

        <div className={styles.phrases}>
          <h2>Bem-vindo(a)!</h2>

          <p>
            Esperamos que aproveite <br />
            nossos serviços. 😉
          </p>
        </div>

        <div className={styles.ergonomy}>
          <img
            src="icons/ergonomy.svg"
            alt="Desenho de pessoa se exercitando"
          />
        </div>
      </section>

      <section className={styles.asideLeft}>
        <button
          onClick={handleEnterShake}
          className={styles.button}
        >
          <img src="icons/googleIcon.svg" alt="Logo Google" />
             Entre com o Google
        </button>

        <img src="icons/main.svg" alt="Traços" />
      </section>
    </div>
  );
}