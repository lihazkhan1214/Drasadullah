

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes, Route } from "react-router-dom";
import Navbr from "./components/Navbr";
import Bio from './components/Bio';

import Qualification from './components/Qualification';
import Experience from './components/Experience';

import Awards from './components/Awards';



import Contact from './components/Contact';
import ResearchandPubliction from './components/ResearchandPubliction';
import Footer from './components/Footer';


function App() {
  return (
<>

<Routes>
<Route path="/bio" element={<Bio/>}></Route>
<Route path="/qualification" element={<Qualification/>}></Route>
<Route path="/experience" element={<Experience/>}></Route>



<Route path="/awards" element={<Awards/>}></Route>
<Route path="/researchandpublication" element={<ResearchandPubliction />}></Route>
<Route path="/contact" element={<Contact/>}></Route>


</Routes>
<div className='bg-color'>
<Navbr></Navbr>

<Bio></Bio>
<Qualification></Qualification>
<Experience></Experience>

<Awards></Awards>
<ResearchandPubliction></ResearchandPubliction>

<Footer> </Footer>

</div>
</>
  );
}

export default App;
