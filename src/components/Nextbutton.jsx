import './NextButton.css';
import { useNavigate } from 'react-router-dom'; 

const Nextbutton = ({ text , bg}) => {
  const navigate = useNavigate();

  const nav = () => { 
    if (text === "Get New Cat Facts") return;
    navigate('/Home');
  };

  return (
    <button onClick={nav} type="button" className="vx-credit-btn">
      <span className="vx-credit-btn-fold" style={{ "--fold-bg": bg }}></span>

      <div className="vx-credit-btn-points">
        {Array.from({ length: 10 }).map((_, i) => (
          <i key={i} className="vx-credit-btn-point"></i>
        ))}
      </div>

      <span className="vx-credit-btn-inner">
        <svg
          className="vx-credit-btn-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
        >
          <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37" />
        </svg>
        {text}
      </span>
    </button>
  );
};

export default Nextbutton;
