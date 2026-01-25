import React from 'react'
import { useEffect , useState } from 'react';

const Home = () => {

  const [results , setResults] = useState([]);
  const [facts , setFacts] = useState([]);

  useEffect(() => {
      const fetchFacts = async () => {
        const res = await fetch("https://meowfacts.herokuapp.com/?count=5");
        const data = await res.json();
        setFacts(data.data);
      };
      fetchFacts();
    },[]);

  useEffect(() => {
    const fetchData = async () => {
      const imgs = [];
      for (let i = 0; i < 5; i++) {
        const res = await fetch("https://api.thecatapi.com/v1/images/search");
        const data = await res.json();
        imgs.push(data[0].url);
      }
      setResults(imgs);
    };

    fetchData();
  }, []);


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
        <img src={url} alt="image1" className='rounded-lg lg:max-w-[50%]'/>
        <p className=' p-3 '>{facts[index]} </p>
      </div>
      ))}

    </div>
    </>
  );
};

export default Home;

