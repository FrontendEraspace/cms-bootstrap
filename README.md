# cms-dealer-portal

## Styling library

- shadcn (https://ui.shadcn.com/)

To add component

```bash
npx shadcn-ui@latest add <component-name>
```

For example

```bash
npx shadcn-ui@latest add accordion
```

List of components  
https://ui.shadcn.com/docs/components/accordion

You can also customize shadcn component by editing the file under `/src/components/ui` directory.

note: Shadcn uses Radix UI under the hood. See Radix UI Component API Reference here -> [radix-ui](https://www.radix-ui.com/primitives/docs/components/accordion)

## Hooks

This bootstrap project uses [usehook-ts](https://usehooks-ts.com/introduction) to provides a set of hooks that enables you to build your React applications faster. The hooks are built upon the principles of DRY (Don't Repeat Yourself). There are hooks for most common use cases you might need.

To create a custom hook create a file under `/src/hooks` directory

## Run Locally

Clone the project

```bash
  git clone https://Rafli-Dewanto@bitbucket.org/erafone/cms-dealer-portal.git
```

Go to the project directory

```bash
  cd cms-dealer-portal
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```
