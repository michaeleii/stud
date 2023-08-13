import { useLogout } from "@/hooks/authentication/useLogout";
import { Button } from "./ui/button";
import ButtonLoading from "./ButtonLoading";

export default function Logout() {
  const { logout, isLoggingOut } = useLogout();
  const handleLogout: React.MouseEventHandler<HTMLButtonElement> = (event) =>
    logout();

  return (
    <>
      {isLoggingOut ? (
        <ButtonLoading />
      ) : (
        <Button onClick={handleLogout}>LogOut</Button>
      )}
    </>
  );
}
