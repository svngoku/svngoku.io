import React from "react";
import { BrowserRouter as Route } from "react-router-dom";


function Status({ code, children }) {
    return (
      <Route
        render={({ staticContext }) => {
          if (staticContext) staticContext.status = code;
          return children;
        }}
      />
    );
}


function NotFound() {
    return (
        <Status code={404}>
            <div>
                <h1>Sorry, page not found</h1>
            </div>
        </Status>
    );
}


export { NotFound }