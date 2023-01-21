import EmailValidator from "./EmailValidator";
import Alert from "./Alert";
import { useState, useEffect } from "react";
import axios from "axios";

const EmailValidatorContainer = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [deliverable, setDeliverable] = useState(false);

  const getEmailAddress = (address) => {
    setEmailAddress(address.email);
  };

  useEffect(() => {
    axios
      .get(
        `https://emailvalidation.abstractapi.com/v1/?api_key=${process.env.REACT_APP_API_KEY}&email=${emailAddress}`
      )
      .then((response) => {
        response.data.deliverability === "DELIVERABLE"
          ? setDeliverable(true)
          : setDeliverable(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [emailAddress]);

  return (
    <>
      <EmailValidator getEmailAddress={getEmailAddress} />
      <Alert isDeliverable={deliverable} />
    </>
  );
};

export default EmailValidatorContainer;
