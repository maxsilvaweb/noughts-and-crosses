# noughts-and-crosses app

<img src="https://therealsujitk-vercel-badge.vercel.app/?app=noughts-and-crosses" />

This can be viewed online at: [https://noughts-and-crosses-iy89govka-silvaweb.vercel.app](https://noughts-and-crosses-iy89govka-silvaweb.vercel.app)

### Stack

![NextJSv15](https://img.shields.io/badge/-Next%20v15-%23232F3E?logo=Next.JS)
![Reactv19](https://img.shields.io/badge/-React%20v18-%23232F3E?logo=React)
![TailwindCSS](https://img.shields.io/badge/-Tailwind-%23232F3E?logo=Tailwindcss)
![Jest](https://img.shields.io/badge/-Jest-%23232F3E?logo=Jest)
![Prettier](https://img.shields.io/badge/-Prettier-%23232F3E?logo=Prettier)
![ESLint](https://img.shields.io/badge/-ESLint-%23232F3E?logo=ESLint)
![Docker](https://img.shields.io/badge/-Docker-%23232F3E?logo=Docker)

#### Installation

```
bun i && bun dev (This will run the app at localhost:3000)

http://localhost:3000
```

OR

#### Docker

First you need to build the next app


```
bun run build

```

Then you can build the docker image


```
docker build . --no-cache -t noughts-and-crosses

```

Once thats done you can run the docker compose file to build you can then run this will run the app at localhost:3000

```
docker compose up

```

### Available Scripts

```
bun dev - Next dev
bun lint - Audit code quality
bun test -  Will run the Jest tests
bun run build - Next build
bun start - Next start
bun export - Export to static HTML
```
