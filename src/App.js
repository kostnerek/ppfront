import "./App.css";
import { CFooter } from "./components/CFooter";
import CHeader from "./components/CHeader";
import CContents from "./components/CContents";
import COuter from "./components/COuter";

function App() {
    return (
        <div className="App">
            <CHeader name="PPfront" />
            {/* <CHeader name="hehee" /> */}
            <COuter />
            <CContents />
            <CFooter weather="słoneczna" temp="20">
                <p>niebo jest bezchmurne</p>
            </CFooter>
            {/* <CFooter weather="pada" temp="0" />
            <CFooter weather="zimno" temp="-2" /> */}
        </div>
    );
}

export default App;
