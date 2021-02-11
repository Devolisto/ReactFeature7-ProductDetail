// import products from "../products";
// import ProductDetail from "./ProductDetail";

const Detail = (props) => {
    const product = props.product;

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    )
};

export default Detail;