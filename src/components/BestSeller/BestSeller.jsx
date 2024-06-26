import Product from "../NewArrivals/Product";
import './BestSeller.css'
import seconddata from "../SecondData";

export default function BestSeller() {
    return (
        <div className="container">
            <h2>Best Seller</h2>
        <div id="Product" className="bestseller-wrapper">
            <div className="best-seller">
            {seconddata.secondproductData.map((item, index) => (
                    <Product key={index} img={item.img} title={item.title} price={item.price} item={item}></Product>
                ))}
            </div>
        </div>
        </div>
    )
}