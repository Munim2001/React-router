import React from "react";
import { Link } from "react-router-dom";

const AllCountry = (props) => {
  console.log(props.data)
  const data = props.data;
  const style = {
      height : 'auto',
    //   width : '100px'
  }
  return (
    <>
      {
          <div className="container">
              <div className="row g-4">
                  {
                      data.map((country) => {
                          const {name , flag , capital , region} = country
                          return(
                            <div className="card col-md-4 col-lg-4 col-10 mx-auto g-5 p-2">
                                <img src={flag} className="card-img-top img-fluid" style = {style}  alt="flag"/>
                                <div className="card-body">
                                    <h4>{name}</h4>
                                    <h5>{capital}</h5>
                                    <p className="card-text">{region}</p>
                                    <Link to = {`/country/${name}`}><button className="btn btn-primary">See More</button></Link>
                                </div>
                            </div>
                          )
                      })
                  }
              </div>
          </div>
      }
    </>
  );
};

export default AllCountry;
