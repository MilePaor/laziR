import React from "react";
import styled from "styled-components";

const WeatherDiv = styled.div`
  height: 50px;
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
`;
const WeatherItem = styled.div``;
const WeatherText = styled.span`
  display: inline-block;
  color: white;
`;
const WeatherImage = styled.img`
  width: 40px;
`;

const WeatherWidget = ({ data }) => {
  let weatherParams = data.list;
  console.log(data);

  return (
    <WeatherDiv>
      {weatherParams.map((value, index) => (
        <WeatherItem key={value.dt}>
          <WeatherImage
            src={`http://openweathermap.org/img/w/${value.weather[0].icon}.png`}
            alt="Weather icon"
          />
          <WeatherText>{Math.floor(value.temp.day)}&#8451;</WeatherText>
        </WeatherItem>
      ))}
    </WeatherDiv>
  );
};

export default WeatherWidget;
