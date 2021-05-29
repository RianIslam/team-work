import React from 'react';
import { useSelector } from 'react-redux';

const Car = () => {
    const cars = useSelector(state => state.cars);

    const renderedCars = cars.map(car => (
        <div className="container">
          <div className="row mb-5">
          <div className="col-md-7">
            <img className="img-fluid" src={car.image} />
          </div>
          <div className="col-md-5">
            <h1>{car.title}</h1>
            <div className="d-flex">
              <li>{car.range}</li>
              <li>{car.speed} </li>
              <li>{car.power} </li>
            </div>
          </div>
        </div>
        </div>
    
      ))

    return (
        <div>
            <h2 className="text-center"> ALL MODELS </h2>
      {renderedCars}
        </div>
    );
};

export default Car;