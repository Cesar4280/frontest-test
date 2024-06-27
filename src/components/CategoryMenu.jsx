// src/components/CategoryMenu.jsx
import React, { useState, useEffect } from "react";
import { fetchProducts } from "../services/mercadoLibreAPI";

const CategoryMenu = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);
  const [expandedCategories, setExpandedCategories] = useState({});

  useEffect(() => {
    const loadCategories = async () => {
      const data = await fetchProducts();
      const filters = data.available_filters;
      const categoryFilter = filters.find(({ id }) => id === "category");
      const categoryList = categoryFilter.values;
      setCategories(categoryList);
    };
    loadCategories();
  }, []);

  const toggleCategory = (category_id) => {
    setExpandedCategories((prevState) => ({
      ...prevState,
      [category_id]: !prevState[category_id],
    }));
  };

  return (
    <div className="col-span-2 text-left text-base/loose text-slate-500">
      {categories.map((category) => (
        <div key={category.id}>
          <button onClick={() => toggleCategory(category.id)}>
            {expandedCategories[category.id] ? "-" : "+"}
          </button>
          <span onClick={() => onSelectCategory(category.id)}>
            {category.name}
          </span>
          {expandedCategories[category.id] && (
            <div className="text-left text-xs/6 text-slate-500">
              {category.children.map((subcategory) => (
                <div
                  key={subcategory.id}
                  onClick={() => onSelectCategory(subcategory.id)}
                >
                  {subcategory.name}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryMenu;
