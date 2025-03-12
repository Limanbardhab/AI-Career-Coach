import React, { Suspense } from "react";
import { BarLoader } from "react-spinners";

const Layout = ({children}) => {
  return(
    <div className="px-5">
      <div className="text-6xl font-bold gradient-title"> Industry industryInsight</div>


      <Suspense fallback={<BarLoader className="mt-4" width={"100%"} color="gray"/>}>{children}</Suspense>
    </div>
  );
};

export default Layout