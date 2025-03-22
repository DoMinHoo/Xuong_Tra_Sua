import React, { useState } from "react";
import { Button, Modal, Form, Input, Table, Space, message } from "antd";

import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { mockCategories } from "../../../provider/dataCategory";

type Category = {
    id: number;
    name: string;
};

const CategoryPage: React.FC = () => {
    const [categories, setCategories] = useState<Category[]>(mockCategories);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingCategory, setEditingCategory] = useState<Category | null>(null);

    const [form] = Form.useForm();

    // Mở modal để thêm mới hoặc chỉnh sửa
    const handleOpenModal = (category?: Category) => {
        setEditingCategory(category || null);
        setIsModalOpen(true);
        form.setFieldsValue(category || { name: "" });
    };

    // Đóng modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
        form.resetFields();
    };

    // Xử lý khi nhấn Submit form
    const handleSubmit = (values: { name: string }) => {
        if (editingCategory) {
            // Sửa danh mục
            setCategories((prev) =>
                prev.map((cat) =>
                    cat.id === editingCategory.id ? { ...cat, name: values.name } : cat
                )
            );
            message.success("Đã cập nhật danh mục!");
        } else {
            // Thêm mới danh mục
            const newCategory = {
                id: categories.length + 1,
                name: values.name,
            };
            setCategories((prev) => [...prev, newCategory]);
            message.success("Đã thêm danh mục mới!");
        }
        handleCloseModal();
    };

    // Xóa danh mục
    const handleDelete = (id: number) => {
        Modal.confirm({
            title: "Bạn có chắc chắn muốn xóa danh mục này?",
            okText: "Xóa",
            okType: "danger",
            cancelText: "Hủy",
            onOk: () => {
                setCategories((prev) => prev.filter((cat) => cat.id !== id));
                message.success("Đã xóa danh mục!");
            },
        });
    };

    // Cấu hình cột của bảng
    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Tên danh mục",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Hành động",
            key: "action",
            render: (_: any, record: Category) => (
                <Space size="middle">
                    <Button
                        icon={<EditOutlined />}
                        onClick={() => handleOpenModal(record)}
                    >
                        Sửa
                    </Button>
                    <Button
                        icon={<DeleteOutlined />}
                        onClick={() => handleDelete(record.id)}
                        danger
                    >
                        Xóa
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <div style={{ padding: 24, background: "#fff", borderRadius: 8 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                <h2>Danh Mục Sản Phẩm</h2>
                <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    onClick={() => handleOpenModal()}
                >
                    Thêm Danh Mục
                </Button>
            </div>
            <Table dataSource={categories} columns={columns} rowKey="id" />

            {/* Modal Thêm/Sửa */}
            <Modal
                title={editingCategory ? "Sửa Danh Mục" : "Thêm Danh Mục"}
                open={isModalOpen}
                onCancel={handleCloseModal}
                onOk={() => form.submit()}
                okText={editingCategory ? "Cập Nhật" : "Thêm"}
                cancelText="Hủy"
            >
                <Form form={form} onFinish={handleSubmit} layout="vertical">
                    <Form.Item
                        name="name"
                        label="Tên danh mục"
                        rules={[{ required: true, message: "Vui lòng nhập tên danh mục!" }]}
                    >
                        <Input placeholder="Nhập tên danh mục" />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default CategoryPage;
