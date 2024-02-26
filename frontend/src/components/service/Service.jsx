import styled from "styled-components";

const Services = () => {
  const services = [
    {
      title: "Hair Care",
      description:
        "Expert cuts, coloring, and styling for all hair types. From classic cuts to trendy styles, our stylists will help you achieve the perfect look.",
      image: "https://picsum.photos/id/1010/800/600?grayscale",
    },
    {
      title: "Skin Care",
      description:
        "Facials, massages, and treatments for a healthy and radiant glow. We offer a variety of options to pamper your skin and address specific concerns.",
      image: "https://picsum.photos/id/1020/800/600?grayscale",
    },
    {
      title: "Makeup",
      description:
        "Enhance your natural beauty with our expert makeup artists. We offer a range of services from everyday makeup to special occasion glam.",
      image: "https://picsum.photos/id/1030/800/600?grayscale",
    },
    // Add more services here
  ];

  return (
    <ServiceContainer>
      <h2>Our Services</h2>
      <ServiceGrid>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <ServiceImage src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </ServiceCard>
        ))}
      </ServiceGrid>
    </ServiceContainer>
  );
};

export default Services;

// Styled components
const ServiceContainer = styled.section`
  padding: 2rem 0;
  text-align: center;
  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`;

const ServiceGrid = styled.div`
  display: grid;
  margin: 0 8rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
`;
