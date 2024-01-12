import React from "react";
import { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");

  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList?limit=9999",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=9999",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExercises);
    }
  };
  return (
    <div>
      <Stack alignItems="center" justifyContent="center">
        <Typography
          fontWeight={600}
          sx={{ fontSize: { lg: "44px", xs: "30px" } }}
          textAlign="center"
          mb="50px"
        >
          Awesome Exercises You <br />
          Should Know
        </Typography>
        <Box position="relative" mb="73px">
          <TextField
            sx={{
              input: { fontWeight: "700", border: "none", borderRadius: "4px" },
              width: { lg: "800px", xs: "350px" },
              backgroundColor: "#fff",
              borderRadius: "40px",
            }}
            placeholder="Search Exercises"
            height="76px"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value.toLowerCase());
            }}
            type="text"
          ></TextField>

          <Button
            sx={{
              backgroundColor: "#FF2526",
              color: "#fff",
              textTransform: "none",
              width: { lg: "175px", xs: "100px" },
              fontSize: { lg: "20px", xs: "14px" },
              height: "56px",
              position: "absolute",
              right: "0",
            }}
            className="search-btn"
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>

        <Box sx={{ position: "relative", width: "100%", p: "20px" }}></Box>
      </Stack>
      <HorizontalScrollbar
        data={bodyParts}
        bodyParts
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
      />
    </div>
  );
};

export default SearchExercises;
