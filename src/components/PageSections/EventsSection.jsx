import React from 'react';
import Events from '../../assests/GIF/ClubEvents.gif';
import HomeSectionsLayout from '../layouts/HomeSectionsLayout';

const EventsSection = () => {
    return (
        <div id='events'>
            <HomeSectionsLayout
                heading='Events'
                body='Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Blanditiis, velit. Maxime dolorem eius enim similique iure
                  blanditiis ad quos odit numquam quam? Accusantium dolores,
                  eligendi explicabo magni corporis rerum accusamus.'
                gif={Events}
                link='/events'
                buttonText='Go to events'
                buttonVisible={true}
            />
        </div>
    );
};

export default EventsSection;
