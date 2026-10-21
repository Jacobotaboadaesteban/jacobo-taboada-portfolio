import { existsSync } from "node:fs";
import { join } from "node:path";
import { Portfolio } from "@/components/portfolio";
import { identity } from "@/data/portfolio";

export default function Page() {
  const hasPhoto = existsSync(join(process.cwd(), "public", identity.photo));
  return <Portfolio hasPhoto={hasPhoto} />;
}
