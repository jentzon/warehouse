import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

type Props = {
  title: string;
};

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginTop: 20
  },
});

const PageHeader: React.FC<Props> = ({ title }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography align="center" variant="h3" component="h4" gutterBottom>
        {title}
      </Typography>
    </div>
  );
};

export default PageHeader;
