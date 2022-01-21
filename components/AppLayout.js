import React ,{useState}from "react"; 
import { Menu, Input,Space, Row, Col } from "antd";
import PropTypes from "prop-types";
//인프런 강의 page와 레이아웃부분 참고

import styled from 'styled-components'

import UserProfile from './UserProfile'
import LoginForm from './LoginForm'

import Link from "next/link";
 

const SerchBar = styled(Input.Search)`
  width: 200;
  vertical-align:middle;
  `

const AppLayout = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
 
  return (
    <>
    <Menu mode="horizontal">
      <Menu.Item>
        <Link href="/">NodeBird</Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/profile">Profile</Link>
      </Menu.Item> 
      <Menu.Item>
        <Link href="/signup">SignUp</Link>
      </Menu.Item> 
      <Space direction='vertical'>
      <SerchBar/>
      </Space>
    </Menu>
    <Row gutter={8}>
      <Col xs={24} md={6}>
        {isLoggedIn? <UserProfile setIsLoggedIn={setIsLoggedIn}/> : <LoginForm setIsLoggedIn={setIsLoggedIn}/>}
      </Col> 
      <Col xs={24} md={12}>
        {children}
      </Col>
      <Col xs={24} md={6}>
        <a href="#">made by Won</a>
      </Col>
    </Row>
    </>
  )
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired, //type을 정해준다.
};

export default AppLayout;
