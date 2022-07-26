import userStyle from "./user.module.scss";
import emailImg from "./images/email.svg";
import phoneImg from "./images/phone.svg";
import passwordImg from "./images/password.svg";
import profileImg from "./images/profile.svg";
import nextImg from "./images/next.svg";

function User() {
  return (
    <div className={userStyle.main}>
      <div className={userStyle.userInfo}>
        <div className={userStyle.profileImg}>
          <img src="https://source.unsplash.com/random" alt="Profile" />
        </div>
        <div className={userStyle.userName}>
          <h2>James Maina</h2>
          <h3>Super Admin</h3>
        </div>
        <div className={userStyle.verticalLine}></div>
        <div className={userStyle.userDetails}>
          <div className={userStyle.moreDetails}>
            <img src={emailImg} alt="email" />
            <p>james@piggery.farm</p>
          </div>
          <div className={userStyle.moreDetails}>
            <img src={phoneImg} alt="phone" />
            <p>0743665574</p>
          </div>
          <div className={userStyle.moreDetails}>
            <img src={passwordImg} alt="password" />
            <a href="https://www.google.com/">Edit Password</a>
          </div>
        </div>
      </div>

      <div className={userStyle.adminCards}>
        <div className={userStyle.adminCardInfo}>
          <h1>Admin</h1>
          <div className={userStyle.adminCardName}>
            <img src={profileImg} alt="phone" />
            <p>Tevin Charles</p>
          </div>
          <div className={userStyle.adminCardEmail}>
            <img src={emailImg} alt="email" />
            <p>tevin@piggery.farm</p>
          </div>
          <div className={userStyle.adminCardPhone}>
            <img src={phoneImg} alt="phone" />
            <p>0743665574</p>
          </div>
          <div className={userStyle.adminCardPassword}>
            <img src={passwordImg} alt="password" />
            <a href="https://www.google.com/">Edit Password</a>
          </div>
          <div className={userStyle.buttons}>
            <button className={userStyle.deleteButton}>Delete</button>
            <button className={userStyle.superAdmin}>Make Super Admin</button>
          </div>
        </div>

        <div className={userStyle.adminCardInfo}>
          <h1>Super Admin</h1>
          <div className={userStyle.adminCardName}>
            <img src={profileImg} alt="phone" />
            <p>Mary Wangechi</p>
          </div>
          <div className={userStyle.adminCardEmail}>
            <img src={emailImg} alt="email" />
            <p>mary@piggery.farm</p>
          </div>
          <div className={userStyle.adminCardPhone}>
            <img src={phoneImg} alt="phone" />
            <p>0743665574</p>
          </div>
          <div className={userStyle.adminCardPassword}>
            <img src={passwordImg} alt="password" />
            <a href="https://www.google.com/">Edit Password</a>
          </div>
          <div className={userStyle.buttons}>
            <button className={userStyle.deleteButton}>Delete</button>
            <button className={userStyle.superAdmin}>Make Admin</button>
          </div>
        </div>

        <div className={userStyle.adminCardInfo}>
          <h1>Admin</h1>
          <div className={userStyle.adminCardName}>
            <img src={profileImg} alt="phone" />
            <p>Kamau Otieno</p>
          </div>
          <div className={userStyle.adminCardEmail}>
            <img src={emailImg} alt="email" />
            <p>oti@piggery.farm</p>
          </div>
          <div className={userStyle.adminCardPhone}>
            <img src={phoneImg} alt="phone" />
            <p>0743665574</p>
          </div>
          <div className={userStyle.adminCardPassword}>
            <img src={passwordImg} alt="password" />
            <a href="https://www.google.com/">Edit Password</a>
          </div>
          <div className={userStyle.buttons}>
            <button className={userStyle.deleteButton}>Delete</button>
            <button className={userStyle.superAdmin}>Make Super Admin</button>
          </div>
        </div>
      </div>

      <div className={userStyle.footer}>
        <div className={userStyle.bottomCard}>
          <h1>Feeding</h1>
          <div className={userStyle.days}>
            <h1>5 Days</h1>
            <button>Overdue</button>
          </div>
          <h1>Me</h1>
          <h1>A001K</h1>
          <h1>High</h1>
        </div>
        <div className={userStyle.next}>
          <img src={nextImg} alt="Next" />
        </div>
      </div>
    </div>
  );
}

export default User;
