import React, { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [check, setCheck] = useState(false);
  const [count, setCount] = useState(0);
  const handleChange = () => {
    setCheck((check) => !check);
  };

  useEffect(() => {
    fetch(`/data/${check ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("데이터를 네트워크에서 받아옴");
        setProducts(data);
      });
    return () => {
      console.log("깨끗하게 청소하는 일을 합니다");
    };
  }, [check]);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
      <label htmlFor="check">세일상품만 보기:</label>
      <input type="checkbox" value={check} onChange={handleChange} id="check" />
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
