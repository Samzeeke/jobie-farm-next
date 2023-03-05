import { useState } from "react";
import { items } from "../../public/items.json";
import { Carousel } from "react-bootstrap";
import styles from "../../styles/Bootstrap.module.css";

export default function BootstrapCarousel() {
  const { bootstrap } = items;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {bootstrap.map((item, index) => (
        <Carousel.Item key={index} className={styles.itemP} interval={4000}>
          <picture>
            <source srcSet={item.imageUrl} type="image/avif" />
            <source srcSet={item.imageUrl} type="image/webp" />
            <img
              src={item.imageUrl}
              alt="slides"
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
            />
          </picture>
          <Carousel.Caption className={styles.caption}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <button className="btn btn-danger">Go to Shop</button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
