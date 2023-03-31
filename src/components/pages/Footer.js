import { Card } from '@mui/material';
import React from 'react';
import './Footer.css';




function Footer() {

    return (
        <>
            <Card>
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
                        <div></div>
                        <div></div>
                    </div>
                    <div className='mail-cnt'>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='address-cnt'>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </Card>
        </>
    )
}

export default Footer;