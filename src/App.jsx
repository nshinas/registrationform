import React, { useState } from 'react';
import { Container, TextField, Button, FormControl, InputLabel, Select, MenuItem, RadioGroup, FormControlLabel, Radio, FormLabel, Checkbox, FormGroup } from '@mui/material';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    email: '',
    gender: '',
    dob: '',
    course: '',
    termsAccepted: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, termsAccepted: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.termsAccepted) {
      console.log('Form submitted:', formData);
      alert('Registration successful');
    } else {
      alert('Please accept the terms and conditions');
    }
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      address: '',
      mobile: '',
      email: '',
      gender: '',
      dob: '',
      course: '',
      termsAccepted: false,
    });
  };

  return (
    <Container maxWidth="sm"  className="form-container">
      <h2>Higher Secondary Admission</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          required
        />
        <FormControl component="fieldset" margin="normal">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            row
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <TextField
          fullWidth
          label="Date of Birth"
          name="dob"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={formData.dob}
          onChange={handleChange}
          margin="normal"
          required
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Course</InputLabel>
          <Select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <MenuItem value="biology">Biology</MenuItem>
            <MenuItem value="computer-science">Computer Science</MenuItem>
            <MenuItem value="commerce">Commerce</MenuItem>
            <MenuItem value="humanities">Humanities</MenuItem>
          </Select>
        </FormControl>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.termsAccepted}
                onChange={handleCheckboxChange}
                required
              />
            }
            label="I agree to the Terms of Service and Privacy Policy"
          />
        </FormGroup>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className="submit-btn"
        >
          Register
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          onClick={handleCancel}
          className="cancel-btn"
        >
          Cancel
        </Button>
      </form>
    </Container>
  );
};

export default App;
