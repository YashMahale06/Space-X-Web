import React from "react";

const Card = (props) => {
  let {
    imgUrl,
    mission_name,
    flight_number,
    ids,
    launch_year,
    launch_success,
    successful_landing,
  } = props;
  return (
    <div>
      <div class="rounded-md overflow-hidden shadow-2xl border-1 bg-gray-600">
        <img class="w-[200px] h-[200px] bg-gray-700 ml-8 mt-4 mb-4 rounded-lg" src={imgUrl} alt="spacex" />
        <div class="px-6 py-2">
          <div class="font-bold text-xl mb-2 text-gray-100 bg-gray-800 border-2 rounded-md text-center">
            {mission_name + "#" + flight_number}
          </div>
        </div>
        <div class="px-4 pt-2 pb-2 grid grid-rows-4">
          <div>
            <span class="text-md text-white font-bold">
              <strong class="inline-block bg-gray-800 text-white rounded-lg px-2 py-1 text-md font-bold mr-2 mb-2">
                Mission Id
              </strong>
              :{" "}
            </span>
            <span>
              <strong class="inline-block border-b-2 text-white px-2 py-1 text-md font-bold  mr-2 mb-2">
                {" "}
                {!ids[0] ? " Null " : ids}
              </strong>
            </span>
          </div>
          <div>
            <span class="text-md text-white font-bold">
              <strong class="inline-block bg-gray-800 text-white rounded-lg px-2 py-1 text-md font-bold mr-2 mb-2">
                Launch Year
              </strong>{" "}
              :{" "}
            </span>
            <span>
              <strong class="inline-block border-b-2 text-white  px-2 py-1 text-md font-bold  mr-2 mb-2">
                {launch_year}
              </strong>
            </span>
          </div>
          <div>
            <span class="text-md text-white font-bold">
              <strong class="inline-block bg-gray-800 text-white rounded-lg px-1 py-1 text-md font-bold mr-2 mb-2">
                Successfull Launch
              </strong>{" "}
              :{" "}
            </span>
            <span>
              <strong class="inline-block border-b-2 text-white  px-2 py-1 text-md font-bold  mr-2 mb-2">
                {launch_success ? "true" : "false"}
              </strong>
            </span>
          </div>
          <div>
            <span class="text-md text-white font-bold">
              <strong class="inline-block bg-gray-800  text-white rounded-lg px-2 py-1 text-md font-bold mr-2 mb-2">
                Successfull Land
              </strong>{" "}
              :{" "}
            </span>
            <span>
              <strong class="inline-block border-b-2 text-white  px-1 py-1 text-md font-bold  mr-2 mb-2">
                {successful_landing ? "true" : "false"}
              </strong>
            </span>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Card;
