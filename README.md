# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Agregar productos al catálogo

Los productos se administran con Astro Content Collections dentro de `src/content/products/`.

1. Copia uno de los archivos `.md` existentes.
2. Cambia el nombre del archivo; este será la URL del producto. Ejemplo: `crema-hidratante.md`.
3. Usa un `productId` numérico que no esté repetido.
4. Completa nombre, categoría (`maquillaje`, `skincare`, `cuidado-capilar` o `cuidado-corporal`), descripción, beneficios, modo de uso, precio e imágenes.
5. Guarda las fotografías en `public/images/` y escribe sus rutas comenzando por `/images/`.
6. Usa `activo: false` para ocultar temporalmente un producto.

El esquema que valida todos los campos está en `src/content.config.ts`. Después de editar productos, ejecuta `npm run build` para comprobar que el contenido sea válido.

Todos los productos deben incluir información ampliada:

```yaml
paraQueSirve: "Explicación clara de la función del producto."
beneficios:
  - "Primer beneficio."
  - "Segundo beneficio."
modoUso:
  - "Primer paso de aplicación."
  - "Segundo paso de aplicación."
recomendacion: "Consejo adicional opcional."
```

`paraQueSirve`, `beneficios` y `modoUso` son obligatorios. `recomendacion` es opcional.
