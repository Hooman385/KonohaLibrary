"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import VanillaTilt from "vanilla-tilt";
import LinesEllipsis from "react-lines-ellipsis";
import Image from "next/image";

type PropsType = {
  image: string;
  title: string;
  desc: string;
};

export default function CategoryCard({ image, title, desc }: PropsType) {
  const cardRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        speed: 2000,
        reverse: true,
        max: 10,
      });
    }
  }, []);

  return (
    <Card
      ref={cardRef}
      sx={{
        maxWidth: "260px",
        width: "100%",
        flexShrink: 0,
        borderRadius: 2,
        overflow: "hidden",
        bgcolor: "rgba(255,255,255)",
        boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.6)",
        transition: "all  ease-in-out",
        "&:hover": {
          transform: " translateY(-4px)",
          boxShadow: "3px 3px 4px rgba(0, 0, 0, 0.6)",
        },
      }}
    >
      <CardActionArea>
        <CardMedia sx={{ position: "relative", height: "140px" }}>
          <Image
            src={image}
            fill
            style={{ objectFit: "cover" }}
            alt={title}
            sizes="300px"
          />
        </CardMedia>
        <CardContent
          sx={{
            height: "172.5px",
            overflow: "hidden",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Box style={{ lineClamp: "4 ..." }}>
            <Typography
              component={LinesEllipsis as React.ElementType}
              text={desc}
              maxLine="4"
              ellipsis="..."
              trimRight
              basedOn="letters"
              variant="body2"
              color="text.secondary"
            >
              {desc}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
