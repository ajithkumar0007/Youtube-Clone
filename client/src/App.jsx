import { Fragment } from 'react'
import HomeScreen from './screens/HomeScreen'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PlayerScreen from './screens/PlayerScreen'
import SearchScreen from './screens/SearchScreen'
import RootLayout from './screens/RootLayout'

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />, children: [
      { path: '/', element: <HomeScreen /> },
      {
        path: '/player/:id', element: <PlayerScreen />
      },
      { path: '/search', element: <SearchScreen /> }
    ]
  }
]);

function App() {


  return (<RouterProvider router={router} />)
}

export default App


