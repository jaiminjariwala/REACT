### To initialize a new VITE+REACT project:
```
npm create vite@latest <project-name>
```

### To uninstall the old react version:
```
nvm uninstall <version>
for ex. nvm uninstall v22.12.0
```

### To check for the available versions (previously downloaded):
```
nvm ls
```

### To pivot or move to another version:
```
nvm use <version>
for ex. nvm use v23.4.0
```

# ***********************************************************
### Different Ways to create react app:
1. Using `create-react-app` (CRA)
   * Command: `npx create-react-app my-app`
   * Pros: Simple and beginner-friendly.
   * Cons: Slower development server and lacks flexibility.
  
2. Using Vite:
   * Command: `npm create vite@latest my-app --template react`
   * Pros: Super fast and modern.
   * Cons: Slightly advanced for absolute beginners.
  
3. Using Next.js:
   * Command: `npx create-next-app@latest my-app`
   * Pros: Ideal for server-side rendering (SSR) and static site generation (SSG).
   * Cons: More complex; overkill for small apps.
  
4. Using create-t3-app:
   * Command: `npx create-t3-app@latest my-app`
   * Pros: Best for building full-stack React apps with modern tools like TypeScript, Tailwind, and Prisma.
   * Cons: Advanced setup not ideal for beginners.
