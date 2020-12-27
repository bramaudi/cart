import './style.css'
import { m } from 'minite'
import { liffSendMessage } from '../../liff'

/** @jsx m */
/** @jsxFrag 'x' */
export default ({ set, state }) => {
  const { foods, drinks, cartShow, cartPop } = state
  const cart = [...foods, ...drinks]
  const cartTotal = cart.reduce((a, { count }) => a + count, 0)
  const cartPrice = cart.reduce((a, { price, count }) => a + (price * count), 0)

  // const showUnique = (value, index, self) => {
  //   return self.indexOf(value) === index
  // }

  const handleDecrementProduct = (set, item) => {
    item.count -= 1
    set()
  }

  const handleCheckout = (list, total, price) => {
    const cart = {
      list: [],
      total,
      price
    }
    list.map(item => {
      if (item.count) {
        cart.list.push(item)
      }
    })
    console.log(cart);
    liffSendMessage(JSON.stringify(cart))
  }

  return (
    <>
      {cartShow ? (
        <div className="full-cart shadow">
          <div className="close" onClick={() => set('cartShow', false)}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </div>

          <div className="list">
            {cart.map(item => item.count > 0 ? (
              <div className="list-item">
                {item.name}
                <span>Rp.{item.price} x {item.count}</span>
                <button
                  className="button decrement"
                  onClick={() => handleDecrementProduct(set, item)}
                  >
                  <svg fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>
                </button>
              </div>
            ) : '')}
          </div>

          <div className="bill">
            <div>
              <div>Jumlah: &nbsp; <strong>{cartTotal}</strong></div>
              <div>Harga: &nbsp; <strong>Rp.{cartPrice}</strong></div>
            </div>
            <button
              className="button checkout"
              onClick={() => handleCheckout(cart, cartTotal, cartPrice)}
              >
              Checkout
              <svg fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </div>
        </div>
      ) : (
        <div className="cart shadow">
          <div className="desc">
            <div className={cartPop ? 'pop' : ''}>Jumlah: &nbsp; <strong>{cartTotal}</strong></div>
            <div className={cartPop ? 'pop' : ''}>Harga: &nbsp; <strong>Rp.{cartPrice}</strong></div>
          </div>
          <button className="button see-cart" onClick={() => set('cartShow', !cartShow)}>
            <svg fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          </button>
        </div>
      )}
    </>
  )
}