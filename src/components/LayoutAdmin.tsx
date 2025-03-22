import React, { useState } from "react";
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";

import ProductListPage from "../pages/products/list";
import CategoryPage from "../pages/products/category/categoryPage";


const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem("Products", "1", <PieChartOutlined />),
    getItem("Category", "2", <DesktopOutlined />),
    getItem("User", "3", <DesktopOutlined />),
    getItem("Order", "4", <DesktopOutlined />)
];

type LayoutAdminProps = {
    children?: React.ReactNode;
};

const LayoutAdmin: React.FC<LayoutAdminProps> = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedKey, setSelectedKey] = useState("1");

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const handleMenuClick: MenuProps["onClick"] = (e) => {
        setSelectedKey(e.key);
    };

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    defaultSelectedKeys={["1"]}
                    mode="inline"
                    items={items}
                    onClick={handleMenuClick}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{ margin: "0 auto", maxWidth: "1200px", width: "100%" }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            borderRadius: borderRadiusLG,
                            background: colorBgContainer,
                        }}
                    >
                        {selectedKey === "1" ? (
                            <ProductListPage/>
                        ) : selectedKey === "2" ? (
                            <CategoryPage />
                        ) : (
                            children
                        )}
                    </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                    {/* Ant Design ©{new Date().getFullYear()} Created by Ant UED */}
                </Footer>
            </Layout>
        </Layout>
    );
};

export default LayoutAdmin;
