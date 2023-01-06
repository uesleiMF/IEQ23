import { Container, InfoBar, AgeBar, Square } from './styles'
import { FaAngleRight } from 'react-icons/fa';

export default function Banner(props) {
  return (
    <Container>
      <img src={props.image} alt={props.name} />
      <InfoBar>
        <span>Produtos disponíveis</span>
        <button>Saiba mais <FaAngleRight /></button>
        <AgeBar>
          <Square>{props.age}</Square>
          <span>{props.info}</span>
        </AgeBar>
      </InfoBar>
    </Container>
  )
}