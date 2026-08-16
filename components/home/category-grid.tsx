"use client";

import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { categories } from "@/data/categories";
import { cn } from "@/lib/utils";

export function CategoryGrid() {
  return (
    <Section>
      <Reveal>
        <SectionHeading
          title="Shop by category"
          description="Photography-led rooms. Pick a lane and walk it."
        />
      </Reveal>
      <Stagger className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
        {categories.map((category, index) => {
          const featured = index === 0 || index === 5;
          return (
            <StaggerItem
              key={category.slug}
              className={cn(
                featured ? "col-span-2 md:col-span-3" : "md:col-span-2",
              )}
            >
              <Link
                href={category.href}
                className="group relative isolate block min-h-56 overflow-hidden bg-void text-ivory md:min-h-80"
              >
                <Image
                  src={category.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="image-outline object-cover opacity-80 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 sm:p-6">
                  <h3 className="font-heading text-xl font-medium tracking-tight sm:text-2xl">
                    {category.name}
                  </h3>
                </div>
              </Link>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
