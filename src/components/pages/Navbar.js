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


function NavBar() {


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

    return (
        <>
            <div className="nav-cnt">
                <section className="f-logo">
                    <img className="flip-img" src={flipkart} alt="flipkart"></img>
                    <a className="explore" href="/plus">Explore<span className="s-plus">Plus</span></a>
                </section>

                <div>
                    <TextField className="inp-box" sx={{ backgroundColor: 'white', width: '600px', marginTop: '10px', marginBottom: "5px", borderRadius: "3px", }} id="outlined-basic" placeholder="Search for products,brands and more" onFocus={handleFocus} variant="outlined" />
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
                                        <button style={{ border: 'none', backgroundColor: '#fb641b', width: '100%', marginTop: '10px' ,height: '50px' }}><div style={{ color: '#ffffff' }}>Request OTP</div></button>

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
                    <Button style={{ marginTop: '15px', marginLeft: '15px' }} variant="text" endIcon={<KeyboardArrowDownIcon style={{ color: 'white' }} />}><div className="div-btn" >More</div></Button>
                </div>
                <div>
                    <Button style={{ marginTop: '15px', marginLeft: '15px' }} variant="text" startIcon={<ShoppingCartIcon sx={{ color: "white" }} />}><div className="div-btn">cart</div></Button>
                </div>

            </div>




        </>
    )
}

export default NavBar;



// https://mui.com/material-ui/react-autocomplete/#customization
//https://codesandbox.io/s/determined-star-nvf2vl?file=/demo.js

// style={{display : 'flex' ,flexDirection : 'row'}}(for dialog)