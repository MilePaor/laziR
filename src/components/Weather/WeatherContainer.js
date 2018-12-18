import React from "react";
import styled from "styled-components";
import WeatherItem from "./WeatherItem";

import chevronImg from "../../images/cloud.svg";

const WeatherDiv = styled.div`
  height: 0px;
  color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #a52a2a;
  z-index: 3;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-around;
  transition: all 300ms ease;
`;

const Chevron = styled.div`
  background-image: url(${chevronImg});
  background-repeat: no-repeat;
  background-size: 70%;
  background-position: center;
  width: 40px;
  height: 40px;
  position: absolute;
  right: 8px;
  top: -40px;
  z-index: 57;
  background-color: #a52a2a;
  fill: white;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let dateee = new Date().getDay();

const WeatherContainer = ({ data, weatherWidgetOpen, clickHandler }) => {
  let weatherParams = data.list;

  return (
    <WeatherDiv
      style={{ height: weatherWidgetOpen && "70px" }}
      onClick={clickHandler}
    >
      {weatherParams.map((value, index) => {
        return (
          <WeatherItem
            key={value.dt}
            image={value.weather[0].icon}
            temperature={value.temp.day}
            dayName={days[dateee]}
          />
        );
      })}
      <Chevron />
    </WeatherDiv>
  );
};

export default WeatherContainer;
