import styles from '../styles/pages/Ergonomy.module.css';
import Head from 'next/head';
import { useRouter } from 'next/dist/client/router';


export default function Ergonomy() {
    const router = useRouter();

    async function voltar() {
        router.push('/shake');
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>SHAKE. - Ergonomia</title>
            </Head>

            <a 
                onClick={voltar}
                className={styles.backButton}
            >
                <img src="icons/voltar.svg" alt="Botão de Voltar" />
            </a>

            <div className={styles.introduction}>
                <h1><span>ERGONOMIA:</span> Você sabe o que é?</h1>

                <p className={styles.p1}>Basicamente, é a otimização das condições de trabalho humano, <br />
                    por meio de métodos ou técnicas de beneficiamento físico.</p>

                <p className={styles.p2}>Como o <span>SHAKE.</span> se preocupa com nossos usuários, nosso objetivo é propiciar sua <br />
                    produtividade, ao mesmo tempo que práticas ergonômicas. <span>Não é incrível?!</span> 😍</p>
            </div>

            <div className={styles.tips}>
                <strong>DICAS DE ERGONOMIA</strong>

                <section>
                    <img src="icons/dicas/dica1.svg" alt="Dica 1" />
                    <img src="icons/dicas/dica2.svg" alt="Dica 2" />
                    <img src="icons/dicas/dica3.svg" alt="Dica 3" />
                    <img src="icons/dicas/dica4.svg" alt="Dica 4" />
                </section>

                <section>
                    <img src="icons/dicas/dica5.svg" alt="Dica 5" />
                    <img src="icons/dicas/dica6.svg" alt="Dica 6" />
                    <img src="icons/dicas/dica7.svg" alt="Dica 7" />
                    <img src="icons/dicas/dica8.svg" alt="Dica 8" />
                </section>
            </div>
        </div>
    );
}