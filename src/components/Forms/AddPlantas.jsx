import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";

const Form = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register("name")}
        label="Name"
        variant="outlined"
      />
      <TextField
        {...register("email")}
        label="Email"
        variant="outlined"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
