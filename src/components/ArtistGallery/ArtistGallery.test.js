import React from 'react';
import {
    configure,
    shallow
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import artistGallery from './ArtistGallery';
import ArtistCard from '../ArtistCard/ArtistCard';

configure({
    adapter: new Adapter()
});

describe('<ArtistGallery/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<artistGallery onRemoveArtist={() => { }} />)
    });

    it('should not render <ArtistCard/> when not receiving stored artists', () => {
        wrapper.setProps({ storedArtists: [] })
        expect(wrapper.find(ArtistCard)).toHaveLength(0);
    });
});


