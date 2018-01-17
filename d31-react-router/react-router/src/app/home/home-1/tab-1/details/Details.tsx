import * as React from 'react';
import * as PropTypes from 'prop-types';
import AppDataService from '../../../../../service/AppDataService';

// tslint:disable-next-line
export default class Details extends React.Component<any, { data: any }> {
  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.object.isRequired,
    }),
  };
  itemId = '';
  loading = false;

  // tslint:disable-next-line
  constructor(props: any) {
    super(props);
    this.state = {
      data: null,
    };
  }
  componentWillMount() {
    this.itemId = this.props.match.params.id;
    this.fetchData();
  }
  // tslint:disable-next-line
  componentWillReceiveProps(nextProps: any) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.itemId = nextProps.match.params.id;
      this.fetchData();
    }
  }
  fetchData() {
    this.loading = true;
    AppDataService.getHome1Tab1DataDetailById(this.itemId).then(
      data => {
        this.setState({
          data,
        });
        this.loading = false;
      },
      err => {
        this.loading = false;
      }
    );
  }

  itemIdChanged(): boolean {
    return !this.loading && this.itemId !== this.props.match.params.id;
  }

  // tslint:disable-next-line
  componentWillUpdate(nextProps: {}, nextState: { data: any }) {
    if (this.itemIdChanged()) {
      this.fetchData();
    }
  }
  onClickClose = e => {
    this.context.router.history.push('/home/home1/tab1/zero');
  };
  render() {
    const { data } = this.state;
    return data !== null ? (
      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          height: '300px',
          backgroundColor: '#fff',
        }}
      >
        <div style={{ float: 'right', cursor: 'pointer' }}>
          <i onClick={this.onClickClose} className="anticon anticon-close" />
        </div>
        <div>Name:</div>
        <div>{data.name}</div>
        <div>Age:</div>
        <div>{data.age}</div>
        <div>Address:</div>
        <div>{data.address}</div>
      </div>
    ) : (
      <div style={{ marginTop: '20px' }}>No Data ???</div>
    );
  }
}
