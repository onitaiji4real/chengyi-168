import { site } from "@/data/site";

export function FloatingLineButton() {
  return (
    <a
      href={site.lineUrl}
      className="floating-line fixed bottom-5 right-4 z-50 flex items-center gap-2 rounded-full bg-[var(--line)] px-5 py-4 text-sm font-black text-white shadow-2xl shadow-green-500/30"
      data-event="click_line_floating"
      aria-label="LINE 免費估價"
    >
      <span className="h-2.5 w-2.5 rounded-full bg-white" />
      LINE 免費估價
    </a>
  );
}
