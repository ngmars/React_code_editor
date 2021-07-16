import React from 'react';

import Editor from '../Components/Editor/EditorComponent';
import Sidebar from '../Components/Sidebar/SideBar';
import {Row,Layout} from 'antd';

const { Content } = Layout;

export default function Dashboard(){
    
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