
import Header from "../components/Header";
import {Route, Switch} from "react-router-dom";
import TracingLinesHome from "./exercises/TracingLinesHome";
import TappingCirclesHome from "./exercises/TappingCirclesHome";
import ColoringAnImageHome from "./exercises/ColoringImageHome";
import HomeContent from "./HomeContent";


function Home() {
    return(
        <div>
            <Header />
            <Switch>
                <Route path="/Home/Tracing-Lines">
                    <TracingLinesHome />
                </Route>
                <Route path="/Home/Tapping-Circles">
                    <TappingCirclesHome />
                </Route>
                <Route path="/Home/Coloring-an-Image">
                    <ColoringAnImageHome />
                </Route>
                <Route path="/Home">
                    <HomeContent />
                </Route>
            </Switch>
        </div>
    )
}

export default Home