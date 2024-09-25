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

export const StatusAccordion = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [selectedStatuses, setSelectedStatuses] = useState<string[]>(() => {
    const params = searchParams.getAll("status");
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

  const statusHandler = (name: string, value: string) => {
    router.push(pathname + "?" + createQueryString(name, value));
  };

  useEffect(() => {
    const params = searchParams.getAll("status");
    setSelectedStatuses(params);
    if (searchParams.get("status")) {
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
        Status
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                value="alive"
                checked={selectedStatuses.includes("alive")}
                onChange={() => statusHandler("status", "alive")}
              />
            }
            label="Alive"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="dead"
                checked={selectedStatuses.includes("dead")}
                onChange={() => statusHandler("status", "dead")}
              />
            }
            label="Dead"
          />
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};
