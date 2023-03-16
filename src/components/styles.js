import styled from "styled-components";

export const AllCharactersHeader = styled.div`
  width: 100%;
  max-width: 1064px;
  margin: 4rem auto;
  padding: 0 2rem;

  .main-header {
    display: flex;
    justify-content: space-between;
  }

  h1 {
    font-size: 2.5rem;
    color: #5c8523;
    text-decoration: underline;
  }

  @media (max-width: 786px) {
    .main-header {
      flex-direction: column;
      gap: 1rem;
    }
  }
`;

export const SearchInput = styled.div`
  margin-top: 0rem;

  .search-input {
    border: 0;
    border-bottom: 3px solid #999;
    background: none;
    outline: none;
    margin-right: 20px;
    font-size: 1.1rem;
    color: #333;
  }
`;

export const AllCharactersContainer = styled.div`
  width: 100%;
  max-width: 1064px;
  margin: 4rem auto;
  padding: 0 2rem;

  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
`;

export const StyledCard = styled.div`
  width: 20rem;
  height: 28rem;
  background: linear-gradient(
    0deg,
    rgba(156, 234, 46, 0.1) 60%,
    rgba(103, 150, 37, 1) 90%,
    rgba(67, 99, 21, 1) 100%
  );
  //border: 1px solid rgba(156,234,46,1);
  border-radius: 0.5rem;
  padding: 2rem;
  /* background: rgba(0, 0,0 , 0.); */
  box-shadow: #fff 0px 0px 16px -10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: all 2s;
  transform: perspective(1px) translateZ(0);

  @media (max-width: 320px) {
    height: 35rem;
  }

  //animations

  @keyframes show {
    0% {
      transform: translateY(2000px);
    }

    100% {
      transform: translateY(-6px);
    }
  }

  @keyframes flutuate {
    0% {
      -webkit-transform: translateY(-10px);
      transform: translateY(-10px);
    }
    50% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
    100% {
      -webkit-transform: translateY(-10px);
      transform: translateY(-10px);
    }
  }

  .main {
    display: flex;
    flex-direction: column;

    gap: 1rem;
    align-items: center;
    position: relative;

    color: hsl(var(--text-gray));
  }

  img {
    width: 100%;
    width: 12rem;
    height: 12rem;
    border-radius: 15%;
    background: #46B3D4;
    padding: 5px;
    background: linear-gradient(
      0deg,
      rgba(156, 234, 46, 1) 20%,
      rgba(103, 150, 37, 1) 90%,
      rgba(67, 99, 21, 1) 100%
    );
    box-shadow: #46B3D4 0px 12px 50px -15px;
  }

  h3 {
    font-size: 2rem;
    height: 80px;
  }

  p {
    text-align: center;
  }

  .description {
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    width: 100%;
    height: 8rem;
    gap: 10px;
    color: #bdbdbd;
    padding: 0.5rem;
    border-radius: 0.5rem;

    /* background:white;  */

    @media (max-width: 786px) {
      position: relative;
      left: 0rem;
      bottom: 1.5rem;
      background: none;
    }
  }
`;

export const StyledNav = styled.nav`
  height: 6rem;
  background: white;
  padding: 0 2rem;

  .wrapper {
    max-width: 1000px;
    width: 100%;
    height: 100%;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      color: #444;
      text-decoration: none;
      &:hover {
        color: #777;
      }
    }
  }
  @media (max-width: 786px) {
    display: flex;
    flex-direction: column;
    display: inline-block;
  }
`;

export const ButtonSubmit = styled.button`
  background-color: #5c8523;
  border: none;
  color: white;
  padding: 8px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  width: 280px;
  cursor: pointer;
  &:hover {
    background-color: #5c8523c2;
  }
`;
