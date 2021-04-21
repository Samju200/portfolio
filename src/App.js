import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Slide from './components/Slide';
import Portfolio from './components/Portfolio';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slide />
      <Portfolio />
      <Skills />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
