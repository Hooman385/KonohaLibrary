import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export const RanksAccordion = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [selectedRanks, setSelectedRanks] = useState<string[]>(() => {
    const params = searchParams.getAll("rank");
    return params || [];
  });

  const [expanded, setExpanded] = useState(false);

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    const existingValues = params.getAll(name);

    if (existingValues.includes(value)) {
      const newValues = existingValues.filter((item) => item !== value);
      params.delete(name);
      newValues.forEach((val) => params.append(name, val));
    } else {
      params.append(name, value);
    }

    return params.toString();
  };

  const ranksHandler = (name: string, value: string) => {
    router.push(pathname + "?" + createQueryString(name, value));
  };

  useEffect(() => {
    const params = searchParams.getAll("rank");
    setSelectedRanks(params);

    if (searchParams.get("rank")) {
      setExpanded(true);
    }
  }, [searchParams]);

  return (
    <Accordion
      expanded={expanded}
      onChange={() => setExpanded((prev) => !prev)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        Rank
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                value="genin"
                checked={selectedRanks.includes("genin")}
                onChange={() => ranksHandler("rank", "genin")}
              />
            }
            label="Genin"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="chunin"
                checked={selectedRanks.includes("chūnin")}
                onChange={() => ranksHandler("rank", "chūnin")}
              />
            }
            label="Chunin"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="jonin"
                checked={selectedRanks.includes("jōnin")}
                onChange={() => ranksHandler("rank", "jōnin")}
              />
            }
            label="Jonin"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="others"
                checked={selectedRanks.includes("others")}
                onChange={() => ranksHandler("rank", "others")}
              />
            }
            label="Others"
          />
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};
