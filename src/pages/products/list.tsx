import React, { useState } from "react";
import { Button, Popconfirm, Skeleton, Table, Tag, message } from "antd";
import useList from "../../hooks/useList";

import ProductFormDrawer from "../../components/ProductDrawer";
import useDelete from "../../hooks/useDelete";

const ProductListPage = () => {
    const { data, isLoading, error, isError } = useList({ resource: "products" });
    const { mutate: deleteProduct } = useDelete({ resource: "products" });
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [editingProductId, setEditingProductId] = useState<number | null>(null);

    const handleDelete = (id: number) => {
        deleteProduct(id, {
            onSuccess: () => message.success("Xóa sản phẩm thành công!"),
            onError: () => message.error("Xóa sản phẩm thất bại!"),
        });
    };

    const dataSource = data?.data.map((product: any) => ({
        key: product.id,
        ...product,
    }));

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
        },
        {
            title: "Chất liệu",
            dataIndex: "material",
            key: "material",
            render: (_: any, params2: any) => (
                <div>
                    {params2?.material.split(",").map((item: any) => {
                        const color = item.length > 5 ? "geekblue" : "green";
                        return (
                            <Tag key={item} color={color}>
                                {item}
                            </Tag>
                        );
                    })}
                </div>
            ),
        },
        {
            dataIndex: "action",
            render: (_: any, item: any) => (
                <div className="flex space-x-2">
                    <Button
                        type="primary"
                        onClick={() => {
                            setEditingProductId(item.id);
                            setDrawerVisible(true);
                        }}
                    >
                        Sửa
                    </Button>
                    <Popconfirm
                        title="Xóa sản phẩm?"
                        onConfirm={() => handleDelete(item.id)}
                        okText="Đồng ý"
                        cancelText="Hủy"
                    >
                        <Button type="primary" danger>Xóa</Button>
                    </Popconfirm>
                </div>
            ),
        },
    ];

    if (isLoading) return <Skeleton active />;
    if (isError) return <div>Error: {error.message}</div>;
    if (!data) return <div>Không có sản phẩm nào</div>;

    return (
        <div>
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

            <Table dataSource={dataSource} columns={columns} />

            <ProductFormDrawer
                visible={drawerVisible}
                onClose={() => setDrawerVisible(false)}
                productId={editingProductId ?? undefined}
            />
        </div>
    );
};

export default ProductListPage;