import React from 'react';
import Profile from '../containers/Profile';
import Events from '../containers/Events';
import Aux from '../hoc/Aux';

const artistTile = props => {
    return (
        <Aux>

            <Profile artist={'Alejandro Sanz'} />
            <Events artist={'Alejandro Sanz'} />
        </Aux>
    )
}


export default artistTile;