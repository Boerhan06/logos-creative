export default function Logo({
  variant = "badge", // "badge" (circular badge) | "mark" | "inline"
  size = 40,
  className = "",
  showText = false,
  textColor = "text-on-surface",
  subtextColor = "text-primary-container",
}) {
  if (variant === "mark") {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        <img
          src="/images/logo-round.svg"
          alt="Logos Creative"
          className="rounded-full object-cover shrink-0"
          style={{ width: size, height: size }}
        />
        {showText && (
          <span className={`ml-2 text-title-md tracking-tight font-bold ${textColor}`}>
            Logos
            <span className={`font-medium ml-1 ${subtextColor}`}>Creative</span>
          </span>
        )}
      </div>
    );
  }

  // Default: circular badge
  return (
    <div className={`inline-flex items-center gap-space-sm group ${className}`}>
      <div
        className="rounded-full flex items-center justify-center shadow-sm shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-105"
        style={{ width: size, height: size }}
      >
        <img
          src="/images/logo-round.svg"
          alt="Logos Creative"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      {showText && (
        <span className={`text-title-md tracking-tight font-bold ${textColor}`}>
          Logos
          <span className={`font-medium ml-1 ${subtextColor}`}>Creative</span>
        </span>
      )}
    </div>
  );
}

