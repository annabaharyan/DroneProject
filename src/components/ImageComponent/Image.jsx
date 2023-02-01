import React from "react";

export default function Image({ product }) {
  const { imgSrc, price, percent } = product;
  const zexchvac = Math.round(price - (price * percent) / 100);
  return (
    <>
      <h1>Airplane Drone</h1>

      <div className="ImagePart">
        <img src={require("./" + imgSrc)} alt="" />
        <div className="percent">{percent}%</div>
        <div className="price-container">
          <div className="oldPrice">
            <p>Հին գին:</p>
            <p>{price}Դ</p>
          </div>
          <div className="newPrice">
            <p>Նոր գին:</p>
            <p>{zexchvac}Դ</p>
          </div>
        </div>
      </div>
    </>
  );
}
