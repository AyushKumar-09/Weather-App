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
  const [error, SetError] = useState('');


  // API Calling
  const serachPressed = async () => {
    
      const data = await fetch(`${api.base}find?q=${search}&units=metric&appid=${api.key}`);
    
      if (data.ok) {
        //  converting th data to json
        const json = await data.json();

        
        if(json?.list?.length> 0 & json?.message ==="accurate"){
       
        // setting the json to  setWeatherfor retival
        setWeather(json);
        SetError('');
       
        }else{
          SetError("City not Found . Please enter a valid city");
          setWeather(demo);
          
      }
    }
  

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
        <Header />

        {/* main body */}
        <div className="h-screen flex items-center justify-center ">

          <div className=" w-4/5 -mt-20  md:w-2/5  bg-opacity-70 bg-black text-white rounded-xl" >

            {/* searach Bar */}
            <div className="flex items-center justify-between   md:m-5 p-6 ">
              <input type="text"
                className="rounded-2xl w-full p-4 text-black text-bold"
                placeholder="Enter Location"
                onChange={(e) => setSearch(e.target.value) }
              />


              <button
                className="rounded-2xl w-auto p-4 bg-slate-700 ml-2 "
                onClick={serachPressed}
              >Search</button>
            </div>

            {/* error handling */}
            <div>
              <span className="font-bold m-2 pl-5 text-red-600   ">{error}</span>
            </div>
      
            

            {/* Temprature */}
            <div className="m-1 p-2 text-6xl flex justify-center font-bold  ">
              <p>{weather?.list[0]?.main?.temp}°C</p>
            </div>

            {/* Location */}
            <div className="m-2 p-2 flex text-3xl justify-center">
              <p>{weather?.list[0]?.name}</p>
            </div>

            {/* temprature min max div */}
            <div className="text-center">
              <div className="m-2 p-6 text-xl">
                <p>Min Temp : {weather?.list[0]?.main?.temp_min}°C</p>
              </div>

              <div className="m-2 p-6 text-xl">
              <p> Max Temp : {weather?.list[0]?.main?.temp_max}°C</p>
              </div>
            </div>

            {/* describtion div */}
            <div className="text-center">
              {/* wind Speed */}
              <div className="m-2  p-6 text-xl">
                <p> Wind Speed : {weather?.list[0]?.wind?.speed}</p>
              </div>

              {/* Conditons */}
              <div className="m-2 p-6 text-xl">
                <p> Weather can be describe as <span className="font-bold">{weather?.list[0]?.weather[0]?.description}</span> and feels like {weather?.list[0]?.main?.feels_like}°C</p>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default App
