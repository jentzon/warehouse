import DataUploadField from "./DataUploadField";
import { uploadInventory, uploadProducts } from "../services/apiService";
import { Callback } from "../types";
import { demoProductInput } from "../domain/demoInput";
import { demoArticleInput } from "../domain/demoInput";


type Props = {
  reFetchInventory: Callback;
  reFetchProducts: Callback;
};

const WarehouseDataUpload: React.FC<Props> = ({
  reFetchInventory,
  reFetchProducts,
}) => (
  <>
    <DataUploadField
      dataRefetch={reFetchProducts}
      apiCall={uploadProducts}
      defaultInputValue={demoProductInput}
      textFieldTitle="Upload products"
    />
    <DataUploadField
      dataRefetch={reFetchInventory}
      apiCall={uploadInventory}
      defaultInputValue={demoArticleInput}
      textFieldTitle="Upload inventory"
    />
  </>
);

export default WarehouseDataUpload;
