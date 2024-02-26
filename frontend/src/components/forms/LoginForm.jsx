// Import necessary dependencies
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import toast, { Toaster } from "react-hot-toast";

// Styled components for the login form
const LoginFormContainer = styled.div`
  padding-top: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const FormWrapper = styled.form`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
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
  margin-top: 1rem;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 0.5rem;
`;

// React component for the controlled login form

const BACKEND_URL = "http://localhost:5000/login-user";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await axios.post(BACKEND_URL, { email, password });
    if (response.status !== 204 && response.status !== 200) {
      toast.error("Login failed" + response.message);
    } else {
      localStorage.setItem("token", response.data.token);
      toast.success("Authentification réussie");
      navigate("/", { replace: true });
    }
  };

  return (
    <>
      <Toaster />
      <LoginFormContainer>
        <FormWrapper onSubmit={handleLogin}>
          <Title>Login</Title>
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
          <Button type="submit">Login</Button>
          <Link to="/register">Register</Link>
        </FormWrapper>
      </LoginFormContainer>
    </>
  );
};

export default LoginForm;
