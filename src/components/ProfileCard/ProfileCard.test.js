import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProfileCard from './ProfileCard';
import {
    FacebookIcon
} from '../UI/Icon/Icons';

configure({
    adapter: new Adapter()
});

describe('<ProfileCard />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ProfileCard />)
    })

    it('should render <FacebookIcon/> element if profile includes facebook link', () => {
        expect(wrapper.find(FacebookIcon)).toHaveLength(1);
    });
    it('should not render  <FacebookIcon /> element if profile does not include facebook link', () => {
        wrapper.setProps({ profile_facebook: "" })
        expect(wrapper.find(FacebookIcon)).toHaveLength(0);
    });
    it('should render "No upcoming events" if there are no events', () => {
        wrapper.setProps({ profile_upcoming_event_count: 0 })
        expect(wrapper.contains("No upcoming events")).toEqual(true);
    });
    it('should render "n upcoming events" if there are two or more events', () => {
        wrapper.setProps({ profile_upcoming_event_count: 2 })
        expect(wrapper.contains(`2 upcoming events`)).toEqual(true);
    });
    it('should render "1 upcoming event" if there is only one event', () => {
        wrapper.setProps({ profile_upcoming_event_count: 1 })
        expect(wrapper.contains("1 upcoming event")).toEqual(true);
    });
});
