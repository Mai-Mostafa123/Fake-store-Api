import { Offline, Online } from "react-detect-offline";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import { Routes, Route } from "react-router-dom";
function App() {
return (
<>
<Online>
<Routes>
<Route path="/" element={<Product />} />
<Route path="/products/:id" element={<ProductDetails />} />
</Routes>
</Online>
<Offline>

<div className="offline-message d-flex justify-content-center align-items-center">

<div className="alert alert-danger text-center p-4 rounded shadow-sm">
You are offline. Please check your internet connection.
</div>
</div>
</Offline>
</>
);
}
export default App;