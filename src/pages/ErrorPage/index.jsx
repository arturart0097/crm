import { useNavigate } from "react-router-dom";

import { Button } from "@/components/UI/Button";

import "./style.css";

export default function ErrorPage() {
  // const navigate = useNavigate();

  return (
    <div className="main">
      <div className="error_wrapper">
        <h1>404</h1>
        <hp>Not Found</hp>
        <Button
          style={{
            width: 374,
          }}
          // onClick={() => navigate("/")}
        >
          Back To Main
        </Button>
      </div>
    </div>
  );
}
