"use client";

import AdminLayout from "../../components/AdminLayout";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardHome from "@/components/home/CardHome";
import ProfitHome from "@/components/home/ProfitHome";
import ProjectHome from "@/components/home/ProjectHome";
import Loading from "@/components/Loading";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <AdminLayout>
      <Box sx={{ p: "20px", overflowX: "hidden" }}>
        <CardHome />
        <ProfitHome />
        <ProjectHome />
      </Box>
    </AdminLayout>
  );
}
