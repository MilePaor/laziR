import React from "react";
import styled from "styled-components";

const WeatherText = styled.span`
  display: inline-block;
`;
const WeatherImage = styled.img`
  width: 40px;
`;
const WeatherDay = styled.span`
  display: block;
`;

const WeatherItem = ({ image, temperature, dayName }) => {
  return (
    <div>
      <WeatherImage
        src={`https://openweathermap.org/img/w/${image}.png`}
        alt="Weather icon"
      />
      <WeatherText>{Math.floor(temperature)}&#8451;</WeatherText>
      <WeatherDay>{dayName}</WeatherDay>
    </div>
  );
};

export default WeatherItem;
