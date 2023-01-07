import { useState } from "react";
import HiringManager from "./HiringManager";
import FinishedMessage from "./FinishedMessage";

export const initialState = {
  jobTitle: "",
  contactName: "",
  jobDepartment: "",
  companyName: "",
  goodFit1: "",
  goodFit2: "",
  skill1: "",
  skill2: "",
  skill3: "",
  dayToMeet: "",
};

const HiringManagerContainer = () => {
  const [collected, setCollected] = useState({});
  console.log("HiringManagerContainer: collected: ", collected);

  const collectValues = (form) => {
    setCollected({
      ...collected,
      jobTitle: form.jobTitle,
      contactName: form.contactName,
      jobDepartment: form.jobDepartment,
      companyName: form.companyName,
      goodFit1: form.goodFit1,
      goodFit2: form.goodFit2,
      skill1: form.skill1,
      skill2: form.skill2,
      skill3: form.skill3,
      dayToMeet: form.dayToMeet,
    });
  };

  return (
    <>
      <HiringManager collectValues={collectValues} />
      <FinishedMessage blanks={collected} />{" "}
    </>
  );
};

export default HiringManagerContainer;
