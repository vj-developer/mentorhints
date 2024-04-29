import React from 'react';
import logo from 'assets/brand/logo.png';
import MentorhintsOutline from 'assets/brand/MentorhintsOutline.png';
import Facebook from 'assets/socialmedia/Facebook.png';
import Instagram from 'assets/socialmedia/Instagram.png';
import Linkedin from 'assets/socialmedia/Linkedin.png';
import Twitter from 'assets/socialmedia/Twitter.png';

const Footer = () => {
    return (
        <div className='max-w-screen-2xl pb-8 px-4 md:px-14' id='footer'>
            {/* Section 1 */}
            <div className='flex md:flex-row flex-col'>
                {/* Company Details */}
                <div className='md:w-1/3 flex flex-col'>
                    <img className='h-auto w-36' src={logo} />

                    {/* Social Medias */}
                    <div className='flex gap-4 mb-4'>
                        <img className='h-7 w-7' src={Facebook} />
                        <img className='h-7 w-7' src={Twitter} />
                        <img className='h-7 w-7' src={Instagram} />
                        <img className='h-7 w-7' src={Linkedin} />
                    </div>
                </div>

                {/* Sections */}
                <div className='md:w-2/3 flex gap-4 justify-around pt-10'>
                    {/* Company */}
                    {/* <div className='flex flex-col gap-4'>
                    <h4 className='font-semibold text-neutralWhite text-lg'>Company</h4>
                    <p className='text-neutralSilver text-xs font-normal'>About us</p>
                    <p className='text-neutralSilver text-xs font-normal'>Contact us</p>
                    <p className='text-neutralSilver text-xs font-normal'>Pricing</p>
                </div> */}

                    {/* Company */}
                    <div className='flex flex-col gap-4'>
                        <h4 className='font-semibold text-neutralWhite text-lg'>Support</h4>
                        <p className='text-neutralSilver text-xs font-normal font-sans'>FAQ</p>
                        <p className='text-neutralSilver text-xs font-normal font-sans'>Privacy policy</p>
                        <p className='text-neutralSilver text-xs font-normal font-sans'>Terms & Conditions</p>
                    </div>

                    {/* Stay up to date */}
                    <div className='flex flex-col gap-4'>
                        <h4 className='font-semibold text-neutralWhite text-lg'>Are you Hiring?<span className='text-brandSecondary hover:text-brandPrimary'> Find Talent</span></h4>
                    </div>
                </div>
            </div>

            {/* Copyrights */}
            <div className='flex flex-col items-center justify-center'>
                <img className='w-96 h-auto' src={MentorhintsOutline} alt=''/>
                <p className='text-neutralSilver text-xs'>Copyright © 2024 Mentor Hint  Inc. All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;