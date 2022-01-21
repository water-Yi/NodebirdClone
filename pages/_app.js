import React from 'react'
import PropTypes from 'prop-types';
import 'antd/dist/antd.css'
import Head from 'next/head'

//antd디자인이나 pages 파일들에게 공통으로 적용되는 것들을
//_app.js에서 여기서 넣어주면 한번에 적용된다.
//index.js의 부모격 index.js의 리턴값이 Component가 된다.

const NodeBird =({Component}) =>{
    
    return(
        <>
        <Head>
            <meta charset="utf-8"/>
            <title>NodeBird</title>
        </Head>
        <Component/>
        </>
    );
}

NodeBird.propTypes ={
    Component: PropTypes.elementType.isRequired,
}

export default NodeBird;