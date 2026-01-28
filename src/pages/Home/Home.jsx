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

      window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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

    <div className='min-h-full w-full justify-center items-center p-10 lg:px-50  flex flex-col gap-10'>

      {results.map((url, index) => (
        <div
          key={index}
          className="
            w-full
            bg-white
            rounded-xl
            overflow-hidden
            grid
            lg:grid-cols-2
            shadow-[0_8px_30px_rgba(0,0,0,0.12)]
            hover:shadow-[0_16px_40px_rgba(0,0,0,0.18)]
            transition-shadow
            duration-300
          "
        >
          {/* Image */}
            <div className="w-full flex justify-center items-start p-4 gap-10">
              <img
                src={url}
                alt="Cat"
                className="
                  w-full
                  h-auto
                  rounded-lg
                "
              />
            </div>

            {/* Text */}
            <div className="flex items-center p-6">
              <p className="
                text-gray-700
                text-lg
                font-semibold
                leading-relaxed
              ">
                {facts[index]}
              </p>
            </div>
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