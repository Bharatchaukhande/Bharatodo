import React from 'react'
import Header from './Components/Header'
import List from './Components/List'
import { Provider } from 'react-redux'
import appStore from './Slices/Store'

const App = () => {
  return (
    <Provider store={appStore}>
    <div>
      <Header/>
      <List/>
    </div>
    </Provider>
  )
}

export default App

