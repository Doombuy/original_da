import React from 'react';
import { useParams } from 'react-router-dom';

const ProductTransition = ({ products }) => {
  const { id } = useParams(); // Получаем параметр id из URL
  const product = products.find(prod => prod.id === parseInt(id)); // Ищем продукт по id

  // Если продукт не найден, отобразите сообщение
  if (!product) {
    return <h2>Продукт не найден</h2>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Цена: {product.price} ₽</p>
    </div>
  );
};

export default ProductTransition;
