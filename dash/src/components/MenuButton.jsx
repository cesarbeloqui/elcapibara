import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { Typography, IconButton, Tooltip, Button, Stack } from '@mui/material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

const Item = ({ text, link, icon, onClick }) => {
  return (
    <MenuItem onClick={onClick} icon={icon}>
      <Typography>{text}</Typography>
    </MenuItem>
  );
};

const MenuButton = ({ icon, items, tip }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
            <Tooltip title={tip}>
              <IconButton variant="contained" {...bindTrigger(popupState)}>
                {icon}
              </IconButton>
            </Tooltip>
          <Menu {...bindMenu(popupState)}>
            {items.map((item, index) => {
              const icon = item.icon;
              return (
                <MenuItem
                  icon={item.icon}
                  onClick={() => {
                    popupState.close();
                    item.onClick();
                  }}
                  key={index}
                >
                  {icon}
                  <Typography
                    component={Link} // Utiliza el componente RouterLink de Material UI
                    to={item.link}
                    sx={{
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                  >
                    {item.text}
                  </Typography>
                </MenuItem>
              );
            })}
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
};

export default MenuButton;
