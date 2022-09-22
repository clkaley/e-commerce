import React from "react";
import axios from "axios";
import useSWR from "swr";
import { Link } from "react-router-dom";
import './style.css'
import Loading from "../../components/Loading";
const fetcher = (url) => axios.get(url).then((res) => res.data);

function Home() {
  const { data, error } = useSWR(
    "https://store.vrunibex.com/mobile2/mbProduct/CategoryList",
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <Loading/>;
  console.log("data", data.Result.TreeList);
  return (
    <div>
      <div className="container text-center mt-4">
        <div className="row">
          {data.Result.TreeList.map((item) => {
            return (
              item.ID < 11 && (
                <div  key={item.ID} className="col-sm-6 col-lg-4 col-xl-3" >
                
                    <Link className="link" to={`/${item.ID}`}>
                    <div className="card mt-5">
                      <img className="card-img-top" src={`${item.ImageUri==="" ? 'https://statics.vestel.com.tr/productimages/20284057_r2_1000_1000.jpg' : item.ImageUri}`}  alt="" />
                      <h6 className="m-auto title mb-4">{`${item.DisplayName.toUpperCase()}`}</h6>
                    </div>
                    
                    </Link>
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
