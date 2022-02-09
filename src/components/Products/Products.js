import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import arrowImg from "../../img/appbar-logo-img/arrow.svg";
import { makeStyles } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";

const buttons = [
  "All for you",
  "Recommended",
  "Top Manufactures",
  "Winter Special",
  "Demin Special",
  "Women's Wear",
  "Kid's Wear",
  "T-Shirts",
  "Men's Fash",
];

const useStyle = makeStyles({
  button_style: {
    backgroundColor: "#01896a !important",
    color: "white !important",
  },
});

const Products = () => {
  const classes = useStyle();
  const token = localStorage.getItem("token");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [load, setIsLoad] = useState(false);
  const [limit, setLimit] = useState(8);

  useEffect(() => {
    setIsLoading(true);
    if (token) {
      fetch(
        `https://devapi.dhakai.com/api/v2/manufacturers?skip=0&&limit=${limit}`,
        {
          headers: { Authorization: token },
        }
      )
        .then((res) => res.json())
        .then((result) => {
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
          setProducts(result.result.manufacturers);
        });
    }
  }, [limit, load]);

  const [isActive, setIsActive] = useState(0);
  const handleButton = (index) => {
    setIsActive(index);
    setIsLoad(!load);
  };

  // console.log(products);
  return (
    <Box>
      <Box
        sx={{
          background: "white",
          padding: "10px",
          paddingTop: "30px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          alignItems: "center",

          "& button": {
            padding: "12px 15px 11px 14px",
            marginTop: { xl: 0, xs: "6px", md: "6px" },
            marginLeft: { md: "8px", xs: 0 },
            color: "#2a2a2e",
            fontSize: { md: "16px", xs: 12 },
            fontWeight: "600",
            fontFamily: "SFUIDisplay",
            border: "1px solid #ebebeb",
            borderRadius: "6px",
            background: "white",
          },
          "& img": {
            marginLeft: "10px",
          },
        }}
      >
        {buttons.map((button, index) => (
          <button
            className={isActive === index ? classes.button_style : ""}
            onClick={() => handleButton(index)}
            key={index}
          >
            {button}
          </button>
        ))}

        <img src={arrowImg} alt="arrow" />
      </Box>

      <InfiniteScroll
        hasMore={true}
        dataLength={products?.length}
        next={() => {
          setLimit(limit + 8);
        }}
      >
        <Box
          sx={{
            padding: "18px 20px",
            background: "#F2F2F2",
          }}
        >
          <Grid container spacing={2}>
            {products?.map((product, index) => {
              return (
                <Product
                  key={index}
                  isLoading={isLoading}
                  product={product}
                ></Product>
              );
            })}
          </Grid>
        </Box>
      </InfiniteScroll>
    </Box>
  );
};

export default Products;
