import { useNavigate } from "react-router";
import { UrlSearchParams } from "@travelia/types";

export const useSearchNavigation = (path: string) => {
  const navigate = useNavigate();

  const onSearch = (params: UrlSearchParams) => {
    const queryParams = new URLSearchParams({
      checkInDate: params.checkInDate,
      checkOutDate: params.checkOutDate,
      city: params.city || "",
      adults: String(params.adults),
      children: String(params.children),
      numberOfRooms: String(params.numberOfRooms),
    });

    navigate(`${path}?${queryParams.toString()}`);
  };

  return { onSearch };
};
