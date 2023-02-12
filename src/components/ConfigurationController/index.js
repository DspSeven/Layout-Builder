// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const centerContent = () => {
        onToggleShowContent()
      }
      const leftContent = () => {
        onToggleShowLeftNavbar()
      }
      const rightContent = () => {
        onToggleShowRightNavbar()
      }
      return (
        <div>
          <h1>Layout</h1>
          <div>
            <input
              type="checkbox"
              id="context"
              checked={showContent}
              onClick={centerContent}
            />
            <label htmlFor="context">Content</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="left-context"
              checked={showLeftNavbar}
              onClick={leftContent}
            />
            <label htmlFor="left-context">Left Navbar</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="right-context"
              checked={showRightNavbar}
              onClick={rightContent}
            />
            <label htmlFor="right-context">Right Navbar</label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
