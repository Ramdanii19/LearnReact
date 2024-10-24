import Button from "./components/Elements/Button"

function App() {
  return (
    <div className="flex justify-center bg-blue-600 items-center">
      <div className="flex gap-x-3">
        <Button variant="bg-red-700">Buy</Button>
        <Button variant="bg-slate-500">Now</Button>
        <Button variant="bg-green-700">Sale</Button>
        <Button></Button>
      </div>
    </div>
  )
}

export default App
