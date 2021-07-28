import React, { useState, useEffect } from 'react';
import logo from './assets/images/logo.svg';
import styles from './App.module.css';
import Robot from './components/Robot';
import ShoppingCart from './components/ShoppingCart';

const App: React.FC = props => {
  const [count, setCount] = useState<number>(0)
  const [robotGallery, setRobotGallery] = useState<any>([])
  const [isLoading, judgeLoading] = useState<boolean>(false)
  useEffect(() => {
    document.title = `点击了${count}次`
  }, [count])

  useEffect(() => { // 当函数第二个参数为[]时，相当于类式组件生命周期componentDidMount函数,当函数第二个参数为空时，相当于类式组件生命周期中的componentDidUpdate函数
    judgeLoading(true)
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setRobotGallery(data))
    judgeLoading(false)
  }, [])

  return (
    <div className={styles.app} >
      <div className={styles.appHeader} >
        <img src={logo} alt="logo" className={styles.appLogo} />
        <h1>超级无敌狂拽酷炫吊炸天物美价廉童叟无欺的onlin机器人选购商店</h1>
      </div>
      <button onClick={() => setCount(count + 1)}>点一下</button>
      <span>count: {count}</span>
      <ShoppingCart />
      {
        isLoading ? (<h2>加载中, 请稍后。。。。</h2>)
          : (<div className={styles.robotList} >
            {robotGallery.map((r: { id: number; name: string; email: string; }) => (<Robot id={r.id} name={r.name} email={r.email} />))}
          </div>)
      }
    </div>
  )
}

export default App
