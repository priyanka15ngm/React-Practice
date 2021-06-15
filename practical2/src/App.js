
import Test from "./Inc-Dec-Button"
import ReadMore from "./ReadMore"
// import Table from "./Table"
import ReactDemo from "./Reacthook-Inc-Dec-Button"
import DemoOnChange from "./DemoOnChange";
import MyForm from "./MyFormBind"
function App() {
  return (
    <div className="App">
      {/* <Test digit = "0" /> */}
      <Test/>
      <ReadMore/>
      {/* <Table/> */}
      <ReactDemo/>
      <DemoOnChange/>
      <MyForm/>
    </div>
  );
}

export default App;
