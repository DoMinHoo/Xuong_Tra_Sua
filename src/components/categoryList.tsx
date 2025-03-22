import React from "react";

type CategoryListProps = {
    categories: { id: number; name: string }[];
};

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
    return (
        <>
            <h2>Danh Mục Sản Phẩm</h2>
            {categories.length > 0 ? (
                <ul>
                    {categories.map((category) => (
                        <li key={category.id}>{category.name}</li>
                    ))}
                </ul>
            ) : (
                <p>Đang tải danh mục...</p>
            )}
        </>
    );
};

export default CategoryList;

