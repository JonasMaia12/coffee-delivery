import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/Home"
import { CompletedOrderPage } from "./pages/CompletedOrder"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { OrderConfirmedPage } from "./pages/OrderConfirmed"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/completedOrder" element={<CompletedOrderPage />} />
        <Route path="/orderConfirmed" element={<OrderConfirmedPage />} />
      </Route>
    </Routes>
  )
}
