import './App.css';
import HelloWorld from './components/HelloWorld';
import Frase from './components/frase';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';


function App() {

  const name = 'Vinicius'
  const newName = name.toUpperCase()

  

  function sum(a, b){
    return a + b
  }

  const url = "https://unsplash.com/photos/a-black-background-with-multicolored-lines-in-the-dark-8z1SGcgkOiA"

  return (
    <div className="App">
      <h1>Meu Primeiro App</h1>
      <h2>Alterando o JSX</h2>
      <p>Ola: {newName}</p>
      <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt="Minha Imagem" />
      <HelloWorld />
      <SayMyName nome = {name}/>
      <p> Me diz o que esta achando de React?: {Frase()} </p>
      <Pessoa 
      nome="Fernanda" 
      idade="39" 
      profissao="Programador(a)" 
      foto="https://chc.org.br/wp-content/uploads/2016/01/ceu-terra.jpg"/>
      
    </div>
  );
}

export default App;
