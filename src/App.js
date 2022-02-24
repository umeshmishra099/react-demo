import './App.css';
import { Routes ,Route} from "react-router-dom";
import {About, CompanyHistory, CompanyServices, Contacts, Events, Home, NotFound} from "./pages";


function App({}) {
    return (<div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>} >
                <Route path="service" element={<CompanyServices/>}/>
                <Route path="history" element={<CompanyHistory/>}/>
            </Route>
            <Route path="/events" element={<Events/>} />
            <Route path="/contact" element={<Contacts/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    </div>);
}

export default App;
