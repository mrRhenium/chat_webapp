const Home = async () => {
  const res = await fetch("http://localhost:3000/api/users");
  const data = await res.json();

  return (
    <>
      <h1>{data.name}</h1>
    </>
  );
};
export default Home;
