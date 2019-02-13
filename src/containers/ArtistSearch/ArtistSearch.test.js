import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ArtistSearch from './ArtistSearch';


configure({ adapter: new Adapter() });

describe('<ArtistSearch />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ArtistSearch />);
    });

    it('Sumbit button should ', () => {
        wrapper = shallow(<button id="get-artist" type="submit">&ensp;Add artist</button>);
        wrapper.find('#get-artist').simulate('submit', { target: wrapper.find('button').get(0) })
    });
});