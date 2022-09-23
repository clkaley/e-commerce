import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import useSWR from "swr";
import { Link } from "react-router-dom";
import "./productdetail.css";
import Loading from "../../components/Loading";
const fetcher = (url) => axios.get(url).then((res) => res.data);

function ProductDetail() {
  const { product_id } = useParams();
  console.log("product_id", product_id);

  const { data, error } = useSWR(
    `https://store.vrunibex.com/mobile2/mbProduct/ProductDetail?productId=${product_id}`,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <Loading/>;
  console.log(data);
  console.log("image", data.Result.ImageSetList[0].Path);

  return (
    <div className="mt-5">
      <div className="detail-card mb-3" style={{ maxwidth: "540px" }}>
        <div className="row g-0">
          <div className="col-lg-6 col-md-7">
            <img
              src={data.Result.FirstProductImageURL}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-lg-6 col-md-5">
            <div className="card-body m-5">
              <h5 className="card-title">{data.Result.DisplayName}</h5>
              <h4 className="card-text mt-4">
                {data.Result.ActualPriceToShowOnScreen} TL
              </h4>
              <p className="card-text">
                {data.Result.VisibleAttributeList[0].ActualValueText}
              </p>
              <p className="card-text">
                {data.Result.VisibleAttributeList[1].ActualValueText}
              </p>
              <p className="card-text">
                {data.Result.VisibleAttributeList[2].ActualValueText}
              </p>
              <p className="card-text">
                {data.Result.VisibleAttributeList[3].ActualValueText}
              </p>
              <p className="card-text">
                {data.Result.VisibleAttributeList[4].ActualValueText}
              </p>
              <p className="card-text">
                <small className="text-muted">
                  {data.Result.EstimatedSupplyDate}
                </small>
              </p>
              <button className="sepet"> 
                    Sepete Ekle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
