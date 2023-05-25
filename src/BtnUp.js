import { Button } from "react-bootstrap";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

export function BtnUp() {
  return (
    <>
      <Button fixed="bottom">
        <KeyboardDoubleArrowUpIcon />
      </Button>
    </>
  );
}
