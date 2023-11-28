export function Badge ({ variant }) {


  const typeBadgeColor = {
    "Professional": "bg-slate-600",
    "Personal": "bg-teal-200",
    "Educational": "bg-orange-600",
  };
  const typeTextColor = {
    "Professional": "text-slate-50",
    "Personal": "",
    "Educational": "text-slate-50",
  };

  return (
    <div className={`px-4 py-2 ${typeBadgeColor[variant] ?? "bg-slate-800" } rounded-full w-min`}>
      <div className={`${typeTextColor[variant] ?? "text-slate-50" } whitespace-nowrap`}>{variant}</div>
    </div>
  )
};