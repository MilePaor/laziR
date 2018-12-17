import React from "react";
import styled from "styled-components";
import chevronImg from "../images/up-arrow.svg";

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

const WeatherItem = styled.div``;
const WeatherText = styled.span`
  display: inline-block;
`;
const WeatherImage = styled.img`
  width: 40px;
`;
const WeatherDay = styled.span`
  display: block;
`;
const Chevron = styled.div`
  background-image: url(${chevronImg});
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: center;
  width: 40px;
  height: 40px;
  position: absolute;
  right: 8px;
  top: -40px;
  z-index: 57;
  background-color: #a52a2a;
  border-radius-left: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const WeatherWidget = ({ data, weatherWidgetOpen, clickHandler }) => {
  let weatherParams = data.list;
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
  // console.log(days[dateee]);

  return (
    <WeatherDiv
      style={weatherWidgetOpen ? { height: "70px" } : { height: "0" }}
      onClick={clickHandler}
    >
      {weatherParams.map((value, index) => (
        <WeatherItem key={value.dt}>
          <WeatherImage
            src={`http://openweathermap.org/img/w/${value.weather[0].icon}.png`}
            alt="Weather icon"
          />
          <WeatherText>{Math.floor(value.temp.day)}&#8451;</WeatherText>
          <WeatherDay>{days[dateee++]}</WeatherDay>
        </WeatherItem>
      ))}
      <Chevron />
    </WeatherDiv>
  );
};

export default WeatherWidget;
