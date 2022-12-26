const { useEffect, useState } = React

function Counter() {


  const [count, setCount]
    = useState(99990);

  useEffect(() => {
    console.log("useEffect")
  }, [])
  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          console.log("button onclick")
          setCount(count + 1)
        }
        }>
        Click me
      </button>
    </div>
  );
}