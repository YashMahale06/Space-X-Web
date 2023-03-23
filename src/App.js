import "./App.css";
import React,{useState,useEffect} from "react";
import Loader from "./Components/LoadingScreen";

import Router from "./Components/Routes/Router";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return <div className="bg-gray-800">{loading === false ? <Router /> : <Loader/>}</div>;
  
}

export default App;
