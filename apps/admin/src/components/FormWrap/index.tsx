import React, { useRef, useState, useEffect } from 'react'
import { useSize } from 'ahooks'
import styles from './index.module.scss'

const FormWrap = ({ slot, rows = 2 }) => {
  const [visible, changeVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const size = useSize(ref)

  useEffect(() => {
    console.log(size)
    if (!visible) {
      changeVisible(size?.height / 44 > rows + 1)
    }
  }, [size])
  return (
    <div className={styles['form-wrap']} style={{ overflow: 'inherit', height: visible && rows * 44 }}>
      <span ref={ref}>{slot}</span>
      {visible && <span className={styles['show-more']}>更多</span>}
    </div>
  )
}

export default FormWrap
