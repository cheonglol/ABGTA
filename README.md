![image](https://github.com/leicester70/ABGTA/assets/82318965/b16d84bf-2a9f-4d5c-a36b-211cb6f0602e)

for my self-learning DS&A on a repo

---

Reference Links

- [Linkedin | Time Complexity vs. Space Complexity](https://www.linkedin.com/pulse/time-complexity-vs-space-sumaiya-rimu/?trackingId=oFipENKRQmiU4WzcGiPSDQ%3D%3D)

- [Data Structures and Algorithms in X minutes](https://youtube.com/@michaelsambol?si=gOIW5uA4t2ifse84)

---

> **Phind suggested config**
>
> For learning data structures and algorithms with TypeScript, you'll want a `tsconfig.json` configuration that is strict to help you catch errors early and ensure you're writing clean, efficient code. Here's a configuration that's tailored for this purpose:
>
> ```json
> {
>   "compilerOptions": {
>     "target": "es2020",
>     "module": "commonjs",
>     "strict": true,
>     "esModuleInterop": true,
>     "skipLibCheck": true,
>     "forceConsistentCasingInFileNames": true,
>     "noImplicitAny": true,
>     "strictNullChecks": true,
>     "strictFunctionTypes": true,
>     "strictBindCallApply": true,
>     "strictPropertyInitialization": true,
>     "noImplicitThis": true,
>     "alwaysStrict": true,
>     "noUnusedLocals": true,
>     "noUnusedParameters": true,
>     "noImplicitReturns": true,
>     "noFallthroughCasesInSwitch": true,
>     "noUncheckedIndexedAccess": true,
>     "noImplicitOverride": true,
>     "noPropertyAccessFromIndexSignature": true,
>     "outDir": "./dist",
>     "rootDir": "./src"
>   },
>   "include": ["src/**/*.ts"],
>   "exclude": ["node_modules", "dist"]
> }
> ```
>
> ### Key Configuration Options:
>
> - **`target`**: Set to `"es2020"` to ensure compatibility with modern JavaScript features.
> - **`module`**: Set to `"commonjs"` for compatibility with Node.js.
> - **`strict`**: Enables all strict type-checking options.
> - **`esModuleInterop`**: Allows default imports from modules with no default export.
> - **`skipLibCheck`**: Skips type checking of declaration files.
> - **`forceConsistentCasingInFileNames`**: Ensures consistent casing in imports.
> - **`noImplicitAny`**: Raises an error on expressions and declarations with an implied `any` type.
> - **`strictNullChecks`**: Enables strict null checking.
> - **`strictFunctionTypes`**: Ensures function parameters and return values are subtype-compatible.
> - **`strictBindCallApply`**: Checks that the arguments for `bind`, `call`, and `apply` methods match the original function.
> - **`strictPropertyInitialization`**: Checks for class properties that are declared but not set in the constructor.
> - **`noImplicitThis`**: Enables error reporting when `this` is given the type `any`.
> - **`alwaysStrict`**: Ensures `'use strict'` is always emitted.
> - **`noUnusedLocals`**: Enables error reporting when local variables aren't read.
> - **`noUnusedParameters`**: Raises an error when a function parameter isn't read.
> - **`noImplicitReturns`**: Enables error reporting for code paths that do not explicitly return in a function.
> - **`noFallthroughCasesInSwitch`**: Enables error reporting for fallthrough cases in switch statements.
> - **`noUncheckedIndexedAccess`**: Adds `'undefined'` to a type when accessed using an index.
> - **`noImplicitOverride`**: Ensures overriding members in derived classes are marked with an override modifier.
> - **`noPropertyAccessFromIndexSignature`**: Enforces using indexed accessors for keys declared using an indexed type.
> - **`outDir`**: Specifies the output directory for the compiled JavaScript files.
> - **`rootDir`**: Specifies the root directory of your source files.
>
> This configuration is designed to be strict and help you catch errors early, which is beneficial for learning data structures and algorithms where precision and correctness are crucial. Adjust the `target` and other options as needed based on your specific requirements and the environment you're working in.
