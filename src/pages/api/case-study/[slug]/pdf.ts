import type { APIRoute } from "astro";

import {
  caseStudyPdfFilename,
  generateCaseStudyPdf,
} from "../../../../lib/case-studies/generate-pdf";
import { getCaseStudyBySlug } from "../../../../lib/constants/case-studies";

export const prerender = false;

export const GET: APIRoute = async ({ params, url }) => {
  const slug = params.slug;
  if (!slug) {
    return new Response("Missing case study slug", { status: 400 });
  }

  const study = getCaseStudyBySlug(slug);
  if (!study) {
    return new Response("Case study not found", { status: 404 });
  }

  try {
    const pdf = await generateCaseStudyPdf(study, url.origin);
    const filename = caseStudyPdfFilename(slug);

    return new Response(new Uint8Array(pdf), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "private, no-store",
      },
    });
  } catch (error) {
    console.error("Case study PDF generation error:", error);
    return new Response("Failed to generate PDF", { status: 500 });
  }
};
