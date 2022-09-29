import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className='container'>

      <header>
        <h1 className='heading'>My first React</h1>
      </header>

      <main>
        <div className='card-container'>
          <div className='card'>
            This is a card
          </div>
          <div className='card'>
            This is a card
          </div>
          <div className='card'>
            This is a card
          </div>
        </div>

      </main>

      <footer>
          Created by Rich
      </footer>
    </div>
  );
}

export default App;
