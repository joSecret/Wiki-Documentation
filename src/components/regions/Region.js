const Region = ({ children, id, classes }) => {
  const divStyle = [
    'region',
    'region-' + id,
    classes,
  ];

  return (
    <div id={`region-${id}`} className={divStyle.join(" ")}>
      {children}
    </div>
  )
}

export default Region
