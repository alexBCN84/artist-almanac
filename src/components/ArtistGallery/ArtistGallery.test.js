import React from 'react';
import {
    configure,
    shallow
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { artistGallery } from './ArtistGallery';
import ArtistCard from '../ArtistCard/ArtistCard';
const mockData = [{
    events: [{
        city: "Sevilla",
        country: "Spain",
        date: "2019-02-15T20:30:00",
        id: "1013729382",
        venue: "Fanatic"
    }, {
        city: "Sevilla",
        country: "Spain",
        date: "2019-06-01T22:00:00",
        id: "1012825362",
        venue: "Estadio Benito Villamarin",
    }, {
        city: "Madrid",
        country: "Spain",
        date: "2019-06-15T22:00:00",
        id: "1012842699",
        venue: "Estadio Metropolitano"
    }],
    id: "0f6be7c9-a9a0-4c69-8fa8-63eb9a7fe447",
    profile_facebook: "",
    profile_id: "27791",
    profile_image: "https://s3.amazonaws.com/bit-photos/large/8656693.jpeg",
    profile_name: "Alejandro Sanz",
    profile_upcoming_event_count: 3
}];
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


