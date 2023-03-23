import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../Cards/Card";

function Dashboard() {
  const [data, setData] = useState(null);

  const [filter, setFilter] = useState({
    launch_year: "",
    launch_success: "",
    land_success: "",
  });
  function getUpdatedURL() {
    return `https://api.spacexdata.com/v3/launches?limit=100&launch_year=${filter.launch_year}&launch_success=${filter.launch_success}&land_success=${filter.land_success}`;
  }

  const updateFilter = (e) => {
    let url = getUpdatedURL();
    fetch(url)
      .then((res) => res.json())
      
    let name = e.target.name;
    let val = e.target.value;
    if (filter[name] === val) {
      val = "";
    }
    setFilter({ ...filter, [name]: val });
    getData();
  };

  const clearSelection = () => {
    console.log(filter);
    setFilter({
      land_success: "",
      launch_year: "",
      launch_success: "",
    });
    getData();
  };
  const getData = async () => {
    const api = getUpdatedURL();
    const response = await fetch(api);
    const resData = await response.json();
    console.log(resData);
    setData(resData);
  };
  useEffect(() => {
    getData();
  }, [filter]);
  const fields = [
    {
      year: 2006,
      path: "/2006",
      current: false,
    },
    {
      year: 2007,
      path: "/2007",
      current: false,
    },
    {
      year: 2008,
      path: "/2008",
      current: false,
    },
    {
      year: 2009,
      path: "/2009",
      current: false,
    },
    {
      year: 2010,
      path: "/2010",
      current: false,
    },
    {
      year: 2011,
      path: "/2011",
      current: false,
    },
    {
      year: 2012,
      path: "/2012",
      current: false,
    },
    {
      year: 2013,
      path: "/2013",
      current: false,
    },
    {
      year: 2014,
      path: "/2014",
      current: false,
    },
    {
      year: 2015,
      path: "/2015",
      current: false,
    },
    {
      year: 2016,
      path: "/2016",
      current: false,
    },
    {
      year: 2017,
      path: "/2017",
      current: false,
    },
    {
      year: 2018,
      path: "/2018",
      current: false,
    },
    {
      year: 2019,
      path: "/2019",
      current: false,
    },
    {
      year: 2020,
      path: "/2020",
      current: false,
    },
  ];
  return (
    <div>
      <div>
        <aside
          id="logo-sidebar"
          class="fixed top-0 left-0 z-40 w-80 h-screen pt-20 transition-transform -translate-x-full bg-gray-700 border-r rounded-lg border-gray-200 sm:translate-x-0 dark:bg-gray-700 "
          aria-label="Sidebar"
        >
          <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-700 mb-8 ">
            <div className="mt-4 bg-gray-600 rounded-lg">
              <div>
                <h1 className="font-bold text-xl ml-2 text-white text-center p-4">
                  Filters
                </h1>
                <p className="mt-2 text-lg text-center text-gray-200">
                  Launch Year
                </p>
                {console.log(filter)}
                <hr className="h-px w-52 ml-8 my-1 bg-gray-200 border-2 dark:bg-white rounded-lg" />
              </div>

              <div className="mt-6 ml-12 grid grid-rows-6 grid-cols-2 ">
                {fields.map(({ year }) => (
                  <Link>
                    <button
                      type="button"
                      value={year}
                      onClick={updateFilter}
                      name="launch_year"
                      className={` text-white shadow-lg border-2 w-16 font-medium rounded-lg text-sm px-4 py-1.5 mr-2 mb-2   ${
                        filter.launch_year === year.toString()
                          ? "bg-gray-400"
                          : "bg-gray-800"
                      }`}
                    >
                      {year}
                    </button>
                  </Link>
                ))}
              </div>
              <div className="mt-4">
                <div>
                  <p className="mt-2 text-lg text-center  text-gray-200 ">
                    Successful Launch
                  </p>
                  <hr class="h-px w-52 ml-7 my-1 bg-gray-200 border-2 dark:bg-white rounded-lg" />
                </div>
                <div className="mt-4 ml-12">
                  <button
                    type="button"
                    name="launch_success"
                    value={true}
                    onClick={updateFilter}
                    class={` mr-4 border-2 text-white w-16 font-medium rounded-lg text-sm px-4 py-1.5 m-2 mb-2  
                    ${
                      filter.launch_success === "true"
                        ? "bg-gray-400"
                        : "bg-gray-800"
                    }`}
                  >
                    True
                  </button>
                  <button
                    e="button"
                    name="launch_success"
                    value={false}
                    onClick={updateFilter}
                    class={` mr-4 border-2 text-white w-16  font-medium rounded-lg text-sm px-4 py-1.5 m-2 mb-2    
                    ${
                      filter.launch_success === "false"
                        ? "bg-gray-400"
                        : "bg-gray-800"
                    }`}
                  >
                    False
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <div>
                  <p className="mt-2 text-lg text-center text-gray-200 ">
                    Successful Landing
                  </p>
                  <hr class="h-px w-52 ml-7 my-1 border-2 bg-gray-200 dark:bg-white rounded-lg" />
                </div>
                <div className="mt-4 ml-12">
                  <button
                    type="button"
                    name="land_success"
                    value={true}
                    onClick={updateFilter}
                    class={` mr-4 border-2 text-white w-16  font-medium rounded-lg text-sm px-5 py-1.5 m-2 mb-2   
                    ${
                      filter.land_success === "true"
                        ? "bg-gray-400"
                        : "bg-gray-800"
                    }`}
                  >
                    True
                  </button>
                  <button
                    type="button"
                    name="land_success"
                    value={false}
                    onClick={updateFilter}
                    class={`mr-4 border-2 text-white w-16 font-medium rounded-lg text-sm px-5 py-1.5 m-2 mb-2 
                    ${
                      filter.land_success === "false"
                        ? "bg-gray-400"
                        : "bg-gray-800"
                    }`}
                  >
                    False
                  </button>
                </div>
                <button
                  name="button"
                  className="ml-12 mt-4 border-2 border-gray-800 text-lg text-white w-40 font-bold rounded-lg  px-5 py-1.5  mb-2 bg-gray-800"
                  onClick={clearSelection}
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <div>
        <div className="flex-1 bg-gray-700  ml-20">
          <div className="grid grid-cols-4 grid-rows-6 ml-72 mr-8 mt-28 mb-8  ">
            {data &&
              data.map((element) => {
                return (
                  <div className="ml-2 ">
                    <Card
                      imgUrl={element.links.mission_patch_small}
                      mission_name={element.mission_name}
                      flight_number={element.flight_number}
                      ids={
                        element.mission_id ? element.mission_id : "no mission"
                      }
                      launch_year={element.launch_year}
                      launch_success={element.launch_success}
                      successful_landing={
                        element.rocket.first_stage.cores[0].land_success
                      }
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
