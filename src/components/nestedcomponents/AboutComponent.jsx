function AboutComponent(props) {

  return(
    <>
      <div className={`w-full rounded-t-md px-3 py-2 ${props.variant} ${props.text}`}>
        {props.children}
      </div>
    </>
  )
}

export default AboutComponent;