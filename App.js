import "./App.css";
import Todolist from "./Demo-app/Todolist";
//import InputItems from "./ToDO-App/components/InputItems";
//import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "@material-ui/core";
function App() {
  const ulStyle = {
    backgroundColor: "cyan",
    textAlign: "center",
    border: "2px solid green",
    width: "50%",
    display: "inline-block",
    marginLeft: " 15%",
  };
  return (
    <div>
      <Container maxWidth="xl">
        <h1 style={ulStyle}>TodDo List App</h1>
      </Container>
      <Todolist />
    </div>
  );
}

export default App;
