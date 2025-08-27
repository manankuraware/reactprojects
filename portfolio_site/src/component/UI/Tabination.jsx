import React, { Component, useState } from "react";
import { Profile } from "../UI/Profile";
import { Interest } from "../UI/Interest";
import { Settings } from "../UI/Settings";

export const Tabination = () => {
  const [data, setData] = useState({
    name: "Manan",
    age: "24",
    email: "zyz@gmail.com",
    interests: ["coding", "music"],
    theme: "dark",
  });
  const [errors, setErrors] = useState({});
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 5) {
          err.name = "Name is invalid";
        }
        setErrors(err);
        return err.name ? false : true;
      },
    },
    {
      name: "Interests",
      component: Interest,
      validate: () => {
        return true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];
  const ActiveTabComponent = tabs[activeTab].component;
  const handlePrevClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev - 1);
    }
  };
  const handleNextClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev + 1);
    }
  };
  const handleSubmitClick = () => {
    // make api call
    console.log(data);
  };
  return (
    <div className="page-width">
      <div className="tabwrapper">
        <div className="tab-heading-container">
          {tabs.map((t, index) => (
            <div className="tab-heading" onClick={() => setActiveTab(index)}>
              {t.name}
            </div>
          ))}
        </div>
        <div className="tab-content">
          <ActiveTabComponent data={data} setData={setData} errors={errors} />
          <div className="submit-tab">
            {activeTab > 0 && <button onClick={handlePrevClick}>prev</button>}
            {activeTab < tabs.length - 1 && (
              <button onClick={handleNextClick}>next</button>
            )}
            {activeTab === tabs.length - 1 && (
              <button onClick={handleSubmitClick}>Submit</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
