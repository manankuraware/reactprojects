import React, { useMemo } from "react";
import { FixedSizeList as List } from "react-window";
import "../LargeTabel/LargeTable.css";

const Row = ({ index, style, data }) => {
  const user = data[index];
  return (
    <div className="row-items" style={style}>
      <div className="row-column">{user.id}</div>
      <div className="row-column">{user.name}</div>
      <div className="row-column">{user.email}</div>
    </div>
  );
};

function LargeTable() {
  const data = useMemo(() => {
    return Array.from({ length: 1000000 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@mail.com`,
    }));
  }, []);

  return (
    <div className="container">
      <h2>Virtualized Table (1M rows)</h2>
      <div className="table-header">
        <div className="table-header-col">ID</div>
        <div className="table-header-col">Name</div>
        <div className="table-header-col">Email</div>
      </div>
      <List
        className="virtual-list"
        height={500}
        itemCount={data.length}
        itemSize={30}
        itemData={data}
      >
        {Row}
      </List>
    </div>
  );
}

export default LargeTable;
