import { Loader2 } from "lucide-react";

function Loading() {
  return (
    <div className="flex justify-center">
      <Loader2 className="animate-spin" size={50} />
    </div>
  );
}
export default Loading;
