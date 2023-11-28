import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
/* import { mockTransactions } from '../../data/mockData';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic'; */
import Header from '../../components/Header';
import Carousel from '../../components/Carrousel/Carousel';

/* import LineChart from '../../components/LineChart';
import GeographyChart from '../../components/GeographyChart';
import BarChart from '../../components/BarChart';
import StatBox from '../../components/StatBox';
import ProgressCircle from '../../components/ProgressCircle'; */

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="0px">
      {/* HEADER */}
      {/*       <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Inicio" subtitle="Bienvenido a la web a de Licencias" />
      </Box> */}

      {/* GRID & CHARTS */}
      <Box>
        {/* CONTENIDO*/}
        <Carousel />
      </Box>
    </Box>
  );
};

export default Dashboard;
