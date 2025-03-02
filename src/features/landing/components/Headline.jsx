import styles from '../styles/headline.module.css'
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
export const Headline = () => {
  const settings = {
    dots: false, // Show navigation dots
    infinite: true, // Loop the carousel
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 3000, //auto play every 3 seconds
    pauseOnHover: true, 
    arrows: false,
  };
  const reviews = [
    {
      id: 1,
      image: 'https://i.postimg.cc/dtjD8fDD/ac-clth-thumb-3.jpg', 
      authorHandle: "diyab_1904",
      handleHref: 'https://www.instagram.com/diyab_1904/'
    },
    {
      id: 2,
      image: 'https://i.postimg.cc/k4g24v7D/ac-clth-thumb-2.jpg', 
      authorHandle: "diyab_1904",
      handleHref: 'https://www.instagram.com/diyab_1904/'
    },
    {
      id: 3,
      image: 'https://i.postimg.cc/rmd6hBfc/ac-clth-thumb-1.png', 
      authorHandle: "diyab_1904",
      handleHref: 'https://www.instagram.com/diyab_1904/'
    }
  ]
  return(
    <div className = {styles["container"]}>
      <div className = {styles["headline-container"]}>
        <div className = {styles["headline"]}>Sustainability, in Style</div>
        <div className = {styles["headline-text"]}>
          With the profound goal of sustainability in mind, all of our picks are ethically sourced with a zero-waste methodology. We ensure that each piece is a way of furthering style and principle in truest sense
        </div>
      </div>
      <div className = {styles["reviews"]}>
        <div className = {styles["reviews-title"]}>Take it from them !</div>
        <div className = {styles["reviews-carousel"]}>
          <Slider {...settings}>
            {reviews.map((review) => (
              <div key={review.id} className={styles['review-slide']}>
                <div className={styles['review-image']}>
                  <img src={review.image} alt={`Review by ${review.authorHandle}`} />
                </div>
                <div className={styles['reviewer-handle']}>
                  <a href={review.handleHref} target="_blank" rel="noopener noreferrer">
                    @{review.authorHandle}
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <button className = {styles["cta-button"]}>shop now</button>
      </div>
    </div>
  )
}