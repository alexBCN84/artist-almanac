import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Grid, Row, Col } from './Grid';


configure({
    adapter: new Adapter()
});

describe('<Grid><Row><Col></Col><Col></Col></Row></Grid>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(
            <Grid gutters={0} fullWidth>
                <Row align="left">
                    <Col mobileOffset={1} mobile={12} phabletOffset={0} phablet={2}><p style={{ backgroundColor: "red" }}>Column3</p></Col>
                    <Col mobile={12} desktop={6}><p style={{ backgroundColor: "yellow" }}>Column6</p></Col>
                    <Col width={3}><p style={{ backgroundColor: "blue" }}>Column6</p></Col>
                </Row>
            </Grid>
        )
    })
    it('should have one <Row/> component', () => {
        expect(wrapper.find(Row)).toHaveLength(1);
    });
    it('should have one <Col/> component', () => {
        expect(wrapper.find(Col)).toHaveLength(3);
    });
    it('should have a Grid width of 100%', () => {
        expect(wrapper.get(0).props.style).toHaveProperty('width', '100%');
    });

});