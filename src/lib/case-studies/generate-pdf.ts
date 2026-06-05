import PDFDocument from "pdfkit";
import { readFile } from "node:fs/promises";
import path from "node:path";

import type { CaseStudy } from "../types/case-study";
import { SITE } from "../constants/site";

const BRAND = {
  yale: "#153A5F",
  cyan: "#18B0E6",
  ink: "#101010",
  muted: "#454545",
  line: "#D9D9D9",
} as const;

const PAGE_WIDTH = 595.28;
const MARGIN = 50;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;

const loadPublicAsset = async (
  assetPath: string,
  origin?: string,
): Promise<Buffer | null> => {
  const normalized = assetPath.startsWith("/") ? assetPath.slice(1) : assetPath;

  try {
    const filePath = path.join(process.cwd(), "public", normalized);
    return await readFile(filePath);
  } catch {
    if (!origin) return null;
    try {
      const response = await fetch(new URL(assetPath, origin));
      if (!response.ok) return null;
      return Buffer.from(await response.arrayBuffer());
    } catch {
      return null;
    }
  }
};

const collectPdfBuffer = (doc: PDFKit.PDFDocument): Promise<Buffer> =>
  new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    doc.on("data", (chunk: Buffer) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);
  });

const ensureSpace = (doc: PDFKit.PDFDocument, height: number) => {
  if (doc.y + height > doc.page.height - MARGIN) {
    doc.addPage();
  }
};

const writeSectionTitle = (doc: PDFKit.PDFDocument, title: string) => {
  ensureSpace(doc, 40);
  doc
    .fillColor(BRAND.cyan)
    .font("Helvetica-Bold")
    .fontSize(14)
    .text(title, MARGIN, doc.y, { width: CONTENT_WIDTH });
  doc.moveDown(0.4);
};

const writeParagraph = (doc: PDFKit.PDFDocument, text: string) => {
  ensureSpace(doc, 60);
  doc
    .fillColor(BRAND.muted)
    .font("Helvetica")
    .fontSize(11)
    .text(text, MARGIN, doc.y, { width: CONTENT_WIDTH, lineGap: 4 });
  doc.moveDown(0.6);
};

const writeBulletList = (doc: PDFKit.PDFDocument, items: string[]) => {
  for (const item of items) {
    ensureSpace(doc, 40);
    doc
      .fillColor(BRAND.muted)
      .font("Helvetica")
      .fontSize(11)
      .text(`• ${item}`, MARGIN + 8, doc.y, {
        width: CONTENT_WIDTH - 8,
        lineGap: 3,
      });
    doc.moveDown(0.35);
  }
  doc.moveDown(0.25);
};

export async function generateCaseStudyPdf(
  study: CaseStudy,
  origin?: string,
): Promise<Buffer> {
  const doc = new PDFDocument({
    size: "A4",
    margins: { top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN },
    info: {
      Title: `${study.title} — Case Study`,
      Author: SITE.name,
      Subject: `${study.client} case study by ${SITE.name}`,
    },
  });

  const bufferPromise = collectPdfBuffer(doc);

  doc
    .rect(0, 0, PAGE_WIDTH, 72)
    .fill(BRAND.yale);

  const logoBuffer = await loadPublicAsset(SITE.logo.png, origin);
  if (logoBuffer) {
    doc.image(logoBuffer, MARGIN, 22, { height: 28 });
  } else {
    doc
      .fillColor("#FFFFFF")
      .font("Helvetica-Bold")
      .fontSize(18)
      .text(SITE.name, MARGIN, 28);
  }

  doc
    .fillColor("#FFFFFF")
    .font("Helvetica")
    .fontSize(10)
    .text("Case Study", PAGE_WIDTH - MARGIN - 80, 32, { width: 80, align: "right" });

  doc.y = 92;

  doc
    .fillColor(BRAND.ink)
    .font("Helvetica-Bold")
    .fontSize(22)
    .text(study.title, MARGIN, doc.y, { width: CONTENT_WIDTH, lineGap: 2 });
  doc.moveDown(0.5);

  doc
    .fillColor(BRAND.cyan)
    .font("Helvetica-Bold")
    .fontSize(12)
    .text(study.category, MARGIN, doc.y);
  doc.moveDown(0.75);

  const clientLogoBuffer = await loadPublicAsset(study.appLogo, origin);
  if (clientLogoBuffer) {
    ensureSpace(doc, 70);
    doc.image(clientLogoBuffer, MARGIN, doc.y, { height: 40 });
    doc.y += 48;
  }

  doc
    .fillColor(BRAND.muted)
    .font("Helvetica")
    .fontSize(10)
    .text("Client", MARGIN, doc.y);
  doc
    .fillColor(BRAND.ink)
    .font("Helvetica-Bold")
    .fontSize(14)
    .text(study.client, MARGIN, doc.y + 14);
  doc.y += 36;

  if (study.tagline) {
    writeSectionTitle(doc, "Tagline");
    writeParagraph(doc, study.tagline);
  }

  writeSectionTitle(doc, "Product Overview");
  writeParagraph(doc, study.overview);
  if (study.overview2) {
    writeParagraph(doc, study.overview2);
  }

  if (study.metrics?.length) {
    writeSectionTitle(doc, "Key Metrics");
    for (const metric of study.metrics) {
      ensureSpace(doc, 28);
      doc
        .fillColor(BRAND.ink)
        .font("Helvetica-Bold")
        .fontSize(16)
        .text(metric.value, MARGIN, doc.y, { continued: true })
        .font("Helvetica")
        .fontSize(11)
        .fillColor(BRAND.muted)
        .text(`  ${metric.label}`);
      doc.moveDown(0.45);
    }
    doc.moveDown(0.25);
  }

  if (study.appStrengths.length) {
    writeSectionTitle(doc, "App Strengths");
    writeBulletList(doc, study.appStrengths);
  }

  if (study.highlights.length) {
    writeSectionTitle(doc, "Highlights");
    writeBulletList(doc, study.highlights);
  }

  if (study.technologies?.length) {
    writeSectionTitle(doc, "Technologies");
    writeParagraph(
      doc,
      study.technologies.map((tech) => tech.name).join(" · "),
    );
  }

  if (study.founder) {
    writeSectionTitle(doc, "Client Voice");
    writeParagraph(
      doc,
      `${study.founder.name} — ${study.founder.role}`,
    );
  }

  ensureSpace(doc, 80);
  const footerY = doc.page.height - MARGIN - 40;
  doc
    .moveTo(MARGIN, footerY)
    .lineTo(PAGE_WIDTH - MARGIN, footerY)
    .strokeColor(BRAND.line)
    .stroke();

  doc
    .fillColor(BRAND.muted)
    .font("Helvetica")
    .fontSize(9)
    .text(
      `${SITE.name} · ${SITE.url} · ${SITE.email.contact} · ${SITE.phone.display}`,
      MARGIN,
      footerY + 12,
      { width: CONTENT_WIDTH, align: "center" },
    );

  doc.end();
  return bufferPromise;
}

export function caseStudyPdfFilename(slug: string): string {
  return `techtiz-case-study-${slug}.pdf`;
}
