// import PageTitle from "../../UI/PageTitle/PageTitle";
import TextContainer from "../../UI/TextContainer/TextContainer";
import styles from "./Categories.module.css";
import Dividerline from "../../UI/Dividerlines/Dividerline";
import ImageContainer from "../../UI/ImageContainer/ImageContainer";

const Categories = (props) => {
  return (
    <div className={styles.categories}>
      <div className={styles.categorysection}>
        <TextContainer>
          <div className={styles.subtitle}>SIMPLE PENCIL PORTRAIT</div>
          <Dividerline />
          <Dividerline />
          <div className={styles.text}>
            A simple handmade pencil portrait made on paper with charcoal
            pencils, best for a small or medium-sized sketch.These are perfect
            gifts for a lovely ocassion Based on the time taken in completing
            one of these, they are ideal for ordering in a time crunch.
          </div>
        </TextContainer>
        <ImageContainer>
          <img
            alt=""
            className={`${styles.image} ${styles.image1}`}
            src="https://i.ibb.co/xJ5T9LJ/mr.jpg"
          />
          <img
            alt=""
            className={`${styles.image} ${styles.image2}`}
            src="https://i.ibb.co/xsWWpS7/pks.jpg"
          />
          <img
            alt=""
            className={`${styles.image} ${styles.image3}`}
            src="https://i.ibb.co/k8ksgzK/sps.jpg"
          />
        </ImageContainer>
      </div>
      <Dividerline />
      <div className={styles.categorysection}>
        <ImageContainer>
          <img
            alt=""
            className={`${styles.image} ${styles.image1}`}
            src="https://i.ibb.co/10qRvRY/sanjay.jpg"
          />
          <img
            alt=""
            className={`${styles.image} ${styles.image2}`}
            src="https://i.ibb.co/pQF3kFg/lara-pre.jpg"
          />
          <img
            alt=""
            className={`${styles.image} ${styles.image3}`}
            src="https://i.ibb.co/s9VRZXz/aghori.jpg"
          />
        </ImageContainer>
        <TextContainer>
          <div className={styles.subtitle}>HYPER-REALISTIC</div>
          <Dividerline />
          <Dividerline />
          <div className={styles.text}>
            As the name says, these are a cut above any normal portrait. With a
            very good level of detailing, these are truly incredible. The level
            of detailing makes them a good choice for medium to large-sized
            portraits. great detailing takes a great amount of hard work and
            time
          </div>
        </TextContainer>
      </div>
      <Dividerline />
      <div className={styles.categorysection}>
        <TextContainer>
          <div className={styles.subtitle}>PSEUDO VECTOR</div>
          <Dividerline />
          <Dividerline />
          <div className={styles.text}>
            They may look like a vector graphic photo but, these are handmade
            precisely to imitate a simple vector image. The size doesn't affect
            the versatility of these portraits. These look great in all portrait
            sizes. Once matched with a good frame they make the best for wall
            decoration credit goes to their modern looks
          </div>
        </TextContainer>
        <ImageContainer>
          <img
            alt=""
            className={`${styles.image} ${styles.image1}`}
            src="https://i.ibb.co/f8TQgBN/dj.jpg"
          />
          <img
            alt=""
            className={`${styles.image} ${styles.image2}`}
            src="https://i.ibb.co/f8TQgBN/dj.jpg"
          />
          <img
            alt=""
            className={`${styles.image} ${styles.image3}`}
            src="https://i.ibb.co/f8TQgBN/dj.jpg"
          />
        </ImageContainer>
      </div>
      <Dividerline />
    </div>
  );
};
export default Categories;
