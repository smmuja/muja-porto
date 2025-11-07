import { Button } from "components/base";
import { useNavigate } from "react-router-dom";

export function ButtonViewMyService() {
  const navigate = useNavigate();
  const serviceButtonHandler = () => {
    navigate("/service");
  };

  return <Button onClick={serviceButtonHandler}>View My Service</Button>;
}
