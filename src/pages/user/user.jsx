import userStyle from "./user.module.scss";
import { Icons } from "elements";

function User() {
  return (
    <div className={userStyle.main}>
      <div className={userStyle.userInfo}>
        <img
          src="https://source.unsplash.com/random"
          alt="Profile"
          className={userStyle.profileImg}
        />
        <div className={userStyle.userName}>
          <h2>James Maina</h2>
          <h3>Super Admin</h3>
        </div>
        <div className={userStyle.verticalLine}></div>
        <div className={userStyle.userDetails}>
          <div className={userStyle.moreDetails}>
            <img src={Icons.emailImg} alt="email" />
            <p>james@piggery.farm</p>
          </div>
          <div className={userStyle.moreDetails}>
            <img src={Icons.phoneImg} alt="phone" />
            <p>0743665574</p>
          </div>
          <div className={userStyle.moreDetails}>
            <img src={Icons.passwordImg} alt="password" />
            <a href="https://www.google.com/">Edit Password</a>
          </div>
        </div>
      </div>

      <div className={userStyle.adminCards}>
        <div className={userStyle.adminCardInfo}>
          <h1>Admin</h1>
          <div className={userStyle.adminCardName}>
            <img src={Icons.profileImg} alt="phone" />
            <p>Tevin Charles</p>
          </div>
          <div className={userStyle.adminCardEmail}>
            <img src={Icons.emailImg} alt="email" />
            <p>tevin@piggery.farm</p>
          </div>
          <div className={userStyle.adminCardPhone}>
            <img src={Icons.phoneImg} alt="phone" />
            <p>0743665574</p>
          </div>
          <div className={userStyle.adminCardPassword}>
            <img src={Icons.passwordImg} alt="password" />
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
            <img src={Icons.profileImg} alt="phone" />
            <p>Mary Wangechi</p>
          </div>
          <div className={userStyle.adminCardEmail}>
            <img src={Icons.emailImg} alt="email" />
            <p>mary@piggery.farm</p>
          </div>
          <div className={userStyle.adminCardPhone}>
            <img src={Icons.phoneImg} alt="phone" />
            <p>0743665574</p>
          </div>
          <div className={userStyle.adminCardPassword}>
            <img src={Icons.passwordImg} alt="password" />
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
            <img src={Icons.profileImg} alt="phone" />
            <p>Kamau Otieno</p>
          </div>
          <div className={userStyle.adminCardEmail}>
            <img src={Icons.emailImg} alt="email" />
            <p>oti@piggery.farm</p>
          </div>
          <div className={userStyle.adminCardPhone}>
            <img src={Icons.phoneImg} alt="phone" />
            <p>0743665574</p>
          </div>
          <div className={userStyle.adminCardPassword}>
            <img src={Icons.passwordImg} alt="password" />
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
          <div>Feeding</div>
          <div className={userStyle.daysDiv}>
            <div className={userStyle.days}>5 Days</div>
            <div className={userStyle.overdue}>Overdue</div>
          </div>
          <div>Me</div>
          <div>A001K</div>
          <div>High</div>
        </div>
        <div className={userStyle.next}>
          <img src={Icons.nextImg} alt="Next" />
        </div>
      </div>
    </div>
  );
}

export default User;
