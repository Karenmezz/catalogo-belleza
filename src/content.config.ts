import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const products = defineCollection({
  loader: glob({ base: "./src/content/products", pattern: "**/*.md" }),
  schema: z.object({
    productId: z.number().int().positive(),
    nombre: z.string().min(2),
    categoria: z.enum(["maquillaje", "skincare", "cuidado-capilar", "cuidado-corporal"]),
    descripcion: z.string().min(10),
    paraQueSirve: z.string().min(10),
    beneficios: z.array(z.string().min(3)).min(1),
    modoUso: z.array(z.string().min(3)).min(1),
    recomendacion: z.string().optional(),
    precio: z.number().positive(),
    cantidadDisponible: z.number().int().nonnegative(),
    imagenes: z.array(z.string()).min(1).max(6),
    orden: z.number().int().default(0),
    activo: z.boolean().default(true),
  }),
});

export const collections = { products };
