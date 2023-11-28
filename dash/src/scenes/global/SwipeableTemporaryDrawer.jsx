import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';

import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { lists } from './Sidebar';

export default function TemporaryDrawer({ children }) {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState(open);
  };

  const list = () => {
    return (
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        {lists.map((list, index) => {
          const i = index;
          let divider = null;
          if (index !== 0) {
            divider = <Divider />;
          }
          return (
            <React.Fragment key={i}>
              {divider}
              <List>
                {list.map((item) => {
                  return (
                    <ListItem disablePadding key={item.link}>
                      <ListItemButton component={Link} to={item.link}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </React.Fragment>
          );
        })}
      </Box>
    );
  };

  return (
    <div>
      <React.Fragment key="left">
        <IconButton onClick={toggleDrawer(true)}>{children}</IconButton>
        <Drawer anchor="left" open={state} onClose={toggleDrawer(false)}>
          <List
            sx={{
              display: 'flex',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                transform: 'rotate(180deg)',
                margin: '0 0 0 auto',
                padding: '0px 0px 20px 20px',
                /* backgroundColor: "blue" */
              }}
            >
              <IconButton onClick={toggleDrawer(false)}>
                <KeyboardTabIcon />
              </IconButton>
            </Box>
          </List>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
