import * as React from 'react';
import * as PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';

import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

import './App.css';

const menu = [
  {
    name: 'Home',
    route: '/home',
  },
  {
    name: 'About',
    route: '/about',
  },
  {
    name: 'Events',
    route: '/events',
  },
  {
    name: 'Products',
    route: '/products',
  },
  {
    name: 'Contact',
    route: '/contact',
  },
];

// tslint:disable-next-line
export default class App extends React.Component<any, any> {
  static contextTypes = {
    router: PropTypes.object,
  };
  render() {
    return (
      <Layout>
        <Header className="header">
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['/home']}
            style={{ lineHeight: '64px' }}
          >
            {menu.map(({ name, route }) => (
              <Menu.Item key={route}>
                <Link to={route}>{name}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Header>
        {renderRoutes(this.props.route.routes)}
      </Layout>
    );
  }
}
