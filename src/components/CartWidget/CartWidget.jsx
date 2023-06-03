import { FaCartPlus } from 'react-icons/fa';
import "./CartWidget.css"

const CartWidget = () => {
  return (
    <div className='cartIcon-container p-3'>
        <FaCartPlus className='cartIcon'/>
        <span className='cart-number'>5</span>
    </div>
  )
}

export default CartWidget