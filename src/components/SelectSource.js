import React from "react";

const SelectSource = ({ sources }) => {
  return (
    <select>
      {sources.map(source => {
        return <option value={source.id}>{source.name}</option>;
      })}
    </select>
  );
};

export default SelectSource;
