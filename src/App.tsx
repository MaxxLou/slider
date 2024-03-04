import img1 from "./img/img1.jpg"
import img2 from "./img/img2.jpg"
import img3 from "./img/img3.jpg"
import img4 from "./img/img4.jpg"
import img5 from "./img/img5.jpg"
import { ImagesSlider } from "./ImagesSlider.tsx"

const IMAGES = [
  { url: img1, alt: "Img 1" },
  { url: img2, alt: "Img 2" },
  { url: img3, alt: "Img 3" },
  { url: img4, alt: "Img 4" },
  { url: img5, alt: "Img 5" },
]

export default function App() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        aspectRatio: "10/6",
        margin: "0 auto",
      }}
    >
      <ImagesSlider images={IMAGES} />
      <a href="/" style={{fontSize: "2rem"}}>Some Link</a>
    </div>
  )
}
