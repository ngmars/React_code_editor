import React,{useState} from 'react';
import {Layout, Menu } from 'antd';
import {useDispatch } from 'react-redux';
import changeSyntaxAction from '../../Redux/SyntaxType/actions';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
  } from '@ant-design/icons';
const {changeSyntax} = changeSyntaxAction
const { Sider } = Layout;
export default function Sidebar(){
    const dispatch = useDispatch();

    const [collapsable, setCollapsable] = useState(true)

    const onCollapse = (collapsed:any) => {
        console.log(collapsed);
        setCollapsable(collapsed);
      };
    
    const syntaxChangeHandler = (event:any)=>{
        console.log(event);
        if(event==1){
            console.log('Index.html');
            dispatch(changeSyntax('html'))
        }
        else if(event==2){
            console.log('Index.css');
            dispatch(changeSyntax('css'))
        }
        else if(event==3){
            console.log('Index.js');
            dispatch(changeSyntax('js'))
        }
        else{
            console.log('NOT A VALID CLICK');
        }
    }
return (

        <Sider collapsible collapsed={collapsable} onCollapse={onCollapse}>
                <div className="logo" />
                <Menu onClick={(e) =>syntaxChangeHandler(e.key)} theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="4" >
                    </Menu.Item>
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        Index.html
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        Index.css
                    </Menu.Item>
                    <Menu.Item key="3" icon={<FileOutlined />}>
                        Index.js
                    </Menu.Item>
                </Menu>
        </Sider> 
        )
}