import { Container } from "@material-ui/core";
import { useState } from "react";
import PageHeader from "../components/PageHeader";
import NavigationBar from "../containers/Navigation";
import WarehouseCatalogue from "../containers/WarehouseCatalogue";
import { evaluateSelection } from "../utils/navigationUtil";

const WarehousePage: React.FC = () => {
  const [navigationValue, setNavigationValue] = useState(0);
  const onNavigationChange = (value: number) => setNavigationValue(value);

  const navigationSelection = evaluateSelection(navigationValue);

  return (
    <Container maxWidth="md">
      <PageHeader title="THE WAREHOUSE" />
      <NavigationBar
        navigationValue={navigationValue}
        onNavigationChange={onNavigationChange}
      />
      <WarehouseCatalogue selectedList={navigationSelection} />
    </Container>
  );
};

export default WarehousePage;
