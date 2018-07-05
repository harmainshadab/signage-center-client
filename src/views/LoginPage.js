import React from "react";
import {Layout, Menu, Breadcrumb, Icon, Row, Col} from 'antd';
import "./AdminHome.css"
import ImageSlideForm from "../components/forms/ImageSlideForm";
import MapSlideForm from "../components/forms/MapSlideForm";
import WeatherSlide from "../components/slides/WeatherSlide";
import WeatherSlideForm from "../components/forms/WeatherSlideForm";
import PlaylistTablePage from "./PlaylistTablePage";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeComponent: <h1></h1>
        }
    }

    handleMenuSelect = (e) => {
        let component;

        if (e.key === "5") {
            component = <PlaylistTablePage/>
        } else if (e.key === "9") {
            component = <ImageSlideForm/>
        } else if (e.key === "11") {
            component = <MapSlideForm/>
        } else if (e.key === "12") {
            component = <WeatherSlideForm/>
        } else {
            component = <h1>Container</h1>
        }

        this.setState({activeComponent: component})
    };

    render() {
        return (
            <Layout className="container">
                <Header className="header">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">Home</Menu.Item>
                    </Menu>
                </Header>
                <Layout style={{margin: 'auto',
                    border: '1px solid black',
                    padding: '60px'}} className="container">
                    <h1>Login page</h1>
                    <div style={{display: 'flex'}}>
                    <div>UserName:</div>
                        <div><input type={"text"} placeholder={"enter username"} /></div>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div>PAssWord:</div>
                        <div><input type={"password"} placeholder={"enter Pasword"} /></div>
                    </div>
                    <button type={"submit"}><a href={"/admin"}>Submit</a></button>
                </Layout>
            </Layout>
        )
    }
}

export default LoginPage;