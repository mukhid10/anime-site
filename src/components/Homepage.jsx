import axios from "axios";
import React, { useEffect, useState } from "react";
import "../style/homepage.css";

function Homepage() {
  const [dataAnime, setDataAnime] = useState([]);
  const [query, setQuery] = useState("");

  const search = (data) => {
    return data.filter((item) => item.title.toLowerCase().includes(query));
  };

  useEffect(() => {
    getData();
  }, [dataAnime]);

  const getData = async () => {
    const result = await axios.get(
      "https://otakudesu-api.herokuapp.com/api/complete"
    );
    setDataAnime(result.data.animeList);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 search">
            <h2>Search Anime</h2>
            <div>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
          {search(dataAnime).map((item, index) => (
            <div className="col-md-3 mt-4">
              <div className="card">
                <img src={item.thumb} alt="" />
                <p className="text-center fw-bold">{item.episode}</p>
                <div className="title">
                  <p className="text-center">{item.title}</p>
                </div>
                <a href={item.link}>
                  <button>watching</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
