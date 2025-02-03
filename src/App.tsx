import Nav from "./components/Nav"

function updateSize() {
  document.title = window.innerWidth + ' x ' + window.innerHeight
}

function App() {
  window.addEventListener('resize', updateSize) //* remove in prod

  return (
    <>
      <header>
        <Nav />
      </header>
    </>
  )
}

export default App
