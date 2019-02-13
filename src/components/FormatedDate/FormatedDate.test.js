import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FormatedDate from './FormatedDate';
import { formatDate } from '../../helpers';

configure({
    adapter: new Adapter()
});

describe('<FormatedDate/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<FormatedDate date="2019-06-15T22:00:00" />)
    })

    it('should get output from formatDate function', () => {
        expect(formatDate("2019-06-15T22:00:00")).toBeDefined();
    });

    it('should render year', () => {
        expect(wrapper.find('#day').contains('15')).toEqual(true);
    });
    it('should render year', () => {
        expect(wrapper.find('#month').contains('Jun')).toEqual(true);
    });
    it('should render year', () => {
        expect(wrapper.find('#year').contains('2019')).toEqual(true);
    });
});
