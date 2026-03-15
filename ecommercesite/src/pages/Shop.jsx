import React, { Suspense } from "react";
import ProductList from "../components/ProductList";

function Shop() {
  return (
    <div className="container">
      <Suspense fallback={<p>Loading products...</p>}>
        <ProductList />
      </Suspense>
    </div>
  );
}

export default Shop;
