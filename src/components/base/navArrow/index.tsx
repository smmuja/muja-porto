import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Button } from "components";
import { useNavigate } from "react-router-dom";

export function NavArrow() {
  const navigate = useNavigate();

  const handleLeft = () => {
    navigate(-1);
  };

  const handleRight = () => {
    navigate(+1);
  };

  return (
    <>
      <Button onClick={handleLeft} className="text-slate-400">
        <IconArrowLeft />
      </Button>
      <Button onClick={handleRight} className="text-slate-400">
        <IconArrowRight />
      </Button>
    </>
  );
}
