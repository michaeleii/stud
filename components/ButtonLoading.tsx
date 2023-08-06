import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

type ButtonProps = React.ComponentProps<typeof Button>;

function ButtonLoading({
  text = "Please wait",
  ...props
}: { text?: string } & ButtonProps) {
  return (
    <Button {...props} disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      {text}
    </Button>
  );
}
export default ButtonLoading;
