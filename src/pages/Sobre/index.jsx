import style from "./Sobre.module.css";
import avatar from "./images/avatar.jpg";
import html from "./images/icon-html.svg";
import css from "./images/icon-css.svg";
import js from "./images/icon-js.svg";
import node from "./images/icon-node.svg";
import react from "./images/icon-react.svg";
import sql from "./images/icon-sql.svg";
import Shake from "../../components/Shake";
import Container from "../../components/Container";

export default function Sobre() {
  return (
    <Container className={style.sobre}>
      <div className={style.bio}>
        <img src={avatar} alt="Eu" className={style.avatar} />
        <div className={style.textos}>
          <h2>Sobre</h2>

          <p>
            Sou <span>Raquel da Fonseca</span>
          </p>
          <strong>Dev Full Stack</strong>

          <p>Trabalho com desenvolvimento Web desde 2000.</p>
          <p>Sou apaixonado por transformar ideias em realidade digital.</p>
          <p>
            Especializado em criação de aplicações dinâmicas e intuitivas, com
            foco na experiência do usuário.
          </p>
        </div>
      </div>
      <div className={style.techs}>
        <h3>Techs</h3>
        <div className={style.icones}>
          <Shake>
            <img src={html} alt="Icone do html" />
          </Shake>
          <Shake>
            <img src={css} alt="Icone do css" />
          </Shake>
          <Shake>
            <img src={js} alt="Icone do js" />
          </Shake>
          <Shake>
            <img src={react} alt="Icone do react" />
          </Shake>
          <Shake>
            <img src={node} alt="Icone do node" />
          </Shake>
          <Shake>
            <img src={sql} alt="Icone do sql" />
          </Shake>
        </div>
      </div>
    </Container>
  );
}
