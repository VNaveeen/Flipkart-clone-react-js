import React from "react";
import { useState } from "react";
import './Navbar.css';



// import Grid from '@mui/material/Grid';

import TextField from '@mui/material/TextField';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';


//import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from '@mui/icons-material/Close';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import flipkart from '../../assests/flipkart.png';

//dropdown
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import Divider from '@mui/material/Divider';

import NotificationsIcon from '@mui/icons-material/Notifications';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import DownloadIcon from '@mui/icons-material/Download';
import { useNavigate } from "react-router-dom";


function NavBar() {

    const navigate = useNavigate();

    const [placeholder, setPlaceholder] = useState("Search for products,brands and more");
    function handleFocus() {
        if (placeholder === "Search for products,brands and more") {
            setPlaceholder("Search for products,brands and more");
        }
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickClose = () => {
        setOpen(false);
    };

    //dropmenu for more

    const [anchorEl, setAnchorEl] = React.useState(null);
    const openDrop = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    // const [anchorEle, setAnchorEle] = React.useState(null);
    // const opene = Boolean(anchorEle);
    // const handleClicke = (event) => {
    //     setAnchorEle(event.currentTarget);
    // };
    // const handleClosee = () => {
    //     setAnchorEle(null);
    // };

    return (
        <>
            <div className="nav-cnt">
                <section className="f-logo">
                    <img className="flip-img" src={flipkart} alt="flipkart"></img>
                    <a className="explore" href="/plus">Explore<span className="s-plus">Plus</span></a>
                </section>

                <div>
                    <TextField className="inp-box" sx={{ backgroundColor: 'white', width: '600px', marginTop: '10px', marginBottom: "5px", borderRadius: "10px", }} id="outlined-basic" placeholder="Search for products,brands and more" onFocus={handleFocus} variant="outlined" />
                </div>
                <div>
                    {/* <Stack> */}
                    <Button style={{ backgroundColor: 'white', width: '100px', marginTop: '12px', marginLeft: '30px', marginRight: '10px' }} variant="outlined" onClick={handleClickOpen}>Login</Button>
                    <div>
                        <Dialog open={open} onClose={handleClickClose}>
                            <div className="dial-cnt">
                                <div className="dial-left">
                                    <div className="left-tlt">Login</div>
                                    <div className="left-txt">Get access to your <br />Orders, Wishlist and Recommendations</div>
                                </div>
                                <div className="dial-right">
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Enter Email/Mobile number"
                                        type="email"
                                        fullWidth
                                        variant="standard"
                                    />
                                    <div className="right-txt">By continuing, you agree to Flipkart's <a className="dial-a-tag" href="terms of use">Terms of Use</a> and <a className="dial-a-tag" href="privacy policy">Privacy Policy</a>.</div>
                                    <DialogActions>
                                        <button style={{ border: 'none', backgroundColor: '#fb641b', width: '100%', marginTop: '10px', height: '50px' }}><div style={{ color: '#ffffff' }}>Request OTP</div></button>

                                    </DialogActions>
                                    <div className="dial-bottom-link">
                                        <a className="dial-a-tag" href="newaccount">New to Flipkart? Create an account</a>
                                    </div>
                                </div>
                                <div>
                                    <CloseIcon onClick={handleClickClose} />
                                </div>

                            </div>
                            {/* <Grid>
                                <h3>Login</h3>
                                <div>
                                    Get access to your Orders, Wishlist and Recommendations
                                </div>
                            </Grid>
                            <Grid>
                                <DialogContent>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Enter Email/Mobile number"
                                        type="email"
                                        fullWidth
                                        variant="standard"
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <button style={{ border: 'none', backgroundColor: '#fb641b', width: '100%', margin: '30px' }}><div style={{ color: 'white' }}>Request OTP</div></button>

                                </DialogActions>
                            </Grid> */}
                        </Dialog>
                    </div>
                    {/* </Stack> */}
                </div>
                <div>
                    <Button style={{ marginTop: '15px', marginLeft: '15px' }} variant="text"><div className="div-btn">Become a seller</div></Button>
                </div>
                <div>
                    {/* <Button style={{ marginTop: '15px', marginLeft: '15px' }} variant="text" endIcon={<KeyboardArrowDownIcon style={{ color: 'white' }} />}><div className="div-btn" >More</div></Button> */}
                    <Button
                        // id="demo-customized-button"
                        style={{ marginTop: '15px', marginLeft: '15px' }}
                        aria-controls={open ? 'demo-customized-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        variant="text"
                        disableElevation
                        onClick={handleClick}
                        endIcon={<KeyboardArrowDownIcon style={{ color: 'white' }} />}
                    >
                        <div className="div-btn">
                            More
                        </div>
                    </Button>
                    <Menu
                        id="demo-customized-menu"
                        MenuListProps={{
                            'aria-labelledby': 'demo-customized-button',
                        }}
                        anchorEl={anchorEl}
                        open={openDrop}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose} disableRipple>
                            <NotificationsIcon color="primary" fontSize="10px" />
                            <div className="drop-d-text">Notification preferences</div>
                        </MenuItem>
                        <MenuItem onClick={handleClose} disableRipple>
                            <LiveHelpIcon color="primary" fontSize="10px" />
                            <div className="drop-d-text">24x7 Customer Care</div>
                        </MenuItem>
                        {/* <Divider sx={{ my: 0.5 }} /> */}
                        <MenuItem onClick={handleClose} disableRipple>
                            <TrendingUpIcon color="primary" fontSize="10px" />
                            <div className="drop-d-text">Advertise</div>
                        </MenuItem>
                        <MenuItem onClick={handleClose} disableRipple>
                            <DownloadIcon color="primary" fontSize="10px" />
                            <div className="drop-d-text">Download App</div>
                        </MenuItem>
                    </Menu>

                </div>
                <div>
                    <Button onClick={() => navigate('/Cartpage')} style={{ marginTop: '15px', marginLeft: '15px' }} variant="text" startIcon={<ShoppingCartIcon sx={{ color: "white" }} />}><div className="div-btn">cart</div></Button>
                </div>

            </div>




        </>
    )
}

export default NavBar;



// https://mui.com/material-ui/react-autocomplete/#customization
//https://codesandbox.io/s/determined-star-nvf2vl?file=/demo.js

// style={{display : 'flex' ,flexDirection : 'row'}}(for dialog)