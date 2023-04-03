import { Button, Card } from '@mui/material';
import React from 'react';
import './Footer.css';




function Footer() {

    return (
        <>
            <Card>
                <div className='f-container'>
                    <div className='footer-cnt'>
                        <div className='about-cnt'>
                            <div style={{ color: "gray", fontSize: "small", marginBottom: "5px" }}>ABOUT</div>
                            <div className='link-cnt'>
                                <a className="anc-tag" href='contact'>Contact Us</a>
                                <a className="anc-tag" href='about'>About Us</a>
                                <a className="anc-tag" href='career'>Careers</a>
                                <a className="anc-tag" href='stories'>Flipkart Stories</a>
                                <a className="anc-tag" href='press'>Press</a>
                                <a className="anc-tag" href='wholesale'>Flipkart Wholesale</a>
                                <a className="anc-tag" href='information'>Corporate Information</a>
                            </div>
                        </div>
                        <div className='help-cnt'>
                            <div style={{ color: "gray", fontSize: "small", marginBottom: "5px" }}>HELP</div>
                            <div className='link-cnt'>
                                <a className="anc-tag" href='payments'>Payments</a>
                                <a className="anc-tag" href='shipping'>Shipping</a>
                                <a className="anc-tag" href='cancellation'>Cancellation & Returns</a>
                                <a className="anc-tag" href='faq'>FAQ</a>
                                <a className="anc-tag" href='report'>Report Infringment</a>
                            </div>
                        </div>
                        <div className='consumer-cnt'>
                            <div style={{ color: "gray", fontSize: "small", marginBottom: "5px" }}>CONSUMER POLICY</div>
                            <div className='link-cnt'>
                                <a className="anc-tag" href='return'>Return Policy</a>
                                <a className="anc-tag" href='terms'>Terms Of Use</a>
                                <a className="anc-tag" href='security'>Security</a>
                                <a className="anc-tag" href='privacy'>Privacy</a>
                                <a className="anc-tag" href='sitemap'>Sitemap</a>
                                <a className="anc-tag" href='grievance'>Grievance Redressal</a>
                                <a className="anc-tag" href='erp'>ERP Compliance</a>
                            </div>
                        </div>
                        <div className='social-cnt'>
                            <div style={{ color: "gray", fontSize: "small", marginBottom: "5px" }}>SOCIAL</div>
                            <div className='link-cnt'>
                                <a className="anc-tag" href='fb'>Facebook</a>
                                <a className="anc-tag" href='twit'>Twitter</a>
                                <a className="anc-tag" href='yt'>YouTube</a>
                            </div>
                        </div>
                        <div className='mail-cnt'>
                            <div style={{ color: "gray", fontSize: "small", marginBottom: "5px" }}>Mail Us:</div>
                            <div className='p-tag-cnt'>
                                <p className='p-tag'>Flipkart Internet Private Limited,</p>
                                <p className='p-tag'>Buildings Alyssa, Begonia &</p>
                                <p className='p-tag'>Clove Embassy Tech Village,</p>
                                <p className='p-tag'>Outer Ring Road, Devarabeesanahalli Village,</p>
                                <p className='p-tag'>Bengaluru, 560103,</p>
                                <p className='p-tag'>Karnataka, India</p>
                            </div>
                        </div>
                        <div className='address-cnt'>
                            <div style={{ color: "gray", fontSize: "small", marginBottom: "5px" }}>Registered Office Address:</div>
                            <div>
                                <p className='p-tag'>Flipkart Internet Private Limited,</p>
                                <p className='p-tag'> Buildings Alyssa, Begonia &</p>
                                <p className='p-tag'>Clove Embassy Tech Village,</p>
                                <p className='p-tag'>Outer Ring Road, Devarabeesanahalli Village,</p>
                                <p className='p-tag'>Bengaluru, 560103,</p>
                                <p className='p-tag'>Karnataka, India</p>
                                <p className='p-tag'>CIN : U51109KA2012PTC066107</p>
                                <p className='p-tag'>Telephone: 044-45614700</p>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-cnt'>
                    <Button style={{marginTop : '15px' ,marginLeft : '15px' }} variant="text"><div className="div-btn">Become a seller</div></Button>
                    <Button style={{marginTop : '15px' ,marginLeft : '15px' }} variant="text"><div className="div-btn">Advertise</div></Button>
                    <Button style={{marginTop : '15px' ,marginLeft : '15px' }} variant="text"><div className="div-btn">Gift cards</div></Button>
                    <Button style={{marginTop : '15px' ,marginLeft : '15px' }} variant="text"><div className="div-btn">Help center</div></Button>
                    <div className='btm-text'>© 2007-2023 Flipkart.com</div>
                    <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg' alt='' />
                    </div>
                </div>
            </Card>
        </>
    )
}

export default Footer;