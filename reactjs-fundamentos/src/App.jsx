// ou import { Post } from "./post.jsx";
import Post from "./post.jsx";
function App() {
  return (
    <div>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default App;

// Componente nada mais é do que uma função que retorna HTML
// Para ser possível colocar vários posts é necessário algo que englobe tudo como a DIV.
