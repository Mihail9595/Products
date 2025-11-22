import React, { useState, type FormEvent } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productSlice";

import style from "../styles/create.module.css";

const Create: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [img, setImg] = useState<string>("");
  const dispatch = useDispatch();

  const addItem = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (title.trim() && name.trim() && img.trim()) {
      dispatch(addProduct({ title, name, img }));
      setTitle("");
      setName("");
      setImg("");
    } else {
      alert("Пожалуйста, заполните все поля");
    }
  };


  

  return (
    <form onSubmit={addItem} className={style.label}>
      <input
        className=""
        placeholder="title :"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className=""
        placeholder="category :"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className=""
        placeholder="image :"
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default Create;
