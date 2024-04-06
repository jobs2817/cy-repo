import { createContext, useState, useContext } from 'react'
import classNames from 'classnames'
export const Context = createContext({ count: 100 })

export function ChildHook() {
  const { count, title } = useContext(Context)

  return <div>{count + ' | ' + title}</div>
}

export function ChildConsumer() {
  return (
    <Context.Consumer>
      {(value) => (
        <div
          className={classNames({
            btn: true,
          })}
        >
          {value.count} | {value.title}
        </div>
      )}
    </Context.Consumer>
  )
}

export default function Component() {
  let [count, add] = useState(0)

  return (
    <Context.Provider value={{ count: count, title: 'react' }}>
      <div onClick={() => add(++count)}>
        <ChildHook />
        <ChildConsumer />
      </div>
    </Context.Provider>
  )
}
