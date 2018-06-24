import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Breadcrumb, Menu, Icon, Row, Col } from 'antd';
import 'antd/dist/antd.css';
const { Header, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends Component {

  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    /*console.log('click ', e);
    this.setState({
      current: e.key,
    });*/
    let xmlhttp = new XMLHttpRequest();
  	xmlhttp.open("GET","http://127.0.0.1:8000/test",true);
  	xmlhttp.setRequestHeader("Content-type","application/json");
  	xmlhttp.send();
  	//xmlhttp.send(str);如果是POST请求
  	//alert(xmlhttp.readyState);
  	//alert(xmlhttp.status);

  	xmlhttp.onreadystatechange = () =>{
  		var state = "The readyState is " + xmlhttp.readyState;
  		alert(state);
	  	if (xmlhttp.readyState == XMLHttpRequest.DONE){
	  		if (xmlhttp.status == 200){
	  			var res = JSON.parse(xmlhttp.responseText);
	  			alert(res.wahaha);
	  		}else{
	  			alert("发送请求失败！");
	  		}
	  	}
  	}
  }

  render() {
    return (
      <Layout>

        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>

          <div style={{float: 'left', display: 'inline'}}>
            <font color='white' size='5'>艺术品量化投资平台</font>
          </div>

          <div style={{display:'inline', float:'left'}}>
            <a className="main-label"  href={'/'} style={{color:'#ecf6fd'}}>&nbsp;&nbsp;&nbsp;&nbsp;[艺术投资]</a>
          </div>
          <div style={{display:'inline',float:'left'}}>
            <a className="main-label" href={'/'} style={{color:'#ecf6fd'}}>&nbsp;&nbsp;&nbsp;&nbsp;[艺术社区]</a>
          </div>
          <div style={{display:'inline',float:'left'}}>
            <a className="main-label" href={'/'} style={{color:'#ecf6fd'}}>&nbsp;&nbsp;&nbsp;&nbsp;[艺术商城]</a>
          </div>
          <div style={{display:'inline',float:'left'}}>
            <a className="main-label" href={'/'} style={{color:'#ecf6fd'}}>&nbsp;&nbsp;&nbsp;&nbsp;[艺术商业]</a>
          </div>

          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px', float: 'right' }}
          >
            <Menu.Item key="1" onClick={this.handleClick}>登录</Menu.Item>
          </Menu>
        </Header>

        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>主页面</Breadcrumb.Item>
          </Breadcrumb>

          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
            <Row style={{minHeight: 200, textAlign: 'center'}}>
              <br/>
              <font size='10'>公司简介</font>
            </Row>
            <Row style={{minHeight: 200, textAlign: 'center'}}>
              <br/>
              <font size='10'>艺术投资</font>
            </Row>
            <Row style={{minHeight: 200, textAlign: 'center'}}>
              <br/>
              <font size='10'>Why us</font>
            </Row>
            <Row style={{minHeight: 200, textAlign: 'center'}}>
              <br/>
              <font size='10'>合作伙伴</font>
            </Row>
            <Row style={{minHeight: 200, textAlign: 'center'}}>
              <br/>
              <font size='10'>开始投资</font>
            </Row>
          </div>
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          主页面 by 薄德瑜
        </Footer>

      </Layout>
    );
  }
}

export default App;
