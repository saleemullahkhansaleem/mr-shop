export default function SpinnerMini({ size }: { size?: number }) {
  return (
    <span
      className="border-2 animate-spin border-muted border-t-primary rounded-full"
      style={{
        width: size ? `${size * 4}px` : "16px",
        height: size ? `${size * 4}px` : "16px",
      }}
    ></span>
  );
}
