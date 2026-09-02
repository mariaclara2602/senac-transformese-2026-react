// tudo do lado de fora é js

import {Routes, Route} from 'react-router'
import Home from './pages/Home.jsx';
import Auth from './pages/Auth.jsx';
function App(){
return (                                                                            //tudo dentro do () é html  //return apenas uma coisa só   sempre que for link é to r route é path
<Routes>

    <Route path="/" element={ <Home/> } />                                                
    <Route path="/auth" element={ <Auth/> } />

</Routes>

   )
}

export default App;
