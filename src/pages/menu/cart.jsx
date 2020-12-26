import { m } from 'minite'

/** @jsx m */
/** @jsxFrag 'x' */
export default ({ cart, show, set }) => {
  const showUnique = (value, index, self) => {
    return self.indexOf(value) === index
  }

  // TODO finish checkout
  return (
    <>
      {show ? (
        <div className="full-cart shadow">
          {cart.filter(showUnique).map(item => item.count > 0 ? (
            <li>{item.name} ({item.count})</li>
          ) : '')}

          <div>Jumlah: &nbsp; <strong>{cart.length}</strong></div>
          <div>Harga: &nbsp; <strong>Rp.{cart.reduce((a, { price }) => a + price, 0)}</strong></div>
        </div>
      ) : (
        <div className="cart shadow">
          <div className="desc">
            <div>Jumlah: &nbsp; <strong>{cart.length}</strong></div>
            <div>Harga: &nbsp; <strong>Rp.{cart.reduce((a, { price }) => a + price, 0)}</strong></div>
          </div>
          <button className="button checkout" onClick={() => set('showCart', !show)}>
            <svg fill="none" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </div>
      )}
    </>
  )
}