import React, { useState } from "react";
import { Button, Popconfirm, Skeleton, Table, Tag, message } from "antd";
import useList from "../../hooks/useList";
import useDelete from "../../hooks/useDelete";
import ProductFormDrawer from "../../components/ProductDrawer";

const Shop = () => {
    // Lấy danh sách sản phẩm
    const { data, isLoading, error, isError } = useList({ resource: "products" });

    // Lấy danh sách danh mục
    const { data: categoriesData, isLoading: categoriesLoading } = useList({ resource: "categories" });

    // Tạo Map để tra cứu danh mục theo ID
    const categoryMap = new Map();
    categoriesData?.data?.forEach((category: any) => {
        categoryMap.set(category.id, category.name);
    });

    // Xóa sản phẩm
    const { mutate: deleteProduct } = useDelete({ resource: "products" });

    // State quản lý drawer (form thêm/sửa)
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [editingProductId, setEditingProductId] = useState<number | null>(null);

    // Xử lý xóa sản phẩm
    const handleDelete = (id: number) => {
        deleteProduct(id, {
            onSuccess: () => message.success("Xóa sản phẩm thành công!"),
            onError: () => message.error("Xóa sản phẩm thất bại!"),
        });
    };

    // Chuẩn bị dữ liệu cho bảng
    const dataSource = data?.data?.map((product: any) => ({
        key: product.id,
        ...product,
    })) || [];

    // Định nghĩa cột cho bảng
    const columns = [
        {
            title: "Tên sản phẩm",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Mô tả",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "Giá",
            dataIndex: "price",
            key: "price",
            render: (price: any) => `${price.toLocaleString()} VND`,
        },
        {
            title: "Danh mục",
            dataIndex: "categoryId", // Dữ liệu lấy từ categoryId
            key: "categoryId",
            render: (categoryId: number) => categoryMap.get(categoryId) || "Không xác định",
        },
        {
            title: "Hành động",
            dataIndex: "action",
            key: "action",
            render: (_: any, item: any) => (
                <div className="flex space-x-2">
                    <Button
                        type="primary"
                        onClick={() => {
                            setEditingProductId(item.id);
                            setDrawerVisible(true);
                        }}
                    >
                        <span className="material-symbols-outlined">edit</span>
                    </Button>
                    <Popconfirm
                        title="Bạn có chắc chắn muốn xóa?"
                        onConfirm={() => handleDelete(item.id)}
                        okText="Đồng ý"
                        cancelText="Hủy"
                    >
                        <Button type="primary" danger><span className="material-symbols-outlined">delete</span></Button>
                    </Popconfirm>
                </div>
            ),
        },
    ];

    // Nếu đang tải dữ liệu
    if (isLoading || categoriesLoading) return <Skeleton active />;
    
    // Nếu xảy ra lỗi
    if (isError) return <div className="text-red-500">Lỗi: {error.message}</div>;

    // Nếu không có sản phẩm nào
    if (!dataSource.length) return <div className="text-gray-500">Không có sản phẩm nào.</div>;

    return (
        <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-semibold">Sản phẩm</h2>
                <Button
                    type="primary"
                    onClick={() => {
                        setEditingProductId(null);
                        setDrawerVisible(true);
                    }}
                >
                    Thêm sản phẩm
                </Button>
            </div>

            {/* Bảng danh sách sản phẩm */}
            <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 5 }} />

            {/* Drawer (Form thêm/sửa sản phẩm) */}
            <ProductFormDrawer
                visible={drawerVisible}
                onClose={() => setDrawerVisible(false)}
                productId={editingProductId ?? undefined}
            />
        </div>
    );
};

export default Shop;
