import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Button, CardActions } from "@mui/material";
import fallbackImg from "../assets/alternate.jpg";
import { useState, useEffect } from "react";

function Cards({ Topic, Time, image }) {
  const [imgSrc, setImgSrc] = useState(image || fallbackImg);

  useEffect(() => {
    setImgSrc(image || fallbackImg);
  }, [image]);

  return (
    <Card sx={{ width: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          src={imgSrc}
          alt={Topic || "Image not available"}
          onError={() => setImgSrc(fallbackImg)}
          className="h-1/2"
        />

        <CardContent>
          <Typography gutterBottom variant="h5">
            {Topic}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {Time}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions sx={{ justifyContent: "center" }}>
        <Button size="small" variant="contained">
          Register
        </Button>
      </CardActions>
    </Card>
  );
}

export default Cards;
