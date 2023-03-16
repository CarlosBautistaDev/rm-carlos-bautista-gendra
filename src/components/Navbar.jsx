import { useState } from "react";
import {
  AllCharactersHeader,
  ButtonSubmit,
  SearchInput,
  StyledNav,
} from "./styles";
import { Link, useNavigate,  } from "react-router-dom";
import { Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
export const Navbar = ({ linkTitle, linkTo }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate()

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    navigate(`/character?name=${search}`);
  };
  return (
    <StyledNav>
      <div className="wrapper" id="navbar">
        <Link to={linkTo}> <Typography gutterBottom variant="h5" component="div">
         <HomeIcon fontSize="large" style={{verticalAlign:'-webkit-baseline-middle', marginLeft:'10px', color: '#5c8523'}}/>
        </Typography></Link>

        <AllCharactersHeader>
          <div className="main-header" id="main-header">
            <h1>{linkTitle}</h1>
          </div>
        </AllCharactersHeader>
          <form onSubmit={onSubmitForm} style={{display: 'contents'}}>
            <SearchInput>
              <input
                type="text"
                className="search-input"
                placeholder="Search for a character"
                value={search}
                onChange={(e) => handleSearch(e)}
              />
            </SearchInput>
            <ButtonSubmit >Search <SearchIcon style={{verticalAlign:'bottom', marginLeft:'10px'}}/></ButtonSubmit>
          </form>
      </div>
    </StyledNav>
  );
};
