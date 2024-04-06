import { useState, useEffect } from 'react'
export default function UseState() {
  const [name, setName] = useState('study111222 react')

  useEffect(() => {
    document.title = name
  }, [name])
  return <div onClick={() => setName('study Vue')}>{name}</div>
}
