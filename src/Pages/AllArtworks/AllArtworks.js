import styles from "./AllArtworks.module.css";
const AllArtworks = (props) => {
  return (
    <div className={styles.allartworks}>
      <div className={`${styles.column1} ${styles.column}`}>
        <img
          src="https://i.ibb.co/10qRvRY/sanjay.jpg"
          className={styles.gallery_img}
          alt="Image 1"
        />

        <img
          className={styles.gallery_img}
          src="https://i.ibb.co/k8ksgzK/sps.jpg"
          alt="Image 1"
        />

        <img
          src="https://i.ibb.co/xJ5T9LJ/mr.jpg"
          className={styles.gallery_img}
          alt="Image 1"
        />
      </div>
      <div className={`${styles.column2} ${styles.column}`}>
        <img
          src="https://i.ibb.co/s9VRZXz/aghori.jpg"
          className={styles.gallery_img}
          alt="Image 1"
        />

        <img
          src="https://i.ibb.co/xsWWpS7/pks.jpg"
          className={styles.gallery_img}
          alt="Image 1"
        />

        <img
          src="https://i.ibb.co/f8TQgBN/dj.jpg"
          className={styles.gallery_img}
          alt="Image 1"
        />
      </div>
      <div className={`${styles.column3} ${styles.column}`}>
        <img
          src="https://i.ibb.co/pQF3kFg/lara-pre.jpg"
          className={styles.gallery_img}
          alt="Image 1"
        />

        <img
          src="https://i.ibb.co/jZWnKFp/crow.jpg"
          className={styles.gallery_img}
          alt="Image 1"
        />

        <img
          className={styles.gallery_img}
          src="https://i.ibb.co/CbcKjnm/rg.jpg"
          alt="Image 1"
        />
      </div>
    </div>
  );
};
export default AllArtworks;
