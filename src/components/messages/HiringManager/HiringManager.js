import { useState, useEffect } from "react";

const HiringManager = () => {
  const [input, setInput] = useState({
    goodFit1: "",
    goodFit2: "",
    skill1: "",
    skill2: "",
    skill3: "",
  });
  console.log("HiringManager: input: ", input);
  return <>hiring manager</>;
};

export default HiringManager;
