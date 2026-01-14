import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ClipLoader from "react-spinners/ClipLoader"; // npm install react-spinners
import "./Product.css";

function Product() {
const { products } = useContext(ProductContext);
// Show spinner while products are loading
if (products.length === 0) {
return (
<div className="loading-screen d-flex justify-content-center align-items-center">
<ClipLoader color="#0d6efd" size={60} />
</div>
);
}
// Product Grid
return (
<div className="container my-5
text-center">
<h1 className="fw-bold mb-5">Products</h1>
<div className="row justify-content-center align-items-center g-4">
{products.map((product) => (
<div
className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
key={product.id}
>
<div className="card product-card shadow-sm text-center">
<img
src={product.image}
alt={product.title}
className="card-img-top p-3"
/>
<div className="card-body d-flex flex-column justify-content-between">
<h6 className="card-title text-truncate">{product.title}</h6>
<p className="fw-bold text-primary">${product.price}</p>
<Link
className="btn btn-outline-primary mt-auto"
to={`/products/${product.id}`}
>
View Details
</Link>
</div>
</div>
</div>
))}
</div>
</div>
);
}
export default Product;