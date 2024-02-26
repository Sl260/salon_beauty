import styled from "styled-components";
import salon_beaute from "../../assets/salon beaute.jpg"
import cheveux from "../../assets/cheveux.jpg"
import soin_peau from "../../assets/soin peau1.jpg"
import make_up from "../../assets/MAKE UP 1.jpg"
const BeautyShop = () => {
  return (
    <Container>
      <Header>
        <Logo
          src={salon_beaute}
          alt="Beauty Shop Logo"
        />
        <h1>SNM, L'APPART BEAUTE </h1>
        <p>Indulge in a luxurious experience at our beauty haven.</p>

        <Button href="/appointment">Book an Appointment</Button>
      </Header>
      <Main>
        <h2>Our Services</h2>
        <Section>
          <ServiceCard>
            <ServiceImage
              src={cheveux}
              alt="Hair Care Service"
            />
            <h3>Hair Care</h3>
            <p>Expert cuts, coloring, and styling for all types of hair.</p>
          </ServiceCard>
          <ServiceCard>
            <ServiceImage
              src={soin_peau}
              alt="Skin Care Service"
            />
            <h3>Skin Care</h3>
            <p>Facials, massages, and treatments for a healthy glow.</p>
          </ServiceCard>
          <ServiceCard>
            <ServiceImage
              src={make_up}
              alt="Makeup Service"
            />
            <h3>Makeup</h3>
            <p>Enhance your natural beauty with our expert makeup artists.</p>
          </ServiceCard>
        </Section>
        <Section2 about>
          <h2>About Us</h2>
          <p>
            We are passionate about helping you look and feel your best. Our
            experienced team uses the latest techniques and high-quality
            products to provide exceptional service in a relaxing and welcoming
            environment.
          </p>
        </Section2>
      </Main>
      <footer>
        <p>&copy; 2024 Beauty Shop</p>
      </footer>
    </Container>
  );
};

export default BeautyShop;

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 0;
  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Section = styled.section`
  margin-bottom: 2rem;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;
const Section2 = styled.section`
  margin-bottom: 2rem;
  text-align: center;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  padding: 1rem;
  max-width: 350px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    margin: 0.5rem;
    padding: 0.5rem;
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    width: 150px;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 10px 2rem;
  background-color: #0a51f6;
  text-decoration: none;
  color: white;
  border-radius: 12px;
`;
