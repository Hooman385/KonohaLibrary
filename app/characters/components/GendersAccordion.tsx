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

export const GendersAccordion = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [selectedGenders, setSelectedGenders] = useState<string[]>(() => {
    const params = searchParams.getAll("gender");
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

  const gendersHandler = (name: string, value: string) => {
    router.push(pathname + "?" + createQueryString(name, value));
  };

  useEffect(() => {
    const params = searchParams.getAll("gender");
    setSelectedGenders(params);

    if (searchParams.get("gender")) {
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
        Gender
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                value="male"
                onChange={() => gendersHandler("gender", "male")}
                checked={selectedGenders.includes("male")}
              />
            }
            label="Male"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="female"
                onChange={() => gendersHandler("gender", "female")}
                checked={selectedGenders.includes("female")}
              />
            }
            label="Female"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="others"
                onChange={() => gendersHandler("gender", "others")}
                checked={selectedGenders.includes("others")}
              />
            }
            label="Others"
          />
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};
