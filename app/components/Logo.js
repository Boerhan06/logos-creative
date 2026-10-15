export default function Logo({
  variant = "badge", // "badge" (circular badge) | "mark" (pure white icon) | "glass" (frosted container with white icon)
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
          src="/images/logo-mark.png"
          alt="Logos Creative"
          className="object-contain shrink-0"
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

  if (variant === "glass") {
    return (
      <div
        className={`rounded-2xl bg-white/15 border border-white/20 p-2.5 flex items-center justify-center backdrop-blur-md shadow-sm shrink-0 ${className}`}
        style={{ width: size, height: size }}
      >
        <img
          src="/images/logo-mark.png"
          alt="Logos Creative"
          className="w-full h-full object-contain"
        />
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

