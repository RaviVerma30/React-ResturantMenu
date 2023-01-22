import React from "react";
function Menucard({ data }) {
  return (
    <>
      <section className="main_container">
        {data.map((curr) => {
          return (
            <>
              <div className="container" key={curr.id}>
                <div className="card">
                  <div className="card_body">
                    <span className="card_no card_circle">{curr.id}</span>
                    <span className="card_Subtitle">{curr.category}</span>
                    <h2 className="card_title">{curr.name}</h2>
                    <span className="description">{curr.description}</span>
                    <div className="card_read">Read</div>
                  </div>
                  <img src={curr.image} alt="images" className="card_media" />
                  <br />
                  <span className="card_tag">Order Now</span>
                  <br />
                  <span className="price">{curr.price}</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
}
export default Menucard;
