import { calculateAge } from '../utils/age';
import ModuleDetails from './ModuleDetails';
import Title from './Title';

function HelloWorld() {
  const name = 'Marcus Tourinho';
  const birth = '01/03/1999';
  const age = calculateAge(birth);

  return (
    <div>
      <h1 style={ { color: 'green', textAlign: 'center' } }>{name}</h1>
      <p>{`Age ${age}`}</p>
      <Title />
      <ModuleDetails />
    </div>
  );
}

export default HelloWorld;
