import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EventCard from './EventCard';
import FormatedDate from '../FormatedDate/FormatedDate';

configure({
    adapter: new Adapter()
});

describe('<EventCard/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<EventCard date="date" />)
    })

    it('should render <FormatedDate /> when receiving date property', () => {
        expect(wrapper.find(FormatedDate)).toHaveLength(1);
    });
});
