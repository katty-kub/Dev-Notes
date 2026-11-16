<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project

DevNotes, a notes app for developers. Stack and scripts: [README.md](README.md).

## Language

- UI text and content: Czech (`lang="cs"`).
- Code, file names, comments, branch names, commits, PR titles and descriptions: English.

## Git

- Never commit or push to `main`. Every change goes through a pull request.
- Start a branch from an up-to-date `main`: `git switch main`, `git pull --ff-only`, `git switch -c <branch>`.
- Branches: short, lowercase, words joined with hyphens, no prefix (`note-list`).
- One step of a task = one commit. Stage exact paths (`git add <path>`, not `git add .`) and read `git diff --staged` before committing.
- Commit message: the headline only. English, imperative, capital first letter, no period, no prefix (`Add note list`). No body, no trailers.
- Commits and PRs are the developer's own: no `Co-Authored-By`, no "Generated with" line, no mention of Claude or AI.
- Never `git push --force` or `git reset --hard`, never rewrite pushed history. `git branch -D` only for a branch whose PR is merged.
- When a git command fails (rejected push, conflict, `local changes would be overwritten`), stop and ask. Don't fix it blindly.

## Pull requests

- A mentor reviews every PR and squash merges it, so the PR title becomes the commit on `main`. Never merge a PR yourself.
- The title is one English sentence that starts with a verb and says what changes: `Set up Next.js app with TypeScript, Tailwind, ESLint and Prettier`, not `Project setup`.
- The description is never empty. Fill in the template: what changes, how it was verified, what is deliberately left out.
- CI must pass before review (`gh pr checks`).

## Before every commit

```bash
npm run lint
npm run format:check
npm run typecheck
npm run build
```

All four must pass. After `npx eslint --fix`, run `npm run format`.

## Code style

ESLint enforces most of the style (`eslint.config.mjs`). Rules it can't fix for you:

- Write components and functions as arrow functions. The Next.js docs use `export default function`, but ESLint here does not allow it (`no-restricted-syntax`).
- Named exports: `export const NoteCard = () => …`. `export default` only where Next.js requires it (`page.tsx`, `layout.tsx` and other route files): `const Page = () => …` and `export default Page` on its own line.
- Define helpers and child components above the place where they are used (`@typescript-eslint/no-use-before-define`).
- Type props directly (`const Card = ({ title }: CardProps) => …`), never `React.FC`.
- Never turn off a lint rule (`eslint-disable`) without asking a mentor.

## Docs change with the code

A new or changed script, command, environment requirement (Node version) or stack change updates `README.md` in the same PR.

## Don't

- Add packages or change versions unless the task asks for it.
- Use `--force`, `npm audit fix` or delete files outside the task.
- Change formatting or code the task doesn't touch.

Ignore npm warnings (`deprecated`, `vulnerabilities`, `Unknown config`) and git's `LF will be replaced by CRLF`. They are not errors.
