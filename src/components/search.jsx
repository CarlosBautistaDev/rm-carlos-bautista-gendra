import {  useSearchParams } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "./char";
import { AllCharactersContainer } from "./styles";
import { Alert, Button,  styled } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { lightGreen, purple } from "@mui/material/colors";
import { Navbar } from "./Navbar";
import {
  getSearchAction,
  nextSearchsAction,
  prevSearchsAction,
} from "../redux/searchsDucks";
export const Search = () => {
  const [searchParams] = useSearchParams();
  const param = searchParams.get("name");

  // declaramos displach para llamar a la acción o acciones
  const dispatch = useDispatch();

  // crearmos el state utilizando nuestra tienda
  // store.characters lo sacamos de la tienda
  const characters = useSelector((store) => store.search.array);

  useEffect(() => {
    dispatch(getSearchAction(param));
  }, [dispatch, param]);

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: lightGreen[800],
    "&:hover": {
      backgroundColor: lightGreen[600],
    },
  }));

  return (
    <>
      <Navbar linkTitle="Search " linkTo="/" />

      <AllCharactersContainer>
        <ColorButton
          variant="contained"
          startIcon={<NavigateBeforeIcon />}
          onClick={() => dispatch(prevSearchsAction(param))}
        >
          Anterior
        </ColorButton>
        <ColorButton
          variant="contained"
          endIcon={<NavigateNextIcon />}
          onClick={() => dispatch(nextSearchsAction(param))}
        >
          Siguiete
        </ColorButton>
      </AllCharactersContainer>
      <AllCharactersContainer>
        {characters === "no data" ? (
          <>
            <Alert severity="error" sx={{ width: "100%" }}>
              No hay coincidencias
            </Alert>
          </>
        ) : (
          characters.map((char) => (
            <Card
              key={char.id}
              id={char.id}
              image={char.image}
              name={char.name}
              status={char.status}
              species={char.species}
              location={char.location.name}
            ></Card>
          ))
        )}
      </AllCharactersContainer>
    </>
  );
};
