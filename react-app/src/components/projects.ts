export type Project = {
  number: string;
  title: string;
  category: string;
  className: string;
  mark: string;
  description: string;
};

const projects: Project[] = [
  {
    number: '01',
    title: 'Sunday Supply',
    category: 'Brand identity · E-commerce',
    className: 'project-art-sunday',
    mark: 'SUNDAY',
    description: 'A brighter kind of everyday.',
  },
  {
    number: '02',
    title: 'Forma Studio',
    category: 'Digital design · Development',
    className: 'project-art-forma',
    mark: 'forma',
    description: 'Space to think differently.',
  },
  {
    number: '03',
    title: 'Offscript',
    category: 'Art direction · Campaign',
    className: 'project-art-offscript',
    mark: 'OFF\nSCRIPT',
    description: 'Make room for the unexpected.',
  },
];

export default projects;
