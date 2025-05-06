import React from "react";
import { Grid } from "@mui/material";
import styles from "./style.module.css";
import GalleryHeader from "./GalleryHeader";
import ProfileCard from "./ProfileCard";
import GalleryBar from "./GalleryBar";
import GalleryCard from "./GalleryCard";
import { galleryItems } from "./constantGallery";

const GalleryMain = () => {
  return (
    <Grid className={styles.grid}>
      <GalleryHeader />
      <ProfileCard />
      <GalleryBar />
      {galleryItems.map((item) => {
        return (
          <GalleryCard
            key={item.id}
            imageSrc={item.src}
            title={item.title}
            date={item.date}
            alt={item.title}
          />
        );
      })}
    </Grid>
  );
};

export default GalleryMain;
