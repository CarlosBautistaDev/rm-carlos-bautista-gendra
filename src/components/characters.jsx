import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCharactersAction,
  nextCharactersAction,
  prevCharactersAction,
} from "../redux/charactersDucks";
import { Card } from "./char";
import { AllCharactersContainer } from "./styles";
import { Button, styled } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { lightGreen, purple } from "@mui/material/colors";
import { Navbar } from "./Navbar";
export const Characters = () => {

  // declaramos displach para llamar a la acción o acciones
  const dispatch = useDispatch();

  // crearmos el state utilizando nuestra tienda
  // store.characters lo sacamos de la tienda
  const characters = useSelector((store) => store.characters.array);

  useEffect(() => {
    dispatch(getCharactersAction());
  }, [dispatch]);

 
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: lightGreen[800],
    "&:hover": {
      backgroundColor: lightGreen[600],
    },
  }));

  return (
    <>
       <Navbar linkTitle="Rick and Morty" linkTo="/" />
     

      <AllCharactersContainer>

      <ColorButton
        variant="contained"
       startIcon={<NavigateBeforeIcon />}
        onClick={() => dispatch(prevCharactersAction())}
      >
        Anterior
      </ColorButton>
      <ColorButton
        variant="contained"
        endIcon={< NavigateNextIcon/>}
        onClick={() => dispatch(nextCharactersAction())}
      >
        Siguiete
      </ColorButton>
      </AllCharactersContainer>
     
      <AllCharactersContainer>
        {characters.map((char) => (
          <Card
            key={char.id}
            id={char.id}
            image={char.image}
            name={char.name}
            status={char.status}
            species={char.species}
            location={char.location.name}
          ></Card>
        ))}
      </AllCharactersContainer>
    </>
  );
};
