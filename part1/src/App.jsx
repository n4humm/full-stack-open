const Hello = () => {
  const now = new Date()
  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
    </div>
  )
}

const App = () => {
  const a = 12
  const b = 20
  console.log(a+b)
  return (
    <div>
      <Hello />
      <p>
        {a} plus {b} equals {a+b}
      </p>
      <Hello />
      <Hello />
    </div>
  )
}

export default App
