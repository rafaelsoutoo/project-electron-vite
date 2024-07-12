import { useNavigate } from "react-router-dom";

export function Home(){

  const navigate = useNavigate();
    const handleBackLogin = () => {
      navigate('/');
    };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleBackLogin}>voltar</button>
    </div>
  );
};


