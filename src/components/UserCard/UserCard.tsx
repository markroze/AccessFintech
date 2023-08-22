import './UserCard.css';

export type UserCardProps = {
  name: string;
  avatar: string;
  id: string;
};

const UserCard = ({ name, avatar, id }: UserCardProps) => {
  return (
    <div
      {...{
        className: 'usercard',
      }}
    >
      <div
        {...{
          className: 'usercard__avatar',
          style: {
            backgroundImage: `url(${avatar})`,
          },
        }}
      ></div>
      <div
        {...{
          className: 'usercard__name',
        }}
      >
        {name}
      </div>
    </div>
  );
};

export default UserCard;
