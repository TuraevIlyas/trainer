import { Menu, MenuItem, AppBar, Box, Toolbar, Typography, IconButton} from '@mui/material'
import { Popover } from 'antd' 
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuBar(props) {
    
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null);
    }
    
return(
    <div className="App"> 
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
              <MenuIcon onClick={handleClick}/>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
              >
              
                <MenuItem component={Link} to='/'>Customers</MenuItem>
                <MenuItem component={Link} to='/trainings'>Trainings</MenuItem>
                <MenuItem component={Link} to='/calendar'>Calendar of Trainings</MenuItem>
                <MenuItem component={Link} to='/chart'>Information of Trainings</MenuItem>
                </Menu>

              </IconButton>
              <Typography variant="h6" component="div" sx={{ mr: 2 }}>
                {props.param}
              </Typography>
                <Popover content='Download Customers in CSV File'>
                  {props.load}
                </Popover>
            </Toolbar>
          </AppBar>
        </Box>
    </div>
)
}