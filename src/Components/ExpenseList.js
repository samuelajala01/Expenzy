import React from "react"
import { connect } from "react-redux"

const ExpenseList = (props) => (
  <div>
    <h1>expense list</h1>
    {props.expenses.length}
    {props.filters.text}
  </div>
)

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters,
  }
}

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList)

export default ConnectedExpenseList
