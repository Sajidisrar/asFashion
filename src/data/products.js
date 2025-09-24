export const products = [
  {
    id: 1,
    name: 'Diamond Necklace',
    category: 'jewelry',
    price: 299.99,
    rating: 4.8,
    sold: 150,
    shortDescription: 'Elegant diamond necklace with premium cut stones.',
    description: 'This diamond necklace is crafted with precision, featuring premium cut stones that sparkle brilliantly. Perfect for special occasions and everyday elegance.',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1603561596112-db0b4b1a0b3a?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1603561596112-db0b4b1a0b3a?w=800&h=800&fit=crop'
    ],
    reviews: [
      { id: 'r1', user: 'Aisha', rating: 5, comment: 'Absolutely stunning! Got so many compliments.' },
      { id: 'r2', user: 'Leila', rating: 4, comment: 'Beautiful piece, fast shipping.' }
    ]
  },
  {
    id: 2,
    name: 'Gold Earrings',
    category: 'jewelry',
    price: 89.99,
    rating: 4.6,
    sold: 89,
    shortDescription: 'Classic 18k gold hoop earrings.',
    description: 'Timeless 18k gold hoops designed for everyday wear. Lightweight and hypoallergenic for all-day comfort.',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9f2a8b7f?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=800&h=800&fit=crop'
    ],
    reviews: [
      { id: 'r1', user: 'Maya', rating: 5, comment: 'Perfect size and shine.' },
      { id: 'r2', user: 'Nadia', rating: 4, comment: 'Quality is great, would buy again.' }
    ]
  },
  {
    id: 5,
    name: 'Summer Dress',
    category: 'clothes',
    price: 79.99,
    rating: 4.5,
    sold: 234,
    shortDescription: 'Flowy summer dress with floral pattern.',
    description: 'Stay cool and stylish with this breathable, flowy summer dress featuring a delicate floral pattern and flattering silhouette.',
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1582582517813-4f65c4f67c65?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&h=800&fit=crop'
    ],
    reviews: [
      { id: 'r1', user: 'Sara', rating: 5, comment: 'Fits perfectly and looks gorgeous!' },
      { id: 'r2', user: 'Amira', rating: 4, comment: 'Lovely fabric, colors pop.' }
    ]
  },
  {
    id: 9,
    name: 'Silk Hair Scarf',
    category: 'hair',
    price: 24.99,
    rating: 4.7,
    sold: 178,
    shortDescription: 'Luxurious silk scarf for hair styling.',
    description: 'Soft, luxurious silk scarf that protects hair and adds a chic touch to any outfit.',
    images: [
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1550534791-2677533605a1?w=800&h=800&fit=crop'
    ],
    reviews: [
      { id: 'r1', user: 'Zainab', rating: 5, comment: 'So soft and elegant!' },
      { id: 'r2', user: 'Hana', rating: 4, comment: 'Great quality for the price.' }
    ]
  }
]

export function getProductById(id) {
  return products.find(p => String(p.id) === String(id))
}
