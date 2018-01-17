
// mock data

const home1Tab1Data = [
  {
    key: 'r1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    selected: false,
  },
  {
    key: 'r2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    selected: false,
  },
  {
    key: 'r3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    selected: false,
  },
];

class AppDataServiceClass {
  // tslint:disable-next-line
  getHome1Tab1Data(): Promise<any[]> {
    return Promise.resolve(home1Tab1Data.slice());
  }

  // tslint:disable-next-line
  getHome1Tab1DataDetailById(id: string): Promise<any> {
    const entry = home1Tab1Data.find(e => e.key === id) || null;
    return Promise.resolve(entry);
  }
}

const AppDataService: AppDataServiceClass = new AppDataServiceClass();

export default AppDataService;
