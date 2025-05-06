"use client";

import WelcomeCard from "@/components/eCommerce/WelcomeCard";
import styles from "./styles.module.css";
import AdminLayout from "../../../components/AdminLayout";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import RecentTransactions from "@/components/eCommerce/RecentTransactions";
import Loading from "@/components/Loading";

export default function Ecommerce() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <AdminLayout>
      <Box sx={{ p: 2, overflowX: "hidden" }}>
        <WelcomeCard className={styles.welcomeCard} />
        <RecentTransactions />
      </Box>
    </AdminLayout>
  );
}
