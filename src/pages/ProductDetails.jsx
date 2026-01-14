import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductDetails.css";
function ProductDetails() {
const { id } = useParams();
const [product, setProduct] = useState(null);
useEffect(() => {
axios
.get(`https://fakestoreapi.com/products/${id}`)
.then((response) => setProduct(response.data))
.catch((error) => console.error("Error fetching product details:", error));
}, [id]);
if (!product) {
return (

<div className="loading-screen d-flex justify-content-center align-items-center vh-
100">

<div className="spinner-border text-primary" role="status">
<span className="visually-hidden">Loading...</span>
</div>
</div>
);
}
const addToCart = () => {
Swal.fire({
icon: "success",
title: "Added to Cart!",
text: `${product.title} has been added successfully.`,
confirmButtonColor: "#0d6efd",
});
};
return (
<div className="container product-details-page my-5">
<Helmet>
<title>{product.title} - Product Details</title>
</Helmet>
<Link to="/" className="btn btn-outline-secondary mb-4">
← Back to Products
</Link>
<div className="row align-items-start justify-content-center g-5">
{/* LEFT: Product Image */}
<div className="col-md-5 col-sm-10 text-center">
<div className="product-image-wrapper shadow-sm">
<img
src={product.image}
alt={product.title}
className="img-fluid product-image"
/>
</div>
</div>
{/* RIGHT: Product Details */}
<div className="col-md-6 col-sm-10">
<h2 className="fw-bold mb-3">{product.title}</h2>
<p className="text-muted">{product.category}</p>
<h4 className="text-primary fw-bold mb-3">${product.price}</h4>
<p className="text-secondary mb-4">{product.description}</p>
<button onClick={addToCart} className="btn btn-primary btn-lg">
Add to Cart
</button>
</div>
</div>
</div>
);
}
export default ProductDetails;