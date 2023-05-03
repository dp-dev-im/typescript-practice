import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  h1 {
    color: ${(props) => props.theme.textColor};
  }
`;

function Th() {
  return (
    <Container>
      <h1>Theme practice</h1>
    </Container>
  );
}

export default Th;
