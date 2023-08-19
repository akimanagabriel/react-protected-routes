import { useNavigate } from "react-router-dom";
import logo from "../assets/gaby.svg";

const Index = ({ setLogged }) => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col justify-center items-center h-[100vh]'>
      <div className='flex items-center gap-3'>
        <img src={logo} className='h-20' />
        <h1 className='text-2xl capitalize opacity-20'>Gabson code</h1>
      </div>

      <h1 className='text-2xl uppercase font-semibold'>
        react protected routes demo
      </h1>
      <div className='my-5'>
        <button
          onClick={() => {
            setLogged(true);
            navigate("/home");
          }}
          className='py-2 px-6 rounded-full bg-indigo-700 uppercase'
        >
          login
        </button>
      </div>
    </div>
  );
};

export default Index;
