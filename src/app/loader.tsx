"use client";

import { RotatingLines } from "react-loader-spinner";

const loader = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default loader;
