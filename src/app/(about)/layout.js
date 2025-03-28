import InsightRoll from "@/components/About/InsightRoll";

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-center">
        <InsightRoll />
        {children}
    </main>
  );
}