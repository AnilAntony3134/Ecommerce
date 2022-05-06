import styledComponents from "styled-components";

const Container = styledComponents.div`
    // margin-top: 10px;
    height: 30px;
    background-color: teal;
    display:flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 14px;
    font-weight: 500;
`;
const Announcements = () => {
  return (
    <Container>
      Super Deal! Free Shipping over Rs 200
    </Container>
  )
};

export default Announcements;
