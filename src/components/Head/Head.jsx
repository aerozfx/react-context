import React, {useContext} from "react";
import { FormContext } from "../../context/formContext";
const Head = () => {
  const {formData} = useContext(FormContext)
  return (
    <>
      {formData.email === undefined ? <p>&nbsp;</p> : <p>Email: {formData.email}</p>}
    </>
  );
};

export default Head;
