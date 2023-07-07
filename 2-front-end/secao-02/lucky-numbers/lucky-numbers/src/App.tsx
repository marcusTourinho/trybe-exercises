import Greeting from './components/Greeting';
import LuckyNumbers from './components/LuckyNumbers';
import PastResults from './components/PastResults';

import './App.css';

const userName = {
  firstName: 'Marcus',
  lastName: 'Tourinho',
};

function App() {
  return (
    <>
      <Greeting userName={ userName } />
      <LuckyNumbers />
      <PastResults />
    </>
  );
}

export default App;
