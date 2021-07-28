import React, { Component } from 'react'
import styles from './ShoppingCart.module.css'
import { FiShoppingCart } from 'react-icons/fi'
import { appContext } from './AppState'


interface Props {

}

interface State {
  isOpen: boolean;
}

export default class ShoppingCart extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }
  handle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    this.setState({ isOpen: !this.state.isOpen })
  }
  render() {
    return (
      <appContext.Consumer>
        {(value) => {
          return (
            <div className={styles.cartContainer}>
              <button className={styles.button}
                onClick={this.handle}
              >
                <FiShoppingCart />
                <span>购物车 {value.shoppingCart.items.length} (件)</span>
              </button>
              <div className={styles.cartDropDown}
                style={{ display: this.state.isOpen ? 'block' : 'none' }}
              >
                <ul>
                  {
                    value.shoppingCart.items.map((item) => {
                      return (<li>id:{item.id}, name:{item.name}</li>)
                    })
                  }
                </ul>
              </div>
            </div>
          )
        }}
      </appContext.Consumer>
    )
  }
}
