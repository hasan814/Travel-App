"use client";

import { ThreeDots } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loading;
