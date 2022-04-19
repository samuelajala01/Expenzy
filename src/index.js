/* eslint-disable no-unused-vars */
import React from "react"
import ReactDOM from "react-dom"
import AppRouter from "./routers/AppRouter"
import "./index.css"
import configureStore from "./store/configureStore"
import { addExpense } from "./actions/expenses"
import { setTextFilter } from "./actions/filters"
import getVisibleExpenses from "./selectors/expenses"
import Info from "./Playground/hoc"
import { Provider } from "react-redux"

// import Redux from "redux"
// import App from "./App"

const store = configureStore

store.dispatch(addExpense({ description: "water bill", amount: 4500 }))
store.dispatch(addExpense({ description: "Gas bill", createdAt: 1000 }))
store.dispatch(addExpense({ description: "Rent", amount: 10500 }))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
)
