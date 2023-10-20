import React from "react";
import cls from "./ProfileCard.module.scss";

interface IProfileCard {
  firstName: string;
  maidenName: string;
  lastName: string;
  email: string;
  birthDate: string;
  image: string;
}

const ProfileCard = ({
  firstName,
  maidenName,
  lastName,
  email,
  birthDate,
  image,
}: IProfileCard) => {
  return (
    <div className={cls.profile}>
      <div className={cls.profile__avatar}>
        <img src={image} alt="avatar" />
      </div>
      <div className={cls.profile__info}>
        <p>
          <strong>ФИО пользователя:</strong> {firstName} {maidenName} {lastName}
        </p>
        <p>
          <strong>Email:</strong> {email}{" "}
        </p>
        <p>
          <strong>Дата рождения:</strong>{" "}
          {new Date(birthDate).toLocaleDateString("ru")}{" "}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
