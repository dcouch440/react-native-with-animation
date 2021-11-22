export interface IDataMockEntries {
  label: string;
  value: string;
  updated: string;
  country: string;
  id: number

}

const dataMockEntries: IDataMockEntries[] = [
  {
    label: 'Hospital One',
    value: '+3400 Patients A Year',
    country: 'USA',
    updated: '8/23/2021',
    id: 1,
  },
  {
    label: 'Hospital Two',
    value: '+3500 Patients A Year',
    country: 'JAPAN',
    updated: '8/23/2021',
    id: 2,
  },
];

export default dataMockEntries;
