import { Route, Switch } from "react-router-dom"
import Header from "../../header/default/Header"
import MainMenu from "../../menu/main-menu/MainMenu"
import "./style.scss"

import Introduction from "../../../content/pages/Introduction"
import BaseElements from "../../../content/pages/Elements"

const pageHeaderSidebar = () => {
  return (
    <>
      <div className="page page-header-sidebar d-flex flex-column">
        <Header />

        <div className="main-wrapper d-flex flex-row flex-grow-1">
          <div className="sidebar bg-white">
            <MainMenu />
          </div>

          <main className="main-content flex-grow-1">
            <Switch>
              <Route exact path="/" component={Introduction}>
              </Route>

              <Route path="/typography" component={BaseElements}>
              </Route>
            </Switch>
          </main>
        </div>
      </div>
    </>
  )
}

export default pageHeaderSidebar
