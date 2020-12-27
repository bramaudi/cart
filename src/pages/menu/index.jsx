import './style.css'
import { m } from 'minite'
import { liffInit, liffLogin } from '../../liff'
import Cart from './cart'

liffInit()
  .then(() => {
    if (liff.isLoggedIn()) {
      liff.getProfile()
        .then(profile => {
          console.log('profile', profile);
          custName = profile.displayName
        })
        .catch((err) => {
          console.log('profile error', err);
        });
    } else liffLogin()
  })
	.catch(err => console.log('liff init fail', err))

const IconInfo = () => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>

const state = {
  cust: custName || 'Customer',
  foods: [
    {
      name: 'Nasi Goreng Milenial',
      desc: 'Extra MSG++',
      price: 8000,
      count: 0
    },
    {
      name: 'Lalapan Spesial',
      desc: 'Tanpa Sayur',
      price: 2000,
      count: 0
    },
    {
      name: 'Ayam Geprek Super Pedas',
      desc: 'Aman bagi anak-anak',
      price: 6000,
      count: 0
    }
  ],
  drinks: [
    {
      name: 'Es Teh Manis',
      desc: 'Ga usah manis² yang penting setia',
      price: 1000,
      count: 0
    },
    {
      name: 'Es Teh Gula Pisah',
      desc: 'Pisah-nya ngga terlalu jauh²',
      price: 1000,
      count: 0
    },
    {
      name: 'Jus Tomat',
      desc: 'Tomat-nya bukan tobat maksiat',
      price: 3000,
      count: 0
    },
    {
      name: 'Air Putih Hangat',
      desc: 'Cocok untuk tanggal tua',
      price: 0,
      count: 0
    }
  ],
  cartShow: false,
  cartPop: false
}

const handleAddToCart = (set, item) => {
  item.count += 1

  set('cartPop', true)
  setTimeout(() => {
    set('cartPop', false)
  }, 250)

  set() // dispatch all state changes
}

/** @jsx m */
export default () => {
  return {
    state,
    view: (state, set) => {
      const {
        cust,
        foods,
        drinks
      } = state || {}

      return (
        <section>
          <h1>Hi {cust}!</h1>
          <p>Yuk silahkan pilih dulu ya cemilannya:</p>
  
          <h5 className="subtitle">🍴 Makanan</h5>
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
                  onClick={() => handleAddToCart(set, food)}
                  >
                  <svg fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                </button>
              </div>
            ))}
          </div>
  
  
          <h5 className="subtitle">🍸 Minuman</h5>
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
                  onClick={() => handleAddToCart(set, drink)}
                  >
                  <svg fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                </button>
              </div>
            ))}
          </div>
  
          <Cart
            state={state}
            set={set} />
  
          <div className="cart-spacing"></div>
  
        </section>
      )
    }
  }
}