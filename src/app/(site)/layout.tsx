import Navigation from "@/components/site/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const SiteLayout = ({ children }: Props) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};

export default SiteLayout;
