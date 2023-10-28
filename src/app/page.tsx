"use client";
import CarouselHomePage from "@/components/Molecules/Carousel";
import Navbar from "@/components/Molecules/Navbar";
// import ApiClient from "@/utils/http";
import { useEffect, useState, useLayoutEffect } from "react";
// import { useRouter } from "next/navigation";
import { CircularProgress } from "@mui/material";
import { useQuery } from "@apollo/client";
import { getProductPriceAndId } from "@/utils/graphql/queries";

export default function Home() {
  // const [loading, setLoading] = useState<boolean>(false);
  // const router = useRouter();
  const { data, error, loading } = useQuery(getProductPriceAndId);

  // useLayoutEffect(() => {
  //   // setLoading(true);
  // }, []);

  useEffect(() => {
    // getUsersList();
    console.log(loading, data, error);
  }, [loading]);

  // const getUsersList = async () => {
  //   setLoading(true);
  //   try {
  //     const getUsers = await new ApiClient().get("users");
  //     setLoading(false);
  //   } catch (error: any) {
  //     if (error?.response?.status === 401) {
  //       router.push("/auth/signin");
  //       setLoading(false);
  //       return;
  //     }
  //   }
  // };

  return loading ? (
    <CircularProgress />
  ) : (
    <main>
      <Navbar />
      <CarouselHomePage />
    </main>
  );
}
