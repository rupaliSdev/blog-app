
import './App.css';
import Base from './components/Base';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='home' element={<h1>this is home page</h1>}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
