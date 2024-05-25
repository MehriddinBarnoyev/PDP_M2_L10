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
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
// import DateTimeFieldValue from "../DateTime";
import BasicDatePicker from "../DateTime";
import { useForm } from "react-hook-form";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Forma1() {
  const { register, handleSubmit , formState:{errors}, reset} = useForm();

  const submit = (data) => {
    console.log(data);
    reset();
  };
  console.log(errors);

  return (
    <Box sx={{ mt: 3 }} onSubmit={handleSubmit(submit)} component={"form"}>
      <Typography variant="body1">Demo forma</Typography>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={4} sx={{ mt: 3 }}>
            <Box>
              <TextField
                id="outlined-basic"
                label="Ism"
                variant="outlined"
                fullWidth
                error={errors.Name}
                {...register("Name", { required: true , minLength:5, maxLength:255})}
              />
              {errors.Name && (
              <Typography color="error">Ismingizni kiriting</Typography>
            )}
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Grid item xs={12} sm={6} lg={4} sx={{ mt: 3 }}>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Radio input</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="none"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="Radio Option 1"
              control={<Radio />}
              label="Radio Option 1"
            />
            <FormControlLabel
              value="Radio Option "
              control={<Radio />}
              label="Radio Option 2"
              
            />
          </RadioGroup>
        </FormControl>
        <Box sx={{ mt: 5, width: "500px" }}>
          <Select
            multiple
            displayEmpty
            value={""}
            input={<FilledInput />}
            fullWidth
            inputProps={{ "aria-label": "Without label" }}
          />
        </Box>
        <Box sx={{ mt: 10, width: 500 }}>
          <BasicDatePicker />
        </Box>
        <Box sx={{ mt: 5 }}>
          <div className="d-flex">
            <Checkbox {...label} />
            <Typography sx={{ mt: 1 }}>Checkbox Option1</Typography>
          </div>
          <div className="d-flex">
            <Checkbox {...label} />
            <Typography sx={{ mt: 1 }}>Checkbox Option2</Typography>
          </div>
        </Box>
        <Box sx={{ width: 500 }}>
          <Slider
            fullWidth
            defaultValue={50}
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
        <Button sx={{ mt: 5, width: 500 }} className="shadow mb-5">
          Reset
        </Button>
      </Grid>
    </Box>
  );
}
