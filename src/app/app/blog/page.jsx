"use client";

import PostMain from "@/components/blog/PostMain";
import AdminLayout from "../../../components/AdminLayout";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Loading from "@/components/Loading";

export default function Blog() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <AdminLayout>
      <Box sx={{ p: "20px", overflowX: "hidden" }}>
        <PostMain />
      </Box>
    </AdminLayout>
  );
}
