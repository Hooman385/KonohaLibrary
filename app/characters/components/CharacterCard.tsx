"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Chip from "@mui/material/Chip";
import VanillaTilt from "vanilla-tilt";

import Image from "next/image";

type PropsType = {
  image: string;
  title: string;
  dead?: string;
};

export default function CharacterCard({ image, title, dead }: PropsType) {
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
        height: "241px",
        maxWidth: "250px",
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
      <CardActionArea sx={{ height: "100%", maxHeight: "250px" }}>
        <CardMedia
          sx={{
            objectFit: "cover",
            height: "calc(100% - 70px)",
            position: "relative",
          }}

          // image={image ? image : "/assets/images/placeholder.webp"}
        >
          <Image
            src={!image ? "/assets/images/placeholder.webp" : image}
            alt={title}
            style={{ objectFit: "cover" }}
            // sizes="210px"
            unoptimized
            placeholder="blur"
            blurDataURL="/assets/images/placeholder.webp"
            fill
          />
          {dead && (
            <Chip
              sx={{ position: "absolute", top: "10px", left: "5px" }}
              label={dead.replace("Deceased", "DEAD").toUpperCase()}
              color="error"
              size="small"
            />
          )}
        </CardMedia>
        <CardContent
          sx={{
            height: "70px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography gutterBottom variant="body1" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
