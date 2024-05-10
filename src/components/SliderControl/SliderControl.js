import React from 'react'
import styles from './SliderControl.modlue.css'

function SliderControl({ label, value, ...delgated }) {
  const id = React.useId()

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <label id={id}>{label}</label>
        <span>{value}</span>
      </div>
      <Slider {...delgated} value={value} id={id} />
    </div>
  )
}

export default SliderControl
