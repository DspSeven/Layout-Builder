// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => {
  const centerContent = () => {
    console.log('')
    return (
      <div>
        <h1>Left Navbar Menu</h1>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
          <li>item 4</li>
        </ul>
      </div>
    )
  }
  const leftNavbar = () => {
    console.log('')
    return (
      <div>
        <h1>Content</h1>
        <p>Lorem ipsum</p>
      </div>
    )
  }
  const rightNavbar = () => {
    console.log('')
    return (
      <div>
        <h1>Right Navbar</h1>
        <p>Ad 1</p>
        <p>Ad 2</p>
      </div>
    )
  }
  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value
        return (
          <div>
            {showContent ? centerContent() : null}
            {showLeftNavbar ? leftNavbar() : null}
            {showRightNavbar ? rightNavbar() : null}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}
export default Body
