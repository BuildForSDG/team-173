import React from 'react';
import { Layout, Menu, Button, Input } from 'antd';
import { Route, NavLink, Link } from 'react-router-dom';
import { HomeOutlined, CopyOutlined, BookOutlined, UserOutlined, PlusOutlined, LogoutOutlined, SearchOutlined} from '@ant-design/icons';
import styled from 'styled-components';

const { Header, Sider, Content } = Layout;
const DashBoardLayout = ({ component: Component, rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                return (
                    <StyledContainer>
                        <Layout>
                            <Sider
                                trigger={null}
                                className="side-nav"
                                style={{ backgroundColor: "#593F62" }}
                            >
                                <TitleDiv>
                                    <h2 style={{ display: 'initial' }}>
                                        Give2Get
                                </h2>
                                </TitleDiv>
                                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{ backgroundColor: "#593F62" }}>
                                    <Menu.Item key="1">
                                        <NavLink exact to="/home">
                                            <HomeOutlined />
                                            <span>Home</span>
                                        </NavLink>
                                    </Menu.Item>
                                    <Menu.Item key="2">
                                        <NavLink exact to="/books">
                                            <CopyOutlined />
                                            <span>Books</span>
                                        </NavLink>
                                    </Menu.Item>
                                    <Menu.Item key="3">
                                        <NavLink exact to="/my-books">
                                            <BookOutlined />
                                            <span>My Books</span>
                                        </NavLink>
                                    </Menu.Item>
                                    <Menu.Item key="4">
                                        <NavLink exact to="/user">
                                            <UserOutlined />
                                            <span>User Profile</span>
                                        </NavLink>
                                    </Menu.Item>
                                </Menu>

                            </Sider>
                            <Layout>
                                <Header style={{ background: '#fff', padding: 12 }}>
                                    <div>
                                    <HeaderDiv className="header-content">
                                        <Button type="button" className="trigger" style={{ background: '#593F62', border: "1px white solid", color:'white'}}>
                                            <PlusOutlined/> Add a book
                                        </Button>
                                        <Link to='/'>
                                        <Button
                                            type="link"
                                            className="sign-out-btn"
                                            style= {{color:'black'}}
                                        >
                                            Log Out <LogoutOutlined />
                      
                                        </Button>
                                            </Link>  
                                    </HeaderDiv>
                                       
                                    </div>
                                </Header>
                                <Content
                                    style={{
                                       
                                        background: '#fff',
                                        minHeight: 240,
                                    }}
                                >
                                    <SearchDiv >
                                        <WidthDiv>
                                        <Input style={{ width: 200, marginRight: '20px', borderRadius: '8px' }} placeholder='Book title, Class, Subject' />
                                            
                                        <Button>
                                            Search  <SearchOutlined style={{ color: 'green' }} />
                                        </Button>
                                        </WidthDiv>
                                    </SearchDiv>
                                    <Component {...props} />

                                    
                                </Content>
                            </Layout>
                        </Layout>

                    </StyledContainer>
                )
            }}
        />
    )
}
const StyledContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  display: flex;
  .side-nav {
    z-index: 100;
      h2 {
        color: #ffffff;
        padding-left: 1em;
        font-size: 1.8rem;
        font-weight: 600;
        font-family: Ribeye;
      }
    }`
const TitleDiv = styled.div`
    margin-bottom: 15%;
    margin-top: 10%;
    
`
const HeaderDiv =  styled.div`
    display: flex;
    justify-content : space-between;
`
const SearchDiv = styled.div`
  background:#F0F2F5 ;
  padding: 10px;
`;
const WidthDiv = styled.div`
width: 70%;
padding-top: 0.5%;
padding-bottom: 0.5%;
`
export default DashBoardLayout;