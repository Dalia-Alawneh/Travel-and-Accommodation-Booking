import useUser from "@travelia/context/user/useContext";
import { USER, TOKEN_KEY } from "@travelia/fixtures/index.tsx";
import { UserActions } from "@travelia/types";
import { removeFromLocalStorage } from "@travelia/utils";
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
      removeFromLocalStorage(USER);
      removeFromLocalStorage(TOKEN_KEY);

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
