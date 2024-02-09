import Dividerline from "../../UI/Dividerlines/Dividerline";
import ImageContainer from "../../UI/ImageContainer/ImageContainer";
import TextContainer from "../../UI/TextContainer/TextContainer";
import styles from "./HomePage.module.css";
import { useMediaQuery } from "react-responsive";
const HomePage = (props) => {
  const isPhone = useMediaQuery({
    query: "(max-width: 480px)",
  });
  return (
    <div className={styles.home}>
      {isPhone ? (
        <>
          <TextContainer title={"ABOUT"}>
            <Dividerline />
            <Dividerline />
            <div className={styles.subtitle}>Artwork Gallery</div>
            <div className={styles.text}>
              Artwork Gallery provides an avenue for acquiring personalized
              sketches across various mediums. A bespoke sketch serves as an
              ideal gift or an exquisite addition to your home decor. Our
              platform facilitates a seamless process, enabling individuals from
              any location within India to effortlessly procure a personalized
              sketch with just an internet connection. Additionally, curated
              pre-existing sketches are available for purchase, offering a
              diverse selection for discerning art enthusiasts.
            </div>
          </TextContainer>
          <ImageContainer>
            <img
              alt=""
              className={`${styles.image} ${styles.image1}`}
              src="https://i.ibb.co/k8ksgzK/sps.jpg"
            />
            <img
              alt=""
              className={`${styles.image} ${styles.image2}`}
              src="https://i.ibb.co/10qRvRY/sanjay.jpg"
            />
            <img
              alt=""
              className={`${styles.image} ${styles.image3}`}
              src="https://i.ibb.co/CbcKjnm/rg.jpg"
            />
            <img
              alt=""
              className={`${styles.image} ${styles.image4}`}
              src="https://i.ibb.co/xsWWpS7/pks.jpg"
            />
            <img
              alt=""
              className={`${styles.image} ${styles.image5}`}
              src="https://i.ibb.co/xJ5T9LJ/mr.jpg"
            />
          </ImageContainer>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <TextContainer>
            <Dividerline />
            <Dividerline />
            <div className={styles.subtitle}>Creator</div>
            <div className={styles.text}>
              I've been on a journey of self-discovery in the world of art,
              teaching myself the ropes and continually advancing my skills. It
              all began at the age of 16 when I first delved into sketching,
              initially just for the joy of it. Over time, my passion has grown,
              and now I find myself taking on commissioned projects, turning my
              hobby into something more. Alongside my artistic endeavors, I'm
              also immersed in the academic realm, working towards a bachelor's
              degree in engineering.
            </div>
          </TextContainer>
        </>
      ) : (
        <>
          <TextContainer title={"ABOUT"}>
            <Dividerline />
            <Dividerline />
            <div className={styles.subtitle}>Artwork Gallery</div>
            <div className={styles.text}>
              Artwork Gallery provides an avenue for acquiring personalized
              sketches across various mediums. A bespoke sketch serves as an
              ideal gift or an exquisite addition to your home decor. Our
              platform facilitates a seamless process, enabling individuals from
              any location within India to effortlessly procure a personalized
              sketch with just an internet connection. Additionally, curated
              pre-existing sketches are available for purchase, offering a
              diverse selection for discerning art enthusiasts.
            </div>
            <Dividerline />
            <Dividerline />
            <div className={styles.subtitle}>Creator</div>
            <div className={styles.text}>
              I've been on a journey of self-discovery in the world of art,
              teaching myself the ropes and continually advancing my skills. It
              all began at the age of 16 when I first delved into sketching,
              initially just for the joy of it. Over time, my passion has grown,
              and now I find myself taking on commissioned projects, turning my
              hobby into something more. Alongside my artistic endeavors, I'm
              also immersed in the academic realm, working towards a bachelor's
              degree in engineering.
            </div>
          </TextContainer>
          <ImageContainer>
            <img
              alt=""
              className={`${styles.image} ${styles.image1}`}
              src="https://i.ibb.co/k8ksgzK/sps.jpg"
            />
            <img
              alt=""
              className={`${styles.image} ${styles.image2}`}
              src="https://i.ibb.co/10qRvRY/sanjay.jpg"
            />
            <img
              alt=""
              className={`${styles.image} ${styles.image3}`}
              src="https://i.ibb.co/CbcKjnm/rg.jpg"
            />
            <img
              alt=""
              className={`${styles.image} ${styles.image4}`}
              src="https://i.ibb.co/xsWWpS7/pks.jpg"
            />
            <img
              alt=""
              className={`${styles.image} ${styles.image5}`}
              src="https://i.ibb.co/xJ5T9LJ/mr.jpg"
            />
          </ImageContainer>
        </>
      )}
    </div>
  );
};
export default HomePage;
