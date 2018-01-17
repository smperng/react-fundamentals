import * as React from 'react';
import { renderRoutes } from 'react-router-config';
import * as PropTypes from 'prop-types';
import { Radio } from 'antd';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const tabs = [
  {
    name: 'Home-1 Tab-1',
    route: 'tab1',
  },
  {
    name: 'Home-1 Tab-2',
    route: 'tab2',
  },
  {
    name: 'Home-1 Tab-3',
    route: 'tab3',
  },
];

// tslint:disable-next-line
export default class Home1 extends React.Component<any, {}> {
  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.object.isRequired,
    }),
  };
  onChangeTab = e => {
    this.context.router.history.push(`/home/home1/${e.target.value}`);
  };
  render() {
    return (
      <div style={{ padding: '20px', width: '100%' }}>
        <RadioGroup
          defaultValue="tab1"
          size="large"
          onChange={this.onChangeTab}
        >
          {tabs.map(({ name, route }) => (
            <RadioButton key={route} value={route}>
              {name}
            </RadioButton>
          ))}
        </RadioGroup>
        {renderRoutes(this.props.route.routes)}
      </div>
    );
  }
}
