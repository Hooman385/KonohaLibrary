import { Filters } from "@/app/api/characters/route";
import { Character } from "@/types/characters";

export function FilterCharacters(
  characters: Character[],
  filters: Filters
) {
  const {
    gender: sex,
    rank: ranks,
    status,
    village,
    search: searchedName,
  } = filters;

  const filteredCharacters = characters.map((character: Character) => {
    let searchFilterExists = false;
    let hasSearch = false;

    let genderFilterExists = false;
    let hasGender = false;

    let rankFilterExists = false;
    let hasRank = false;

    let statusFilterExists = false;
    let hasStatus = false;

    let villageFilterExists = false;
    let hasVillages = false;

    // check for search
    if (searchedName) {
      searchFilterExists = true;
      if (character.name.toLowerCase().includes(searchedName[0].toLowerCase())) {
        hasSearch = true
      } else {
        hasSearch = false
      }
    } else {
      searchFilterExists = false;
    }

    //check gender
    if (sex) {
      genderFilterExists = true;
      if (
        !sex.includes("others") &&
        character.personal?.sex &&
        !sex.includes(character.personal?.sex?.toLowerCase())
      ) {
        hasGender = false;
      } else if (
        !sex.includes("others") &&
        character.personal?.sex &&
        sex.includes(character.personal?.sex?.toLowerCase())
      ) {
        hasGender = true;
      } else if (sex.includes("others") && !character.personal?.sex) {
        hasGender = true;
      }
    } else {
      genderFilterExists = false;
    }

    // check ranks

    if (ranks) {
      rankFilterExists = true;

      // need to check for genin, chunin and jonin first
      if (
        (ranks.includes("jōnin") ||
          ranks.includes("chūnin") ||
          ranks.includes("genin")) &&
        !ranks.includes("others")
      ) {
        if (character.rank?.ninjaRank) {
          const values = Object.values(character.rank.ninjaRank);
          const lastValue = values[values.length - 1].toLowerCase();

          if (ranks.includes(lastValue)) {
            hasRank = true;
          } else {
            hasRank = false;
          }
        } else if (!character.rank?.ninjaRank) {
          hasRank = false;
        }

        // now check if ranks filters has "others" on top of other ranks
      } else if (
        (ranks.includes("jōnin") ||
          ranks.includes("chūnin") ||
          ranks.includes("genin")) &&
        ranks.includes("others")
      ) {
        hasRank = true;

        // now check if ranks filters has only the "others" rank
      } else if (ranks.length === 1 && ranks.includes("others")) {
        if (!character.rank?.ninjaRank) {
          hasRank = true;
        } else if (character.rank.ninjaRank) {
          const values = Object.values(character.rank.ninjaRank);
          const lastValue = values[values.length - 1].toLowerCase();
          if (
            lastValue === "genin" ||
            lastValue === "chūnin" ||
            lastValue === "jōnin"
          ) {
            hasRank = false;
          } else {
            hasRank = true;
          }
        }
      }

      // now check if ranks filter has "others" too
    } else {
      rankFilterExists = false;
      hasRank = false;
    }

    // check status
    if (status) {
      statusFilterExists = true;

      if (status && status.includes("dead") && status.includes("alive")) {
        hasStatus = true;
      } else if (
        status &&
        status.includes("dead") &&
        character.personal?.status === "Deceased"
      ) {
        hasStatus = true;
      } else if (
        status &&
        status.includes("dead") &&
        !character.personal?.status
      ) {
        hasStatus = false;
      } else if (
        status &&
        status.includes("alive") &&
        character.personal?.status === "Deceased"
      ) {
        hasStatus = false;
      } else if (
        status &&
        status.includes("alive") &&
        !character.personal?.status
      ) {
        hasStatus = true;
      }
    } else if (!status) {
      statusFilterExists = false;
      hasStatus = false;
    }

    // check village
    if (village) {
      villageFilterExists = true;

      if (
        character.personal?.affiliation &&
        typeof character.personal.affiliation === "string" &&
        village.includes(character.personal.affiliation.toLocaleLowerCase())
      ) {
        hasVillages = true;
      } else if (
        character.personal?.affiliation &&
        Array.isArray(character.personal.affiliation) &&
        village.includes(character.personal.affiliation[0].toLocaleLowerCase())
      ) {
        hasVillages = true;
      }
    } else {
      villageFilterExists = false;
      hasVillages = false;
    }

    if (
      (genderFilterExists && !hasGender) ||
      (rankFilterExists && !hasRank) ||
      (statusFilterExists && !hasStatus) ||
      (villageFilterExists && !hasVillages) ||
      (searchFilterExists && !hasSearch)
    ) {
      return undefined;
    } else {
      return character;
    }
  });

  return filteredCharacters.filter(
    (item) => item !== undefined && item !== null
  );
}
