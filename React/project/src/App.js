import logo from './logo.svg';
import './App.css';

import Page from './Components/ShowPage';
import Droplist from './Components/Droplist';
import Skeleton from '@chakra-ui/react';
import SkeletonComp from './Components/SkeletonComp';
import { SinglePageLips } from './Components/SingleProd';

function App() {
  return (
    <div className="App">
  <SinglePageLips/>
    </div>
  );
}

export default App;
