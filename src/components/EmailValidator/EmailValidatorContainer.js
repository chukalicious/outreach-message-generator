import EmailValidator from "./EmailValidator";
import AlertSuccess from "./AlertSuccess";
import { useState, useEffect } from "react";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";

const EmailValidatorContainer = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [deliverable, setDeliverable] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  console.log("isSubmitted: ", isSubmitted);
  const [isLoading, setIsLoading] = useState(false);
  console.log("isLoading: ", isLoading);

  const getEmailAddress = (address) => {
    setEmailAddress(address.email);
  };

  useEffect(() => {
    if (isSubmitted) {
      setIsLoading(true);
    }
    axios
      .get(
        // `https://emailvalidation.abstractapi.com/v1/?api_key=${process.env.REACT_APP_API_KEY}&email=${emailAddress}`
        "http://localhost:6000"
      )
      .then((response) => {
        setIsLoading(false);
        response.data.deliverability === "DELIVERABLE"
          ? setDeliverable(true)
          : setDeliverable(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [isSubmitted, emailAddress]);

  return (
    <>
      <EmailValidator
        getEmailAddress={getEmailAddress}
        setIsSubmitted={setIsSubmitted}
      />
      {isLoading === true ? (
        <div className="flex flex-col my-16 w-1/2 mx-auto">
          <RotatingLines
            strokeColor="#44ACEE"
            strokeWidth="5"
            animationDuration="0.75"
            width="fit"
            visible={true}
          />
        </div>
      ) : null}
      {/* <AlertSuccess isDeliverable={deliverable} loading={isLoading} /> */}
    </>
  );
};

export default EmailValidatorContainer;
