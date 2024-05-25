import {
  Box,
  Button,
  Checkbox,
  FilledInput,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Select,
  MenuItem,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Forma1() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <Box sx={{ mt: 3 }} onSubmit={handleSubmit(onSubmit)} component={"form"}>
      <Typography variant="body1">Demo forma1</Typography>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={4} sx={{ mt: 3 }}>
            <TextField
              id="outlined-basic"
              label="Ism"
              variant="outlined"
              fullWidth
              error={!!errors.Name}
              {...register("Name", {
                required:" Ismingizni kiriting",
                minLength: 5,
                maxLength: 255,
              })}
            />
            {errors.Name && (
              <Typography color="error">{errors.Name.message}</Typography>
            )}
          </Grid>
        </Grid>
      </Box>
      <Grid item xs={12} sm={6} lg={4} sx={{ mt: 3 }}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Radio input</FormLabel>
          <Controller
            name="RadioInput"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <RadioGroup {...field}>
                <FormControlLabel
                  value="Option1"
                  control={<Radio />}
                  label="Radio Option 1"
                />
                <FormControlLabel
                  value="Option2"
                  control={<Radio />}
                  label="Radio Option 2"
                />
              </RadioGroup>
            )}
          />
        </FormControl>
        <Box sx={{ mt: 5, width: "500px" }}>
          <FormControl fullWidth>
            <Controller
              name="SelectInput"
              control={control}
              defaultValue={[]}
              render={({ field }) => (
                <Select
                  {...field}
                  multiple
                  displayEmpty
                  input={<FilledInput />}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value={"Option1"}>Option 1</MenuItem>
                  <MenuItem value={"Option2"}>Option 2</MenuItem>
                  <MenuItem value={"Option3"}>Option 3</MenuItem>
                </Select>
              )}
            />
          </FormControl>
        </Box>
        <Box sx={{ mt: 10, width: 500 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
              name="DatePicker"
              control={control}
              defaultValue={null}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  label="Basic date picker"
                  renderInput={(params) => <TextField fullWidth {...params} />}
                />
              )}
            />
          </LocalizationProvider>
        </Box>
        <Box sx={{ mt: 5 }}>
          <div className="d-flex">
            <Controller
              name="Checkbox1"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <FormControlLabel
                  control={<Checkbox {...field} {...label} />}
                  label="Checkbox Option1"
                />
              )}
            />
          </div>
          <div className="d-flex">
            <Controller
              name="Checkbox2"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <FormControlLabel
                  control={<Checkbox {...field} {...label} />}
                  label="Checkbox Option2"
                />
              )}
            />
          </div>
        </Box>
        <Box sx={{ width: 500 }}>
          <Controller
            name="SliderValue"
            control={control}
            defaultValue={50}
            render={({ field }) => (
              <Slider
                {...field}
                valueLabelDisplay="auto"
                aria-label="Small"
                defaultValue={50}
                sx={{ mt: 5 }}
              />
            )}
          />
        </Box>
        <Box sx={{ mt: 5 }}>
          <Button sx={{ bgcolor: "#E0E1E0", width: 500 }} type="submit">
            Submit
          </Button>
        </Box>
        <Button
          sx={{ mt: 5, width: 500 }}
          onClick={() => reset()}
          className="shadow mb-5"
        >
          Reset
        </Button>
      </Grid>
    </Box>
  );
}
