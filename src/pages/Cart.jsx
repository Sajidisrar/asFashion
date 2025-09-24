import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Cart = () => {
  const { items, subtotal, updateQty, removeItem, clear } = useCart()

  const shipping = subtotal > 0 ? 5.99 : 0
  const total = subtotal + shipping

  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <h1 className="products-title" style={{ marginBottom: 16 }}>Your Cart</h1>

      {items.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <Link to="/" className="btn-primary" style={{ marginTop: 16, display: 'inline-block' }}>Continue Shopping</Link>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24 }}>
          {/* Items */}
          <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 4px 20px rgba(0,0,0,0.08)', padding: 16 }}>
            {items.map(item => (
              <div key={item.id} style={{ display: 'grid', gridTemplateColumns: '80px 1fr 120px 120px', gap: 12, alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #eee' }}>
                <img src={item.image} alt={item.name} style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 8 }} />
                <div>
                  <Link to={`/product/${item.id}`} style={{ textDecoration: 'none' }}>
                    <div className="product-name" style={{ marginBottom: 4 }}>{item.name}</div>
                  </Link>
                  <div className="rating-text">${item.price.toFixed(2)}</div>
                </div>
                <div>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQty(item.id, Number(e.target.value))}
                    style={{ width: 80, padding: 8, border: '2px solid #e6e8ef', borderRadius: 8 }}
                  />
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="product-price">${(item.price * item.quantity).toFixed(2)}</div>
                  <button onClick={() => removeItem(item.id)} className="btn-secondary" style={{ marginTop: 8 }}>Remove</button>
                </div>
              </div>
            ))}
            <div style={{ textAlign: 'right', marginTop: 12 }}>
              <button onClick={clear} className="btn-secondary">Clear Cart</button>
            </div>
          </div>

          {/* Summary + Customer details */}
          <div style={{ display: 'grid', gap: 16 }}>
            <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 4px 20px rgba(0,0,0,0.08)', padding: 16 }}>
              <h3 style={{ marginBottom: 12 }}>Order Summary</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', rowGap: 8 }}>
                <span className="rating-text">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
                <span className="rating-text">Shipping</span>
                <span>${shipping.toFixed(2)}</span>
                <strong>Total</strong>
                <strong>${total.toFixed(2)}</strong>
              </div>
            </div>

            <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 4px 20px rgba(0,0,0,0.08)', padding: 16 }}>
              <h3 style={{ marginBottom: 12 }}>Customer Details</h3>
              <form onSubmit={(e) => { e.preventDefault(); alert('Order placed! (demo)') }}>
                <div style={{ display: 'grid', gap: 12 }}>
                  <input required placeholder="Full Name" style={{ padding: 12, border: '2px solid #e6e8ef', borderRadius: 8 }} />
                  <input required placeholder="Mobile Number" style={{ padding: 12, border: '2px solid #e6e8ef', borderRadius: 8 }} />
                  <textarea required placeholder="Address" rows={4} style={{ padding: 12, border: '2px solid #e6e8ef', borderRadius: 8, resize: 'vertical' }} />
                  <button className="btn-primary" type="submit">Place Order</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
