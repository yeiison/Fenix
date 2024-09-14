import React, { useState } from 'react';

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    paymentMethod: 'credit-card',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de procesamiento de pago
    console.log('Datos de compra enviados:', formData);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Proceso de pago</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block">Nombre</label>
          <input
            type="text"
            className="border p-2 w-full"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block">Dirección</label>
          <input
            type="text"
            className="border p-2 w-full"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block">Ciudad</label>
          <input
            type="text"
            className="border p-2 w-full"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block">Método de pago</label>
          <select
            className="border p-2 w-full"
            value={formData.paymentMethod}
            onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
            required
          >
            <option value="credit-card">Tarjeta de crédito</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2">Realizar pago</button>
      </form>
    </div>
  );
};

export default Checkout;
