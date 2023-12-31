import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function notesArr(details){
return(
  <Note
  key={details.key}
  title={details.title}
  content={details.content}
   />
)
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(notesArr)}
      <Footer />
    </div>
  );
}

export default App;
