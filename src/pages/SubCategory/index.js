import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import useSWR from "swr";
import { Link } from "react-router-dom";
import random  from "../../img/random.jpg"
import './style.css'
import Loading from "../../components/Loading";

const fetcher = (url) => axios.get(url).then((res) => res.data);

function SubCategory() {
  const { categoryID } = useParams();
  console.log("categoryID:",categoryID);

  const { data, error } = useSWR(
    `https://store.vrunibex.com/mobile2/mbProduct/ProductList?CategoryID=${categoryID}`,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <Loading/>;
  console.log("data", data.Result.TopCategory.SubCategoryList);

  return (
    <div>
      <div className="container text-center mt-4">
        <div className="row">
          {data.Result.TopCategory.SubCategoryList.map((subCategory) => {
            return (
              <div
                className="col-md-6 col-lg-3 col-sm-6 col-xs-12"
                key={subCategory.ID}
              >
                <Link className="link" to={`/products/${subCategory.ID}`}>
                  <div className="card sub-card">
                    <img src={`${subCategory.ImageUri===null ? random : subCategory.ImageUri}`} alt="" />
                    <p className="sub-title">{`${subCategory.DisplayName.toUpperCase()}`}</p>
                  </div>
                  </Link>
                </div>
             
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SubCategory;
