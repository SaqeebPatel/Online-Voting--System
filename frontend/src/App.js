
// export default App;
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Userpage from "./components/Userpage";
import AddCandidate from "./components/Admin/AddCandidates";
import AddElection from "./components/Admin/AddElection";
import About from './components/User/About';
import Contact from './components/User/Contact';
import ReadMore from './components/User/ReadMore';
import Election from './components/User/Election';
import Vote from './components/User/Vote';
import VotePanel from './components/User/VotePanel';
import VotesPerElection from "./components/Admin/VotesperElection";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userinfo/*" element={<Userpage />} />
          <Route path="/addcandidate" element={<AddCandidate />} />
          <Route path="/addelection" element={<AddElection />} />


          <Route path='/About' element={<About/>}/>
          <Route path='/Contact'element={<Contact />} />
          <Route path='/ReadMore' element={<ReadMore />} />
          <Route path='/Election' element={<Election/>}/>
          <Route path='/vote/:electionId' element={<Vote />} />
         
          <Route path="/VotePanel/:electionId" element={<VotePanel />} />

          <Route path="/VotesPerElection" element={<VotesPerElection />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
// https://jsonplaceholder.typicode.com/users