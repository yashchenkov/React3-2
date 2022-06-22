import logo from './logo.svg';
import './App.css';
import Listing from './Components/Listing';

function App() {
  const itemsArr = [];

  return (
    <Listing items = {itemsArr} />
  );
}

export default App;
