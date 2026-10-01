# natachke.com — frontend

Frontend of **[natachke.com](https://natachke.com)**, an automotive classifieds marketplace I designed and built on my own: listing search, car pages, seller dashboards and real-time buyer–seller chat.

▶ **[Watch the video walkthrough](https://drive.google.com/file/d/1x-tbk1MFL4EBeVDXuDgm-dUAgMXhhDtd/view?usp=sharing)**

> **Note:** this is a trimmed-down version of the natachke.com frontend, published to demonstrate the project and how its code is organised. Some packages, configuration and integrations used in production have been removed, so the repository is meant for reading rather than for running a full copy of the site.

Most of my production work is under NDA, so I keep this repository public as a code sample showing how I structure a real product frontend.

---

## What's inside

A Yarn workspaces monorepo:

| Package | Purpose |
|---|---|
| `packages/natachke` | The web app: React, TypeScript, Redux Toolkit, redux-saga, styled-components |
| `packages/natachke-api-client` | Typed API client **generated from the OpenAPI spec** (`openapi.yaml`, typescript-axios) |
| `packages/natachke-api-generator` | Script that regenerates the client when the backend contract changes |
| `packages/countries-and-regions` | Shared i18n country and region data, bundled with Rollup |

## Architecture highlights

- **Contract-first API.** The frontend never hand-writes request types. The backend's OpenAPI spec generates a typed client, which the app consumes as a workspace package. When the backend contract changes, the frontend fails to compile instead of failing at runtime.
- **Layered `src/` structure.** `ui/` holds presentational components, `features/` holds composed product blocks (search filters, add-car flow, favourites), `entities/` holds domain state, and `pages/` holds route-level screens. Domain state doesn't depend on features or pages.
- **State injected per route.** Each domain entity (Car, Search, Favorites, MyCars, Auth…) ships its own slice, saga, selectors and a `useInject*` hook, built on `redux-injectors`. A page registers only the reducers and sagas it uses, so the store holds only what the current screen needs.
- **Real-time chat over WebSockets.** A `SocketProvider` opens an authenticated Socket.IO connection only for signed-in users. Hooks such as `useMessagesSocket`, `useSocketQuery` and `useSocketListener` keep socket logic out of components.
- **Theming.** Light and dark themes run on styled-components, with per-component theme files so each UI primitive owns its tokens.
- **i18n in the URL.** English, Russian and Ukrainian are supported. The language is part of the route, so every localised page has its own indexable URL. SEO meta is handled through `react-helmet-async`.
- **Perceived performance.** Skeleton loaders mirror the real layout of cards and sliders, so content doesn't jump while data loads.

## Stack

React · TypeScript · Redux Toolkit · redux-saga · styled-components · Socket.IO · React Final Form + Yup · i18next · OpenAPI Generator · Yarn workspaces · Rollup

The backend (Node.js, NestJS) and the Kubernetes infrastructure are not part of this repository.

## Running locally

```bash
yarn install
yarn build:natachke-api-client
yarn build:countries-and-regions
yarn natachke:dev
```

Because this is a trimmed demo version, some scripts reference packages that aren't included (for example `build:messages-api-client`), and the app expects the natachke.com API. Without it, the UI starts but data requests will fail.

---

**Vitalii Falkevych** · Head of Frontend / Frontend Architect · [LinkedIn](https://www.linkedin.com/in/falkevich)
