import React from "react";
const obj = [
  { depatment: "hr", name: "rohit", age: 23 },
  { depatment: "IT", name: "shivani", age: 21 },
  { depatment: "hr", name: "palak", age: 45 },
  { depatment: "IT", name: "sahil", age: 70 },
  { depatment: "seo", name: "hritik", age: 100 },
];

const res = obj.reduce((acc, current) => {
  if (!acc[current.depatment]) {
    acc[current.depatment] = [];
  }
  acc[current.depatment].push(current);
  return acc;
}, {});
function FilterDataCst() {
  return (
    <div className="container">
      <h1 style={{ marginBlock: "20px" }}>Employees by Department</h1>
    {/* object.entries break object into aray  */}
      {Object.entries(res).map(([dept, users]) => (
        <div key={dept} style={{ marginBottom: "20px" }}>
          <h2>{dept.toUpperCase()}</h2>

          {users.map((user, index) => (
            <div key={index}>
              <p>
                {user.name} - Age: {user.age}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default FilterDataCst;
