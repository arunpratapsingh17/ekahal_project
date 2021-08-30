import './AnimeSearch.css';
import { useState } from 'react';
import axios from 'axios';
import MediaCard from './components/MediaCard';
import LoadingComp from "./components/LoadingComp";
function AnimeSearch() {
  const [input,setInput] = useState("");
  const [loading,setLoading] = useState(false);
  const [res,setRes] = useState([])
  const handleChange=(event)=>{
    setInput(event.target.value)
  }
  const handleSubmit=async()=>{
    setLoading(true);
    console.log("Clicked");
    //API call
    var result = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${input}&amp;limit=16`);
    console.log(result.data.results);
    setRes(result.data.results);
    setLoading(false);
  }
  console.log(res);
  return (loading)?(<LoadingComp  />):(
    //Search Bar
    (<div className="App1">
        <h1>
            Type name of any anime to get related results.
        </h1>
      <div className="inputBox">
        <input className="input" value={input} onChange={handleChange} placeholder="Search for an anime">
          </input>
          <button className="button" onClick={handleSubmit}>
             Go
        </button>
      </div>
      <div>
          <p className="apiname">
            Requesting:{`https://api.jikan.moe/v3/search/anime?q=${input}&amp;limit=16`}
          </p>
        </div>
      <div className="list">
        {
          res.map((obj)=>{
             var props = {title:obj.title,image:obj.image_url};
            //console.log(props);
            return <MediaCard key={obj.mal_id} props={props}/>
          })
        }
      </div>
    </div>
  ));
}

export default AnimeSearch;