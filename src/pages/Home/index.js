import React from "react";
import axios from "axios";
import useSWR from "swr";
import { Link } from "react-router-dom";
import './style.css'
import random from "../../img/random.jpg"
const fetcher = (url) => axios.get(url).then((res) => res.data);

function Home() {
  const { data, error } = useSWR(
    "https://store.vrunibex.com/mobile2/mbProduct/CategoryList",
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  console.log("data", data.Result.TreeList);
  return (
    <div>
      <div className="container text-center mt-4">
        <div className="row">
          {data.Result.TreeList.map((item) => {
            return (
              item.ID < 11 && (
                <div  key={item.ID} className="col-md-4 col-lg-3 col-sm-6 col-xs-12" >
                  <div >
                    <Link className="link" to={`/${item.ID}`}>
                    <div className="card">
                      <img src={`${item.ImageUri==="" ? random : item.ImageUri}`}  alt="" />
                      
                    </div>
                    <h6 className="title">{`${item.DisplayName.toUpperCase()}`}</h6>
                    </Link>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
