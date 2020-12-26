import { m } from 'minite'

/** @jsx m */
export default (props, [anchor]) => {
  const  {
    url,
    title,
    className
  } = props
  
  return (
    <a
      href={`#!${url}`}
      title={title}
      className={className}
      >
       {anchor}
    </a>
  )
}