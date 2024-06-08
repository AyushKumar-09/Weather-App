import React from "react"
import { useState } from "react";
import demo from "./dummyData";
import { bg_img } from "./constants/utils";
import Header from "./Header";

// APi details 
const api = {
  key: "0851d814b3132464b92e4b99f71e283b",
  base: "http://api.openweathermap.org/data/2.5/"
};


function App() {

  // useState declarations
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(demo);

  // API Calling
  const serachPressed = async () => {
    const data = await fetch(`${api.base}find?q=${search}&units=metric&appid=${api.key}`);

    //  converting th dat to json
    const json = await data.json();

    // setting the json to  setWeatherfor retival
    setWeather(json);
    
    

  };


  return (

    <>
      <div >
        {/* background Image */}
        <div className="fixed -z-10">
          <img
            className='h-screen object-cover md:w-screen'
            src={bg_img}
            alt="bg image" />
        </div>
        {/* Header Component */}
       <Header/>

        {/* main body */}
        <div className="h-screen flex items-center justify-center">

          <div className=" w-4/5 -mt-20  md:w-2/5  bg-opacity-60 bg-black text-white rounded-xl" >

            {/* searach Bar */}
            <div className="flex items-center justify-between   md:m-5 p-6 ">
              <input type="text"
                className="rounded-2xl w-full p-4 text-black text-bold"
                placeholder="Enter Location"
                onChange={(e) => setSearch(e.target.value)}
              />

            
              <button
                className="rounded-2xl w-auto p-4 bg-slate-700 ml-2 "
                onClick={serachPressed}
              >Search</button>
            </div>

            {/* Temprature */}
            <div className="m-2 p-3 text-6xl flex justify-center font-bold  ">
              <p className="">{weather.list[0].main.temp} °C</p>
            </div>

            {/* Location */}
            <div className="m-2 p-3 flex text-3xl justify-center">
              <p>{weather?.list[0]?.name}</p>
            </div>


            {/* describtion div */}
            <div className="flex justify-between"> 
              {/* wind Speed */}
              <div className="m-5 p-6">
                <p> Wind Speed: {weather.list[0].wind.speed}</p>
              </div>

              {/* Conditons */}
              <div className="m-5 p-6">
                <p> Weather: {weather.list[0].weather[0].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default App
