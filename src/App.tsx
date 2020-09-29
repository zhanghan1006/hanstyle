import React from "react";
import Button from "./components/Button/button";
// import Menu from "./components/Menu/menu";
// import MenuItem from "./components/Menu/menuItem";
// import SubMenu from "./components/Menu/subMenu";
// import Icon from "./components/Icon/icon";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
//
// library.add(fas);

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Button size="large" themeColor="blue">
          Large Button
        </Button>
        <Button size="large" themeColor="red">
          Large Button
        </Button>
        <Button size="large" themeColor="orange">
          Large Button
        </Button>
        <Button size="large" themeColor="blue" btnType="hollow">
          Large Button
        </Button>
        <Button size="large" themeColor="red" btnType="hollow">
          Large Button
        </Button>
        <Button size="large" themeColor="orange" btnType="hollow">
          Large Button
        </Button>
        <Button size="large" themeColor="blue" btnType="inverse">
          Large Button
        </Button>
        <Button size="large" themeColor="red" btnType="inverse">
          Large Button
        </Button>
        <Button size="large" themeColor="orange" btnType="inverse">
          Large Button
        </Button>
        <Button size="large" themeColor="orange" shape="rectangular" btnType="inverse">
          Large Button
        </Button>
        <Button size="large" themeColor="orange" shape="rounded">
          Large Button
        </Button>
        <Button size="large" themeColor="orange" shape="elliptic">
          Large Button
        </Button>
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
