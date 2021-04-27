import { BrowserRouter, Route, Switch } from "react-router-dom";

import PageLayout from "./components/layout/PageLayout";

import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <PageLayout>
                        <HomePage />
                    </PageLayout>
                </Route>
                <Route path="/projects" exact>
                    <PageLayout>
                        <ProjectsPage />
                    </PageLayout>
                </Route>
                <Route path="/resume">
                    <PageLayout>
                        <ResumePage />
                    </PageLayout>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;