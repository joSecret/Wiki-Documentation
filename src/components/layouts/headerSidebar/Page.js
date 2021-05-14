import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from "../../header/default/Header"
import "./style.scss"

const pageHeaderSidebar = () => {
  return (
    <Router>
      <Switch>
        <div className="page page-header-sidebar">
          <Header />
          <Route path="/">
            Front page
          </Route>
          <Route path="/typography">
            Typography
          </Route>
        </div>
      </Switch>
    </Router>
  )
}

export default pageHeaderSidebar
