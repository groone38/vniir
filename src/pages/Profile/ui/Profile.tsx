import React, { useEffect } from "react";
import cls from "./Profile.module.scss";
import { useAppDispatch, useAppSelector } from "app/providers/store";
import { getUser } from "features/model/reducers/Users/UsersSlice";
import ProfileCard from "widgets/ui/ProfileCard";
import Loader from "shared/ui/Loader";

const Profile = () => {
  const data = useAppSelector((state) => state.users.user);
  const loading = useAppSelector((state) => state.users.loading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    dispatch(getUser(userId));
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={cls.profile}>
          <ProfileCard
            firstName={data?.firstName!}
            maidenName={data?.maidenName!}
            lastName={data?.lastName!}
            email={data?.email!}
            birthDate={data?.birthDate!}
            image={data?.image!}
          />
        </div>
      )}
    </>
  );
};

export default Profile;
