import MenuBox from './component/MenuBox/MenuBox';
import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';
function App() {
  return (
    <>
      <MenuBox />
      <Routes>
        {routes.map((route) => (
          <Route key={route.name} path={route.path} element={route.component} />
        ))}
      </Routes>
    </>
  );
}

export default App;
