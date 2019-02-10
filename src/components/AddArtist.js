import React from 'react'
import { Field, reduxForm } from 'redux-form'

const addArtist = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="artistName">Artist Name</label>
                <Field name="artistName" component="input" type="text" placeholder="enter artist name" />
            </div>

            <button type="submit">Add artist</button>
        </form>
    )
}

export default reduxForm({ form: 'add_artist' })(addArtist)
