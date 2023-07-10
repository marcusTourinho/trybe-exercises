import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [schooling, setSchooling] = useState('');
  const [resume, setResume] = useState('');

  function resetForm() {
    setName('');
    setEmail('');
    setSchooling('Médio');
    setResume('');
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    resetForm();
    // eslint-disable-next-line no-alert
    window.alert(
      `Nome: ${name}\nemail: ${email}
      Escolaridade: ${schooling}\nExperiências: ${resume}`,
    );
  }

  return (
    <form onSubmit={ (event) => handleSubmit(event) }>
      <label htmlFor="name">
        Nome
        <input
          type="text"
          id="name"
          value={ name }
          onChange={ ({ target }) => setName(target.value) }
        />
      </label>
      <label htmlFor="email">
        E-mail
        <input
          type="email"
          id="email"
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
        />
      </label>
      <label>
        Escoladirade
        <select
          value={ schooling }
          onChange={ ({ target }) => setSchooling(target.value) }
        >
          <option value="Médio">Médio</option>
          <option value="Superior">Superior</option>
          <option value="Pós-graduação">Pós-graduação</option>
        </select>
      </label>
      <label>
        Resumo das experiências
        <textarea
          value={ resume }
          onChange={ ({ target }) => setResume(target.value) }
        />
      </label>
      <button>Enviar</button>
    </form>
  );
}

export default App;
