import React from 'react';
import AllCountry from './AllCountry';
import { useState , useEffect } from 'react';

const Home = () => {
    const [data , setData] = useState([])
    useEffect(() => {
        const url = "https://restcountries.eu/rest/v2/all"
        fetch(url)
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return (
        <>
          <AllCountry data = {data}></AllCountry>  
        </>
    );
};

export default Home;