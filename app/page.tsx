"use client";
import Link from "next/link";
import data from "@/lib/data.json";
import { ProductCard } from "@/components/ProductCard";
import { NicheTool } from "@/components/NicheTool";
import { HeroFilm } from "@/components/HeroFilm";
import type { Product } from "@/lib/types";
import { Marquee } from "@/components/Marquee";
import { StatRow } from "@/components/StatRow";
import { FilmStrip } from "@/components/FilmStrip";
import { Newsletter } from "@/components/Newsletter";
import { MotionReveal } from "@/components/MotionReveal";
import { OfferSpot } from "@/components/OfferSpot";
import { ReviewRail } from "@/components/ReviewRail";
import { FaqBlock } from "@/components/FaqBlock";

const brand = data.brand;
const products = data.products as Product[];

export default function HomePage() {
  return (
    <>
      <Marquee />
      <div className="hazard" />
      <section className="bb-hero mx-auto max-w-6xl">
        <HeroFilm video={brand.heroVideo} image={brand.heroImage} className="!absolute inset-0 !min-h-full" />
        <div className="bb-hero-copy">
          <h1 className="font-display text-5xl md:text-7xl">{brand.name}</h1>
          <p className="mt-4 max-w-md text-sm" style={{ color: "var(--muted)" }}>{brand.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/shop" className="steel-btn">Shop hardware</Link>
            <Link href="/projects" className="steel-btn" style={{ background: "#fff" }}>Project bench</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="mb-10"><NicheTool /></div>
        <h2 className="font-display text-3xl">Spec sheet aisle</h2>
        <table className="spec-table mt-4">
          <thead><tr><th>SKU</th><th>Item</th><th>Grade</th><th>Bay</th></tr></thead>
          <tbody>
            {products.slice(0, 10).map((p, i) => (
              <tr key={p.id}>
                <td>BB-{1000 + i}</td>
                <td><Link href={"/product/" + p.id} className="font-semibold underline-offset-2 hover:underline">{p.title}</Link></td>
                <td>{p.specs?.[0]?.[1] || "Pro"}</td>
                <td>A{(i % 6) + 1}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 6).map((p) => (
            <div key={p.id} className="border-2 border-[#101418] p-2"><ProductCard product={p} /></div>
          ))}
        </div>
      </section>
      <OfferSpot />
      <StatRow />
      <FilmStrip />
      <ReviewRail />
      <FaqBlock />
      <MotionReveal className="mx-auto max-w-6xl px-4 pb-16 md:px-6"><Newsletter /></MotionReveal>
    </>
  );
}
