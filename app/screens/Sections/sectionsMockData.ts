export interface ISections {
  title: string;
  data: string[];
  id: number;
}

export const SECTIONS: ISections[] = [
  {
    title: 'Title One',
    data: ['One', 'Two', 'Three', 'Four', 'Five'],
    id: 1
  },
  {
    title: 'Title Two',
    data: ['One', 'Two', 'Three', 'Four', 'Five'],
    id: 2
  },
  {
    title: 'Title Three',
    data: ['One', 'Two', 'Three', 'Four', 'Five'],
    id: 3
  },
  {
    title: 'Title Four',
    data: ['One', 'Two', 'Three', 'Four', 'Five'],
    id: 4
  },
];
