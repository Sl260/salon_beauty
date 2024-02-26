// FormComponent.js
import { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../provider/authProvider";

const FormContainer = styled.div`
  width: 20%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  margin: 4rem auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormField = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const RoundedButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px;
  border: none;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    date: null,
  });

  const { token } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      date,
    });
  };

  const navigate = useNavigate();

  const BACKEND_URL = "http://localhost:5000/create-appointment";

  const options = {
    headers: { authorization: `Bearer ${token}` },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const response = await axios.post(BACKEND_URL, formData, options);
    if (response.status !== 201 && response.status !== 200) {
      toast.error("Registration failed" + response.message);
    } else {
      toast.success("Enregistrement réussi");
      navigate("/about-us", { replace: true });
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </FormField>

        <FormField>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </FormField>

        <FormField>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormField>

        <FormField>
          <Label>Date</Label>
          <StyledDatePicker
            selected={formData.date}
            onChange={handleDateChange}
          />
        </FormField>

        <RoundedButton type="submit">Submit</RoundedButton>
      </form>
    </FormContainer>
  );
};

export default AppointmentForm;
