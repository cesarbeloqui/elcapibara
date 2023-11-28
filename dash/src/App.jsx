
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';
import Team from './scenes/team';
import Invoices from './scenes/invoices';
import Contacts from './scenes/contacts';
import Bar from './scenes/bar';
import Form from './scenes/form';
import Line from './scenes/line';
import Pie from './scenes/pie';
import FAQ from './scenes/faq';
import Geography from './scenes/geography';
import Login from './scenes/login';
import { Button, CssBaseline, ThemeProvider } from '@mui/material';
import { useMode } from './theme';
import Calendar1 from './scenes/calendar/calendar';
import { useDispatch } from 'react-redux';
import { sizeWindows } from './redux/actions/index';
import SwipeableTemporaryDrawer from './scenes/global/SwipeableTemporaryDrawer';

function App() {
  const { theme } = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(sizeWindows());
    window.addEventListener('resize', () => dispatch(sizeWindows()));
    return () => {
      window.removeEventListener('resize', () => dispatch(sizeWindows()));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shouldShowTopbar = location.pathname !== '/ingreso';

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Sidebar isSidebar={isSidebar} />
        <main className="content">
          {shouldShowTopbar && <Topbar setIsSidebar={setIsSidebar} />}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/ingreso" element={<Login />} />
            {/* Resto de las rutas */}
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
