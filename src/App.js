import "./App.css";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import React, { useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
const  App=()=> {

const [progress, setProgress] = useState(0);
  


    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <LoadingBar color="#f11946" 
          progress={progress} />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  setProgress={setProgress}
                  key={"general"}
                  pageSize={5}
                  country="in"
                  category="general"
                />
              }
            ></Route>
            <Route
              path="/business"
              element={
                <News
                  setProgress={setProgress}
                  key={"business"}
                  pageSize={5}
                  country="in"
                  category="business"
                />
              }
            ></Route>
            <Route
              path="/entertainment"
              element={
                <News
                  setProgress={setProgress}
                  key={"entertainment"}
                  pageSize={5}
                  country="in"
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              path="/general"
              element={
                <News
                  setProgress={setProgress}
                  key={"general"}
                  pageSize={5}
                  country="in"
                  category="general"
                />
              }
            ></Route>

            <Route
              path="/health"
              element={
                <News
                  setProgress={setProgress}
                  key={"health"}
                  pageSize={5}
                  country="in"
                  category="health"
                />
              }
            ></Route>
            <Route
              path="/science"
              element={
                <News
                  setProgress={setProgress}
                  key={"science"}
                  pageSize={5}
                  country="in"
                  category="science"
                />
              }
            ></Route>
            <Route
              path="/sports"
              element={
                <News
                  setProgress={setProgress}
                  key={"sports"}
                  pageSize={5}
                  country="in"
                  category="sports"
                />
              }
            ></Route>
            <Route
              path="/technology"
              element={
                <News
                  setProgress={setProgress}
                  key={"technology"}
                  pageSize={5}
                  country="in"
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }

export default App;