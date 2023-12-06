import Navbar from './components/Navbar';
// import Data from './components/data';
import Home from './components/Home';
import Read from './components/Read';
import About from './components/about';
import 'bootstrap/dist/css/bootstrap.css';
import Cclass from './components/Cclass';
import Update from './components/update';
import Contact from './components/Contact';
import Creat from './components/Creat';
import Api from './components/Api';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hooks from './components/Hooks';

function App() {
  const firstobject = {
    prop1: 'First',
    prop2: 'Second',
    prop3: 'Third',

  }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home {...firstobject} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/read" element={<Read />} />
          <Route path="/hook" element={<Hooks />} />
          <Route path="/create" element={<Creat />} />
          <Route path="/update" element={<Update />} />
          <Route path="/class" element={<Cclass username="kavetech" />} />
          <Route path="/api" element={<Api />} />


        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;