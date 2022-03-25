import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Nav from "./components/navbar/Nav";
import Banner from "./components/banner/Banner";
import About from "./components/about/about";
import Service from "./components/services/service";
import Work from "./components/work/work";
function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Banner />
        <About />
        <Service />
        <Work />
      </main>
    </div>
  );
}

export default App;
