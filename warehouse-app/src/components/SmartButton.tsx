import { Button, makeStyles } from "@material-ui/core";

import { Callback } from "../types";

const useStyles = makeStyles({
  textInput: {
    width: "100%",
    marginBottom: 12,
  },
  button: {
    marginBottom: 20,
  },
});

type Props = {
  disabled: boolean;
  onClick: Callback;
  title: string;
};
const SmartButton: React.FC<Props> = ({ disabled, onClick, title }) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      variant="contained"
      color="primary"
      disabled={disabled}
      size="small"
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default SmartButton;