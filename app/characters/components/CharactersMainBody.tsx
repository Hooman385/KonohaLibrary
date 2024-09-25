"use client";
import React, { Suspense } from "react";
import { Button, Grid, Stack, Typography, Modal } from "@mui/material";

import CharacterCardSkeleton from "./CharacterCardSkeleton";
import { v4 as uuidv4 } from "uuid";
import { useInfiniteCharacters } from "@/services/queries";
import { usePathname, useSearchParams } from "next/navigation";
import { m, motion, stagger } from "framer-motion";
import { useEffect, useState } from "react";
import SearchBox from "@/components/SearchBox";
import CharacterCard from "./CharacterCard";
import { Character } from "@/types/characters";
import { Vortex } from "react-loader-spinner";
import { useQueryClient } from "@tanstack/react-query";

const CharactersMainBody = () => {
  const pathname = usePathname();
  const queryClient = useQueryClient();

  const searchParams = useSearchParams();
  const queryString = searchParams.toString();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
    isFetching,
    isError,
    status,

    refetch,
  } = useInfiniteCharacters(queryString);

  const [animationTrigger, setAnimationTrigger] = useState(false);
  const [modalOpen] = useState(true);

  const framerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
    },
  };

  const framerItem = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  useEffect(() => {
    if (status === "success") {
      setAnimationTrigger(true);
    }
  }, [data, status]);

  useEffect(() => {
    refetch();
  }, [searchParams]);

  useEffect(() => {
    if (pathname === "/characters") {
      queryClient.resetQueries({
        queryKey: ["infiniteCharacters"],
      });
    }
  }, [pathname, queryClient]);

  return (
    <Stack
      spacing={2}
      sx={{
        width: { xs: "100%", md: "calc(100% - 260px)" },
        borderRadius: "8px",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <Typography sx={{ marginBottom: 3, textAlign: "center" }} variant="h5">
        Characters
      </Typography>
      {/* <CharactersSearchBox /> */}
      <SearchBox />
      <Grid container spacing={2}>
        {isPending &&
          [1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
            <Grid
              item
              key={uuidv4()}
              sx={{ display: "flex", justifyContent: "center" }}
              xs={12}
              sm={6}
              md={6}
              lg={4}
              xl={3}
            >
              <CharacterCardSkeleton />
            </Grid>
          ))}

        {isError && (
          <Grid
            item
            component={Typography}
            xs={12}
            sx={{ textAlign: "center" }}
            variant="h2"
          >
            Fetch failed
          </Grid>
        )}
      </Grid>

      <Grid
        component={motion.div}
        variants={framerContainer}
        initial="hidden"
        animate={data && animationTrigger ? "visible" : "hidden"}
        container
        spacing={2}
        sx={{ marginBottom: 2 }}
      >
        {isFetching && !isPending && (
          <Modal open={modalOpen}>
            <Stack
              justifyContent="center"
              alignItems="center"
              sx={{ height: "100%" }}
            >
              <Vortex
                visible={true}
                height="120"
                width="120"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={[
                  "#2069CC",
                  "#85DAFE",
                  "#2069CC",
                  "#85DAFE",
                  "#2069CC",
                  "#85DAFE",
                ]}
              />
            </Stack>
          </Modal>
        )}
        {data &&
          data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.characters.map((item: Character) => {
                return (
                  <Grid
                    item
                    key={item.id}
                    component={motion.div}
                    variants={framerItem}
                    // initial="hidden"
                    // animate="visible"
                    sx={{ display: "flex", justifyContent: "center" }}
                    xs={12}
                    sm={6}
                    md={6}
                    lg={4}
                    xl={3}
                  >
                    <CharacterCard
                      dead={item.personal?.status}
                      title={item.name}
                      image={item.images[0]}
                    />
                  </Grid>
                );
              })}
            </React.Fragment>
          ))}
      </Grid>

      <Button
        onClick={() => fetchNextPage()}
        variant="contained"
        sx={{
          margin: "0 auto",
          width: "100%",
          maxWidth: "250px",
          marginTop: 3,
          bgcolor: "warning.main",
          "&:hover": { bgcolor: "warning.dark" },
        }}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage ? "Loading more..." : "Load More"}
      </Button>
    </Stack>
  );
};

export default CharactersMainBody;
