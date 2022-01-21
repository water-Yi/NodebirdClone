import React,{useCallback} from 'react'
import {Card,Avatar,Button} from 'antd'

const UserProfile =({setIsLoggedIn}) =>{

    const onLogoutHandler =useCallback(() =>{
        setIsLoggedIn(false);
    },[setIsLoggedIn]);

    return (
   <Card 
   actions ={[
       <div key="twited">Twit <br/> 0</div>,
       <div key="followings">followings <br/> 0</div>,
       <div key="followers">followers<br/> 0</div>,
   ]}>
       
       <Card.Meta
       avatar={<Avatar>Su</Avatar>} 
        title="Su"
       />
       <Button onClick={onLogoutHandler}>LogOut</Button>
   </Card>
    )
}

export default UserProfile;