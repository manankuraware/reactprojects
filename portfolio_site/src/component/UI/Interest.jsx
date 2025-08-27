import React from "react";

export const Interest = ({ data, setData }) => {
  const { interests } = data;
  const handleDataChange = (e, name) => {
    setData((prevState) => ({
      ...prevState,
      interests: e.target.checked
        ? [...prevState.interests, e.target.name]
        : prevState.interests.filter((i) => i !== e.target.name),
    }));
  };
  return (
    <div className="interest_tabcomponent">
      <label htmlFor="coding"> I Love Coding</label>
      <input
        type="checkbox"
        id="coding"
        name="coding"
        value="coding"
        checked={interests.includes("coding")}
        onChange={handleDataChange}
      />
      <br />
      <label htmlFor="music"> I Love Music</label>
      <input
        type="checkbox"
        id="music"
        name="music"
        value="music"
        checked={interests.includes("music")}
        onChange={handleDataChange}
      />
      <br />
      <label htmlFor="javascript"> I Love Javascript</label>
      <input
        type="checkbox"
        id="javascript"
        name="javascript"
        value="javascript"
        checked={interests.includes("javascript")}
        onChange={handleDataChange}
      />
    </div>
  );
};
