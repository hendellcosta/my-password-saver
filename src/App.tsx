import Generate from "./components/Generate";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import PassInfo from "./components/PassInfo";
import LogIn from "./components/LogIn";
import { Routes, Route } from "react-router-dom";
import MyPasswords from './components/MyPasswords';
import Home from "./components/Home";

function App() {
  return (
    <>
      <Header />
      <div className='flex flex-col px-8 py-8 sm:px-[40rem] gap-12'>
      <Routes>
        <Route path="/log-in" element={<LogIn />} />
        <Route path='/my-passwords' element={<MyPasswords />} />
        <Route path='/' element={<Home />} />
      </Routes>
      </div>
    </>
  );
}

export default App;

// missing ipad responsiveness

// missing copy button
