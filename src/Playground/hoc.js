/* eslint-disable no-unused-vars */
import React from "react"

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
)

const withAdminWarnings = (WrapppedComponent) => {
  return (props) => (
    <div>
      <p>This is private info, pls do not share</p>
      <WrapppedComponent />
    </div>
  )
}

const AdminInfo = withAdminWarnings(Info)

export default Info
