import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import defaulAvatar from '../default_user.png';

export default function FriendListItem({
  avatar = defaulAvatar,
  name,
  isOnline,
}) {
  return (
    <li className={css.item}>
      <span
        className={`${css.status} ${isOnline ? css.online : css.offline}`}
      ></span>
      <img className={css.avatar} src={avatar} alt={name} width="81" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
