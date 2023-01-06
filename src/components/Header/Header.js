import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logado from '../Logado/Logado'
import Login from '../Login/Login'
import { Container } from './styles';

const Header = () => {

    const [logado, setLogado] = useState(false)
    useEffect(() => {
        const itemStr = localStorage.getItem("token");
        if (!itemStr) {
          setLogado(false);
        } else {
          const item = JSON.parse(itemStr);
          const now = new Date();
          if (now.getTime() > item.expira) {
            localStorage.removeItem("token");
            setLogado(false);
          } else {
            setLogado(true);
          }
        }
      }, [logado]);
      
    return (
     
     <Container>
     
<ul>
                <li className='inline mx-6'>
                  <Link to="/">Home</Link></li>
                <li className='inline mx-4'width='100%' height='70px'>
                  <Link to="/list">Lista de Produtos</Link></li>
                </ul>
            
            {logado ? <Logado setLogado={setLogado} /> : <Login setLogado={setLogado} /> }
                  
                    </Container>
    )
}

export default Header
