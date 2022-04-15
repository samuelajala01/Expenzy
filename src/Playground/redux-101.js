import { createStore } from "redux"

function App() {
  // const address = ["12 bada street", "Mushing", "Lagos", "100253"]

  // const [, city, state = "Abuja"] = address

  // console.log(`You are in ${city} ${state}`)

  // const item = ["Coffee(hot)", "$2.00", "$2.50", "$2.75"]

  // const [product, , price] = item
  // console.log(`A medium ${product} costs ${price} `)

  // const person = {
  //   name: "John",
  //   age: 36,
  //   location: {
  //     city: "Lagos",
  //     temp: 60,
  //   },
  // }
  // const { name, age } = person

  // // console.log(`${name} is ${age}`)

  // const { city, temp: temperature } = person.location

  // const book = {
  //   title: "ego is the enemy",
  //   author: "Ryan Holiday",
  //   publisher: {
  //     // name: "Penguin",
  //   },
  // }
  // const { name: publisherName = "Self-Published" } = book.publisher

  // console.log(publisherName)
  const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: "INCREMENT",
    incrementBy,
  })

  const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: "DECREMENT",
    decrementBy,
  })

  const setCount = ({ count }) => ({
    type: "SET",
    count,
  })

  const resetCount = () => ({
    type: "RESET",
  })

  const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          count: state.count + action.incrementBy,
        }
      case "DECREMENT":
        return {
          count: state.count - action.decrementBy,
        }
      case "SET":
        return {
          count: action.count,
        }
      case "RESET":
        return {
          count: 0,
        }

      default:
        return state
    }
  }

  const store = createStore(countReducer)

  store.subscribe(() => {
    console.log(store.getState())
  })

  // store.dispatch({
  //   type: "INCREMENT",
  //   incrementBy: 5,
  // })

  store.dispatch(incrementCount({ incrementBy: 5 }))

  store.dispatch(incrementCount())

  store.dispatch(resetCount())

  store.dispatch(decrementCount())

  store.dispatch(decrementCount({ decrementBy: 10 }))

  store.dispatch(setCount({ count: 101 }))

  return (
    <div className="App">
      <header className="App-header">Hello</header>
    </div>
  )
}

export default App
