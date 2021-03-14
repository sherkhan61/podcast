import React, {lazy, Suspense} from "react";
import {Route, Switch} from "react-router";
import {Blog, Contacts, Home} from "./pages";
import {Preloader} from "./components/ui/preloader/Preloader";


const Episodes = lazy(() => import("./pages").then(({Episodes}) => (
    {default: Episodes}
)));


const Routes = () => {
    return (
        <>
            <Suspense fallback={<Preloader/>}>
                <Switch>
                    <Route exact path='/'>
                        <Home/>
                    </Route>
                    <Route path='/episodes'>
                        <Episodes/>
                    </Route>
                    <Route path='/contacts'>
                        <Contacts/>
                    </Route>
                </Switch>
            </Suspense>
        </>
    )
}

export default Routes