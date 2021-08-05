import "./App.css";
import {Route, BrowserRouter as Router} from "react-router-dom";
import Nav from "./Nav";
import About from "./About";
import DrawerComponent from "./Components/DrawerComponent";
import illustration from "./assets/home.jpg";

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/employees" component={About} />
                    <Route path="/about" component={DrawerComponent} />
                </switch>
            </div>
        </Router>
    );
}

const Home = () => {
    return (
        <div style={{marginTop: '70px'}}>
            <img src={illustration} alt="Home illustration" />
        </div>
    );
};

export default App;
