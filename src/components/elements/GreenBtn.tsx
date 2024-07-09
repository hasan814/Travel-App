import { GreenBtnProps } from "src/types";
import { Button } from "react-bootstrap";

import Link from "next/link";

const GreenBtn = ({ link, btnTitle }: GreenBtnProps) => {
  return (
    <Button id="green-btn">
      <Link
        href={link}
        className="text-decoration-none text-light text-capitalize"
      >
        {btnTitle}
      </Link>
    </Button>
  );
};

export default GreenBtn;
