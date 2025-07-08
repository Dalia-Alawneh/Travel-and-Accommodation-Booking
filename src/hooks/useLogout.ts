import useUser from "@travelia/context/user/useContext";
import { USER, TOKEN_KEY } from "@travelia/constants";
import { UserActions } from "@travelia/types";
import { removeFromStorage } from "@travelia/utils";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

interface ILogout {
  handleLogout: () => Promise<void>;
  loading: boolean;
}
const useLogout = (): ILogout => {
  const { dispatch } = useUser();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setLoading(true);

      dispatch({ type: UserActions.CLEAR_USER });
      removeFromStorage(USER);
      removeFromStorage(TOKEN_KEY);

      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Logged out successfully");
      navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  return { handleLogout, loading };
};

export default useLogout;
