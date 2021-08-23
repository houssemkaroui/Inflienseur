
import React,{useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Acceuil from './pages/Acceuil';
import ConfirmationCampagnes from './pages/ConfirmationCampagnes';
import ConfirmationPlateforme from './pages/ConfirmationPlatforme';
import Campagnes from './pages/Campagnes';
import Influenceurs from './pages/Influenceurs';
import Paiements from './pages/Paiements';
import ListeInfluenceurs from './pages/ListeInflienceur';
import CampagnesVendeur from './pages/CompaneVendur';
import CompanneInflienseur from './pages/CompaneInfliensur'
import Stats from './pages/Stats'
import Home1 from './pages/Acceuil1'
import Home2 from './pages/Acceuil2'
import SignUp from './pages/login';
import Register from './pages/register'
import Password from './pages/forgetPassword';
import {AppProvider} from "./components/contextapi"

const App=()=> {

  return (
    <>
          <AppProvider>

      <BrowserRouter>
    
    
            <Navbar /> 
      
       
        <Switch>
          {/* <Route path='/' exact component={Iniatale} /> */}
          <Route path='/ConfirmationCampagnes' component={ConfirmationCampagnes} />
          <Route path='/ConfirmationPlateforme' component={ConfirmationPlateforme} />
          <Route path='/Campagnes' component={Campagnes} />
          <Route path='/Influenceurs' component={Influenceurs} />
          <Route path='/Paiements' component={Paiements} />
          <Route path='/ListeInfluenceurs' component={ListeInfluenceurs} />
          <Route path='/CampagnesVendeur' component={CampagnesVendeur}/>
          <Route path='/CompanneInflienseur' component={CompanneInflienseur}/>
          <Route path='/Stats' component={Stats}/>
          <Route path='/Inflienseur' component={Home1}/>
          <Route path='/Vendeur' component={Acceuil}/>
          <Route path='/Admin' component={Home2}/>
          <Route path='/' exact component={SignUp} />
          <Route path='/Register' component={Register} />
          <Route path='/reset_Password' component={Password} />

        </Switch>
      </BrowserRouter>
      </AppProvider>
    </>
  );
}

export default App;