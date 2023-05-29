// ou import { Post } from "./post.jsx";
import Post from "./post.jsx";
import { Header } from "./components/header.jsx";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar.jsx";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus libero deserunt sed voluptates dolorem esse magnam asperiores adipisci est repellat debitis, voluptatibus dolorum dolores ex, magni sunt facere non vel!" />
        </main>
      </div>
    </div>
  );
}

export default App;

// Componente nada mais é do que uma função que retorna HTML
// Para ser possível colocar vários posts é necessário algo que englobe tudo como a DIV.
