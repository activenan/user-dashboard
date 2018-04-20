import React from 'react';
import { connect } from 'dva';
import styles from '../assets/css/Users.css';

function Users() {
  return (
    <div className={styles.normal}>
      <header>this is a title
      </header>
      <figure className="content">
        <p className="red_text">this is a content start</p>
        <img src={require('../assets/images/yay.jpg')} alt="" width="100%" />
        <p className="red_text">this is a content end</p>

      </figure>
      <footer>this is a footer
      </footer>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Users);
