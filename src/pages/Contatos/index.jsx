import Container from "../../components/Container";
import style from "./Contatos.module.css";
import { GoMail } from "react-icons/go";
import { BsInstagram, BsYoutube, BsGithub, BsLinkedin } from "react-icons/bs";
import Shake from "../../components/Shake";

export default function Contatos() {
  return (
    <Container>
      <section className={style.contatos}>
        <h2>Contatos</h2>
        <h3>Entre em contato</h3>
        <p>Para que possamos conversar mais sobre.</p>
        <div className={style.icones}>
          <Shake>
            <a href="#">
              <GoMail className={style.icone} />
            </a>
          </Shake>
          <Shake>
            <a href="#">
              <BsInstagram className={style.icone} />
            </a>
          </Shake>
          <Shake>
            <a href="#">
              <BsYoutube className={style.icone} />
            </a>
          </Shake>
          <Shake>
            <a href="">
              <BsGithub className={style.icone} />
            </a>
          </Shake>
          <Shake>
            <a href="#">
              <BsLinkedin className={style.icone} />
            </a>
          </Shake>
        </div>
      </section>
    </Container>
  );
}
