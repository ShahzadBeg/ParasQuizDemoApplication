import { Button } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import "./Result.css";

const Result = ({ name, score }) => {
  const history = useNavigate();
  var backTohome = () => {
    history("/");
  };

  useEffect(() => {
    if (!name) {
      history("/");
    }
  }, [name, history]);

  return (
    <div className="result">
      <span className="title">Final Score : {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        onClick={backTohome}
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default Result;
