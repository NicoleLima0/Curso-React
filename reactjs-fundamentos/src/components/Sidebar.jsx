import styles from "./Sidebar.module.css";

export function Sidebar() {
  return ( 
  <aside className={styles.sidebar}>
    <img className= {styles.cover} src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"/>
    <div className={styles.profile}>
        <strong> Nicole Carvalho </strong>
        <span> Web Developer </span>


    </div>
    <footer>
        <a href="#"> Edite seu perfil </a>
    </footer>
  </aside>
  );
}
