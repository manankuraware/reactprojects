import React, { Component, useState } from "react";
import { Profile } from "../UI/Profile";
import { Interest } from "../UI/Interest";
import { Settings } from "../UI/Settings";

export const Tabination = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Interests",
      component: Interest,
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];
  const ActiveTabComponent = tabs[activeTab].component;
  return (
    <div className="page-width">
      <div className="tab-heading-container">
        {tabs.map((t, index) => (
          <div className="tab-heading" onClick={() => setActiveTab(index)}>
            {t.name}
          </div>
        ))}
      </div>
      <div className="tab-content">
        <ActiveTabComponent />
      </div>
    </div>
  );
};
