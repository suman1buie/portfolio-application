import Header from "./components/Header";
import Body from "./components/Body";
import Personal from "./components/Personal";
import Footer from "./components/Footer";

import "./index.css";
import Skills from "./components/Skills";
import Pastwork from "./components/Pastwork";

export default function App() {
  return (
    <div>
      <div>
        <Header />
        <Body />
        <Personal />
        <Skills  />
        <Pastwork />
        <Footer />
      </div>
    </div>
  );
}
