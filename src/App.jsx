import React from "react";
import Heading from "./Heading";
import Footer from './Footer';
import Note from './Note';
import notes from './notes';

function App() {
  return (
    <div>
      <Heading />
{notes.map((item)=> {
  return (
    <Note
    key = {item.key}
    title = {item.title}
    content = {item.content}
     />
  )
})}
      
      <Footer />
    </div>
  );
}

export default App;