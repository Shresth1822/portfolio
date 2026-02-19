export function Footer() {
  return (
    <footer className="py-8 border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Shresth Varshney. All rights reserved.
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a
            href="https://github.com/Shresth1822"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shresth-varshney-b37441252"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
