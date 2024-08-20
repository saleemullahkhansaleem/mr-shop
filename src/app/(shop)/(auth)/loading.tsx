import { Spinner } from "@/components/component";

export default function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Spinner />
    </div>
  );
}
