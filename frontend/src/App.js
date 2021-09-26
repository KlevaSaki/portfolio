import './App.css';
import Sidebar from './components/Sidebar';
import styled from 'styled-components';
import Homepage from './pages/Homepage';
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import ProjectsPage from "./pages/ProjectsPage";
import BlogsPage from "./pages/BlogsPage";
import ContactsPage from "./pages/ContactsPage";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Sidebar />

      <MainContentStyled>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>
        
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/resume" exact>
            <ResumePage />
          </Route>
          <Route path="/projects" exact>
            <ProjectsPage />
          </Route>
          <Route path="/blogs" exact>
            <BlogsPage />
          </Route>
          <Route path="/contacts" exact>
            <ContactsPage />
          </Route>
        </Switch>
      </MainContentStyled>
    </div>
  );
}


const MainContentStyled = styled.div`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;

  .lines {
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    .line-1, .line-2, .line-3, .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color); 
      opacity: .4;
    }
  }
`

export default App;
