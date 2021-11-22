export interface ISectionMockData {
  title: string;
  url: string;
  data: string[];
  id: number;
}

const sectionMockData: ISectionMockData[] = [
  {
    title: 'Title One',
    url: 'https://res.cloudinary.com/dbyretay5/image/upload/v1637532746/testing/d9fc84a0d1d545d77e78aaad39c20c11d3355074_ewy6xh.png',
    data: ['One', 'Two', 'Three', 'Four', 'Five'],
    id: 1
  },
  {
    title: 'Title Two',
    url: 'https://res.cloudinary.com/dbyretay5/image/upload/v1637532743/testing/6c4faa7d65bc24221c3d369a8889928158daede4_a6ejun.png',
    data: ['One', 'Two', 'Three', 'Four', 'Five'],
    id: 2
  },
  {
    title: 'Title Three',
    url: 'https://res.cloudinary.com/dbyretay5/image/upload/v1637532743/testing/8bc2e13b8ab74765fd57f0880f318eed1c3fb001_a0w6os.png',
    data: ['One', 'Two', 'Three', 'Four', 'Five'],
    id: 3
  },
  {
    title: 'Title Four',
    url: 'https://res.cloudinary.com/dbyretay5/image/upload/v1637532740/testing/9e2972c07afac45a8b03f5be3d0a796abe2e566e_mg0zdy.png',
    data: ['One', 'Two', 'Three', 'Four', 'Five'],
    id: 4
  },
];

export default sectionMockData;
