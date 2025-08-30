import React from "react";

export const CenterImageWithText = () => {
  return (
    <div className="page-width">
      <div className="three-col-section">
        <div className="text-col left">
          <h3>Frontend Development</h3>
          <p>
            Build modern and responsive UIs with HTML, CSS, JavaScript, and
            React.
          </p>
        </div>

        <div className="image-col">
          <img src="https://picsum.photos/id/180/400/400" alt="Coding" />
        </div>

        <div className="text-col right">
          <h3>Backend Development</h3>
          <p>
            Power your applications with Node.js, Express, and databases for
            secure and scalable apps.
          </p>
        </div>
      </div>
    </div>
  );
};
