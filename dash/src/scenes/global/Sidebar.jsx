import { Fragment, useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import {
  Box,
  Divider,
  IconButton,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';
import 'react-pro-sidebar/dist/css/styles.css';
import { tokens } from '../../theme';
import logoProvinciaNegro from '../../assets/imagenes/iso.svg';
import logoProvinciaBlanco from '../../assets/imagenes/iso_white.svg';
import { useDispatch, useSelector } from 'react-redux';
import { changeIsCollapsed } from '../../redux/actions/index';
import {
  HomeOutlined,
  MenuOutlined,
  Login,
  AppRegistrationOutlined,
  Folder,
  Call,
  LocalTaxi,
} from '@mui/icons-material';
import LinkIcon from '@mui/icons-material/Link';

export const lists = [
  [
    { link: '/', text: 'Inicio', icon: <HomeOutlined />, tip: '' },
    {
      text: 'Ingresar',
      tip: '',
      link: '/ingreso',
      icon: <Login />,
    },
    {
      text: 'Registrarse',
      tip: '',
      link: '/registrarse',
      icon: <AppRegistrationOutlined />,
    },
    {
      text: 'Normativa',
      tip: '',
      link: '/normativa',
      icon: <Folder />,
    },
    {
      text: 'Links',
      tip: '',
      link: '/links',
      icon: <LinkIcon />,
    },
    {
      text: 'Denuncias',
      tip: '',
      link: '/denuncias',
      icon: <LocalTaxi />, //parece un auto de policia
    },
    /*     { link: '/starred', text: 'Starred', icon: <HomeOutlinedIcon /> },
    { link: '/send-email', text: 'Send email', icon: <HomeOutlinedIcon /> },
    { link: '/drafts', text: 'Drafts', icon: <HomeOutlinedIcon /> },
    { link: '/trash', text: 'Trash', icon: <HomeOutlinedIcon /> }, */
  ],
  /*   [
    { link: '/spam', text: 'Spam', icon: <HomeOutlinedIcon /> },
    { link: '/all-mail', text: 'All mail', icon: <HomeOutlinedIcon /> },
    {
      link: '/important-mail',
      text: 'Important mail',
      icon: <HomeOutlinedIcon />,
    },
  ], */
];

const Item = ({ title, to, icon, selected, setSelected, tip }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      popperarrow={false}
    >
      <Typography variant="h4">{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const isCollapsed = useSelector((state) => state.isCollapsed);
  const setIsCollapsed = () => {
    dispatch(changeIsCollapsed());
  };

  const [selected, setSelected] = useState('Inicio');

  return (
    <Box
      sx={{
        '& .pro-sidebar-inner': {
          background: `${colors.primary[400]} !important`,
        },
        '& .pro-icon-wrapper': {
          backgroundColor: 'transparent !important',
        },
        '& .pro-inner-item': {
          padding: '5px 35px 5px 20px !important',
        },
        '& .pro-inner-item:hover': {
          color: '#39A935 !important',
        },
        '& .pro-menu-item.active': {
          color: '#39A935 !important',
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed} onToggle={false} breakPoint="xs">
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <Box
            style={
              isCollapsed
                ? {
                    margin: '10px 0 20px 0',
                    color: colors.grey[100],
                  }
                : {
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }
            }
          >
            <Item
              icon={<MenuOutlined />}
              selected={isCollapsed}
              setSelected={setIsCollapsed}
            />
          </Box>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                {mode && (
                  <img
                    alt="logo"
                    width="200px"
                    height="200px"
                    src={
                      mode === 'light'
                        ? logoProvinciaNegro
                        : logoProvinciaBlanco
                    }
                    style={{ cursor: 'pointer', borderRadius: '50%' }}
                  />
                )}
              </Box>
              <Box textAlign="center"></Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : '10%'}>
            {lists.map((list, index) => {
              const i = index;
              let divider = null;
              if (index !== 0) {
                divider = <Divider />;
              }
              return (
                <Fragment key={i}>
                  {divider}
                  {list.map((item) => {
                    return (
                      <Item
                        key={item.text}
                        title={item.text}
                        to={item.link}
                        icon={item.icon}
                        selected={selected}
                        setSelected={setSelected}
                        tip={item.tip}
                      />
                    );
                  })}
                </Fragment>
              );
            })}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
