"use client";

import { ErrorComponentProps } from "src/types";

const ErrorComponent = ({ message }: ErrorComponentProps) => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="text-center p-4">
        <h1 className="display-1 text-danger">Error</h1>
        <p className="lead">
          {message || "Something went wrong. Please try again later."}
        </p>
      </div>
    </div>
  );
};

export default ErrorComponent;
