// frontend/src/App.js
import React from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

function App() {
    return (
        <div className="App">
            <h1>Product Management</h1>
            <ProductForm />
            <ProductList />
        </div>
    );
}

export default App;
