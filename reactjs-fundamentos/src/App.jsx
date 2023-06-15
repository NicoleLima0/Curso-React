import { Post } from "./components/Post";
import { Header } from "./components/header.jsx";
import { Sidebar } from "./components/Sidebar.jsx";

import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/NicoleLima0.png",
      name: "Nicole Lima",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "victor.design/doctorcare" },
    ],
    publishedAt: new Date("2023-06-02 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/VictorMaciel-dsn.png",
      name: "Victor Maciel",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "victor.design/doctorcare" },
    ],
    publishedAt: new Date("2023-06-10 20:00:00"),
  },
];

// Iteração - criar uma estrutura de repetição

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;

// key é uma chave para identificar cada elemento ou compomente dentro de um array
// Componente nada mais é do que uma função que retorna HTML
// Para ser possível colocar vários posts é necessário algo que englobe tudo como a DIV.
