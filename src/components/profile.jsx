import React, { useEffect } from "react";
import { StyledCard } from "./styles";
import { Navbar } from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getProfileAction } from "../redux/profileDucks";

export const Profile = () => {
  const [searchParams] = useSearchParams();
  const param = searchParams.get("id");
  // declaramos displach para llamar a la acción o acciones
  const dispatch = useDispatch();

  // crearmos el state utilizando nuestra tienda
  // store.characters lo sacamos de la tienda
  const character = useSelector((store) => store.profile.array);

  useEffect(() => {
    dispatch(getProfileAction(param));
  }, [dispatch, param]);
  return (
    <center>
        {character.length ??
        
        <>
          <Navbar linkTitle="Profile" linkTo="/" />
          <br />
          <br />
          <br />
          <br />
          <br />
          <StyledCard key={character.id}>
            <div className="main">
              <img src={character.image} alt={character.name} />
              <h3>{character.name}</h3>
            </div>
            <div className="description">
              <p>
                <b>Status:</b> {character.status}
              </p>
              <p>
                <b>Specie:</b> {character.species}
              </p>
              <p>
                <b>Last location:</b> {character.location.name}
              </p>
            </div>
          </StyledCard>
        </>
        }
    </center>
  );
};
