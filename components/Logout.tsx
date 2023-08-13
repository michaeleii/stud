import { useLogout } from "@/hooks/authentication/useLogout";
import { Button } from "./ui/button";
import ButtonLoading from "./ButtonLoading";

export default function Logout() {
  const { logout, isLoggingOut } = useLogout();
  const handleLogout = (e: React.MouseEvent) => logout();

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
