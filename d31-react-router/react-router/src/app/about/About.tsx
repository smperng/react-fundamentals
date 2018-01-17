import * as React from 'react';
import * as PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;

const menus = [
  {
    name: 'About-1',
    route: '/about/about1',
  },
  {
    name: 'About-2',
    route: '/about/about2',
  },
  {
    name: 'About-3',
    route: '/about/about3',
  },
];

// tslint:disable-next-line
export default class About extends React.Component<any, {}> {
  static contextTypes = {
    router: PropTypes.object,
  };

  render() {
    return (
      <Layout>
        <Sider
          width={200}
          style={{ background: '#fff', height: 'calc(100vh - 64px)' }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['0']}
            style={{ height: '100%', borderRight: 0 }}
          >
            {menus.map(({ name, route }, key) => (
              <Menu.Item key={key} route={route}>
                <Link to={route}>{name}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        {renderRoutes(this.props.route.routes)}
      </Layout>
    );
  }
}
