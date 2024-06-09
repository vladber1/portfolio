import "./App.css";
import Skills from "./components/Skills/Skills";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Container from "./components/container/Container";
import Footer from "./components/footer/Footer";
import Project from "./components/project/Project";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Container />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
