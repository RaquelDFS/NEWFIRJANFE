import { FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import style from "./Card.module.css";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
export default function Card({ name, description, html_url }) {
  return (
    <section className={style.card}>
      <h3>{name}</h3>
      <p>{description}</p>
      <div className={style.card_footer}>
        <div className={style.card_icones}>
          <FaHtml5 />
          <FaCss3Alt />
          <FaJs />
          <FaReact />
        </div>
        <Link to={html_url} className={style.botao}>
          <BsArrowRight />
        </Link>
      </div>
    </section>
  );
}
