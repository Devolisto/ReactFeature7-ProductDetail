// Styling
import { GlobalStyle, ThemeButton } from "./styles";

import Home from "./components/Home";
// Components
import ProductList from "./components/ProductList";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
// import Detail from "./components/Detail";
// import products from "./products";
import ProductDetail from "./components/ProductDetail";
// import ProductItem from "./components/ProductItem";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};



function App() {

  // const product = products[0];
  const [currentTheme, setCurrentTheme] = useState("light");
  const [product, setProduct] = useState(null);

  // const setView = () => {
  //   if (product) return <ProductDetail product={product} />;
  //   return <ProductList setProduct={setProduct} />;
  // };

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

    const display = product ? (
    <ProductDetail product={product} setProduct={setProduct} />
    ) : <ProductList setProduct={setProduct} />;

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>
        {currentTheme === "light" ? "Dark" : "Light"} Mode
      </ThemeButton>
      <Home />
      {display}
      
    </ThemeProvider>
  );
}

export default App;



// {setView()}

/* <ProductItem product={product} key={product.id} setProduct={props.setProduct} /> */

      
      /* <ProductDetail product={product}/> */
