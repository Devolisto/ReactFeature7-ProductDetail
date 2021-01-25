import { DetailWrapper } from "../styles";
// import products from "../products";

const ProductDetail = (props) => {
  const product = props.product;
  return (
    <DetailWrapper>
      <h1>{product.name}</h1>
      <img src={product.image} alt="I should be a product name" />
      <p>{product.description}</p>
      <p>{product.price}</p>
    </DetailWrapper>
  );
};

export default ProductDetail;
