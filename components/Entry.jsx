
function Entry(prop) {
  return(
  <div className="entry-container">
      <div className="entry-img-container">
        <img src={prop.img} />
      </div>
      <div className="entry-content-container">
        <img className="marker" src="/images/marker.png" />
        <span className="location"> {prop.country} </span>
        <a className="map-link" href={prop.mlink} target="_blank"> View on Google Maps </a>
        <h1 className="entry-location"> {prop.location} </h1>
        <h2 className="entry-date"> {prop.date} </h2>
        <p className="entry-content">{prop.content}</p>
      </div>
  </div>
  )
}

export default Entry

