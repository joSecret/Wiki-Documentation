import LayoutSidebar from './components/layouts/headerSidebar/LayoutSidebar'
import { BrowserRouter as Router } from "react-router-dom"

window.siteName = "WikiDocs"

function App() {
  return (
    <Router>
      <LayoutSidebar />
    </Router>
  );
}

export default App;
