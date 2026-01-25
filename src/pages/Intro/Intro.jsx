import TypeWriter from '../../components/TypeWriter';
import Nextbutton from '../../components/Nextbutton';
 

const Intro = () => {
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
      <Nextbutton />
    </div>
  )
};

export default Intro;
