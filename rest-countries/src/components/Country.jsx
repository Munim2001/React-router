import React from 'react';
import { useState , useEffect } from 'react';
import { useParams } from 'react-router';
// import { Link } from 'react-router-dom';

const Country = () => {
    const [detail , setDetail] = useState([])
    
    const {name} = useParams()
    
    useEffect( () => {
        const url = `https://restcountries.eu/rest/v2/name/${name}`
        fetch(url)
        .then(res => res.json())
        .then(data => setDetail(data))

    })

    const style = {
        height : "300px",
        width : "500px",
        display : "block",
        margin : "50px auto"
    }
    return (
        <>
        {
          <div className="container">
              <div className="row g-4">
                  {
                      detail.map((country) => {
                          const {name , flag , capital , region , area , population} = country
                          return(
                            <>
                                <img src={flag} style = {style} className="card-img-top img-fluid"   alt="flag"/>
                                <table class="table">
                                    <thead>
                                    <tr>
                                        
                                        <th scope="col">Name</th>
                                        <th scope="col">Capital</th>
                                        <th scope="col">Region</th>
                                        <th scope="col">Area</th>
                                        <th scope="col">Population</th>
                                        <th scope="col">Currency Name</th>
                                        <th scope="col">Currency Sign</th>
                                    
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        {/* <th scope="row">1</th> */}
                                        <td>{name}</td>
                                        <td>{capital}</td>
                                        <td>{region}</td>
                                        <td>{area}</td>
                                        <td>{population}</td>
                                        <td>{country.currencies[0].name}</td>
                                        <td> {country.currencies[0].symbol}</td>

                                    </tr>
                                    
                                    </tbody>
                                </table>
                            </>
                          )   
                       
                      })
                  }
              </div>
          </div>
        }
        </>
    );
};

export default Country;