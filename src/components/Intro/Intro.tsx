import React from 'react';
import { Typography, Grid } from '@mui/material'
import {LinkedIn as LinkedInIcon, GitHub as GitHubIcon } from '@mui/icons-material';

const Intro = () => {
    return (
        <div id='intro-page'>
            <Grid container spacing={3}>
                <Grid item xs={12} md={8} lg={6}>
                    <div id='intro-text'>
                        <Typography variant='h2'>
                            Frontend React Developer
                        </Typography>
                        <Typography variant='h4'>
                            Hi, I'm Anthony Shannon. I am an experienced 
                            frontend web developer based in Colorado Springs, Colorado.
                        </Typography>
                    </div>
                    <>
                    <LinkedInIcon />
                    <GitHubIcon />
                    </>
                </Grid>
                <Grid item xs={12} md={8} lg={6}>
                    <div id='intro-photo'>
                        <img src={require("../../resources/photos/cliffs.jpg")} alt="connemara" />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Intro;