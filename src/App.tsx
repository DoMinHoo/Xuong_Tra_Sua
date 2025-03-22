import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Authenticated from "./components/Authenticated";
import LayoutAdmin from "./components/LayoutAdmin";
import DashboardPage from "./pages/Dashboard";
import ProductListPage from "./pages/Admin/list";
import ProductAdd from "./pages/Admin/create";
import ProductEdit from "./pages/Admin/edit";
import PostsPage from "./pages/Client/list";
import Checkout from "./pages/Client/checkout";
import Shop from "./pages/Client/shop";
import HomePage from "./pages/Client";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="shop" element={<Shop />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="admin" element={
                    <Authenticated fallback={<Navigate to="/login" replace />}>
                        <LayoutAdmin>
                            <Outlet />
                        </LayoutAdmin>
                    </Authenticated>
                }>
                    <Route index element={<DashboardPage />} />
                    <Route path="posts" element={<PostsPage />} />
                    <Route path="products">
                        <Route index element={<ProductListPage />} />
                        <Route path="create" element={<ProductAdd />} />
                        <Route path="edit/:id" element={<ProductEdit />} />
                    </Route>
                </Route>
                <Route path="admin" element={
                    <Authenticated fallback={<Navigate to="/login" replace />}>
                        <LayoutAdmin>
                            <Outlet />
                        </LayoutAdmin>
                    </Authenticated>
                } >
                    <Route index element={<DashboardPage />} />
                    <Route path="posts" element={<PostsPage />} />
                    <Route path="products">
                        <Route index element={<ProductListPage />} />
                        <Route path="create" element={<ProductAdd />} />
                        <Route path="edit/:id" element={<ProductEdit />} />
                    </Route>
                </Route>
                <Route path="login" element={<h1>Login</h1>} />
                <Route path="*" element={<h1>404 not found</h1>} />
            </Routes>
        </>
    );
}

export default App;
