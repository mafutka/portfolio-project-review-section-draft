// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';


async function fetchReviews() {
    try {
      const response = await fetch('https://portfolio-js.b.goit.study/api/reviews');
      if (!response.ok) throw new Error('Fetch failed');
  
      const reviews = await response.json();
      console.log('Reviews from backend:', reviews); // ⬅️ це покаже масив усіх відгуків
  
      // якщо хочеш подивитися один окремо:
      reviews.forEach((review, index) => {
        console.log(`Review ${index + 1}:`);
        console.log('Author:', review.author);
        console.log('Avatar URL:', review.avatar_url);
        console.log('Review Text:', review.review);
      });
  
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  }
  
  fetchReviews();