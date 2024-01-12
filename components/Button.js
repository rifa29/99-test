export default function Button({ onClick, children }) {
  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  )
}