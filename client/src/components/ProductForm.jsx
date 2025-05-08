'use client'
import { useState } from 'react'
import { useActionState } from 'react'

async function submitProduct(prevState, formData) {
  try {
    const response = await fetch('http://localhost:5000/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.get('name'),
        price: parseFloat(formData.get('price')),
        description: formData.get('description'),
        image_url: formData.get('image_url')
      })
    })
    return await response.json()
  } catch (error) {
    return { error: error.message }
  }
}

export default function ProductForm({ onSuccess }) {
  const [state, formAction] = useActionState(submitProduct, null)
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image_url: ''
  })

  return (
    <form action={formAction} className="mt-6 space-y-4">
      <input
        name="name"
        placeholder="Product Name"
        className="w-full p-2 border rounded"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        required
      />
      <input
        name="price"
        type="number"
        placeholder="Price"
        className="w-full p-2 border rounded"
        value={formData.price}
        onChange={(e) => setFormData({...formData, price: e.target.value})}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        className="w-full p-2 border rounded"
        value={formData.description}
        onChange={(e) => setFormData({...formData, description: e.target.value})}
        required
      />
      <input
        name="image_url"
        type="text"
        placeholder="Image URL (optional)"
        className="w-full p-2 border rounded"
        value={formData.image_url}
        onChange={(e) => setFormData({...formData, image_url: e.target.value})}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Submit Product
      </button>
      {state?.error && (
        <p className="text-red-500">{state.error}</p>
      )}
    </form>
  )
}