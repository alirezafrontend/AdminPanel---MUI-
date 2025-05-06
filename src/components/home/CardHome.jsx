import React from "react";
import styles from "./style.module.css";
import { Grid, CardContent, Typography, Card } from "@mui/material";
import Image from "next/image";
import { cartHome } from "./constantHome";

const CardHome = () => {
  return (
    <Grid className={styles.cart_home} sx={{ width: "100%" }}>
      {cartHome.map((item) => {
        return (
          <Grid key={item.id}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: 2,
                backgroundColor: "#ecf2ff",
                width: "100%",
                height: "162px",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <Image
                  src={`/dashboard/icon${item.id}.svg`}
                  width={50}
                  height={50}
                  alt="icon"
                />
                <Typography
                  variant="h6"
                  sx={{
                    mt: 2,
                    color: "#5d87ff",
                    fontSize: "15px",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    color: "#5d87ff",
                    fontSize: "22px",
                  }}
                >
                  {item.num}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CardHome;
