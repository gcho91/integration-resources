import style from "./Feed2.module.css";
function Feed2() {
  return (
    <div className={style.feedContainer}>
      <h1>Feed 2 outline</h1>
      <div className={style.container}>
        <div className={style.photoContainer}>
          <img
            className={style.image}
            src="https://psychedelicsocietysf.org/files/Integration-Circle-FB.jpg"
          />
        </div>
        <div className={style.textContainer}>
          <h2>Event Name</h2>
          <p>Event host</p>
          <p>Time</p>
          <p>
            Description tex hdskfhajd sdafhjksdfhdas jfksdhjkf jdhfkjdshf
            sjfahkjdfhkdf jsfhjkdf djfahjdshf djfhstdskfhajd sdafhjksdfhdas
          </p>
          <p>More info</p>
        </div>
      </div>
    </div>
  );
}

export default Feed2;
