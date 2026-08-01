import React from "react";
import ReactDOM from "react-dom/client";

 const parent = React.createElement("div",{id:"parent"},
            React.createElement("div",{id:"child"},
                [React.createElement("h1",{},"Hello from the nested element!"),
                    React.createElement('h2',{},'H2 from the nested one')
                ]
            )
        );

        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);