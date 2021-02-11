import { DetailWrapper } from "../styles";
import products from "../products";

const ProductDetail = (props) => {

  const product = props.product;
  return (
    <DetailWrapper>
      <h1>{products.name}</h1>
      <img src={products.image} alt={products.name} onClick={() => props.setProduct(product)}/>
      <p>{products.description}</p>
      <p>{products.price}</p>
      <p onClick={() => props.setProduct(null)} >Go back</p>
    </DetailWrapper>
  );
};

export default ProductDetail;

// const CookieDetail = (props) => {
//   const cookie = props.cookie;
//   return (
//     <div>
//       <h1>{cookie.name}</h1>
//       <img src={cookie.image} alt={cookie.name} />
//       <p>{cookie.description}</p>
//       <p>{cookie.price} KD</p>
//     </div>
//   );
// };
