import {
  Badge,
  Box,
  Button,
  IconButton,
  Menu,
  Stack,
  Tooltip,
  useTheme,
} from '@mui/material';
import { tokens } from '../../theme';
import InputBase from '@mui/material/InputBase';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { toggleColorMode, changeIsCollapsed } from '../../redux/actions/index';
import LanguageIcon from '@mui/icons-material/Language';
import MenuButton from '../../components/MenuButton';
import AR from '../../assets/imagenes/AR.svg';
import US from '../../assets/imagenes/US.svg';
import BR from '../../assets/imagenes/BR.svg';
import SwipeableTemporaryDrawer from '../global/SwipeableTemporaryDrawer';
import { MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const buttons = [
/*   {
    text: 'Ingresar',
    tip: '',
    link: '/ingreso',
    icon:"",
  },
  {
    text: 'Registrarse',
    tip: '',
    link: '/registrarse',
    icon:"",
  },
  {
    text: 'Normativa vigente',
    tip: '',
    link: '/normativa',
    icon:"",
  },
  {
    text: 'Links de Interés',
    tip: '',
    link: '/links',
    icon:"",
  },
  {
    text: 'Denuncias',
    tip: '',
    link: '/denuncias',
    icon:"",
  }, */
];

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const toggleModeColor = () => {
    dispatch(toggleColorMode());
  };
  const { width, height } = useSelector((state) => state.sizeWindows);
  const { isCollapsed } = useSelector((state) => state.isCollapsed);
  const onClick = () => {
    console.log('Me estan haciendo click');
  };
  const itemsMenuLenguaje = [
    {
      text: 'Español',
      link: '/español',
      onClick: onClick,
      icon: (
        <img
          src={AR}
          alt="pais"
          type="svg"
          style={{
            width: '20px',
            height: 'auto',
            marginRight: '15px',
          }}
        />
      ),
    },
    {
      text: 'Inglés',
      link: '/ingles',
      onClick: onClick,
      icon: (
        <img
          src={US}
          alt="pais"
          style={{
            width: '20px',
            height: 'auto',
            marginRight: '15px',
          }}
        />
      ),
    },
    {
      text: 'Portugués',
      link: '/portugues',
      onClick: onClick,
      icon: (
        <img
          src={BR}
          alt="pais"
          style={{
            width: '20px',
            height: 'auto',
            marginRight: '15px',
          }}
        />
      ),
    },
  ];

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {width > 480 && (
        <Box display="flex" flexDirection="row">
          <MenuButton
            icon={<LanguageIcon />}
            items={itemsMenuLenguaje}
            tip="Cambiar idioma"
          />

          {buttons.map((button) => (
            <Box component={Link} margin="0px 10px 0px 10px" to={button.link}>
              <Tooltip title={button.tip}>
                <Button>{button.text}</Button>
              </Tooltip>
            </Box>
          ))}
        </Box>
      )}

      <Box display="flex" justifyContent="flex-end">
        {width < 480 && (
          <>
            <SwipeableTemporaryDrawer>
              <MenuOutlinedIcon />
            </SwipeableTemporaryDrawer>
            <MenuButton
              icon={<LanguageIcon />}
              items={itemsMenuLenguaje}
              tip="Cambiar idioma"
            />
          </>
        )}
        {/* SEARCH BAR */}
        <Box
          display="flex"
          marginRight="10px"
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
        >
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>

        {/* ICONOS */}
        {/* icono para cambiar el tema, lo desactivo para la primera presentacion */}
        <IconButton onClick={toggleModeColor}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <Badge badgeContent={4} color="warning">
            <NotificationsOutlinedIcon />
          </Badge>
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
