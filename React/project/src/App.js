import logo from './logo.svg';
import './App.css';

import Page from './Components/ShowPage';
import Droplist from './Components/Droplist';
import Skeleton from '@chakra-ui/react';
import SkeletonComp from './Components/SkeletonComp';
import { SinglePageLips } from './Components/SingleProd';
import Delivery from './Components/Address';
import Address from './Components/Address';

function App() {
  return (
    <div className="App">
     <Address/>
    </div>
  );
}

export default App;
