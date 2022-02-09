import { Box, Grid } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import ProductModal from "../ProductModal/ProductModal";
import Skeleton from "../Skeleton/Skeleton";

const Product = ({ product, isLoading }) => {
  const img = product.meta.banners;
  const { logo, companyName } = product.meta;

  const { addresses } = product;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid item md={3} sm={6} xs={12}>
      {!isLoading ? (
        <Box>
          <Card sx={{ maxWidth: 320 }}>
            <Box sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                height="140"
                image={img[0].url}
                alt="green iguana"
              />
              <CardMedia
                component="img"
                height="140"
                image={img[1].url}
                alt="green iguana"
              />
            </Box>
            <Box sx={{ padding: "10px" }}>
              <Box sx={{ marginTop: "-65px", marginBottom: "-10px" }}>
                <img src={logo.url} alt="" />
              </Box>
              <Box
                sx={{
                  paddingLeft: "15px",
                  lineHeight: "28px",
                  "& h3": {
                    color: "#2a2a2e",
                    fontSize: "20px",
                    margin: 0,
                    padding: 0,
                    fontFamily: "SFUIDisplay",
                    fontWeight: "bold",
                  },
                  "& p": {
                    display: "inline-block",
                    fontFamily: "SFUIDisplay",
                    color: "#63636a",
                    padding: 0,
                    margin: 0,
                  },

                  "& span": {
                    color: "#01896a",
                    fontSize: "14px",
                    fontWeight: "bold",
                    fontFamily: "SFUIDisplay",
                    marginLeft: "2.5px",
                    "& span": {
                      fontWeight: "bold",
                      marginRight: "5px",
                      color: "#63636a",
                    },
                  },
                  "& button": {
                    border: "0",
                    color: "#01896a",
                    background: "#d1ffd0",
                    margin: "25px 5px 0 0px",
                    padding: "8px 20px 8px 22px",
                    borderRadius: "16px",
                  },
                }}
              >
                <h3>{companyName.slice(0, 26)}</h3>
                <p>{`${addresses[0]?.city} ${addresses[0]?.country}`}</p>
                <span>
                  <span>.</span>
                  Min Qty: 500
                </span>
                <p>Hoodies, Trousers, Jackets, Hoodies ..</p>
                <br />
                <button onClick={handleOpen} size="small">
                  View Details
                </button>
              </Box>
            </Box>
          </Card>
        </Box>
      ) : (
        <Skeleton />
      )}

      <ProductModal
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        product={product}
      />
    </Grid>
  );
};

export default Product;
