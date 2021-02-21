import { ChangeEvent, useState } from "react";

import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

import { SimpleToast } from "../components/SimpleToast";
import { UploadCall, Callback } from "../types";
import { validateJsonInput } from "../utils/jsonValidation";
import SmartButton from "../components/SmartButton";

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
  dataRefetch: Callback;
  apiCall: UploadCall;
  textFieldTitle: string;
  defaultInputValue: string;
};

const DataUploadField: React.FC<Props> = ({
  apiCall,
  dataRefetch,
  defaultInputValue,
  textFieldTitle,
}) => {
  const classes = useStyles();
  const [input, setInput] = useState(defaultInputValue);
  const [validJson, setValidJson] = useState(true);

  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadFailure, setUploadFailure] = useState(false);

  const onTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const input = event.target.value;
    const validInventoryJson = validateJsonInput(input);
    setValidJson(validInventoryJson);
    setInput(input);
  };

  const restoreUploadState = () => {
    setUploadSuccess(false);
    setUploadFailure(false);
  };

  const onUpload = () => {
    restoreUploadState();
    apiCall(input)
      .then(() => {
        setUploadSuccess(true);
        dataRefetch();
      })
      .catch(() => setUploadFailure(true));
  };

  return (
    <>
      <Typography variant="h5" component="h2" gutterBottom>
        {textFieldTitle}
      </Typography>
      <TextField
        className={classes.textInput}
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        defaultValue={defaultInputValue}
        variant="outlined"
        onChange={onTextChange}
      />
      <SmartButton disabled={!validJson} onClick={onUpload} title="Upload" />
      <SimpleToast
        onClose={restoreUploadState}
        open={uploadSuccess}
        message="Data uploaded!"
      />
      <SimpleToast
        onClose={restoreUploadState}
        open={uploadFailure}
        message="Failed to upload data..."
      />
    </>
  );
};
export default DataUploadField;
