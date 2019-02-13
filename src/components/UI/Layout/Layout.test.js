import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Layout from './Layout';


configure({
    adapter: new Adapter()
});

describe('<Layout/>', () => {

    it('renders children when passed in', () => {
        const wrapper = shallow((
            <Layout>
                <div />
            </Layout>
        ));
        expect(wrapper.contains(<div />)).toEqual(true);
    });
});