import { useState } from "react";
import "./App.css";
import Button from "./components/button";
import Navbar from "./components/navbar";
import { theme } from "./styles/themes";
import { Container, FlexColumn } from "./components/styles";
import Card from "./components/card";
import ColorPicker from "./components/color-picker";
import { getPalette } from "./styles/palette";
import Input from "./components/input";
import IconButton from "./components/icon-button";
import { FaTrash } from "react-icons/fa";
import Checkbox from "./components/checkbox";

function App() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="App">
      <Navbar
        title="TEST"
        items={[
          { name: "Home", url: "/home" },
          { name: "About", url: "/about" },
          { name: "Contact", url: "/contact" },
        ]}
      />
      <Container>
        <FlexColumn>
          <Button onClick={() => alert("hello")} color={theme.colors.primary}>
            Hello World
          </Button>
          <Card
            title="Title"
            secondary="secondary"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint inventore reprehenderit illo impedit eveniet rem neque quibusdam, tempora iure, expedita laudantium, placeat perferendis alias quas deleniti saepe commodi odit? Eaque."
            buttonText="Open"
            onClick={() => alert("opened")}
          />
          <ColorPicker palette={getPalette()} />
          <Input label="Email" type="email" id="email" name="email" />
          <IconButton icon={FaTrash} onClick={() => alert("test")} />
          <Checkbox onChecked={() => setChecked(!checked)} checked={checked} />
        </FlexColumn>
      </Container>
    </div>
  );
}

export default App;
