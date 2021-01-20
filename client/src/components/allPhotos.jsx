<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
<div className="carousel-inner">
  <div className="carousel-item active">
    <img src={home.photoUrls[0]} className="d-block w-100" alt="..." />
  </div>
  <div className="carousel-item">
    <img src={home.photoUrls[1]} className="d-block w-100" alt="..." />
  </div>
  <div className="carousel-item">
    <img src={home.photoUrls[2]} className="d-block w-100" alt="..." />
  </div>
</div>
<a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Previous</span>
</a>
<a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Next</span>
</a>
</div>

{/* {home.photoUrls.map((photo, i) => {
i += 1;
return (
  <img alt="listing" className={home.home} id={i} src={photo} />
);
})} */}