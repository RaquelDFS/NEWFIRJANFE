import Container from "../../components/Container";
import style from "./Page404.module.css";
export default function Page404() {
  return (
    <Container className={style.page404}>
      <h2 className={style.titulo2}>Algo de errado não está certo!</h2>
      <div className={style.textos}>
        <span className={style.texto_grande}>404</span>
        <strong className={style.texto_vermelho}>Página Não Localizada!</strong>
      </div>
    </Container>
  );
}
