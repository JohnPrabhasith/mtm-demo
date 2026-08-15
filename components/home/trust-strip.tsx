import { ShieldCheckIcon, RotateCcwIcon, TruckIcon, HeadsetIcon } from "lucide-react";
import { Container } from "@/components/common/container";
import { DemoNotice } from "@/components/common/demo-notice";

const items = [
  { icon: ShieldCheckIcon, label: "Premium quality" },
  { icon: TruckIcon, label: "Fast delivery" },
  { icon: RotateCcwIcon, label: "Easy returns" },
  { icon: HeadsetIcon, label: "Customer support" },
];

export function TrustStrip() {
  return (
    <section className="border-b">
      <Container className="py-6">
        <DemoNotice>service highlights — confirm with the store before publishing</DemoNotice>
        <ul className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
          {items.map((item) => (
            <li key={item.label} className="flex items-center gap-3">
              <item.icon aria-hidden="true" className="size-4 text-violet" />
              <span className="text-sm font-medium">{item.label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
