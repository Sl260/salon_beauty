/* eslint-disable react/prop-types */
import axios from "axios";
import styled from "styled-components";
import { useAuth } from "../../provider/authProvider";
import { useNavigate } from "react-router-dom";

const AppointmentsContainer = styled.div`
  max-width: 800px;
  margin: 4rem auto;
`;

const AppointmentCard = styled.div`
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AppointmentInfo = styled.div`
  flex: 1;
`;

const ActionsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const ActionButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.backgroundColor || "#007bff"};
  color: #fff;

  &:hover {
    background-color: ${(props) => props.hoverColor || "#0056b3"};
  }
`;

const Appointments = ({ appointments }) => {
  const { token } = useAuth();
  const navigate = useNavigate();

  const config = {
    authorization: `Bearer ${token}`,
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/delete-appointment/${id}`, config);
    navigate("/appointments", { replace: true });
  };
  return (
    <AppointmentsContainer>
      {appointments?.map((appointment) => (
        <AppointmentCard key={appointment.id}>
          <AppointmentInfo>
            <h3>{`${appointment.firstName} ${appointment.lastName}`}</h3>
            <p>Email: {appointment.email}</p>
            <p>Date: {appointment.date}</p>
          </AppointmentInfo>
          <ActionsContainer>
            <ActionButton backgroundColor="#28a745" hoverColor="#218838">
              <>Validate</>
            </ActionButton>
            <ActionButton backgroundColor="#007bff" hoverColor="#0056b3">
              <>Edit</>
            </ActionButton>
            <ActionButton
              onClick={() => handleDelete(appointment?._id)}
              backgroundColor="#dc3545"
              hoverColor="#c82333"
            >
              <>delete</>
            </ActionButton>
          </ActionsContainer>
        </AppointmentCard>
      ))}
    </AppointmentsContainer>
  );
};

export default Appointments;
