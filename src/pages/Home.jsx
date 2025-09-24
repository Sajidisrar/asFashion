import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [query, setQuery] = useState('')
  const { addItem } = useCart()

  const categories = [
    { id: 'all', name: 'All Products', icon: '🛍️' },
    { id: 'jewelry', name: 'Jewelry', icon: '💎' },
    { id: 'clothes', name: 'Clothes', icon: '👗' },
    { id: 'hair', name: 'Hair Accessories', icon: '🎀' }
  ]

  const products = [
    // Jewelry
    { id: 1, name: 'Diamond Necklace', price: 299.99, category: 'jewelry', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop', rating: 4.8, sold: 150 },
    { id: 2, name: 'Gold Earrings', price: 89.99, category: 'jewelry', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9f2a8b7f?w=400&h=400&fit=crop', rating: 4.6, sold: 89 },
    { id: 3, name: 'Silver Bracelet', price: 45.99, category: 'jewelry', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop', rating: 4.7, sold: 203 },
    { id: 4, name: 'Pearl Ring', price: 125.99, category: 'jewelry', image: 'https://images.unsplash.com/photo-1603561596112-db0b4b1a0b3a?w=400&h=400&fit=crop', rating: 4.9, sold: 67 },
    
    // Clothes
    { id: 5, name: 'Summer Dress', price: 79.99, category: 'clothes', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop', rating: 4.5, sold: 234 },
    { id: 6, name: 'Designer Blouse', price: 65.99, category: 'clothes', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop', rating: 4.4, sold: 156 },
    { id: 7, name: 'Elegant Skirt', price: 45.99, category: 'clothes', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop', rating: 4.6, sold: 189 },
    { id: 8, name: 'Casual T-Shirt', price: 29.99, category: 'clothes', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop', rating: 4.3, sold: 312 },
    
    // Hair Accessories
    { id: 9, name: 'Silk Hair Scarf', price: 24.99, category: 'hair', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop', rating: 4.7, sold: 178 },
    { id: 10, name: 'Crystal Hair Clip', price: 18.99, category: 'hair', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop', rating: 4.8, sold: 245 },
    { id: 11, name: 'Vintage Hair Pin', price: 15.99, category: 'hair', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop', rating: 4.5, sold: 134 },
    { id: 12, name: 'Floral Headband', price: 22.99, category: 'hair', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop', rating: 4.6, sold: 167 }
  ]

  const filteredProducts = (selectedCategory === 'all' ? products : products.filter(product => product.category === selectedCategory))
    .filter(p => p.name.toLowerCase().includes(query.toLowerCase()))

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Welcome to <span className="hero-highlight">StyleHub</span>
            </h1>
            <p className="hero-subtitle">
              Discover beautiful jewelry, fashionable clothes, and stunning hair accessories
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Shop Now</button>
              <button className="btn-secondary">View Collection</button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          <div style={{ maxWidth: 520, margin: '0 auto 24px' }}>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products (e.g., Gold, Dress, Scarf)"
              style={{ width: '100%', padding: '12px 16px', borderRadius: 8, border: '2px solid #e6e8ef', fontSize: 16 }}
            />
          </div>
          <div className="categories-grid">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`category-card ${selectedCategory === category.id ? 'active' : ''}`}
              >
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-name">{category.name}</h3>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products">
        <div className="container">
          <div className="products-header">
            <h2 className="products-title">
              {selectedCategory === 'all' ? 'All Products' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <span className="products-count">
              {filteredProducts.length} products
            </span>
          </div>
          
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="product-card" style={{ textDecoration: 'none' }}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="product-image"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/400x400/f8f9fa/666?text=${product.name}`
                  }}
                />
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-rating">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < Math.floor(product.rating) ? 'star' : 'star empty'}>
                          ⭐
                        </span>
                      ))}
                    </div>
                    <span className="rating-text">({product.rating})</span>
                  </div>
                  <div className="product-price-section">
                    <span className="product-price">${product.price}</span>
                    <span className="product-sold">{product.sold} sold</span>
                  </div>
                  <button className="add-to-cart" onClick={(e) => { e.preventDefault(); addItem({ id: product.id, name: product.name, price: product.price, image: product.image })}}>Add to Cart</button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose StyleHub?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <span className="feature-icon">🚚</span>
              <h3 className="feature-title">Free Shipping</h3>
              <p className="feature-description">Free delivery on orders over $50</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🔒</span>
              <h3 className="feature-title">Secure Payment</h3>
              <p className="feature-description">100% secure checkout process</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">↩️</span>
              <h3 className="feature-title">Easy Returns</h3>
              <p className="feature-description">30-day return policy</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💎</span>
              <h3 className="feature-title">Premium Quality</h3>
              <p className="feature-description">Handpicked quality items</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <h2 className="newsletter-title">Stay Updated</h2>
          <p className="newsletter-subtitle">
            Get the latest fashion trends and exclusive offers
          </p>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button className="newsletter-button">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
