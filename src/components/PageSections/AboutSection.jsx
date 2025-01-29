import React from 'react';
import AboutUs from '../../assests/GIF/AboutUs.gif';
import HomeSectionsLayout from '../layouts/HomeSectionsLayout';

const AboutSection = () => {
    return (
        <div id='aboutus'>
            <HomeSectionsLayout
                heading='About Us'
                body='Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Blanditiis, velit. Maxime dolorem eius enim similique iure
                  blanditiis ad quos odit numquam quam? Accusantium dolores,
                  eligendi explicabo magni corporis rerum accusamus.'
                gif={AboutUs}
                link='/aboutus'
                buttonText='More about us'
                buttonVisible={true}
            />
        </div>
    );
};

export default AboutSection;
