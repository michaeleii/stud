import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

function ButtonLoading({ text = "Please wait" }: { text?: string }) {
  return (
    <Button className="w-full" disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      {text}
    </Button>
  );
}
export default ButtonLoading;
