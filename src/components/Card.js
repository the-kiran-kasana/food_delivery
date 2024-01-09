import React from "react";

export default function Card() {
  return (
    <div>
      <div
        className="card mt-3"
        style={{ width: "18rem", maxHeight: "360pdx" }}
      >
        <img src="https://c.ndtvimg.com/2019-08/tfddu9ao_pasta_625x300_13_August_19.jpg?downsize=320:197" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">  Pasta</h5>
          <div className="container w-100">
            <select className="m-2 h-100 bg-success rounded">
              {Array.from(Array(5), (e, i) => {
                return ( <option key={i + 1} value={i + 1}>
                   {" "}{i + 1}{" "}
                  </option>
                );
              })}
            </select>

            <select className="m-2 h-100 bg-success rounded">
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>

            <div> Total amount</div>
          </div> <a href="/" className="btn btn-primary">  More details </a> </div>
      </div>
    </div>
  );
}
