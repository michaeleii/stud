import { Loader2 } from "lucide-react";

function LoadingFullPage() {
  return (
    <div className="absolute left-1/2 top-1/2">
      <Loader2 className="animate-spin" size={50} />
    </div>
  );
}
export default LoadingFullPage;
