// import React, { useState, useEffect } from 'react';
import NavigationBar from '../components/NavigationBar';
import Card from '../components/Card';
import CarouselSlide from '../components/CarouselSlide';
import Footer from '../components/Footer';

export default function HomePage() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch('/api/foods');
        const data = await response.json();
        setFoods(data);
        console.log("print data" , response);
      } catch (error) {
        console.error('Error fetching data:', error);
  

        if (error.response) {
          console.error('Response data:', error.response.data);
        }
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div>
      <div><NavigationBar /></div>
      <div><CarouselSlide /></div>
      <div><Card /></div>
      {<div>
        <h1>Food Items</h1>
        <ul>
          {foods.map((food) => (
            <li key={food._id}>{`${food.name} - ${food.prize}`}</li>
          ))}
        </ul>
      </div> }
      <div><Footer /></div>
    </div>
  );
}
