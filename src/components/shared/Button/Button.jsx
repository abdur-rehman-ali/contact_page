import styles from './Button.module.css'

const Button = ({ icon, text, isOutline }) => {
  const { button, btn_primary, btn_outline } = styles
  return (
    <button className={`${button} ${isOutline ? btn_outline : btn_primary}`}>
      {icon}
      <span> {text} </span>
    </button >
  )
}

export default Button
