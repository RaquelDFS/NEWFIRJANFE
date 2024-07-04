import { Link } from "react-router-dom";
import style from "./Home.module.css";
import Container from "../../components/Container";
import avatar from "./image/logo_home_red.svg";
export default function Home() {
  return (
    <Container>
      <section className={style.home}>
        <div className={style.content}>
          <p>
            Olá, sou <br />
            <span>Raquel da Fonseca</span> <br /> Dev Full Stack
          </p>
          <Link to="/sobre" className={style.btn}>
            Saiba mais sobre mim
          </Link>
        </div>
        <figure>
          <img className="imgHome" src={avatar} alt="Imagem Principal" />
        </figure>
      </section>
    </Container>
  );
}

/*  */
