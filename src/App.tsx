import React from "react";
import Button from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import Card from "./components/Card/card";
import Divider from "./components/Divider/divider";
// import SubMenu from "./components/Menu/subMenu";
import Icon from "./components/Icon/icon";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import * as CSS from "csstype";

library.add(fas);
library.add(fab);

const styles: CSS.Properties = { margin: "50px" };

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header" style={styles}>
        <>
          <Button btnSize="large" btnThemeColor="orange" disabled>
            Large Button
          </Button>
          <Button btnSize="large" btnThemeColor="blue">
            Large Button
          </Button>
          <Button btnSize="large" btnThemeColor="red">
            Large Button
          </Button>
          <Button btnSize="large" btnThemeColor="orange">
            Large Button
          </Button>
          <Button btnSize="large" btnThemeColor="blue" btnType="hollow">
            Large Button
          </Button>
          <Button btnSize="large" btnThemeColor="red" btnType="hollow">
            Large Button
          </Button>
          <Button btnSize="large" btnThemeColor="orange" btnType="hollow">
            Large Button
          </Button>
          <Button btnSize="large" btnThemeColor="blue" btnType="inverse">
            Large Button
          </Button>
          <Button btnSize="large" btnThemeColor="red" btnType="inverse">
            Large Button
          </Button>
          <Button btnSize="large" btnThemeColor="orange" btnType="inverse">
            Large Button
          </Button>
          <Button
            btnSize="large"
            btnThemeColor="orange"
            btnShape="rectangular"
            btnType="inverse"
          >
            Large Button
          </Button>
          <Button btnSize="large" btnThemeColor="orange" btnShape="rounded">
            Large Button
          </Button>
          <Button btnSize="large" btnThemeColor="orange" btnShape="elliptic">
            Large Button
          </Button>
        </>
        <>
          <Menu>
            <MenuItem menuItemIndex={1}>Products</MenuItem>
            <MenuItem menuItemIndex={2}>Documentation</MenuItem>
            <MenuItem menuItemIndex={3}>Support</MenuItem>
            <MenuItem menuItemIndex={4} menuItemDisabled={true}>
              Disabled
            </MenuItem>
            <MenuItem menuItemIndex={5}>Me</MenuItem>
          </Menu>
          <Menu menuThemeColor="blue">
            <MenuItem menuItemIndex={1}>Products</MenuItem>
            <MenuItem menuItemIndex={2}>Documentation</MenuItem>
            <MenuItem menuItemIndex={3}>Support</MenuItem>
            <MenuItem menuItemIndex={4} menuItemDisabled={true}>
              Disabled
            </MenuItem>
            <MenuItem menuItemIndex={5}>Me</MenuItem>
          </Menu>
          <Menu menuThemeColor="red">
            <MenuItem menuItemIndex={1}>Products</MenuItem>
            <MenuItem menuItemIndex={2}>Documentation</MenuItem>
            <MenuItem menuItemIndex={3}>Support</MenuItem>
            <MenuItem menuItemIndex={4} menuItemDisabled={true}>
              Disabled
            </MenuItem>
            <MenuItem menuItemIndex={5}>Me</MenuItem>
          </Menu>
          <Menu menuStyle="border-top">
            <MenuItem menuItemIndex={1}>Products</MenuItem>
            <MenuItem menuItemIndex={2}>Documentation</MenuItem>
            <MenuItem menuItemIndex={3}>Support</MenuItem>
            <MenuItem menuItemIndex={4} menuItemDisabled={true}>
              Disabled
            </MenuItem>
            <MenuItem menuItemIndex={5}>Me</MenuItem>
          </Menu>
          <Menu menuStyle="border-bottom" menuThemeColor="blue">
            <MenuItem menuItemIndex={1}>Products</MenuItem>
            <MenuItem menuItemIndex={2}>Documentation</MenuItem>
            <MenuItem menuItemIndex={3}>Support</MenuItem>
            <MenuItem menuItemIndex={4} menuItemDisabled={true}>
              Disabled
            </MenuItem>
            <MenuItem menuItemIndex={5}>Me</MenuItem>
          </Menu>
        </>
        <>
          <Divider dividerStyle="plain">Left</Divider>
          <Card style={{ width: "500px" }}>
            <Button btnSize="large" btnThemeColor="blue">
              Large Button
            </Button>
            <Divider>Empty</Divider>
            <Button btnSize="large" btnThemeColor="red">
              Large Button
            </Button>
            <Divider dividerStyle="plain">Left</Divider>
            <Button btnSize="large" btnThemeColor="orange">
              Large Button
            </Button>
            <Divider dividerStyle="plain" dividerTextPosition="center">
              Center
            </Divider>
            <Button btnSize="large" btnThemeColor="orange">
              <Icon icon="check-square" iconThemeColor="blue" />
              Large Button
            </Button>
            <Divider dividerStyle="plain" dividerTextPosition="right">
              Right
            </Divider>
            <Button btnSize="large" btnThemeColor="orange">
              <Icon icon={["fab", "apple"]} iconThemeColor="white" />
              Large Button
            </Button>
          </Card>
          <Icon icon="coffee" />
          <Icon icon={["fab", "google"]} iconThemeColor="orange" />
        </>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
