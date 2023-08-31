import React from 'react';
import { Typography, Grid, Link, Paper } from '@mui/material'
import {
    LinkedIn as LinkedInIcon,
    GitHub as GitHubIcon
} from '@mui/icons-material';
import TechStack from '../TechStack/TechStack';
import introPhoto from '../../resources/photos/cliffs.jpg';

const Intro = () => {
    return (
        <div id='intro-page'>
            {/* <Paper className='paper'> */}
            <Grid container spacing={3}>
                <div id='intro-photo'>
                    <img src={introPhoto} alt="connemara" />
                </div>
                {/* <Grid id='intro-left' item xs={12} md={8} lg={6}> */}
                <div id='intro-text'>
                    <Typography variant='h2'>
                        Frontend React Developer
                    </Typography>
                    <Typography variant='h4'>
                        Hi, I'm Anthony Shannon. I am an experienced
                        frontend web developer based in Colorado Springs, Colorado.
                    </Typography>
                </div>
                {/* <div id='icon-links'>
                    <Link href='https://www.linkedin.com/in/anthony-shannon-b1a0b1aa/' target='_blank' aria-label='Link to linkedin page. This link opens in a new tab'>
                        <LinkedInIcon fontSize='large' />
                    </Link>
                    <Link href='https://github.com/AnthonyShannon' target='_blank' aria-label='Link to github page. This link opens in a new tab'>
                        <GitHubIcon fontSize='large' />
                    </Link>
                </div> */}
                <TechStack />
                {/* </Grid> */}
                {/* <Grid item xs={12} md={8} lg={6}> */}
                {/* </Grid> */}
            </Grid>
            {/* </Paper> */}
        </div>
    )
}

export default Intro;