import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import './footer.scss';

export default function Footer() {
  return (
    <footer className="nav-footer">
      <div>
        <a href="https://github.com/Cheleste1994">
          <GitHubIcon />
        </a>
        <a href="https://t.me/cheleste1994">
          <TelegramIcon />
        </a>
        <a href="mailto:wolverines@tut.by">
          <AlternateEmailIcon />
        </a>
        <a href="tel:+375259249250">
          <CallIcon />
        </a>
        <a href="viber://chat?number=%2B375259249250">
          <WhatsAppIcon />
        </a>
      </div>
    </footer>
  );
}
