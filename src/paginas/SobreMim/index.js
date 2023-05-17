import styles from "./SobreMim.module.css"

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/sobre_mim_foto.jpg"

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou a Carol!
            </h3>
            <img
                src={fotoSobreMim}
                alt="Foto da Carol"
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>
            Oi, tudo bem? Eu sou estudante de Front-end na Alura e monitora na Reprograma, estou muito feliz de te ver por aqui.
            </p>
            
            <p className={styles.paragrafo}>
            No ensino superior, escolhi cursar Educação Física me formando em Licenciatura Plena e Bacharelado. Em 2019 iniciei minha Pós Graduação em Biomecânica e Avaliação Física. Durante esse período tive a oportunidade de trabalhar em um aplicativo de Saúde como Suporte e foi nesse período que tive mais certeza que queria estudar programação.
            </p>

            <p className={styles.paragrafo}>
            Minha história com programação começou através da transição de carreira, onde conheci a Reprograma. Lá      aprendi lógica de programação, Git, GitHub, JavaScript, NodeJs, MongoDB, API Restful, Autenticação com JWT e Automação de Testes com Jest.</p>
            
            <p className={styles.paragrafo}>
             Atualmente estudo Análise e Desenvolvimento de Sistemas pela Faculdade Descomplica, Front-end na Alura e sou Monitora Voluntária na Reprograma.
            </p>

            <p className={styles.paragrafo}>
            E foi nesse momento que surgiu a oportunidade de fazer o curso de Programação Back-end porem somente após o segundo processo seletivo consegui conquistar minha vaga para o curso.
            </p>

            <p className={styles.paragrafo}>
            Desde então, tem sido apenas aprendizados atrás de aprendizados. Tanto a reprograma, quanto a Alura me deram a oportunidade e a bagagem que possuo para poder conquistar minha primeira vaga em tecnologia. Hoje sou muito feliz em poder compartilhar meus conhecimentos. Espero que aprenda bastante!
            </p>
        </PostModelo>
    )
}