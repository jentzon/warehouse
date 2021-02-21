import React from "react";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AssignmentIcon from "@material-ui/icons/Assignment";
import DescriptionIcon from "@material-ui/icons/Description";
import SettingsIcon from "@material-ui/icons/Settings";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core";

type Props = {
  navigationValue: number;
  onNavigationChange: (value: number) => void;
};

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "rgb(255, 218, 26)",
  },
  container: {
    marginBottom: 20,
    padding: 12,
    backgroundColor: "rgb(255, 218, 26)",
  },
  icon: {
    fontSize: 50,
  },
});

const NavigationBar: React.FC<Props> = ({
  navigationValue,
  onNavigationChange,
}) => {
  const classes = useStyles();

  const navigate = (_: React.ChangeEvent<{}>, value: number) =>
    onNavigationChange(value);

  return (
    <Card className={classes.container}>
      <BottomNavigation
        value={navigationValue}
        onChange={navigate}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          label="Products"
          icon={<AssignmentIcon className={classes.icon} />}
        />
        <BottomNavigationAction
          label="Inventory"
          icon={<DescriptionIcon className={classes.icon} />}
        />
        <BottomNavigationAction
          label="Data upload"
          icon={<SettingsIcon className={classes.icon} />}
        />
      </BottomNavigation>
    </Card>
  );
};

export default NavigationBar;
