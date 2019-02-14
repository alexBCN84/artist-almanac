import React from 'react';

const herobanner = () => {
    const styles = {
        width: "100%",
        height: "50vh",
        paddingTop: "30vh",
        backgroundImage: "url('https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed"
    }

    const textStyles = {
        color: "#fff",
        textShadow: "0 1px 2px 0 rgba(34,36,38,.15)",
        fontFamily: "'Abel', sans-serif",
        fontWeight: 800,
        letterSpacing: 2,
        textTransform: "uppercase",
        fontSize: "1.5em"
    }
    return (
        <section style={styles}>
            <h1 style={textStyles}>Find your favourite Artists</h1>
            <h1 style={textStyles}>Access their Facebook Profiles</h1>
            <h1 style={textStyles}>Keep up with their upcoming events</h1>
        </section>
    )
}

export default herobanner;