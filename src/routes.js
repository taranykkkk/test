import Main from './component/Main/Main';
import FormBox from './component/FormBox/FormBox';
import TableBox from './component/TableBox/TableBox';

export const routes = [
  { name: 'Main', path: '/', component: <Main /> },
  { name: 'Form', path: '/form', component: <FormBox /> },
  { name: 'Table', path: '/table', component: <TableBox /> },
];
