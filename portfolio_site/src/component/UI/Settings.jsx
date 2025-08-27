import React from "react";

export const Settings = ({ data, setData }) => {
  const { theme } = data;

  const handleThemeChange = (e) => {
    setData((prevState) => ({ ...prevState, theme: e.target.value }));
  };
  return (
    <div className="settings_tab_component">
      <input
        type="radio"
        id="dark"
        name="theme"
        value="dark"
        checked={theme === "dark"}
        onChange={handleThemeChange}
      />
      <label htmlFor="dark">Dark</label>
      <br />
      <input
        type="radio"
        id="light"
        name="theme"
        value="light"
        checked={theme === "light"}
        onChange={handleThemeChange}
      />
      <label htmlFor="light">Light</label>
    </div>
  );
};
