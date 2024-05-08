import React, { useEffect, useState } from "react";

function Sample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    
      console.log("called");
      setCount((count) =>count + 1);
    
  },[])
  return <div>{count}</div>;
}

export default Sample;
