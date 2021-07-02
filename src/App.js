import "./App.css";
import styled from "styled-components";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function App() {
  return (
    <div className="App">
      <h1 className="fullname">John Doe</h1>
      {/* <div className="container">
        <div className="box1"></div>
        <div className="box2"></div>
        <div className="box3"></div>
      </div> */}
      <Button>About Me</Button>
      <a href="http://www.linkedin.com">
        <Icon />
      </a>
    </div>
  );
}
export default App;
export const Icon = styled(LinkedInIcon)`
  font-size: 7em !important;
  position: absolute;
  bottom: 100px;
`;

export const Button = styled.button`
  padding: 10px;
`;
