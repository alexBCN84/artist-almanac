import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArtistCard from './ArtistCard';


configure({ adapter: new Adapter() });

describe('<ArtistCard/>', () => {

    it('renders children when passed in', () => {
        const wrapper = shallow((
            <ArtistCard>
                {[<div key={1} />, <div key={2} />, <div key={3} />]}
            </ArtistCard>
        ));
        expect(wrapper.contains([<div key={1} />, <div key={2} />, <div key={3} />])).toEqual(true);
    });
});