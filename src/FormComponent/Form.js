import { Card, Checkbox, FormControl, FormControlLabel, FormHelperText, FormLabel, Input, InputLabel, Radio, RadioGroup, TextField } from "@material-ui/core"
import { Button } from "bootstrap"
import { useState } from "react"
import ReactDatePicker from "react-datepicker"
import logo from "./images/logo.jpg"
export let Form = () => {
   let handleSubmit=(e)=>{
          e.preventDefault();
      console.log(f_name,s_name,number,Email,city)
   }
   let [f_name,setf_name]=useState('');
      let [s_name,sets_name]=useState('');
   let [number,setnumber]=useState('');
   let [Email,setEmail]=useState('');
   let [city,setcity]=useState('');

   return (<div className="">
      <img src={logo} height="50" width={150} className="m-5" />
      <h5 className="text-warning">Please fill the below to register</h5>
      <form onSubmit={handleSubmit} className="">
         <div className="row p-3">
            <div className="col-6">
               <TextField id="standard-basic" onChange={e => setf_name(e.target.value)} label="FirstName" variant="standard" />

            </div><div className="col-6">
               <TextField id="standard-basic" onChange={e => sets_name(e.target.value)} label="LastName" variant="standard" />

            </div>

         </div>
         <div className="row p-3">
            <div className="col-6">
               <TextField id="standard-basic" onChange={e => setnumber(e.target.value)} label="Contact Number" variant="standard" />

            </div><div className="col-6">
               <TextField id="standard-basic" label="Alt Number" variant="standard" />

            </div>

         </div> <div className="row p-3">
            <div className="col-6">
               <TextField id="standard-basic" label="Street" variant="standard" />

            </div><div className="col-6">
               <TextField id="standard-basic" onChange={e => setcity(e.target.value)} label="City" variant="standard" />

            </div>

         </div>
         <div className="row p-3">
            <div className="col-6">
               <TextField id="standard-basic" label="State" variant="standard" />

            </div>
            <div className="col-6 ">
               <FormControl>
                  <InputLabel htmlFor="my-input">Email address</InputLabel>
                  <Input onChange={e => setEmail(e.target.value)} id="my-input" aria-describedby="my-helper-text" />
               </FormControl>
               {/* <div> */}

            </div>  </div>

         <div className="row p-3">
            <div className="col-6">
               <TextField
                  id="standard-number"
                  label="Age"
                  type="number"
                  InputLabelProps={{
                     shrink: true,
                  }}
               />

            </div>

            <div className="col-6 ">
               <TextField
                  id="standard-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
               />
            </div>

         </div>
         <div className="row p-3">
         <FormControl>
      <FormLabel className="text-start ps-5 pb-2 text-success" id="demo-row-radio-buttons-group-label">Select your Gender</FormLabel>
      <RadioGroup className="ps-5"
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
       
      </RadioGroup>
    </FormControl>
         </div>
         <div className="row p-3 "> <FormControlLabel className="ps-5" control={<Checkbox defaultChecked />} label="I Agree" /></div>
         <div className="row p-3 justify-content-center">
            {/* <Button variant="contained" color="success">Submit</Button> */}
            {/* <Button variant="contained">Contained</Button> */}<button type="submit" className="w-50 btn btn-primary">Submit</button>
</div>
      </form>
   </div>)
}