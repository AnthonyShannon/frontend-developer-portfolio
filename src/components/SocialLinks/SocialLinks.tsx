import React from 'react';
import { Typography, Grid, Link, Paper } from '@mui/material'
import {
    LinkedIn as LinkedInIcon,
    GitHub as GitHubIcon
} from '@mui/icons-material';

const SocialLinks = () => {
    return (
        <div id='icon-links'>
        <Link href='https://www.linkedin.com/in/anthony-shannon-b1a0b1aa/' target='_blank' aria-label='Link to linkedin page. This link opens in a new tab'>
            <LinkedInIcon fontSize='large' />
        </Link>
        <Link href='https://github.com/AnthonyShannon' target='_blank' aria-label='Link to github page. This link opens in a new tab'>
            <GitHubIcon fontSize='large' />
        </Link>
    </div>
    )
}

export default SocialLinks;