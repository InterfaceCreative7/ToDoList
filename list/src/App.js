import Header from "./component/header/Header.js"
import SetInput from "./component/footer/SetInput.js"
import classes from "./App.module.css"


function App() {
  return (
    <div className={classes.main}>
      <Header />
      <SetInput />
    </div>
  );
}

export default App;
