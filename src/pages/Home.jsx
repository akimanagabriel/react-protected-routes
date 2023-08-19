function Home({ setLogged }) {
  return (
    <div className="container mx-9 my-3">
      <button
      className="py-3 px-5 rounded bg-slate-600"
        onClick={() => {
          setLogged(false);
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Home;
