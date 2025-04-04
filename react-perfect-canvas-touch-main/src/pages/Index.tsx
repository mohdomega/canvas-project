import React from "react";
import Logo from "@/components/ui/Logo";
import LoginForm from "@/components/auth/LoginForm";
import HighBridgeLogoIcon from "@/assets/icons/HighBridgeLogoIcon";

const Index = () => {
  return (
    <div
      className="min-h-screen flex items-end justify-end bg-cover bg-center bg-no-repeat bg-fixed p-0"
      style={{ backgroundImage: "url('/lovable-uploads/bg-img.png')" }}
    >
      <div className="bg-black bg-opacity-70 absolute inset-0 flex flex-col justify-center " >
        <div className="ml-[220px] w-fit">
          <div className="w-[274px] h-[64px]">
            <HighBridgeLogoIcon />
          </div>
          <div className="mt-[119px] w-[390px] h-[169px]">
            <h1
              className="mb-6 text-[39.06px] font-bold text-white leading-[46.87px]">
              Building the Future...
            </h1>
            <p
             className="text-base font-normal text-white leading-[28.16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10  w-full max-w-3xl mb-0 mr-1">
        <LoginForm />
      </div>
    </div>
  );
};

export default Index;
