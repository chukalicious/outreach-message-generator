import EmailValidator from "./EmailValidator";
import { useState, useEffect } from "react";
import axios from "axios";

const EmailValidatorContainer = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [deliverable, setDeliverable] = useState();
  console.log("Email Address", emailAddress);

  const getEmailAddress = (address) => {
    setEmailAddress(address.email);
  };

  useEffect(() => {
    axios
      .get(
        `https://emailvalidation.abstractapi.com/v1/?api_key=${process.env.REACT_APP_API_KEY}&email=${emailAddress}`
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [emailAddress]);

  return <EmailValidator getEmailAddress={getEmailAddress} />;
};

export default EmailValidatorContainer;
