# STATUS REPORT: Chaotic Minimalism Blog (as of 2025-04-27)

Welcome, fellow developer! Here’s a concise summary of what’s been set up, why, and how you can hit the ground running. This should save you hours of code spelunking, so you can focus on real improvements.

---

## 1. **Platform & Stack**
- **Static Site Generator:** Hugo
- **Theme:** hugo-blog-awesome (customized)
- **Language:** Markdown for content, HTML/CSS (with SCSS) for theming

## 2. **Key Features & Customizations**
- **Minimalist, readable design** with custom fonts, color palette, and generous spacing.
- **Homepage:**
  - Displays latest posts as cards, with 16:9 thumbnails (CSS-cropped, object-fit: cover)
  - Thumbnails, titles, dates, and descriptions all aligned for clarity
  - Minimal intro, hero image rotation in sunset mode, blog/research split
- **Article Pages:**
  - Full-width header image (falls back to thumbnail if not set)
  - Clean title, date, and content layout
  - Optional "Thread Continuation" links for manual curation of related posts
- **Archive Page:**
  - Chronological list of all posts (title, description, date)
  - Linked in main navigation

## 3. **Comments & Discussion Section**
- **Custom Comments UI:**
  - Replaced Disqus with a fully custom, minimal, and modern comment section.
  - Login and comment forms were initially included as UI mockups, then removed for pure discussion display.
  - Comments are rendered as a clean, grid-aligned list with avatars, author, date, and actions.
  - Each comment features minimalist action icons (Reply, Edit, More) as inline SVGs (Feather icons), accessible and crisp.
  - Comments are separated by subtle dividers and a unique vertical marker for visual structure.
  - Section is visually separated from the rest of the page by a refined divider.
  - All design decisions are inspired by OpenAI-level minimalism and best UI/UX practices.

## 4. **Styling & Theming**
- **SCSS Structure:**
  - `_comments.scss` contains all comment UI styles, imported into `_custom.scss`.
  - Styles use whitespace, subtle lines, and typography for hierarchy (no heavy cards or backgrounds).
  - Minimalist, modern, and highly readable—no visual clutter.
- **Dark Mode:**
  - The comment section is fully designed for dark mode, using deep backgrounds, soft borders, and accessible text colors.
  - Uses `prefers-color-scheme: dark` media query for automatic switching.
  - All icons and elements are styled for both light and dark backgrounds.
  - (Note: If site-wide dark mode is not working, check global color variables and ensure dark mode SCSS is compiled and loaded.)
- **Sunset Mode:**
  - Hero image rotates every 20s, no CSS color cast.

## 5. **Design Principles**
- **Whitespace is prioritized** for clarity and calm.
- **Hierarchy through typography and spacing**, not color or boxes.
- **Professional, minimalist iconography** (SVG, monochrome, thin stroke).
- **Subtle dividers and structure** for visual separation.
- **Accessible and responsive**: touch targets, color contrast, and legibility are all considered.

## 6. **How to Extend or Integrate**
- **To enable full dark mode site-wide:**
  - Use CSS variables for colors and switch them in dark mode.
  - Ensure all components reference these variables.
- **To add login or comment functionality:**
  - The UI is ready for backend integration (authentication, comment submission, etc.).
  - Consider using a JAMstack backend (e.g., Firebase, Supabase) or your own API.
- **To customize further:**
  - All styles are modular and easy to extend. Threading, upvotes, or new actions can be added with minimal code changes.

## 7. **Recent Changes (April 2025)**
- Replaced Disqus with custom, always-visible comments UI.
- Removed login and comment form mockups for pure discussion display.
- Redesigned the comment section to be ultra-minimal, structured, and unique.
- Added beautiful, minimalist SVG icons for comment actions.
- Implemented a refined divider above the comments and subtle separators between comments.
- Designed and implemented a world-class dark mode for the comment section.

## 8. **Recent Major Changes (2025-04-27)**
- **Homepage Redesign:** Minimal intro, hero image rotation in sunset mode, blog/research split.
- **Sunset Mode:** Hero image rotates every 20s, no CSS color cast.
- **Posts:** Thumbnails supported, new “Faust.md”, “Welcome” post rewritten.
- **Config:** Unified in `hugo.toml`, deprecated `config.toml`.
- **Styling:** Fluid spacing/typography, custom SCSS, sunset mode CSS fixes.
- **JS:** `heroRotator.js` for hero image logic, loaded from `static/js/`.
- **Code Hygiene:** Cleaned up partials, homepage logic.

## 9. **Content Handling**
- **Posts live in:** `content/posts/`
- **Front matter supports:**
  - `title`, `date`, `description`, `thumbnail`, `header`, `tags`, and `thread_continuation` (array of `{url, title}`)
- **Images:** Place in `/static/images/` and reference with `/images/filename.jpg` in front matter

## 10. **Accessibility & SEO**
- All images have descriptive `alt` text (using post title)
- Semantic HTML structure: `<main>`, `<header>`, `<footer>` used throughout
- Meta tags for SEO, Open Graph, and Twitter Cards (auto-pulls header/thumbnail)
- Canonical URLs and RSS feeds enabled

## 11. **Configuration**
- **`hugo.toml`** sets `baseURL`, theme, date format, and mainSections (posts)
- Main navigation (menu) is defined in `hugo.toml` for best compatibility

## 12. **How to Develop/Run**
- Start local server: `hugo server --disableFastRender`
- Edit content in `content/posts/` or tweak theme in `themes/hugo-blog-awesome/`
- SCSS customizations live in `themes/hugo-blog-awesome/assets/sass/_custom.scss`

## 13. **What’s Polished & Ready**
- Homepage, article pages, and archive are all visually consistent and responsive
- Accessibility and SEO best practices are in place
- Navigation is robust (home icon, archive link)

## 14. **What’s Next?**
- Optional: Add Netlify CMS or similar for visual editing
- Add more sample posts or advanced features as needed
- Deploy to Netlify, Vercel, or your preferred static host

## 15. **GitHub Integration & CI/CD**
- **Repository:** [Add your GitHub repo URL here]
- **Branching:** Main development occurs on `main` (or `master`). Feature branches are recommended for new work.
- **SSH Key Setup:**
  - Generate an SSH key (if you haven't): `ssh-keygen -t ed25519 -C "christian@katzmann.dk"`
  - Add the public key (`~/.ssh/id_ed25519.pub`) to your GitHub account under "SSH and GPG keys."
  - Ensure your local git is configured to use SSH URLs (e.g., `git@github.com:user/repo.git`).
- **GitHub Actions (CI/CD):**
  - Automated workflows are defined in `.github/workflows/` (YAML files).
  - Typical workflow: On push to `main`, GitHub Actions builds the Hugo site and can deploy to Netlify, Vercel, GitHub Pages, or another host.
  - Secrets (like deploy tokens or API keys) are stored securely in the repo's GitHub Settings > Secrets.
  - For custom domains or advanced deploys, check the workflow YAML for environment variables and steps.
- **How to use:**
  - Push to `main` (or open a PR). The workflow will trigger automatically.
  - Check the "Actions" tab on GitHub for build/deploy logs and status.
- **Troubleshooting:**
  - If deploy fails, check for recent changes to `hugo.toml`, broken links, or SCSS errors.
  - Ensure secrets are set and valid.

---

**For future devs:**
- Always test in **light, dark, and sunset modes** after any global style or template change.
- When updating structured data, use Hugo's templating functions to avoid manual JSON errors.
- If you see Hugo build errors referencing JSON or the `author` block, check for missing fields or template regressions.
- Hero image logic is now in `static/js/heroRotator.js` and triggered by `<html class="sunset">`.
- Homepage layout is in `themes/hugo-blog-awesome/layouts/index.html`. Research/blog split logic is in the homepage and `partials/featuredResearch.html`.
- For global theming, review `_custom.scss` and use CSS variables for scalable dark mode.
- The codebase is intentionally minimal—if you follow the design system, you’ll have a world-class blog.

---

**Good luck, and enjoy working on Chaotic Minimalism!**

---

_Last major update: 2025-04-27 (homepage redesign, sunset mode, research/blog split, and more)_
