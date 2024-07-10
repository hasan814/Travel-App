"use client";

import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";

const NotFound = () => {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push("/");
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <h1 className="display-4">404</h1>
      <h2 className="mb-4">Page Not Found</h2>
      <p className="mb-4">
        Sorry, the page you are looking for does not exist.
      </p>
      <Button variant="primary" onClick={handleBackToHome}>
        Back to Home
      </Button>
    </div>
  );
};

export default NotFound;
