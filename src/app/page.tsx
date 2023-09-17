"use client";
import CarouselHomePage from "@/components/Molecules/Carousel";
import Navbar from "@/components/Molecules/Navbar";
import ApiClient from "@/utils/http";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getUsersList();
  }, []);

  const getUsersList = async () => {
    setLoading(true);
    try {
      const getUsers = await new ApiClient().get("products");
      console.log(getUsers)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <Navbar />
      <CarouselHomePage />
    </main>
  );
}
