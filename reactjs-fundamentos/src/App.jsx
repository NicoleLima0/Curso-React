import { Post } from "./components/Post";
import { Header } from "./components/header.jsx";
import { Sidebar } from "./components/Sidebar.jsx";
import { Scrollbars } from "./components/Scrollbars.jsx";

import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus libero deserunt sed voluptates dolorem esse magnam asperiores adipisci est repellat debitis, voluptatibus dolorum dolores ex, magni sunt facere non vel!" />
          <Post content="" />
        </main>
      </div>
    </div>
  );
}

export default App;

// Componente nada mais é do que uma função que retorna HTML
// Para ser possível colocar vários posts é necessário algo que englobe tudo como a DIV.
