type GreetingProps = {
  userName: {
    firstName: string,
    lastName: string,
  }
};

function Greeting({ userName }: GreetingProps) {
  const { firstName } = userName;
  const { lastName } = userName;
  return (
    <h1 className="greeting">
      Olá
      {` ${firstName} ${lastName}`}
      <img src="https://i.imgur.com/rqvLd3q.png" alt="" />
    </h1>

  );
}

export default Greeting;
