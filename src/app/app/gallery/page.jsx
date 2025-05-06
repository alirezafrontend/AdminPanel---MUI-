"use client";

import AdminLayout from "../../../components/AdminLayout";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import GalleryMain from "@/components/gallery/GalleryMain";
import Loading from "@/components/Loading";

export default function Gallery() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <AdminLayout>
      <Box sx={{ p: "20px", overflowX: "hidden" }}>
        <GalleryMain />
      </Box>
    </AdminLayout>
  );
}
