const person = {
  name: "Danial Sohail",
  hobby: "Cricket,Music",
};

function TodoList() {
  return (
    <div>
      <h1>{person.name}'s Todos</h1>
      <h2>{person.hobby}</h2>
      <ul>
        <li>1- ABC</li>
        <li>2- XYZ</li>
        <li>3- 123</li>
      </ul>
    </div>
  );
}

export default TodoList;
