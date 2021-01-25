import products from "../products";
import ProductDetail from "./ProductDetail";

const Detail = () => {
    const detail = products.map((product) => 
    <ProductDetail product={product} key={product.id} />
    )

    return (
        <div>
            {detail}
        </div>
    )
};

export default Detail;