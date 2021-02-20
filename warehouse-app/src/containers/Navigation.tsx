import React from "react";

import { makeStyles } from "@material-ui/core";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DescriptionIcon from '@material-ui/icons/Description';

type Props = {
  navigationValue: number,
  onNavigationChange: (value: number) => void
}

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

const NavigationBar: React.FC<Props> = ({ navigationValue, onNavigationChange }) => {
  const classes = useStyles();

  const navigate = (_: React.ChangeEvent<{}>, value: number) => onNavigationChange(value);

  return (
    <BottomNavigation value={navigationValue} onChange={navigate}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Products" icon={<AssignmentIcon />} />
      <BottomNavigationAction label="Articles" icon={<DescriptionIcon />} />
    </BottomNavigation>
  );
};

export default NavigationBar;
