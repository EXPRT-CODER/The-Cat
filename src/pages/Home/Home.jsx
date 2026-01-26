import React from 'react'
import { useEffect , useState } from 'react';
import Nextbutton from '../../components/Nextbutton';

const Home = () => {

  const [results , setResults] = useState([]);
  const [facts , setFacts] = useState([]);
  const [Refresh , setRefresh] = useState(false);
  const [btntxt , setBtntxt] = useState("Get New Cat Facts");

  useEffect(() => {
    setBtntxt("Loading...");

    const fetchFacts = async () => {
      const imageRequests = Array.from({ length: 5 }, () =>
        fetch("https://api.thecatapi.com/v1/images/search")
          .then(res => res.json())
          .then(data => data[0].url)
      );

      const factRequest = fetch("https://meowfacts.herokuapp.com/?count=5")
        .then(res => res.json());

      const [imgs, factData] = await Promise.all([
        Promise.all(imageRequests),
        factRequest
      ]);

      setResults(imgs);
      setFacts(factData.data);
      setBtntxt("Get New Cat Facts");
    };

      fetchFacts();
  }, [Refresh]);

  return (
    <>
    <header className="w-full bg-black text-white py-4 border-b border-white/10">
      <h1 className="text-center text-xl font-medium tracking-wide">
        The CAT FACTS
      </h1>
    </header>

    <div className='min-h-full w-full justify-center items-center p-10  flex flex-col gap-10'>

      {results.map((url, index) => (
        <div key={index}
      className=' flex lg:flex-row lg:gap-10
       flex-col justify-center items-center 
       gap-1 rounded-lg shadow-lg'
      >
        <img src={url} alt="img Loading..." className='rounded-lg lg:max-w-[50%]'/>
        <p className=' p-3 '>{facts[index]} </p>
      </div>
      ))}
      <div onClick={() => setRefresh((prev)=> !prev)}>
        <Nextbutton text={btntxt}  bg="white"/>
      </div>
    </div>
    </>
  );
};

export default Home;