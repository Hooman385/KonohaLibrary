import MyContainer from "@/components/MyContainer";
import CharacterComponent  from "../components/singleCharacter/Character";

import { Character as CharacterType } from "@/types/characters";

import { notFound } from "next/navigation";


export async function generateStaticParams() {
  const posts = await fetch(
    "https://narutodb.xyz/api/character?page=1&limit=2000"
  ).then((res) => res.json());
  const characterIds = posts.characters
    .slice(0, 50)
    .map((character: CharacterType) => ({
      id: character.id.toString(),
    }));
  return characterIds;
}

type PropsType = {
  params: {
    id: string | number;
  };
};

const Characters = async ({ params }: PropsType) => {
  let data = {} as CharacterType;
  try {
    const res = await fetch(`https://narutodb.xyz/api/character/${params.id}`);
    if (!res.ok) {
      throw new Error("character not found");
    } else {
      const characterData = await res.json();
      if (characterData.name !== "Local Sitemap") {
        data = { ...characterData };
      } else {
        throw new Error("character not found");
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      notFound();
    }
  }

  return (
    <MyContainer>
      <CharacterComponent data={data} />
    </MyContainer>
  );
};

export default Characters;
