//Existem dois momentos em que deve-se criar um componente: quando as coisas repetem diversas vezes em tela (mesmo visual, comportamento) e quando você consegue tirar algo de um componente maior sem que deixe ele parar de funcionar para que o componente fique mais limpo e com uma funcionalidade mais clara.
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
