import { useEffect, useState } from "react";
import Card from "../../components/Cards";
import Container from "../../components/Container";
import style from "./Projetos.module.css";

export default function Projetos() {
  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    const buscarRepositorios = async () => {
      // eslint-disable-next-line no-undef
      const seuNome = "RaquelDFS";
      const response = await fetch(
        `https://api.github.com/users/${seuNome}/repos`
      );
      const data = await response.json();
      setRepositories(data);
    };
    buscarRepositorios();
  }, []);

  return (
    <Container>
      <div className={style.projetos}>
        <h2>Projetos</h2>
        {repositories.length > 0 ? (
          <section className={style.lista}>
            {repositories.map((repo) => (
              <Card
                key={repo.id}
                name={repo.name}
                description={repo.description}
                html_url={repo.html_url}
              />
            ))}
          </section>
        ) : (
          <p>Carregando repositórios...</p>
        )}
      </div>
    </Container>
  );
}
