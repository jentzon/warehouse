import { Button, makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const demoProductInput = `{
  "products": [
    {
      "name": "Dining Chair",
      "contain_articles": [
        {
          "art_id": "1",
          "amount_of": "4"
        },
        {
          "art_id": "2",
          "amount_of": "8"
        },
        {
          "art_id": "3",
          "amount_of": "1"
        }
      ]
    },
    {
      "name": "Dinning Table",
      "contain_articles": [
        {
          "art_id": "1",
          "amount_of": "4"
        },
        {
          "art_id": "2",
          "amount_of": "8"
        },
        {
          "art_id": "4",
          "amount_of": "1"
        }
      ]
    }
  ]
}
`;

const demoArticleInput = `
{
  "inventory": [
    {
      "art_id": "1",
      "name": "leg",
      "stock": "12"
    },
    {
      "art_id": "2",
      "name": "screw",
      "stock": "17"
    },
    {
      "art_id": "3",
      "name": "seat",
      "stock": "2"
    },
    {
      "art_id": "4",
      "name": "table top",
      "stock": "1"
    }
  ]
}
`;

const useStyles = makeStyles({
  textInput: {
    width: "100%",
    marginBottom: 12,
  },
  button: {
    marginBottom: 20,
  },
});
const Configuration = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h5" component="h2" gutterBottom>
        Product input
      </Typography>
      <TextField
        className={classes.textInput}
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        defaultValue={demoProductInput}
        variant="outlined"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        disabled={false} // If input is empty
        size="small"
        onClick={() => console.log("Send products!")}
      >
        Upload products
      </Button>
      <Typography variant="h5" component="h2" gutterBottom>
        Inventory input
      </Typography>
      <TextField
        className={classes.textInput}
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        defaultValue={demoArticleInput}
        variant="outlined"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        disabled={false} // If input is empty
        size="small"
        onClick={() => console.log("Send inventory!")}
      >
        Upload inventory
      </Button>
    </>
  );
};
export default Configuration;
