import "server-only";
import { getPageBySlug } from "@/services/page/get-page-by-slug";
import { logger } from "@/lib/logger";
import Link from "next/link";
import styles from "@/styles/post-body.module.css";
export const dynamic = "force-static";

export default async function IndustryMapStaticPage() {
  return <p>Welcome to the Work Different With AI Map!</p>;
}
