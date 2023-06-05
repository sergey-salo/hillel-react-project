import React, { useState } from "react";

const Button = ({ title }) => {
  const [count, setCount] = useState(0);

  const handler = () => {
    setCount(count + 1);
  };

  return <button onClick={handler}>Clicked {count}</button>;
};

export default Button;
