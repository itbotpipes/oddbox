import { redirect } from "next/navigation";

interface PageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryRedirectPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { category } = resolvedParams;
  redirect(`/work?category=${category}`);
}
