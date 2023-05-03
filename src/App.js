import logo from './logo.svg';
import './App.css';
import TodoApp from './todo/TodoApp';
import One from './Practice/One';
import AutoCounter from './Practice/AutoCounter';
import Todo from './AdTodo/Todo';
import ColorShadow from './ColorShadow/ColorShadow';
import ImageSearch from './ImageSearch/ImageSearch';

function App() {
  // const transer = ()=>{
  //   console.log("from app")
  // }
  return (
    <div className="App">
      <ImageSearch/>
      {/* <ColorShadow/> */}
      {/* <Todo/> */}
      {/* <One name1="Musharraf" data={transer}/>
      <AutoCounter/> */}
      {/* <TodoApp/> */}
     {/* <One name1={"Musharraf"} printName={"name"}/> */}
    </div>
  );
}

export default App;
