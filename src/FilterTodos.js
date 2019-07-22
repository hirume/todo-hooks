import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export const FilterTodos = ({ dispatch }) => {
  const [value, setValue] = React.useState("ALL");

  const handleChange = (event, newValue) => {
    dispatch({ type: `SHOW_${newValue}` });
    setValue(newValue);
  };

  return (
    <Paper>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="secondary"
        centered
      >
        <Tab label="All" value="ALL" />
        <Tab label="Complete" value="COMPLETE" />
        <Tab label="Active" value="ACTIVE" />
      </Tabs>
    </Paper>
  );
};
