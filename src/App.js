import logo from './logo.svg';
import './App.css';

function Header(props){
  return (
    <header>
      <h1>{props.name} kitchen</h1>
    </header>
  )
}

function Main(props){
  return(
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      <ul style={{textAlign: "left"}}>
        {props.dishes.map((dish) => <li>{dish}</li>)}
      </ul>
    </section>
  )
}

function Footer(props){
  return(
    <footer>
      <p>{props.noun}</p>
    </footer>
  );
}

function ShowLogo(props){
  return(
    <img 
      src={props.src} 
      height="100"
      alt="React image"
    />
  )
}

const dishes = [
  "Macaroni and Cheese",
  "Salmon",
  "Tofu with Vegetables",
];

function App() {
  return (
    <div className="App">
      <Header name="Alex"/>
      <Main adjective="delicioza" dishes={dishes}/>
      <Footer noun={1991 + " - " + new Date().getFullYear()}/>
      <ShowLogo src={logo} />
    </div>
  );
}

export default App;
