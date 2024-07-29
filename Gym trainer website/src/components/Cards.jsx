import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Cards.css';
import Aesthetics from './Aesthetics';

function Cards() {
  const navigate = useNavigate();

  return (
    <div className="cards-container">
        <Card className="cards-1" sx={{ width: 345 }} onClick={() => navigate('/losebelly')}>
          <CardActionArea>
            <CardMedia
              className="card-img"
              component="img"
              height="140"
              image="src/assets/fatloss.jpg"
              alt="Lose Belly Fat"
            />
            <CardContent>
              <p className="card-word">Lose belly Fat</p>
            </CardContent>
          </CardActionArea>
        </Card>

      <Card className="cards-1" sx={{ width: 345 }} onClick={() => navigate('/aesthetics')}>
        <CardActionArea>
          <CardMedia
            className="card-img"
            component="img"
            height="140"
            image="src/assets/aesthetics.jpg"
            alt="Aesthetics"
            />
          <CardContent>
            <p className="card-word">Aesthetics</p>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className="cards-1" sx={{ width: 345 }} onClick={() => navigate('/rock-hard-abs')}>
        <CardActionArea>
          <CardMedia
            className="card-img"
            component="img"
            height="140"
            image="src/assets/6pack.jpg"
            alt="Rock Hard Abs"
          />
          <CardContent>
            <p className="card-word">Rock hard Abs</p>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className="cards-1" sx={{ width: 345 }} onClick={() => navigate('/mr-olympia')}>
        <CardActionArea>
          <CardMedia
            className="card-img"
            component="img"
            height="140"
            image="src/assets/olympia.jpg"
            alt="Mr. Olympia"
          />
          <CardContent>
            <p className="card-word">Mr. Olympia</p>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Cards;
