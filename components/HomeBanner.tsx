import { Title } from "@radix-ui/react-toast";
import React from "react";

const HomeBanner = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <Title className="text-3xl md:text-4xl uppercase font-bold text-center">
        Kuu, Her Zaman Her Yerde Uygun Fiyat
      </Title>
      <p className="text-sm text-center text-lightColor/80 font-medium max-w-[480p]">
        Her Zaman Her Yerde Uygun Fiyat
      </p>
    </div>
  );
};

export default HomeBanner;
