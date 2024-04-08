import Nav from "./components/nav.jsx";
import About from "./components/About.jsx";
import MousePosition from "./components/functions/mousemouse.jsx";
import { Provider } from "react-redux";
import { Store } from "./store/store.js";
import Overlay from "./components/overlay.jsx";
import Skills from "./components/skills.jsx";
import Projects from "./components/projects.jsx";
import Footer from "./components/footer.jsx";
function App() {
  return (
    <>
      <Provider store={Store}>
        <MousePosition />
        <Overlay />
        <About />
        <Skills />
        <Projects />
        <Footer />
        <Nav />
      </Provider>
    </>
  );
}

export default App;
