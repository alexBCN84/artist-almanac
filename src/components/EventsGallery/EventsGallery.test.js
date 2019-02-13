import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EventsGallery from './EventsGallery';


configure({
    adapter: new Adapter()
});

describe('<EventsGallery/>', () => {

    it('renders children when passed in', () => {
        const wrapper = shallow((
            <EventsGallery>
                {[<div key={1} />, <div key={2} />, <div key={3} />]}
            </EventsGallery>
        ));
        expect(wrapper.contains([<div key={1} />, <div key={2} />, <div key={3} />])).toEqual(true);
    });
});