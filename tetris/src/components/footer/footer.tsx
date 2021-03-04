import React from 'react';
import classes from './style/style.module.css';
export const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.github}>
        <a href="https://github.com/kubana6"> Made by Anton Lappo</a>
      </div>
      <div className={classes.rss}>
        <a href="https://rs.school/js/">
          {' '}
          <img src="https://rs.school/images/rs_school.svg" alt="logoRsS" />
        </a>
      </div>
    </div>
  );
};
