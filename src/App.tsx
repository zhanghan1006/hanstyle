import React from "react";
import Button from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import Submenu from "./components/Menu/submenu";
import Card from "./components/Card/card";
import Divider from "./components/Divider/divider";
import Icon from "./components/Icon/icon";
import Pagination from "./components/Pagination/pagination";
import Image from "./components/Image/image";
import Banner from "./components/Banner/banner";
import List from "./components/List/list";
import ListItem from "./components/List/listItem";
import Dropdown from "./components/Dropdown/dropdown";
import DropdownButton from "./components/Dropdown/dropdownButton";
import DropdownList from "./components/Dropdown/dropdownList";
import Expander from "./components/Expander/expander";
import Input from "./components/Input/input";
import Banner1 from "./image/banner-1.jpg";
import Banner2 from "./image/banner-2.jpg";
import Banner3 from "./image/banner-3.jpg";
import Banner4 from "./image/banner-4.jpg";
import Banner5 from "./image/banner-5.jpg";
import * as CSS from "csstype";
import InputContent from "./components/Input/inputContent";
import InputAffix from "./components/Input/inputAffix";
import AutoComplete from "./components/AutoComplete/autoComplete";

const styles: CSS.Properties = { margin: "50px" };

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header" style={styles}>
        <>
          <Button buttonSize="large" buttonThemeColor="orange" buttonDisabled>
            Large Button
          </Button>
          <Button buttonSize="large" buttonThemeColor="blue">
            Large Button
          </Button>
          <Button buttonSize="large" buttonThemeColor="red">
            Large Button
          </Button>
          <Button buttonSize="large" buttonThemeColor="orange">
            Large Button
          </Button>
          <Button
            buttonSize="large"
            buttonThemeColor="blue"
            buttonType="hollow"
          >
            Large Button
          </Button>
          <Button buttonSize="large" buttonThemeColor="red" buttonType="hollow">
            Large Button
          </Button>
          <Button
            buttonSize="large"
            buttonThemeColor="orange"
            buttonType="hollow"
          >
            Large Button
          </Button>
          <Button
            buttonSize="small"
            buttonThemeColor="blue"
            buttonType="inverse"
          >
            Large Button
          </Button>
          <Button
            buttonSize="middle"
            buttonThemeColor="red"
            buttonType="inverse"
          >
            Large Button
          </Button>
          <Button
            buttonSize="large"
            buttonThemeColor="orange"
            buttonType="inverse"
          >
            Large Button
          </Button>
          <Button
            buttonSize="large"
            buttonThemeColor="orange"
            buttonShape="rectangular"
            buttonType="inverse"
          >
            Large Button
          </Button>
          <Button
            buttonSize="large"
            buttonThemeColor="orange"
            buttonShape="rounded"
          >
            Large Button
          </Button>
          <Button
            buttonSize="large"
            buttonThemeColor="orange"
            buttonShape="elliptic"
          >
            Large Button
          </Button>
          <Button
            buttonShape={"circle"}
            buttonSize={"large"}
            buttonType={"hollow"}
          >
            <Icon icon={"coffee"} />
          </Button>
          <Button
            buttonShape={"circle"}
            buttonSize={"middle"}
            buttonType={"hollow"}
          >
            <Icon icon={"coffee"} />
          </Button>
          <Button
            buttonShape={"circle"}
            buttonSize={"small"}
            buttonType={"hollow"}
          >
            <Icon icon={"coffee"} />
          </Button>
        </>
        <>
          <Menu>
            <MenuItem>Products</MenuItem>
            <MenuItem>Documentation</MenuItem>
            <MenuItem>Support</MenuItem>
            <MenuItem menuItemDisabled={true}>Disabled</MenuItem>
            <MenuItem>Me</MenuItem>
          </Menu>
          <Menu menuThemeColor="blue">
            <MenuItem>Products</MenuItem>
            <MenuItem>Documentation</MenuItem>
            <MenuItem>Support</MenuItem>
            <MenuItem menuItemDisabled={true}>Disabled</MenuItem>
            <MenuItem>Me</MenuItem>
          </Menu>
          <Menu menuThemeColor="red">
            <MenuItem>Products</MenuItem>
            <MenuItem>Documentation</MenuItem>
            <MenuItem>Support</MenuItem>
            <MenuItem menuItemDisabled={true}>Disabled</MenuItem>
            <MenuItem>Me</MenuItem>
          </Menu>
          <Menu menuStyle="border-top">
            <MenuItem>Products</MenuItem>
            <MenuItem>Documentation</MenuItem>
            <MenuItem>Support</MenuItem>
            <MenuItem menuItemDisabled={true}>Disabled</MenuItem>
            <MenuItem>Me</MenuItem>
          </Menu>
          <Menu menuStyle="border-bottom" menuThemeColor="blue">
            <MenuItem>Products</MenuItem>
            <MenuItem>Documentation</MenuItem>
            <MenuItem>Support</MenuItem>
            <MenuItem menuItemDisabled={true}>Disabled</MenuItem>
            <Submenu submenuTitle={"Me"} submenuTrigger={"hover"}>
              <MenuItem>Products</MenuItem>
              <MenuItem>Documentation</MenuItem>
              <MenuItem>Support</MenuItem>
            </Submenu>
            <MenuItem>Login</MenuItem>
          </Menu>
        </>
        <>
          <Divider dividerStyle="plain">Left</Divider>
          <Card style={{ width: "500px" }}>
            <Button buttonSize="large" buttonThemeColor="blue">
              Large Button
            </Button>
            <Divider>Empty</Divider>
            <Button buttonSize="large" buttonThemeColor="red">
              Large Button
            </Button>
            <Divider dividerStyle="plain">Left</Divider>
            <Button buttonSize="large" buttonThemeColor="orange">
              Large Button
            </Button>
            <Divider dividerStyle="plain" dividerTextPosition="center">
              Center
            </Divider>
            <Button buttonSize="large" buttonThemeColor="orange">
              <Icon icon="check-square" iconThemeColor="blue" />
              Large Button
            </Button>
            <Divider dividerStyle="plain" dividerTextPosition="right">
              Right
            </Divider>
            <Button buttonSize="large" buttonThemeColor="orange">
              <Icon icon={["fab", "apple"]} iconThemeColor="gray-15" />
              Large Button
            </Button>
            <Pagination maxIndex={5} paginationThemeColor={"blue"} />
          </Card>
          <Icon icon="coffee" />
          <Icon icon={["fab", "google"]} iconThemeColor="orange" />
        </>
        <>
          <List
            listBorderRadiusSize={"large"}
            listBorderColor={"orange"}
            listDividerColor={"blue"}
          >
            <ListItem>
              <Button buttonSize="large" buttonThemeColor="blue">
                Large Button
              </Button>
            </ListItem>
            <ListItem>
              <Button buttonSize="large" buttonThemeColor="blue">
                Large Button
              </Button>
            </ListItem>
            <ListItem>
              <Button buttonSize="large" buttonThemeColor="blue">
                Large Button
              </Button>
            </ListItem>
            <ListItem>
              <Button buttonSize="large" buttonThemeColor="blue">
                Large Button
              </Button>

              <br />
              <br />
              <br />
            </ListItem>
            <ListItem>
              <Banner>
                <Image
                  src={Banner1}
                  stretchSize={[1100, 400]}
                  clipSize={[0, 1100, 400, 0]}
                />
                <Image
                  src={Banner2}
                  stretchSize={[1100, 400]}
                  clipSize={[0, 1100, 400, 0]}
                />
                <Image
                  src={Banner3}
                  stretchSize={[1100, 400]}
                  clipSize={[0, 1100, 400, 0]}
                />
                <Image
                  src={Banner4}
                  stretchSize={[1100, 400]}
                  clipSize={[0, 1100, 400, 0]}
                />
                <Image
                  src={Banner5}
                  stretchSize={[1100, 400]}
                  clipSize={[0, 1100, 400, 0]}
                />
              </Banner>
            </ListItem>
          </List>
        </>
        <>
          <Dropdown
            dropdownTrigger={"hover"}
            dropdownThemeColor={"orange"}
            dropdownDisabled={false}
          >
            <DropdownButton>
              <Button>Dropdown Button</Button>
            </DropdownButton>
            <DropdownList
              dropdownListBorderColor={"green"}
              dropdownListDividerColor={"blue"}
              dropdownListBorderRadiusSize={"none"}
              dropdownListShadowSize={"middle"}
              dropdownListInteractionLevel={"selectable"}
              dropdownListInteractionStyle={"lighten-shadow"}
              dropdownListPlacement={"rightTop"}
              dropdownListWidth={400}
              dropdownListHeight={700}
              dropdownListThemeColor={"blue"}
            >
              <ListItem>
                <p>
                  这是一些文字这是一些文字这是一些文字这是一些文字这是一些文字这是一些文字
                </p>
              </ListItem>
              <ListItem>
                <p>
                  这是一些文字这是一些文字这是一些文字这是一些文字这是一些文字这是一些文字
                </p>
              </ListItem>
              <ListItem>
                <p>
                  这是一些文字这是一些文字这是一些文字这是一些文字这是一些文字这是一些文字
                </p>
              </ListItem>
              <ListItem>
                <Expander expanderHeight={400}>
                  <Image
                    src={Banner4}
                    stretchSize={[1100, 400]}
                    clipSize={[0, 1100, 400, 0]}
                  />
                </Expander>
              </ListItem>
              <ListItem>
                <p>这是一些文字这是一些文字这是一些文字</p>
              </ListItem>
              <ListItem>
                <Button buttonSize="large" buttonThemeColor="blue">
                  按钮
                </Button>
              </ListItem>
            </DropdownList>
          </Dropdown>
          <Dropdown dropdownTrigger={"click"} dropdownDisabled={true}>
            <DropdownButton>
              <Button buttonDisabled={true}>Dropdown Button</Button>
            </DropdownButton>
            <DropdownList
              dropdownListBorderColor={"green"}
              dropdownListDividerColor={"blue"}
              dropdownListBorderRadiusSize={"none"}
              dropdownListShadowSize={"middle"}
              dropdownListInteractionLevel={"selectable"}
              dropdownListInteractionStyle={"lighten-shadow"}
              dropdownListPlacement={"rightTop"}
              dropdownListWidth={400}
              dropdownListHeight={700}
            >
              <ListItem>
                <p>
                  这是一些文字这是一些文字这是一些文字这是一些文字这是一些文字这是一些文字
                </p>
              </ListItem>
              <ListItem>
                <p>
                  这是一些文字这是一些文字这是一些文字这是一些文字这是一些文字这是一些文字
                </p>
              </ListItem>
              <ListItem>
                <p>
                  这是一些文字这是一些文字这是一些文字这是一些文字这是一些文字这是一些文字
                </p>
              </ListItem>
            </DropdownList>
          </Dropdown>
        </>
        <>
          <List
            listBorderColor={"none"}
            listDividerColor={"none"}
            listBorderRadiusSize={"middle"}
            listShadowSize={"middle"}
            listInteractionStyle={"lighten-shadow"}
            listThemeColor={"red"}
            listInteractionLevel={"selectable"}
          >
            <ListItem>
              <p>
                这是一些文字这是一些文字这是一些文字这是一些文字这是一些文字这是一些文字
              </p>
            </ListItem>
            <ListItem
              listItemDisabled={true}
              listItemOnSelectAfter={(event) => {
                console.log(event.target);
              }}
            >
              <p>
                这是一些文字这是一些文字这是一些文字这是一些文字这是一些文字这是一些文字
              </p>
            </ListItem>
            <ListItem
              listItemOnSelectAfter={(event) => {
                console.log(event.target);
              }}
            >
              <p>
                这是一些文字这是一些文字这是一些文字这是一些文字这是一些文字这是一些文字
              </p>
            </ListItem>
            <ListItem>
              <p>
                这是一些文字这是一些文字这是一些文字这是一些文字这是一些文字这是一些文字
              </p>
            </ListItem>
            <ListItem>
              <p>
                这是一些文字这是一些文字这是一些文字这是一些文字这是一些文字这是一些文字
              </p>
            </ListItem>
            <ListItem>
              <p>
                这是一些文字这是一些文字这是一些文字这是一些文字这是一些文字这是一些文字
              </p>
            </ListItem>
            <ListItem>
              <p>
                这是一些文字这是一些文字这是一些文字这是一些文字这是一些文字这是一些文字
              </p>
            </ListItem>
            <ListItem>
              <p>
                这是一些文字这是一些文字这是一些文字这是一些文字这是一些文字这是一些文字
              </p>
            </ListItem>
            <ListItem>
              <Expander expanderHeight={1100}>
                <Image
                  src={Banner4}
                  stretchSize={[400, 1100]}
                  clipSize={[0, 400, 1100, 0]}
                />
              </Expander>
            </ListItem>
            <ListItem listItemDisabled={true}>
              <p>
                这是一些文字这是一些文字这是一些文字这是一些文字这是一些文字这是一些文字
              </p>
            </ListItem>
            <ListItem>
              <Button buttonSize="large" buttonThemeColor="blue">
                按钮
              </Button>
            </ListItem>
          </List>
        </>
        <>
          <br />
          <Input
            inputSize={"small"}
            inputThemeColor={"orange"}
            inputStyle={"luminous"}
          >
            <InputContent inputContentInitValue={"Hello World"} />
            <InputAffix>@qq.com</InputAffix>
          </Input>
          <br />
          <Input
            inputSize={"middle"}
            inputThemeColor={"orange"}
            inputStyle={"luminous"}
          >
            <InputContent inputContentInitValue={"Hello World"} />
            <InputAffix>@qq.com</InputAffix>
          </Input>
          <br />
          <Input
            inputSize={"large"}
            inputThemeColor={"orange"}
            inputStyle={"luminous"}
          >
            <InputContent inputContentInitValue={"Hello World"} />
            <InputAffix>@qq.com</InputAffix>
          </Input>
          <br />
          <AutoComplete>
            <ListItem>1</ListItem>
            <ListItem>22</ListItem>
            <ListItem>333</ListItem>
            <ListItem>4444</ListItem>
            <ListItem>55555</ListItem>
          </AutoComplete>
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
