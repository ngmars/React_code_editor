import React,{useState} from 'react';
import {Layout, Menu,Popover, Button,Spin  } from 'antd';
import {useSelector, useDispatch } from 'react-redux';
import changeSyntaxAction from '../../Redux/SyntaxType/actions';
import genShareableLinkAction from '../../Redux/Shareable/actions';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
  } from '@ant-design/icons';
import { LoadingOutlined } from '@ant-design/icons';
const {changeSyntax} = changeSyntaxAction
const {shareLink} = genShareableLinkAction
const { Sider } = Layout;

export default function Sidebar(){
    const dispatch = useDispatch();
    const htmlCode= useSelector((state:any)=>state?.addCode?.htmlCode);
    const cssCode= useSelector((state:any)=>state?.addCode?.cssCode);
    const jsCode= useSelector((state:any)=>state?.addCode?.jsCode);
    const [collapsable, setCollapsable] = useState(true);
    const [visible,setVisible] = useState(false);
    const link=useSelector((state:any)=>state?.shareableLink?.successLink)
    const linkLoading=useSelector((state:any)=>state?.shareableLink?.loading)

    const onCollapse = (collapsed:any) => {
        //console.log(collapsed);
        setCollapsable(collapsed);
      };
    const clickHandler=()=>{
        dispatch(shareLink({htmlCode,cssCode,jsCode}))
    }
    const syntaxChangeHandler = (event:any)=>{
        //console.log(event);
        if(event==1){
            //console.log('Index.html');
            dispatch(changeSyntax('html'))
        }
        else if(event==2){
            //console.log('Index.css');
            dispatch(changeSyntax('css'))
        }
        else if(event==3){
            //console.log('Index.js');
            dispatch(changeSyntax('js'))
        }
        else{
            console.log('NOT A VALID CLICK');
        }
    }

    const closePopOver= ()=>{
        navigator.clipboard.writeText('heh')
        setVisible(false)
    }
    const PopOverToggle= ()=>{
        setVisible(!visible)
    }

    let DispLink;
    if(linkLoading==false){
        DispLink=(<a href={window.location.href+link}><div>{window.location.href+link}</div></a>)
    }else{
        DispLink=(<LoadingOutlined style={{ fontSize: 24 }} spin />)
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
                <Popover 
                    placement="right" 
                    title={'Your Shareable link!'} 
                    trigger="click"
                    visible={visible}
                    onVisibleChange={PopOverToggle}
                    content={<>{DispLink}<br/><a onClick={closePopOver}>Copy</a></>} 
                >
                <Button onClick={clickHandler} style={{marginTop:"70vh",marginLeft:"5%"}}>Share</Button>
                </Popover>
        </Sider> 
        )
}