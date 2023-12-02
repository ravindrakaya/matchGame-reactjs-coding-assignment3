import './index.css'

const TabItem = props => {
  const {tabDetails, onUpdateTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const btnClassName = isActive ? 'active-tab-btn' : ''
  const activeDisplayText = isActive ? 'active-text' : ''

  const onClickTabItem = () => {
    onUpdateTabId(tabId)
  }

  return (
    <li>
      <button
        type="button"
        className={`tab-button ${btnClassName}`}
        onClick={onClickTabItem}
      >
        <p className={`display-text ${activeDisplayText}`}>{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
