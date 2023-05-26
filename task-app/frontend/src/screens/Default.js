import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAdminAction } from "../redux/actions/adminActions";
import Spinner from "../components/Spinner/Spinner";
import { Link } from "react-router-dom";

const Default = () => {
  const { loading, error, users } = useSelector((store) => store.users_admin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersAdminAction());
  }, [dispatch]);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : error ? (
        error
      ) : users && users.length > 0 ? (
        users.map((user) => (
          <h4>
            <Link to="">{user.name}</Link>
          </h4>
        ))
      ) : (
        <h4>No users yet</h4>
      )}
    </div>
  );
};

export default Default;
