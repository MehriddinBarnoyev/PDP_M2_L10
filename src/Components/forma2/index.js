import {
  Box,
  Button,
  Checkbox,
  FilledInput,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Forma2() {
  const [formValues, setFormValues] = useState({
    Name: "",
    RadioInput: "",
    SelectInput: [],
    DatePicker: null,
    Checkbox1: false,
    Checkbox2: false,
    SliderValue: 50,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formValues.Name) newErrors.Name = "Ismingizni kiriting";
    else if (formValues.Name.length < 5)
      newErrors.Name = "Ism kamida 5 belgidan iborat bo'lishi kerak";
    else if (formValues.Name.length > 255)
      newErrors.Name = "Ism 255 belgidan oshmasligi kerak";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSelectChange = (event) => {
    const { value } = event.target;
    setFormValues({
      ...formValues,
      SelectInput: typeof value === "string" ? value.split(",") : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("Form Data:", formValues);
    resetForm();
  };

  const resetForm = () => {
    setFormValues({
      Name: "",
      RadioInput: "",
      SelectInput: [],
      DatePicker: null,
      Checkbox1: false,
      Checkbox2: false,
      SliderValue: 50,
    });
    setErrors({});
  };

  return (
    <Box sx={{ mt: 3 }} onSubmit={handleSubmit} component="form">
      <Typography variant="body1">Demo forma2</Typography>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={4} sx={{ mt: 3 }}>
            <Box>
              <TextField
                id="outlined-basic"
                label="Ism"
                variant="outlined"
                fullWidth
                name="Name"
                value={formValues.Name}
                onChange={handleChange}
                error={!!errors.Name}
                helperText={errors.Name}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Grid item xs={12} sm={6} lg={4} sx={{ mt: 3 }}>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Radio input</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            value={formValues.RadioInput}
            onChange={handleChange}
            name="RadioInput"
          >
            <FormControlLabel
              value="Radio Option 1"
              control={<Radio />}
              label="Radio Option 1"
            />
            <FormControlLabel
              value="Radio Option 2"
              control={<Radio />}
              label="Radio Option 2"
            />
          </RadioGroup>
        </FormControl>
        <Box sx={{ mt: 5, width: "500px" }}>
          <Select
            multiple
            displayEmpty
            value={formValues.SelectInput}
            onChange={handleSelectChange}
            input={<FilledInput />}
            fullWidth
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="Option 1">Option 1</MenuItem>
            <MenuItem value="Option 2">Option 2</MenuItem>
            <MenuItem value="Option 3">Option 3</MenuItem>
          </Select>
        </Box>
        <Box sx={{ mt: 10, width: 500 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Basic date picker"
              value={formValues.DatePicker}
              onChange={(newValue) => setFormValues({ ...formValues, DatePicker: newValue })}
            />
          </LocalizationProvider>
        </Box>
        <Box sx={{ mt: 5 }}>
          <div className="d-flex">
            <Checkbox
              {...label}
              name="Checkbox1"
              checked={formValues.Checkbox1}
              onChange={handleChange}
            />
            <Typography sx={{ mt: 1 }}>Checkbox Option1</Typography>
          </div>
          <div className="d-flex">
            <Checkbox
              {...label}
              name="Checkbox2"
              checked={formValues.Checkbox2}
              onChange={handleChange}
            />
            <Typography sx={{ mt: 1 }}>Checkbox Option2</Typography>
          </div>
        </Box>
        <Box sx={{ width: 500 }}>
          <Slider
            fullWidth
            value={formValues.SliderValue}
            onChange={(e, newValue) => setFormValues({ ...formValues, SliderValue: newValue })}
            aria-label="Small"
            valueLabelDisplay="auto"
            sx={{ mt: 5 }}
          />
        </Box>
        <Box sx={{ mt: 5 }}>
          <Button sx={{ bgcolor: "#E0E1E0", width: 500 }} type="submit">
            Submit
          </Button>
        </Box>
        <Button sx={{ mt: 5, width: 500 }} className="shadow mb-5" onClick={resetForm}>
          Reset
        </Button>
      </Grid>
    </Box>
  );
}
