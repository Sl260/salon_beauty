import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const RegisterFormContainer = styled.div`
  display: flex;
  margin-top: 12rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const FormWrapper = styled.form`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 0.5rem;
`;

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const BACKEND_URL = "http://localhost:5000/create-user";

  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await axios.post(BACKEND_URL, {
      email,
      password,
      lastName,
      firstName,
    });
    if (response.status !== 201 && response.status !== 200) {
      toast.error("Registration failed" + response.message);
    } else {
      localStorage.setItem("token", response.data.token);
      toast.success("Enregistrement réussi");
      navigate("/login", { replace: true });
    }
  };

  return (
    <RegisterFormContainer>
      <Toaster />

      <FormWrapper onSubmit={handleRegister}>
        <Title>Register</Title>
        <Input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Register</Button>
        <Link to="/login">Signin</Link>
      </FormWrapper>
    </RegisterFormContainer>
  );
};

export default RegisterForm;
