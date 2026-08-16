"use client";

import Image from "next/image";
import Link from "next/link";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { collections } from "@/data/collections";

export function CollectionsGrid() {
  return (
    <Stagger className="grid gap-4 md:grid-cols-2">
      {collections.map((collection, index) => (
        <StaggerItem
          key={collection.slug}
          className={index === 0 ? "md:col-span-2" : undefined}
        >
          <Link
            href={collection.href}
            className="group relative block min-h-72 overflow-hidden bg-void text-ivory md:min-h-96"
          >
            <Image
              src={collection.image}
              alt=""
              fill
              sizes={index === 0 ? "100vw" : "50vw"}
              className="image-outline object-cover opacity-75 transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void via-void/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 translate-y-3 p-6 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 sm:p-8">
              <h2 className="font-heading text-3xl font-medium tracking-tight sm:text-4xl">
                {collection.name}
              </h2>
              <p className="mt-2 max-w-md text-sm text-ivory/75">
                {collection.description}
              </p>
            </div>
          </Link>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
