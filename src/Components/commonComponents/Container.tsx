import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1680px] mx-auto px-5 xl:px-10 2xl:px-14 3xl:px-10">
      {children}
    </div>
  );
};

export default Container;
