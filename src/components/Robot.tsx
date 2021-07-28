import React, { useContext } from 'react'
import styles from './Robot.module.css'
import { appContext, setStateContext } from './AppState'

interface RobotProps {
  id: number,
  name: string,
  email: string
}
const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  const state = useContext(appContext)
  const setState = useContext(setStateContext)
  const addShoppingCart = () => {
    if (setState) {
      const { items } = state.shoppingCart
      setState(state => {
        return {
          ...state,
          shoppingCart: { items: [...items, { id, name, email }] }
        }
      })
    }
  }
  return (<li className={styles.cardContainer} >
    <img src={`https://robohash.org/${id}`} alt="robot" />
    <h2>{name}</h2>
    <p>{email}</p>
    <p>作者: {state.username}</p>
    <button onClick={addShoppingCart}>加入购物车</button>
  </li>
  )
}
export default Robot