import Generate from "./components/Generate";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import PassInfo from "./components/PassInfo";
import SignIn from "./components/SignIn";
import { Routes, Route } from "react-router-dom";
import MyPasswords from './components/MyPasswords';
import Home from "./components/Home";

function App() {
  return (
    <>
      <Header />
      <div className='flex flex-col px-8 py-8 sm:px-[20rem] gap-12'>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
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
