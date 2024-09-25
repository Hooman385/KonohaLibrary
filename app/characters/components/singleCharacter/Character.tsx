import { Character as CharacterType } from "@/types/characters";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
type CharacterProps = {
  data: CharacterType;
};
const Character = ({ data }: CharacterProps) => {
  const dataKeys = Object.keys(data);
  return (
    <Stack alignItems="center">
      <Stack
        bgcolor="gray"
        sx={{ width: "80%", height: "400px", margin: 4, borderRadius: 4 }}
      >
        <Stack direction="row" justifyContent="center">
          <Image
            src={data.images[0]}
            width={200}
            height={200}
            alt="character's image"
            sizes="100vw"
            style={{
              marginTop: "-20px",
              borderRadius: "16px",
              objectFit: "cover",
            }}
          />
        </Stack>
        <Typography>Name: {data.name}</Typography>
        <Typography>Status: {data.personal?.status ? data.personal?.status : "Alive"}</Typography>

        {/* {dataKeys.map((key) => {
          if (typeof data[key as keyof CharacterType] === "string") {
            return (
              <Typography key={key}>
                {key[0].toUpperCase() + key.substring(1)}:{" "}
                {data[key as keyof CharacterType] as string}
              </Typography>
            );
          }
        })} */}
      </Stack>
    </Stack>
  );
};

export default Character;
