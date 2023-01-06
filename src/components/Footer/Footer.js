import { Container, Social } from './styles';
import { GrInstagram } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <Container>
     
      <Social>
               
             <a href="https://pt-br.facebook.com/ieqsedemaraba/">
                 
                 <FaFacebookSquare/>
               </a>
                           
               <a href="https://www.instagram.com/ieqsedemaraba/">
                 
                 <GrInstagram/>
               </a>
               
        </Social>
     
      <span>IEQ</span>
      <span>Igreja do Evangelio Quadrangular</span>
      <span>Marabá-PA</span>
        </Container>
  )
}