import Snackbar from "@material-ui/core/Snackbar";

import { Callback } from "../types";

type Props = {
  open: boolean,
  message: string,
  onClose: Callback
}

export const SimpleToast: React.FC<Props> = ({ open, message, onClose }) => (
  <Snackbar
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    open={open}
    autoHideDuration={3000}
    onClose={onClose}
    message={message}
  />
);
