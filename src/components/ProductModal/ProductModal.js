import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Card, CardMedia } from "@mui/material";

export default function ProductModal({ open, handleClose, product }) {
  const img = product?.meta.banners;
  const { logo, companyName } = product?.meta;
  const { addresses } = product;
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { md: 500, xs: "95%" },
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 1,
          }}
        >
          <Box sx={{ boxSizing: "border-box" }}>
            <Box sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                sx={{ height: { md: 220, xs: 150 } }}
                width="100"
                image={img[0].url}
                alt="green iguana"
              />
              <CardMedia
                sx={{ height: { md: 220, xs: 150 } }}
                component="img"
                width="100"
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
                    margin: "10px 5px 0 0px",
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
                <p>
                  <span>About us :</span> {product.aboutUs.slice(0, 190)}
                </p>

                <br />
                <button onClick={handleClose} size="small">
                  Close
                </button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
