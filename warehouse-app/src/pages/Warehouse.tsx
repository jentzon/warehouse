import { Container } from "@material-ui/core";
import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import Configuration from "../containers/Configuration";
import NavigationBar from "../containers/Navigation";
import WarehouseCatalogue from "../containers/WarehouseCatalogue";
import { evaluateSelection } from "../utils/navigationUtil";

// Note: Basic navigation.

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
      {/* SelectedList in props should trigger rerender and thus new updates on fetch hooks */}
      <WarehouseCatalogue selectedList={navigationSelection} />
      {navigationSelection === "configuration" && <Configuration />}
    </Container>
  );
};

export default WarehousePage;
