import Gallery from "react-photo-gallery-next";
import ItemJson from "../../public/items.json";
export default function FarmGallery() {
  return (
    <section className="gallery-section padding-tb bg-ash">
      <div className="container-fluid p-0 m-0">
        <div className="row">
          <div className="col-12">
            <div className="section-header">
              <h3 className="heading-2">Farm Gallery</h3>
            </div>
          </div>
          <div className="col-12">
            <Gallery photos={ItemJson.photos} />
          </div>
        </div>
      </div>
    </section>
  );
}
