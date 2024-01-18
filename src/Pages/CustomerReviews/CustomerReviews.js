import Dividerline from "../../UI/Dividerlines/Dividerline";
import ImageContainer from "../../UI/ImageContainer/ImageContainer";
import TextContainer from "../../UI/TextContainer/TextContainer";
import styles from "./CustomerReviews.module.css";
const CustomerReviews = (props) => {
  return (
    <div className={styles.reviews}>
      <div className={styles.review}>
        <ImageContainer>
          <img
            alt=""
            className={`${styles.image} `}
            src="https://i.ibb.co/s9VRZXz/aghori.jpg"
          />
        </ImageContainer>
        <TextContainer>
          <div className={styles.text}>
            "Highly delighted with the portrait you did for us it is out of this
            world !! What you captured from the photo is superb and we can’t
            wait for you to do another one"
          </div>
          <div className={styles.from}>- Kaushal Sharma</div>
        </TextContainer>
      </div>
      <Dividerline />
      <div className={styles.review}>
        <ImageContainer>
          <img
            alt=""
            className={`${styles.image} `}
            src="https://i.ibb.co/xsWWpS7/pks.jpg"
          />
        </ImageContainer>
        <TextContainer>
          <div className={styles.text}>
            "The sketch itself looks so real, it appears to be the black and
            white version of the real photo. I loved it!"
          </div>
          <div className={styles.from}>- Prashant Sharma</div>
        </TextContainer>
      </div>
      <Dividerline />
      <div className={styles.review}>
        <ImageContainer>
          <img
            alt=""
            className={`${styles.image} `}
            src="https://i.ibb.co/f8TQgBN/dj.jpg"
          />
        </ImageContainer>
        <TextContainer>
          <div className={styles.text}>
            "My girlfriend got this made for a present and i really love it, it
            is very detailed yaar, bilkul real lag rha hai."
          </div>
          <div className={styles.from}>- Dev Joshi</div>
        </TextContainer>
      </div>
      <Dividerline />
      <div className={styles.review}>
        <ImageContainer>
          <img
            alt=""
            className={`${styles.image} `}
            src="https://i.ibb.co/qBV6WzM/kar.jpg"
          />
        </ImageContainer>
        <TextContainer>
          <div className={styles.text}>
            "The sketch look very realistic...ur bareeke se work tha usme chhoti
            choti cheeze bhi show ki hui thi...in short bht zyada awesome ..ki
            dekh k mood khush ho jaye kisi ka😁."
          </div>
          <div className={styles.from}>- Mansi Roy</div>
        </TextContainer>
      </div>
      <Dividerline />
    </div>
  );
};
export default CustomerReviews;
