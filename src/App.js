import './App.css';
import Home from './componentes/Home';
import About from './componentes/About';
import Work from './componentes/Work';
import Testimonial from './componentes/Testimonial';


function App() {
  return (
    <div className="App">
      <Home />
      <About/>
      <Work/>
      <Testimonial/>
      
    </div>
  );
}

export default App;
