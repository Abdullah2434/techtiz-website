type HeadSource = {
  modHead?: {
    eyebrow?: string;
    heading?: string;
    h2?: string;
    body?: string;
    p?: string;
  };
  eyebrow?: string;
  heading?: string;
  body?: string;
};

export function sectionHead(source: HeadSource) {
  const mh = source.modHead;
  return {
    eyebrow: mh?.eyebrow ?? source.eyebrow ?? '',
    heading: mh?.heading ?? mh?.h2 ?? source.heading ?? '',
    body: mh?.body ?? mh?.p ?? source.body ?? '',
  };
}
