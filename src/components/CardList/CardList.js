import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardList = (props) => {
    const navigate = useNavigate()

    const openProduto = () => {
        navigate('/cadprod', { state: props.produto })
    }
    
    return (
        <div className='flex flex-col gap-2 cursor-pointer hover:shadow-2xl hover:bg-cyan-200 p-2 rounded-2xl' onClick={openProduto}>
            <div className='text-center text-xl font-bold px-2'>{props.produto.title}</div>
            <div className='justify-center flex'><img src={props.produto.cover} alt={props.produto.title} className="w-48" /></div>
        </div>
    )
}

export default CardList
