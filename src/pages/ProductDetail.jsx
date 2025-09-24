import { useParams, Link } from 'react-router-dom'
import { getProductById } from '../data/products'
import { useCart } from '../context/CartContext'

const ProductDetail = () => {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()

  if (!product) {
    return (
      <div className="container" style={{ padding: 40 }}>
        <p>Product not found.</p>
        <Link to="/" className="btn-secondary" style={{ marginTop: 16, display: 'inline-block' }}>Back to Home</Link>
      </div>
    )
  }

  return (
    <div style={{ background: '#fff' }}>
      <section style={{ padding: '40px 0' }}>
        <div className="container">
          <nav style={{ marginBottom: 16, fontSize: 14 }}>
            <Link to="/" className="nav-link">Home</Link>
            <span style={{ margin: '0 8px', color: '#999' }}>/</span>
            <span style={{ color: '#667eea', textTransform: 'capitalize' }}>{product.category}</span>
            <span style={{ margin: '0 8px', color: '#999' }}>/</span>
            <span>{product.name}</span>
          </nav>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            {/* Gallery */}
            <div>
              <img src={product.images[0]} alt={product.name} className="product-image" style={{ height: 420, borderRadius: 12 }} />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginTop: 12 }}>
                {product.images.slice(0, 4).map((img, idx) => (
                  <img key={idx} src={img} alt={`${product.name} ${idx+1}`} style={{ width: '100%', height: 90, objectFit: 'cover', borderRadius: 8 }} />
                ))}
              </div>
            </div>

            {/* Details */}
            <div>
              <h1 style={{ fontSize: 32, marginBottom: 8 }}>{product.name}</h1>
              <p style={{ color: '#666', marginBottom: 16 }}>{product.shortDescription}</p>

              <div className="product-rating" style={{ marginBottom: 12 }}>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.floor(product.rating) ? 'star' : 'star empty'}>⭐</span>
                  ))}
                </div>
                <span className="rating-text">({product.rating})</span>
              </div>

              <div className="product-price" style={{ fontSize: 28, marginBottom: 16 }}>${product.price}</div>
              <div style={{ color: '#999', marginBottom: 24 }}>{product.sold} sold</div>

              <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
                <button className="btn-primary" onClick={() => addItem({ id: product.id, name: product.name, price: product.price, image: product.images[0] })}>Add to Cart</button>
                <Link to="/cart" className="btn-secondary" onClick={() => addItem({ id: product.id, name: product.name, price: product.price, image: product.images[0] })}>Buy Now</Link>
              </div>

              <div>
                <h3 style={{ marginBottom: 8 }}>Description</h3>
                <p style={{ color: '#555' }}>{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section style={{ padding: '0 0 40px' }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: 24 }}>Customer Reviews</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {product.reviews.map((r) => (
              <div key={r.id} style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#f0f2f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>👤</div>
                  <strong>{r.user}</strong>
                </div>
                <div className="stars" style={{ marginBottom: 8 }}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < r.rating ? 'star' : 'star empty'}>⭐</span>
                  ))}
                </div>
                <p style={{ color: '#555' }}>{r.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetail
