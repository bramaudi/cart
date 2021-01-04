import './style.css'
import { m, useState } from 'minite'
import vector from '../../assets/images/undraw_empty_cart_co35.svg'
import listFood from './foods'
import listDrink from './drinks'
import Cart from './cart'

const IconInfo = () => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>

/** @jsx m */
const Menu = () => {
  const [cartShow, setCartShow] = useState(false)
  const [cartPop, setCartPop] = useState(false)
  const [foods, setFoods] = useState(listFood)
  const [drinks, setDrinks] = useState(listDrink)

  const handlePop = () => {
    setCartPop(false)
    setCartPop(true)
  }

  const handleAddToCart = (item) => {
    item.count += 1
    handlePop()
  }

  return (
    <section id="menu">
      <h1>Halo Bos!</h1>
      <p style={{ padding: '0 5rem 0 0' }}>Yahhaha hayuk bro silahkan dipilih dulu ya cemilannya yahhaha:</p>

      <div class="divider"></div>

      <div className="menu-wrapper">
      <div className="menu-container">

        <h5 className="subtitle">Makanan</h5>
        <div className="menus">
          {foods.map(food => (
            <div className="menu-item shadow">
              <div className="title">
                {food.name}
                <div className="desc"><IconInfo /> {food.desc}</div>
              </div>
              <div className="price">Rp.{food.price}</div>
              <button
                className="button add"
                onClick={() => handleAddToCart(food)}
                >
                <svg fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
              </button>
            </div>
          ))}
        </div>

        <h5 className="subtitle">Minuman</h5>
        <div className="menus">
          {drinks.map(drink => (
            <div className="menu-item shadow">
              <div className="title">
                {drink.name}
                <div className="desc"><IconInfo /> {drink.desc}</div>
              </div>
              <div className="price">Rp.{drink.price}</div>
              <button
                className="button add"
                onClick={() => handleAddToCart(drink)}
                >
                <svg fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
              </button>
            </div>
          ))}
        </div>

        <Cart
          state={{ foods, drinks, cartPop, cartShow }}
          set={{ setCartShow, setFoods, setDrinks }} />

        <div className="cart-spacing"></div>
        <img className="vector" src={vector} alt="Ilustrasi" />
        
      </div>
      </div>

    </section>
  )
}

export default Menu
