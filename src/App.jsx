import './App.css'


function App() {

//   const [name, setName] = useState([""])
//   const Hola = "Nombre"
  
//   function addName (){
//     setName([{...name, Hola}])
//   }
// console.log(name);
 

  // function CardsData () {
  //   fetch(name)
  //     .then(response => response.json())
  //     .then(datos => {
  //       console.log(name);
  //       console.log(response);
  //       setName(name)
  //     })

  // }

  // useEffect(() => {
  //   CardsData()
  // })

  return (
    <div className="App">
      <Home/>
      <Cards/>
    </div>
  )
}

export default App
