import eventsData from "./upcoming-events.json"
import PageBoard from "./components/PageBoard"
import GlobalStyle from "./GlobalStyle"

function App() {
  return (
    <>
      <GlobalStyle />
      <PageBoard events={eventsData.events} />
    </>
  )
}

export default App

