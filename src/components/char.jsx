import { useNavigate } from 'react-router-dom';
import { StyledCard } from './styles'

export const Card = ({id, image, name, status, species, location}) => {
  const navigate = useNavigate()

 return (
  <StyledCard key={id} onClick={()=> navigate(`/profile?id=${id}`)}>
    <div className="main">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
    <div className="description">
      <p><b>Status:</b> {status}</p>
      <p><b>Specie:</b> {species}</p>
      <p><b>Last location:</b> {location}</p>
    </div>
  </StyledCard>
 )
};
