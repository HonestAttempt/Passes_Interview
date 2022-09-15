import heart from './heart-icon.svg';
import './App.css';

function App() {
  function handleLike() {

  }

  return (
    <div className="App">
      <button
          className="btn btn-primary"
          onClick={handleLike}
      >
        <img src={heart}/>
      </button>
        <span> 5</span>
    </div>
  );
}

export default App;
