import React from 'react'
// import BaseLayout from '../layouts/BaseLayout'
// import css from "./Home.module.css";
// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function HeroIntroduction(){

    return (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              className='about-style'
              image='../../src/images/jakeroberts.jpg'
              alt='author'
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              </Typography>
              <Typography variant="body2" color="text.secondary">
              <div class="text-center">
              <h5>Hi my name is</h5>
                <h2>Jake Roberts</h2>
                <p>I am a full stack developer who is going to continue to grow and thrive in this industry. 
                <br></br>
                Over the past 6 months I have learnt many new front/back end technologies. I have thoroughly
                <br></br>
                enjoyed learning in the fullstack web developer course and I'm excited to display my new skills.
                </p>
            </div>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
    }