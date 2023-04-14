const Notification = props => {
  const {className, message, srcImg} = props;
  const containerClassName = {`notification-container ${className}`}
  
  return (
      <div className={containerClassName}>
        <img className="image" src={srcImg} />
        <p className="paragraph">{message}</p>
      </div>
  )
}

const element = (
  <div className="main-container">
    <h1 className="head">Notification</h1>
    <div className="notifications-list-container">
        <Notification 
            className="Information" 
            message="Information Message" 
            srcImg="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
       />
        <Notification 
            className="Success" 
            message="Success Message" 
            srcImg="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
         />
        <Notification 
            className="Warning" 
            message="Warning Message" 
            srcImg="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        />
        <Notification 
            className="Error"
            message="Error Message" 
           srcImg="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
         />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
