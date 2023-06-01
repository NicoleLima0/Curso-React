import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";
export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/NicoleLima0.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Nicole Carvalho</strong>
              <time title="30 de Maio às 14:38" dateTime="2023-05-30">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p> Muito bom! Parabéns.</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
