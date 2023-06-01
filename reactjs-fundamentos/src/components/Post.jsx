import styles from "./Post.module.css";
import { Comment } from "./Comment.jsx";


export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/VictorMaciel-dsn.png"
          />
          <div className={styles.authorInfo}>
            <strong>Victor Maciel</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="30 de Maio às 14:38" dateTime="2023-05-30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        {" "}
        <p> Fala galeraa 👋</p>
        <p>
          {" "}
          Acabei de subir mais um projeto no meu portifolio. É um projeto que
          fiz no NLW Return, evento da Rocketseat. O nome do projeto é
          DoctorCare 🚀{" "}
        </p>
        👉 <a href="#">victor.design/doctorcare </a>{" "}
        <p>
          {" "}
          <a href="#">#novoprojeto #nlw #rocketseat</a>{" "}
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong> Deixe seu feedback </strong>
        <textarea placeholder="Deixe um comentário"></textarea>
        <footer>
        <button type="submit"> Publicar </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />

      </div>
    </article>
  );
}
