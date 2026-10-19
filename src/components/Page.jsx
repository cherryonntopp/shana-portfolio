// Wrapper for the about / projects / contact pages: centers the content
// on the screen so short pages don't need any scrolling.

export default function Page({ children, className = "max-w-5xl" }) {
  return (
    <section className={`mx-auto flex w-full flex-1 flex-col justify-center px-6 py-10 sm:px-10 ${className}`}>
      {children}
    </section>
  );
}
