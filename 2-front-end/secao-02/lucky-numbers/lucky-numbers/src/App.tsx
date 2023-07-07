import Greeting from './components/Greeting';
import './App.css';
import LuckyNumbers from './components/LuckyNumbers';

const userName = {
  firstName: 'Marcus',
  lastName: 'Tourinho',
};

function App() {
  return (
    <>
      <Greeting userName={ userName } />
      <LuckyNumbers />
    </>
  );
}

export default App;
