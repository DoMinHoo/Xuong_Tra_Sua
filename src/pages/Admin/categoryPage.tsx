import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Input, Table, Space, message } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { getList, create, update, remove } from "../../provider/dataProvider";

type Category = {
    id: number;
    name: string;
};

const CategoryPage: React.FC = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingCategory, setEditingCategory] = useState<Category | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const [form] = Form.useForm();

    // Lấy danh mục từ API khi tải trang
    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        setLoading(true);
        try {
            const response = await getList({ resource: "categories" });
            setCategories(response.data);
        } catch (error) {
            message.error("Lỗi khi tải danh mục!");
        } finally {
            setLoading(false);
        }
    };

    // Mở modal (thêm mới hoặc chỉnh sửa)
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

    // Xử lý Submit form (thêm hoặc sửa danh mục)
    const handleSubmit = async (values: { name: string }) => {
        try {
            if (editingCategory) {
                // Gửi yêu cầu cập nhật danh mục
                await update({ resource: "categories", id: editingCategory.id, variables: values });
                message.success("Cập nhật danh mục thành công!");
            } else {
                // Gửi yêu cầu thêm mới danh mục
                await create({ resource: "categories", variables: values });
                message.success("Thêm danh mục mới thành công!");
            }
            handleCloseModal();
            fetchCategories(); // Cập nhật danh sách sau khi thao tác
        } catch (error) {
            message.error("Lỗi khi cập nhật danh mục!");
        }
    };

    // Xóa danh mục
    const handleDelete = (id: number) => {
        Modal.confirm({
            title: "Bạn có chắc chắn muốn xóa danh mục này?",
            okText: "Xóa",
            okType: "danger",
            cancelText: "Hủy",
            onOk: async () => {
                try {
                    await remove({ resource: "categories", id });
                    message.success("Đã xóa danh mục!");
                    fetchCategories(); // Cập nhật danh sách
                } catch (error) {
                    message.error("Lỗi khi xóa danh mục!");
                }
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
                    <Button icon={<EditOutlined />} onClick={() => handleOpenModal(record)}>
                        Sửa
                    </Button>
                    <Button icon={<DeleteOutlined />} onClick={() => handleDelete(record.id)} danger>
                        Xóa
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <div style={{ padding: 24, background: "#fff", borderRadius: 8 }}>
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                <h2>Danh Mục Sản Phẩm</h2>
                <Button type="primary" icon={<PlusOutlined />} onClick={() => handleOpenModal()}>
                    Thêm danh mục
                </Button>
            </div>

            {/* Bảng danh mục */}
            <Table
                dataSource={categories}
                columns={columns}
                rowKey="id"
                loading={loading}
                pagination={{ pageSize: 5 }}
            />

            {/* Modal Thêm/Sửa danh mục */}
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
