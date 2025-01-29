import React from 'react';
import AboutClubGIF from '../../assests/GIF/AboutClub.gif';
import HomeSectionsLayout from '../layouts/HomeSectionsLayout';

const AboutClub = () => {
    return (
        <HomeSectionsLayout
            heading='About Club'
            body='Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Blanditiis, velit. Maxime dolorem eius enim similique iure
                  blanditiis ad quos odit numquam quam? Accusantium dolores,
                  eligendi explicabo magni corporis rerum accusamus.'
            gif={AboutClubGIF}
        />
    );
};

export default AboutClub;
