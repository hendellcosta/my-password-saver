import Generate from "./components/Generate"
import Header from "./components/Header"
import Introduction from "./components/Introduction"
import PassInfo from "./components/PassInfo"

function App() {
  return (
    <div>
        <Header />
        <Introduction />
        <div className='flex flex-col px-8 py-8 sm:px-[40rem] gap-12'>
        <Generate />
        <PassInfo />
        </div>
    </div>
  )
}

export default App


// missing ipad responsiveness

// missing copy button