import React, { useEffect } from "react";
import { Drawer, Button, Form, Input, InputNumber, message, Skeleton, Select } from "antd";
import useCreate from "../hooks/useCreate";
import useUpdate from "../hooks/useUpdate";
import useOne from "../hooks/useOne";
import useList from "../hooks/useList"; // Import hook lấy danh sách danh mục

type ProductFormDrawerProps = {
    visible: boolean;
    onClose: () => void;
    productId?: number;
};

const ProductFormDrawer: React.FC<ProductFormDrawerProps> = ({ visible, onClose, productId }) => {
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();

    // Lấy danh sách danh mục
    const { data: categories, isLoading: isCategoriesLoading } = useList({
        resource: "categories",
    });

    const { data, isLoading } = useOne({
        resource: "products",
        id: productId ?? 0,
    });

    const { mutate: createMutate, isPending: isCreatePending } = useCreate({
        resource: "products",
    });

    const { mutate: updateMutate, isPending: isUpdatePending } = useUpdate({
        resource: "products",
        id: productId ?? 0,
    });

    useEffect(() => {
        if (productId && data) {
            form.setFieldsValue(data.data);
        } else {
            form.resetFields();
        }
    }, [productId, data, form]);

    const onSubmit = (formData: any) => {
        if (productId) {
            updateMutate(formData, {
                onSuccess: () => {
                    messageApi.success("Cập nhật sản phẩm thành công");
                    onClose();
                },
                onError: () => messageApi.error("Có lỗi xảy ra"),
            });
        } else {
            createMutate(formData, {
                onSuccess: () => {
                    messageApi.success("Thêm sản phẩm thành công");
                    onClose();
                },
                onError: () => messageApi.error("Có lỗi xảy ra"),
            });
        }
    };

    return (
        <Drawer
            title={productId ? "Sửa sản phẩm" : "Thêm sản phẩm"}
            width={720}
            onClose={onClose}
            visible={visible}
            bodyStyle={{ paddingBottom: 80 }}
        >
            <Skeleton loading={isLoading && !!productId} active>
                <Form form={form} layout="vertical" onFinish={onSubmit}>
                    <Form.Item label="Tên sản phẩm" name="name">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Ảnh sản phẩm" name="image">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Giá sản phẩm" name="price">
                        <InputNumber style={{ width: "100%" }} />
                    </Form.Item>
                    <Form.Item label="Mô tả" name="description">
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item
                        label="Danh mục"
                        name="categoryId"
                        rules={[{ required: true, message: "Vui lòng chọn danh mục!" }]}
                    >
                        <Select loading={isCategoriesLoading} placeholder="Chọn danh mục">
                            {categories?.data.map((category: any) => (
                                <Select.Option key={category.id} value={category.id}>
                                    {category.name}
                                </Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={isCreatePending || isUpdatePending}
                        >
                            {productId ? "Cập nhật sản phẩm" : "Thêm sản phẩm"}
                        </Button>
                    </Form.Item>
                </Form>
            </Skeleton>
            {contextHolder}
        </Drawer>
    );
};

export default ProductFormDrawer;
