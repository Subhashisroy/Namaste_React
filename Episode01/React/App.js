const heading = React.createElement("div", { id: "parent1" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "Heading" }, "Hello world from React"),
    React.createElement("h1", { id: "Heading" }, "Hello world from React"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "Heading" }, "Hello world from React"),
    React.createElement("h1", { id: "Heading" }, "Hello world from React"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
