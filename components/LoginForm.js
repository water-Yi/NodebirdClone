import React,{useState,useCallback} from 'react'
import {Form,Input,Button} from 'antd';
import Link from 'next/link'
import styled from 'styled-components'

const ButtonWrapper = styled.div`
 margin-top: 10px;
 display : flex;
 justify-content :center;
`

const DivWrapper = styled.div`
display:flex;
justify-content:center; 
`



const LoginForm =({setIsLoggedIn}) => {
    const [id,setId] =useState('skfk1320@naver.com')
    const [password, setPassword]=useState('7009900')

    const onChangeId =useCallback((e)=>{  
       setId(e.target.value)
    },[])

    const onChangePassword =useCallback((e)=>{    
        setPassword(e.target.value)
    },[])

    const onSubmitForm = useCallback(()=>{
        console.log(id,password)
        setIsLoggedIn(true)
    },[id,password])

 return(
<DivWrapper>
    <Form onFinish={onSubmitForm}>
    <div>
        <label htmlFor='user-id'>Id</label>
        <br/>
        <Input 
            name="user-id"
            value={id} 
            onChange={onChangeId} 
            required />
    </div>
    <div>
    <label htmlFor='user-password'>Password</label>
        <br/>
        <Input 
            name="user-password" 
            type="password"
            value={password} 
            onChange={onChangePassword} 
            required />
    </div>
    <ButtonWrapper>
    <Button 
        type="primary" 
        htmlType='submit' 
        loading={false}>Login
    </Button>
    <Link href="/signup"><Button>sign up</Button></Link>
    </ButtonWrapper>
    </Form>
</DivWrapper>
 ) 
}

export default LoginForm;