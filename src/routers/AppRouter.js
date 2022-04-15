import { BrowserRouter, Route, Routes } from "react-router-dom"
import ExpenseDashboardPage from "../Components/ExpenseDashboard"
import AddExpensePage from "../Components/AddExpensePage"
import EditExpensePage from "../Components/EditExpensePage"
import HelpPage from "../Components/HelpPage"
import NotFound from "../Components/NotFound"
import Header from "../Components/Header"

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<ExpenseDashboardPage />} />
      <Route path="/create" element={<AddExpensePage />} />
      <Route path="/edit/:id" element={<EditExpensePage />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

export default AppRouter
