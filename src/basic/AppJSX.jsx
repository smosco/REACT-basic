import "./App.css";

function AppJSX() {
  const name = "엘리";
  const list = ["우유", "딸기", "바나나", "초코빵"];
  return (
    <div>
      <h1 className="orange">{`Hello ${name}`}</h1>
      <h2>Hello@</h2>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
        {list.map(function (item) {
          return <li>{item}</li>;
        })}
      </ul>
      <img
        style={{ width: "200px", height: "200px" }}
        src="https://images.unsplash.com/photo-1670611554940-c813196be2fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        alt="mountain"
      />
    </div>
  );
}

export default App;
