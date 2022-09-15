import { useState, useEffect } from 'react'
import './style/global.scss';
import Layout from './Layout';
import MainPage from './pages/MainPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { TodoPage } from './pages/TodoPage';


function App() {
  const headerMenu = [
    {
      id: 1,
      title: 'главная',
      slug: '/'
    },
    {
      id: 2,
      title: 'список задач',
      slug: '/todoPage'
    }
  ]

  const data = [
    { id: 1, title: '1st todo', checked: false },
    { id: 2, title: '2nd todo', checked: false },
    { id: 3, title: '3nd todo', checked: false },
    { id: 4, title: '4nd todo', checked: false },
    { id: 5, title: '5nd todo', checked: false },
    { id: 6, title: '6nd todo', checked: false },
  ]

  const [items, setItems] = useState(data)
  const [isLoading, setIsLoading] = useState(false)

  const itemsHandler = (value) => {
    setIsLoading(true)
    setTimeout(() => {
      let arr = JSON.parse(JSON.stringify(items))
      arr.push({ id: items.length + 1, title: value, })
      setItems(arr)
    }, 1500);
  }

  const deleteTodo = (index) => {
    setIsLoading(true)
    setTimeout(() => {
      const arr = JSON.parse(JSON.stringify(items))
      arr.splice(index, 1)
      setItems(arr)
    }, 500)
  }

  useEffect(() => {
    setIsLoading(false)
  }, [items])

  useEffect(() => {

  }, [isLoading])


  return (
    <Router>
      <Layout headerMenu={headerMenu}>
        <Routes>
          <Route exact path='/' element={
            <MainPage
              itemsHandler={itemsHandler}
              isLoading={isLoading}
              deleteTodo={deleteTodo}
              items={items}
            />} />
          <Route exact path='/todoPage' element={
            <TodoPage
              deleteTodo={deleteTodo}
              items={items}
              isLoading={isLoading}
            />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
