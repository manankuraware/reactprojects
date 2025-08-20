import React, { Component } from "react";
import { Profile } from "../UI/Profile";
import { Interest } from "../UI/Interest";
import { Settings } from "../UI/Settings";

export const Tabination = () => {
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

  return (
    <div className="page-width">
      <div className="tab-heading-container">
        {tabs.map((t) => (
          <div className="tab-heading">{t.name}</div>
        ))}
      </div>
    </div>
  );
};
