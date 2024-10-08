import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import {FaStickyNote ,FaBook } from 'react-icons/fa'
import {AiFillHome } from 'react-icons/ai'
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './styles/global.css'
import DownloadPage from './pages/DownloadPage';
setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/downloadBook/:id">
            <DownloadPage /> 
          </Route>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route exact path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab2" href="/tab2">
            <div style={{display:"flex" , gap : "5px" , flexDirection : "column"  , alignItems : "center"}}>
            <FaBook />
            <IonLabel>Books</IonLabel>
            </div>
          </IonTabButton>
          <IonTabButton tab="tab1" href="/tab1">
            <div style={{display:"flex" , gap : "5px" , flexDirection : "column"  , alignItems : "center"}}>
            <AiFillHome  />
            <IonLabel>Home</IonLabel>
            </div>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <div style={{display:"flex" , gap : "5px" , flexDirection : "column"  , alignItems : "center"}}>
            <FaStickyNote  />
            <IonLabel>Material</IonLabel>
            </div>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
