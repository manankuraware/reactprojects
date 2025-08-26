import React from "react";

export const Interest = () => {
  return (
    <div className="interest_tabcomponent">
      <label htmlFor="vehicle1"> I have a bike</label>
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
      <br />
      <label htmlFor="vehicle2"> I have a car</label>
      <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
      <br />
      <label htmlFor="vehicle3"> I have a boat</label>
      <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
    </div>
  );
};
