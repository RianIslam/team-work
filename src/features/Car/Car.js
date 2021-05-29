import React from "react";
import { useSelector } from "react-redux";
import SpeedIcon from "@material-ui/icons/Speed";
import StarIcon from "@material-ui/icons/Star";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import "./Car.css";
const Car = () => {
  const cars = useSelector((state) => state.cars);

  const renderedCars = cars.map((car) => (
    <div className="container-fluid">
      <div className="row pb-5">
        <div className="col-md-4">
          <div className="ps-4">
            <h3>{car.title}</h3>
            <p>{car.details}</p>
          </div>

          <div className="ps-5 pe-5">
            <div className="shadow bg-body mb-3 p-2 rounded">
              <h4 className="d-flex justify-content-center text-center p-4">
                5-Star Overall NHTSA <br /> Rating
              </h4>
              <div className="d-flex justify-content-between p-3">
                <div>
                  <h5>
                    Range <br />
                    <small>{car.range}</small>
                  </h5>
                  <h5>
                    Speed <br />
                    <small>{car.speed}</small>
                  </h5>
                  <h5>
                    Power
                    <br />
                    <small>{car.power}</small>
                  </h5>
                </div>
                <div>
                  <h6>
                    <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
                    <StarIcon />
                  </h6>
                  <h6>
                    <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
                    <StarIcon />
                  </h6>
                  <h6>
                    <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
                    <StarIcon />
                  </h6>
                  <h6>
                    <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
                    <StarIcon />
                  </h6>
                  <h6>
                    <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
                    <StarIcon />
                  </h6>
                </div>
              </div>
            </div>
          </div>


          <div className="ps-4">
            <div className="d-flex justify-content-between" >
              <div> <h5> <AddCircleOutlineIcon/> Learn More</h5></div>
              <div><button className="newBtn">ORDER NOW</button></div>
            </div>
          </div>





        </div>
        <div className="col-md-8">
          <img className="img-fluid" src={car.image} />
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="carDetailes">
        <h1 className="text-white d-flex justify-content-center text-center p-5">
        AVENTADOR

        </h1>

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 padding">
            <div className=" d-flex justify-content-center text-center p-5 ">
              <div className=" p-5">
                <h2 className="text-white">3.1S</h2>
              </div>
              <div className=" p-5">
                <h2 className="text-white">353 mi</h2>
              </div>
              <div className=" p-5">
                <h2 className="text-white">AWD</h2>
              </div>
              <div className=" p-5">
                <button className="commonBtn">ORDER</button>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>

      <h2 className="text-center p-3"> ALL MODELS </h2>
      {renderedCars}

      <div className="Footer">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="col-md-4 Experience">
            <div>
              <h2 className="text-white">Experience Model</h2>
            </div>
            <div className="d-flex justify-content-between">
            <div><button className="ExperienceBtn">ORDER NOW</button></div>
            <div><button className="compareBtn">COMPARE</button></div>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
        </div>


    </div>
  );
};

export default Car;
