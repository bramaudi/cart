import { m } from 'minite'

const state = { count: 0 }

/** @jsx m */
export default () => {
  return {
    state,
    view: ({ count } = {}, set) => (
      <section>
        <h1>Hi</h1>
        <div>Count: {count}</div>
        <button onClick={() => set('count', count + 1)}>+1</button>
      </section>
    )
  }
}