import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Main from './pages/main/main';
import OneCard from './pages/one-card/one-card';
import ThreeCard from './pages/three-card/three-card';
import CelticCross from './pages/celtic-cross/celtic-cross';
import YesOrNo from './pages/yesorno/yesorno';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}>
            <Route path='one-card' element={<OneCard />}/>
            <Route path='three-card' element={<ThreeCard />} />
            <Route path='celtic-cross' element={<CelticCross />} />
            <Route path='yesorno' element={<YesOrNo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
