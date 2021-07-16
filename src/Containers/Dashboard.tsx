import React from 'react';
import { useDispatch } from 'react-redux';
import Editor from '../Components/Editor/EditorComponent';
import Sidebar from '../Components/Sidebar/SideBar';
import {Row,Layout} from 'antd';
import getCodeAction from '../Redux/Codebase/actions';
const { Content } = Layout;
const {getCode} = getCodeAction;
export default function Dashboard(){
    const dispatch = useDispatch();
    let sharedLink = window.location.href.slice(22)
    console.log(sharedLink)
    let EditorControl;
    
    if(sharedLink.length==0){
        console.log(sharedLink)
    }
    else{
        dispatch(getCode(sharedLink));
    }
    return(
        <Layout style={{ minHeight: '100vh' }}>
            <Sidebar/>
            <Content style={{ margin: '0 0px' }}>
                <Row>
                    <Editor/>
                </Row>    
            </Content>
        </Layout>
    )
}