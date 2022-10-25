//css
import './index.css';

//components
import Main from './components/Main';
import Shapes from './components/Shapes';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <header className="App-header inline-flex mt-4 w-full justify-evenly">
        <h3 className="text-lg"><a href ="#about" id="name_a">Brendan Tuckerman</a></h3>
            
            <nav>
              <ul className="inline-flex text-xs">
                  
                  <li className='mr-2'><a href= "#about" >About Me</a></li>
                  <li className='mr-2'><a href="#projects">Projects</a></li>
                  <li className='mr-2'><a href="http://newtrick.com.au" target="_blank" rel="noopener noreferrer">Blog</a></li>
                  <li className='mr-2'><a href="https://www.canva.com/design/DAFL43CkwGc/MEZeGrUguCvW0eMkwx4xZw/view?utm_content=DAFL43CkwGc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank" rel="noopener noreferrer">My Resume</a></li>

              </ul>


          </nav>
      </header>

      
      <Main/>
      <div className='wrapper mt-[50vh]'>
        <Shapes />  
        <About />
        
      </div>
      <div className='wrapper mt-[50vh]'>
        <Projects/>
      </div>
      <div className='wrapper mt [50vh]'>
        <Contact/>
      </div>

    </div>
  );
}

export default App;
