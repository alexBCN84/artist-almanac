import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Content from './Content';


configure({
    adapter: new Adapter()
});

describe('<Content/>', () => {

    it('renders children when passed in', () => {
        const wrapper = shallow((
            <Content>
                <div />
            </Content>
        ));
        expect(wrapper.contains(<div />)).toEqual(true);
    });
});