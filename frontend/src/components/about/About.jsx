import styled from "styled-components";
import about from "../about/about.jpg"

const AboutUs = () => {
  return (
    <AboutContainer>
      <Title>About Us</Title>
      <Content>
        <p>
        Découvrez l'élégance et la détente au cœur de notre salon de beauté. Nous sommes votre destination ultime pour une transformation en beauté, offrant une gamme complète de services de coiffure, de maquillage professionnel et de soins du visage personnalisés. Laissez nos experts stylistes donner vie à vos idées capillaires, tandis que nos artistes du maquillage accentuent votre beauté naturelle.

Plongez dans une expérience luxueuse avec nos soins du visage conçus pour raviver et revitaliser votre peau. Que vous recherchiez une coupe tendance, un maquillage éclatant pour une occasion spéciale, ou simplement un moment de détente pour votre peau, notre équipe dévouée est là pour vous offrir des services exceptionnels et un accueil chaleureux.

Chez SNM L'APPART BEAUTE, la beauté va au-delà de l'apparence extérieure ; c'est une expérience qui éveille la confiance en soi et le bien-être intérieur. Nous sommes impatients de vous accueillir dans notre oasis de beauté, où chaque visite est une invitation à vous sentir et à paraître au mieux de votre forme. Réservez votre moment de détente et de glamour avec nous aujourd'hui !"





        </p>
       
      </Content>
      <Image
        src={about}
        alt="About Us Image"
      />
    </AboutContainer>
  );
};

export default AboutUs;

// Styled components
const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
`;

const Content = styled.div`
  text-align: justify;
  width: 60%;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 40%;
  height: auto;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 1rem;
  }
`;
