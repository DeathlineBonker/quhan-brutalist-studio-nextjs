

# Fix Build Errors & Complete Vite-to-Next.js Conversion

## What's Wrong

Six build errors from an incomplete Vite-to-Next.js migration:

1. **`src/app/page.tsx`** -- import ends with `.tsx` extension (not allowed)
2. **`src/app/providers.tsx`** -- duplicate `QueryClient` import
3. **`src/components/NavLink.tsx`** -- still imports from `react-router-dom` (not installed); uses undefined `RouterNavLink`. Not imported anywhere -- dead code
4. **`tailwind.config.ts`** -- plugin `'tailwindcss-animate'` is a string literal instead of `require()` call
5. **`vitest.config.ts`** -- references `@vitejs/plugin-react-swc` (not installed, Vite artifact)

## Plan

### 1. Fix `src/app/page.tsx`
Remove `.tsx` extension from the import path.

### 2. Fix `src/app/providers.tsx`
Remove the duplicate `QueryClient` import line (line 3).

### 3. Delete `src/components/NavLink.tsx`
Dead code -- not imported anywhere, still depends on `react-router-dom`. Remove entirely.

### 4. Fix `tailwind.config.ts` plugin
Change `plugins: ['tailwindcss-animate']` to `plugins: [require('tailwindcss-animate')]`.

### 5. Fix `vitest.config.ts`
Remove the `@vitejs/plugin-react-swc` import and the `plugins` array (not needed for Next.js; vitest can work without the Vite React plugin, or we can remove it and keep the config minimal).

### 6. Clean up `src/pages/NotFound.tsx`
Remove the stray semicolon on line 4 and simplify the awkward `location` wrapper.

### 7. Remove leftover plan files
Delete `plan.md` (migration instructions, no longer needed).

### 8. Verify deployment readiness
- `package.json` scripts already point to `next dev/build/start` -- correct
- No Supabase usage found in codebase, so no localStorage SSR issue to fix
- `next.config.mjs` already configured for Vercel

All changes are minimal, targeted fixes. No architectural changes needed -- the migration is otherwise complete.

