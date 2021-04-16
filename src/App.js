import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Slide from './components/Slide';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slide />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
