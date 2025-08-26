import React from "react";

export const Profile = ({ data, setData }) => {
  const { name, age, email } = data;
  const handleDataChange = (e, item) => {
    setData((prevState) => ({ ...prevState, [item]: e.target.value }));
  };
  return (
    <div className="profiletabcontent">
      <label htmlFor="ptname">Name:</label>
      <input
        type="text"
        id="ptname"
        onChange={(e) => handleDataChange(e, "name")}
      />
      <br />
      <label htmlFor="ptemail">Email:</label>
      <input
        type="email"
        id="ptemail"
        onChange={(e) => handleDataChange(e, "email")}
      />
      <br />
      <label htmlFor="age">Age</label>
      <input
        type="number"
        id="age"
        onChange={(e) => handleDataChange(e, "age")}
      />
    </div>
  );
};
