// src/App.tsx
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyLayout from './Layout';
import Home from './views/Home';
import NoteTemplates from './views/NoteTemplates';
import AllNotes from './views/AllNotes';
import NoteBook from './views/noteBook/NoteBook';
import Space from './views/space/Space';
import NoteTag from './views/NoteTag';
import Calendar from './views/DetailedList/Calendar';
import FourQuadrant from './views/DetailedList/FourQuadrant';
import TodayList from './views/DetailedList/TodayList';
import Next7Days from './views/DetailedList/Next7Days';
import ToBeSortedOut from './views/DetailedList/ToBeSortedOut';
import CompletedTask from './views/DetailedList/CompletedTask';
import DocumentLibrary from './views/DocumentLibrary';
import KnowledgeStarMap from './views/KnowledgeStarMap';

const App:React.FC = () => {
  return (
    <Router>
      <MyLayout>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path="/allNotes" element={<AllNotes />}></Route>
          <Route path="/noteBook" element={<NoteBook />}></Route>
          <Route path="/noteTag" element={<NoteTag />}></Route>
          <Route path="/space" element={<Space />}></Route>
          <Route path="/calendar" element={<Calendar />}></Route>
          <Route path="/fourQuadrant" element={<FourQuadrant />}></Route>
          <Route path="/todayList" element={<TodayList />}></Route>
          <Route path="/next7Days" element={<Next7Days />}></Route>
          <Route path="/toBeSortedOut" element={<ToBeSortedOut />}></Route>
          <Route path="/completedTask" element={<CompletedTask />}></Route>
          <Route path="/documentLibrary" element={<DocumentLibrary />}></Route>
          <Route path="/noteTemplates" element={<NoteTemplates />}></Route>
          <Route path="/knowledgeStarMap" element={<KnowledgeStarMap />}></Route>
        </Routes>
      </MyLayout>
    </Router>
  );
};

export default App;
