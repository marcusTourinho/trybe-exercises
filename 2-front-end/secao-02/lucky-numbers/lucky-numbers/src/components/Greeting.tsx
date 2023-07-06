function Greeting() {
  const firstName = 'Marcus';
  const lastName = 'Tourinho';

  return (
    <h1 className="greeting">
      Olá
      {` ${firstName} ${lastName}`}
      <img src="https://i.imgur.com/rqvLd3q.png" alt="" />
    </h1>

  );
}

export default Greeting;
