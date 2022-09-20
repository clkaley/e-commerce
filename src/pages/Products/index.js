import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import useSWR from "swr";
import { Link } from "react-router-dom";
import "./products.css";
const fetcher = (url) => axios.get(url).then((res) => res.data);

function Products() {
  const { productID } = useParams();
  console.log(productID);

  const { data, error } = useSWR(
    `https://store.vrunibex.com/mobile2/mbProduct/ProductList?CategoryID=${productID}`,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  console.log(data.Result.ProductList);
  return (
    <div className="container">
      <div className="row">
        {data.Result.ProductList.map((products) => {
          return (
            <div  className="col-md-4 col-lg-3 col-sm-6 col-xs-12" key={products.ID}>
          
                <div className="card-product">
                  <img style={{width:"150px"}} src={products.FirstProductImageURL} alt="" />
                  <p className="product-title">{products.DisplayName}</p>
                  <h6 className="product-title">
                    {products.ActualPriceToShowOnScreen} TL
                  </h6>
                  <Link to={`product-detail/${products.ID}`}>
                  <button className="product-button">İncele</button>
                  </Link>
                </div>
              </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
