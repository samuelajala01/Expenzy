import React from "react"
import { connect } from "react-redux"
import ExpenseListItem from "./expenseListItem"
import selectExpenses from "../selectors/expenses"

const ExpenseList = (props) => (
  <div>
    <h1>Expense list</h1>
    {props.expenses.map((expense) => {
      return <ExpenseListItem key={expense.id} {...expense} />
    })}
  </div>
)

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  }
}

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList)

export default ConnectedExpenseList
