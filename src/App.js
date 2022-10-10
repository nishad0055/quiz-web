import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Errorpage from './component/Errorpage/Errorpage';
import Home from './component/Home/Home';
import Root from './Root/Root';

function App() {
  const router = createBrowserRouter([
    {
      path:'/', element: <Root></Root>, errorElement:<Errorpage></Errorpage>,
       children: [
        {
          path: '/', element: <Home></Home>
          
        },
        {
          path: 'home', element: <Home></Home>
        },
        
      ]
    }
  ])
  return (
    <div>
      
    
       <RouterProvider router= {router}></RouterProvider>
    </div>
  );
}

export default App;
