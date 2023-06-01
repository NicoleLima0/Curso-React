import { PencilLine } from "@phosphor-icons/react";

import styles from "./Sidebar.module.css";
import { Avatar } from "./Avatar.jsx";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80"
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/NicoleLima0.png" />
        <strong> Nicole Carvalho </strong>
        <span> Web Developer </span>
      </div>
      <footer>
        <a href="#">
          {" "}
          <PencilLine size={20} />
          Edite seu perfil{" "}
        </a>
      </footer>
    </aside>
  );
}
