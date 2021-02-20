import { Container } from "@material-ui/core";
import React, { useState } from "react";
import NavigationBar from "../containers/Navigation";
import WarehouseCatalogue from "../containers/WarehouseCatalogue";

type Props = {
  title: string;
};
const WarehousePage: React.FC<Props> = ({ title }) => {
  const [navigationValue, setNavigationValue] = useState(0);
  const onNavigationChange = (value: number) => setNavigationValue(value);

  const selectedList = navigationValue === 0 ? "products" : "inventory";

  return (
    <Container maxWidth="md">
      <div>{title}</div>
      <NavigationBar
        navigationValue={navigationValue}
        onNavigationChange={onNavigationChange}
      />
      <WarehouseCatalogue selectedList={selectedList} />
    </Container>
  );
};

export default WarehousePage;
