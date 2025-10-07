import styled from "styled-components";
const Box = styled.div`
  margin: 40px;
  border: 1px black solid;
  background-color: #cccccc;
`;
const Content = styled.p`
  font-size: 16px;
  text-align: center;
`;
export default function StyledBox({ children }) {
    return (
        <Box>
            <Content> Styling React Components {children} </Content>
        </Box>
    );
}
