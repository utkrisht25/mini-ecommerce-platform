import { useState } from 'react'
import ProductForm from './components/ProductForm'
import ProductList from './components/ProductList'

export default function App() {
  const [activeTab, setActiveTab] = useState('submit')

  return (
    <main className="container mx-auto p-4 max-w-6xl">
      <div className="flex border-b">
        <button
          className={`p-4 font-medium ${
            activeTab === 'submit' 
              ? 'border-b-2 border-blue-500 text-blue-600' 
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('submit')}
        >
          Product Submission
        </button>
        <button
          className={`p-4 font-medium ${
            activeTab === 'products' 
              ? 'border-b-2 border-blue-500 text-blue-600' 
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('products')}
        >
          My Products
        </button>
      </div>

      {activeTab === 'submit' ? (
        <ProductForm onSuccess={() => setActiveTab('products')} />
      ) : (
        <ProductList />
      )}
    </main>
  );
}