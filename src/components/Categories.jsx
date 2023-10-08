import { useState } from "react";

const Categories = () => {
  const category = ["Все", "Мужские", "Женские", "Детские"];
  const [activeIndex, setActiveIndex] = useState(0);
  const changeCategoriesHandler = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {category.map((value, index) => {
          return (
            <li
              key={index}
              onClick={() => changeCategoriesHandler(index)}
              className={activeIndex === index ? "active" : " "}>
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
