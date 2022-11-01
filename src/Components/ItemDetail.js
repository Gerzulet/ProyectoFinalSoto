
import "../Assets/Item.css"
import ItemCount from "./ItemCount"
import {useState, useContext} from 'react'
import CartWidget from './CartWidget'
import CartContext from '../Context/CartContext'

function ItemDetail(props) {
    const {addItem} = useContext(CartContext)
   
    
    
    
    
    const [cargado, estaCargado] = useState(false)
    const [cantidad, setCantidad] = useState(0)
    
    function onAdd(numero) {
        setCantidad(numero);
    }
    
    function agregarCarrito(){
        const producto = {
            "id": props.id,
            "nombre": props.nombre,
            "valor": props.valor,
            "cantidad": cantidad
        }
    addItem(producto)
    
    estaCargado(true)   
    

    }


    return (
             <div className='card md:ml-20 my-5 md:flex'>
                
            <div className="w-full max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700">
               
                    <img className="p-8 rounded-t-lg" src={props.img} alt="productimage" />
                
                <div className="px-5 pb-5 text-center">
                    
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{props.nombre}</h5>
                   

                    <div className="flex-col  items-center ml-24">
                    <div className="flex items-center mt-2.5 mb-5">
                        <span className="bg-blue-100 text-blue-800 text-s font-semibold mt-5 mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Calificacion: {props.calificacion}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-1xl font-bold text-gray-900 dark:text-white">Autor: </span> 
                        <span className="text-1xl text-gray-900 dark:text-white mr-10">{props.autor}</span> 
                    </div>

                    </div>
                    <span className="text-white font-bold"> Precio : {props.valor} </span>
                   {!cargado ? <ItemCount stock={props.stock} initial={0} funcion={onAdd}/> : <div className="flex justify-center mt-5"><CartWidget/></div>}
                </div>
            </div>
                    
            <div className="w-full max-w-sm pt-3 bg-white dark:bg-gray-800 dark:border-gray-700">
                
                <div className="px-5 pb-5 mt-10">
                   
                    <div className="flex items-center mt-2.5 mb-5">
                        <span className="text-s font-semibold mr-2 px-2.5 py-0.5 rounded text-white ml-3"> {props.reseña}</span>
                    </div>

                    <button className="text-white font-bold ml-20 mt-6 rounded-full bg-red-700 p-2 hover:bg-red-500" onClick={agregarCarrito}> Agregar al carrito</button>
                   
                </div>
            </div>


        </div>
  )
   
  }
  
  export  default ItemDetail