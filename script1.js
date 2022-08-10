 //<h1 style="background-color:cyan;">Welcome to Walmart</h1>
        // createElement -- 3 params; type of element; attributes;children 
        // <a href="https://www.walmart.com/">Go to Walmart</a>
        var anchorElement=React.createElement("a",{href:"https://www.walmart.com/"},"Go to Walmart")
        var h1Element=React.createElement("h1",{style:{backgroundColor:"pink",color:"blue"}},"Welcome to Walmart")
        var divElement= React.createElement("div",null,[h1Element,anchorElement])
        const root=ReactDOM.createRoot(document.getElementById("root"));
        // render will return the virtual DOM; virtual DOM -- tree structure; only one root element
        //root.render(h1Element,anchorElement);// will not work 
        root.render(divElement);
        /*
        -- not scalable
        -- not readable
        -- modularity
        -- not maintainable
        -- file structure
        -- suitable for smaller projects
        -- difficult to code

        */