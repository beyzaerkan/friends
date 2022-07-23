import './App.css';
import Card from './components/Card'

function App() {
  const codes = [
    {
      statusCode: 101,
      title: "Switching",
    },
    {
      statusCode: 102,
      title: "Processing",
    },
  ]


  return (
    <div className="App">
      <h1>Friends</h1>
      <div className='cards'>
      {
        codes.map(item => {
          return (
            <Card key={item} imageUrl={require("../images/" + item.statusCode + ".jpg")} statusCode={item.statusCode} title={item.title}></Card>
          )
        })
      }
      </div>
    </div>
  );
}

export default App;
