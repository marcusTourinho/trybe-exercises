function Header() {
  const firstName = 'Marcus';
  const lastName = 'Tourinho';

  function luckyNumber() {
    return Math.floor(Math.random() * 60 + 1);
  }

  return (
    <>
      <h1 className="greeting">
        Olá
        {` ${firstName} ${lastName}`}
        <img src="https://i.imgur.com/rqvLd3q.png" alt="" />
      </h1>
      <h2 className="subtitle">Seus números da sorte da Mega-Sena são:</h2>
      <ul>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
      </ul>
    </>

  );
}

export default Header;
