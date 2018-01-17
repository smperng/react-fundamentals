import * as React from 'react';
import * as PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import { Table } from 'antd';
import AppDataService from '../../../../service/AppDataService';

// tslint:disable-next-line
export default class Tab1 extends React.Component<any, { data: any[] }> {
  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.object.isRequired,
    }),
  };
  // tslint:disable-next-line
  columns: any[] = [];

  constructor(props: {}) {
    super(props);
    this.state = {
      data: [],
    };
    this.columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
        onCellClick: this.onClickDetails,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
    ];
  }

  onClickDetails = e => {
    this.context.router.history.push(`/home/home1/tab1/details/${e.key}`);
  };

  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    AppDataService.getHome1Tab1Data().then(data => {
      this.setState({
        data,
      });
    });
  }

  render() {
    return (
      <div>
        <div style={{ marginTop: '20px', backgroundColor: '#fff' }}>
          <Table columns={this.columns} dataSource={this.state.data} />
        </div>
        {renderRoutes(this.props.route.routes)}
      </div>
    );
  }
}
