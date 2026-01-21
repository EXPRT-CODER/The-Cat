import TypeWriter from '../../components/TypeWriter';
import './Intro.css';
import { useNavigate } from 'react-router-dom'; 

const Intro = () => {

  const navigate = useNavigate();
  const nav = () => { 
    navigate('/Home');
  };

  return (
    <div 
      className='bg-black pb-30 text-white min-h-screen w-screen flex flex-col gap-20 justify-center items-center '
      style={{
      background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #2b092b 100%)",
    }}>
      
      <video
        src="/intro.mp4"
        autoPlay
        loop
        muted
        ref={(v) => v && (v.playbackRate = 0.5)}
      />
      <TypeWriter />

      <button onClick={nav} type="button" class="vx-credit-btn">
        <span class="vx-credit-btn-fold"></span>

        <div class="vx-credit-btn-points">
          <i class="vx-credit-btn-point"></i>
          <i class="vx-credit-btn-point"></i>
          <i class="vx-credit-btn-point"></i>
          <i class="vx-credit-btn-point"></i>
          <i class="vx-credit-btn-point"></i>
          <i class="vx-credit-btn-point"></i>
          <i class="vx-credit-btn-point"></i>
          <i class="vx-credit-btn-point"></i>
          <i class="vx-credit-btn-point"></i>
          <i class="vx-credit-btn-point"></i>
        </div>

        <span class="vx-credit-btn-inner">
          <svg
            class="vx-credit-btn-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2.5"
          >
            <polyline
              points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37"
            ></polyline>
          </svg>
          Next 
        </span>
      </button>

    </div>
  )
};

export default Intro;
