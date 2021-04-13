import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const Days = ({ days, setDays }) => {
  const handleChange = (event) => {
    setDays({ ...days, [event.target.name]: event.target.checked });
  };
  return (
    <React.Fragment>
      <FormControlLabel
        className="input-checkbox"
        control={
          <Checkbox
            checked={days.Monday}
            onChange={handleChange}
            name="Monday"
            color="primary"
          />
        }
        label="Monday"
      />
      <FormControlLabel
        className="input-checkbox"
        control={
          <Checkbox
            checked={days.Tuesday}
            onChange={handleChange}
            name="Tuesday"
            color="primary"
          />
        }
        label="Tuesday"
      />
      <FormControlLabel
        className="input-checkbox"
        control={
          <Checkbox
            checked={days.Wednesday}
            onChange={handleChange}
            name="Wednesday"
            color="primary"
          />
        }
        label="Wednesday"
      />
      <FormControlLabel
        className="input-checkbox"
        control={
          <Checkbox
            checked={days.Thursday}
            onChange={handleChange}
            name="Thursday"
            color="primary"
          />
        }
        label="Thursday"
      />
      <FormControlLabel
        className="input-checkbox"
        control={
          <Checkbox
            checked={days.Friday}
            onChange={handleChange}
            name="Friday"
            color="primary"
          />
        }
        label="Friday"
      />
      <FormControlLabel
        className="input-checkbox"
        control={
          <Checkbox
            checked={days.Saturday}
            onChange={handleChange}
            name="Saturday"
            color="primary"
          />
        }
        label="Saturday"
      />
      <FormControlLabel
        className="input-checkbox"
        control={
          <Checkbox
            checked={days.Sunday}
            onChange={handleChange}
            name="Sunday"
            color="primary"
          />
        }
        label="Sunday"
      />
    </React.Fragment>
  );
};

export default Days;
