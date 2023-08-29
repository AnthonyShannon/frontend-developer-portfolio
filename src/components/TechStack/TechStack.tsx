import React from 'react';
import { Typography, Tooltip } from '@mui/material'

const TechStack = () => (
    <div id='tech-stack-list'>
        <Typography variant='h4'>
            Tech Stack:
        </Typography>
        <Typography variant='h3'>
            <Tooltip title='HTML5'>
                <i className="devicon-html5-plain-wordmark colored"></i>
            </Tooltip>
            <Tooltip title='CSS3'>
                <i className="devicon-css3-plain-wordmark colored"></i>
            </Tooltip>
            <Tooltip title='Javascript'>
                <i className="devicon-javascript-plain colored"></i>
            </Tooltip>
            <Tooltip title='React'>
            <i className="devicon-react-original-wordmark colored"></i>
            </Tooltip>
            <Tooltip title='Bootstrap'>
                <i className="devicon-bootstrap-plain-wordmark colored"></i>
            </Tooltip>
            <Tooltip title='Material-UI'>
                <i className="devicon-materialui-plain colored"></i>
            </Tooltip>
            <Tooltip title='Git'>
                <i className="devicon-git-plain colored"></i>
            </Tooltip>
            <Tooltip title='MySQL'>
                <i className="devicon-mysql-plain colored"></i>
            </Tooltip>
            <Tooltip title='MongoDB'>
                <i className="devicon-mongodb-plain-wordmark colored"></i>
            </Tooltip>
            <Tooltip title='Express'>
                <i className="devicon-express-original colored"></i>
            </Tooltip>
            <Tooltip title='NodeJS'>
                <i className="devicon-nodejs-plain colored"></i>
            </Tooltip>
            <Tooltip title='Cucumber'>
                <i className="devicon-cucumber-plain colored"></i>
            </Tooltip>
        </Typography>
    </div>
)

export default TechStack;