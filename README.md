# Tour Management Frontend

This project is the frontend for the Tour Management application, built with **React**, **TypeScript**, and **Vite**. It provides a modern, fast, and maintainable codebase for managing tours and related activities.

## Features

- ⚡️ Fast development with Vite and Hot Module Replacement (HMR)
- 📦 Modular React components with TypeScript for type safety
- 🛠️ ESLint integration for code quality and consistency
- 🔄 Easily extendable for new features

## Getting Started

1. **Install dependencies:**
  ```bash
  bun install
  ```

2. **Start the development server:**
  ```bash
  bun run dev
  ```

3. **Build for production:**
  ```bash
  bun run build
  ```

4. **Preview the production build:**
  ```bash
  bun run preview
  ```

## ESLint Configuration

This project uses ESLint with recommended rules for TypeScript and React. For production applications, consider enabling type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
   files: ['**/*.{ts,tsx}'],
   extends: [
    ...tseslint.configs.recommendedTypeChecked,
   ],
   languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
   },
  },
])
```

## Project Structure

```
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Contributing

Contributions are welcome! Please open issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.

