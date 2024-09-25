import { Stack } from "@mui/material";
import CharactersMainBody from "./components/CharactersMainBody";
import CharactersSideBar from "./components/CharactersSideBar";
import MyContainer from "@/components/MyContainer";

// type PropsType = {
//   searchParams: {
//     [key: string]: any;
//   };
// };
const Characters = async () => {
  return (
    <MyContainer>
      <Stack
        direction="row"
        columnGap={1}
        sx={{ maxWidth: "1280px", margin: "0 auto", paddingY: 5, paddingX: 1 }}
      >
        <CharactersSideBar />
        <CharactersMainBody />
      </Stack>
    </MyContainer>
  );
};

export default Characters;
