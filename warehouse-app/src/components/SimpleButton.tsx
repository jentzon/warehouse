import { Button, makeStyles } from "@material-ui/core";

import { Callback } from "../types";

type Props = {
  title: string;
  onClick: Callback;
};

const useStyles = makeStyles({
  button: {
    marginBottom: 20,
    backgroundColor: "rgba(255, 218, 26, 0.8)",
    color: "rgb(0, 81, 186)",
  },
});

const SimpleButton: React.FC<Props> = ({ onClick, title }) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      variant="contained"
      color="primary"
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default SimpleButton;