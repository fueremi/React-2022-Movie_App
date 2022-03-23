import React from "react";

const LoadingComponent = () => {
  return (
    <div class="fixed w-screen h-screen left-0 top-0 z-20 flex justify-center items-center">
      <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-300"></div>
    </div>
  );
};

export default LoadingComponent;
