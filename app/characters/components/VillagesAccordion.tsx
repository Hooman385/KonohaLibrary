"use client";
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

export const VillagesAccordion = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [selectedVillages, setSelectedVillages] = useState<string[]>(() => {
    const params = searchParams.getAll("village");
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

  const villagesHandler = (name: string, value: string) => {
    router.push(pathname + "?" + createQueryString(name, value));
  };

  useEffect(() => {
    const params = searchParams.getAll("village");
    setSelectedVillages(params);

    if (searchParams.get("village")) {
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
        Hidden Village
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                value="Iwagakure"
                onChange={() => villagesHandler("village", "iwagakure")}
                checked={selectedVillages.includes("iwagakure")}
              />
            }
            label="Iwagakure"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="kumogakure"
                onChange={() => villagesHandler("village", "kumogakure")}
                checked={selectedVillages.includes("kumogakure")}
              />
            }
            label="Kumogakure"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="kirigakure"
                onChange={() => villagesHandler("village", "kirigakure")}
                checked={selectedVillages.includes("kirigakure")}
              />
            }
            label="Kirigakure"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="sunagakure"
                onChange={() => villagesHandler("village", "sunagakure")}
                checked={selectedVillages.includes("sunagakure")}
              />
            }
            label="Sunagakure"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="konohagakure"
                onChange={() => villagesHandler("village", "konohagakure")}
                checked={selectedVillages.includes("konohagakure")}
              />
            }
            label="Konohagakure"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="others"
                onChange={() => villagesHandler("village", "others")}
                checked={selectedVillages.includes("others")}
              />
            }
            label="Others"
          />
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};
