import projects, { getProjectSlug, type Project } from './projects';

export type DesignApproach = {
  slug: string;
  project: Project;
  title: string;
  introduction: string;
  approach: string;
  principles: { title: string; description: string }[];
  gallery: Project[];
};

function findProject(slug: string): Project {
  const project = projects.find((item) => getProjectSlug(item) === slug);
  if (!project) throw new Error(`Design approach references missing project: ${slug}`);
  return project;
}

export const designApproaches: DesignApproach[] = [
  {
    slug: 'grid-as-language',
    project: findProject('modular-identity'),
    title: 'Let the grid do the talking.',
    introduction: 'A modular identity can feel expressive without losing its structure. This study treats the grid as the visual language—not just a production guide.',
    approach: 'Start with a simple unit, then let scale, repetition, and cropping create a family of compositions. The result feels consistent across applications while each layout keeps its own energy.',
    principles: [
      { title: 'Build from one unit', description: 'A shared module gives every letterform and layout a clear relationship.' },
      { title: 'Make structure visible', description: 'Keep construction lines and technical labels in the composition to make the system part of the story.' },
      { title: 'Use contrast with intent', description: 'Oversized shapes against fine rules create hierarchy without adding visual clutter.' },
    ],
    gallery: [
      findProject('modular-identity'),
      findProject('grid-type-experiment'),
      findProject('texture-typography'),
    ],
  },
  {
    slug: 'bold-editorial-signal',
    project: findProject('design-practice-poster'),
    title: 'Make one idea impossible to miss.',
    introduction: 'A poster has a small window to earn attention. This approach strips the layout back to one clear message, then uses scale and color to make it memorable.',
    approach: 'Treat the headline as the image. A compact palette and generous negative space keep the message direct, while a small graphic gesture adds enough personality to reward a closer look.',
    principles: [
      { title: 'Lead with the message', description: 'Give the most important words the strongest scale and the clearest position.' },
      { title: 'Limit the palette', description: 'A few deliberate colors make a bold statement easier to recognize and remember.' },
      { title: 'Keep a little tension', description: 'Offset alignments and one unexpected detail stop a simple layout from feeling static.' },
    ],
    gallery: [
      findProject('design-practice-poster'),
      findProject('takadanobaba-poster'),
      findProject('theatre-poster-series'),
    ],
  },
  {
    slug: 'editorial-rhythm',
    project: findProject('editorial-spread'),
    title: 'Give every page a rhythm.',
    introduction: 'Good editorial design guides the eye without making every page feel the same. This approach balances a dependable layout with moments of surprise.',
    approach: 'Create a repeatable typographic hierarchy first. Then vary image scale, color, and the pace of the margins so the reader moves naturally between quiet details and expressive moments.',
    principles: [
      { title: 'Design for the sequence', description: 'Think about how a page follows the last one, not just how it looks on its own.' },
      { title: 'Use type as navigation', description: 'Consistent levels of type help readers scan, pause, and find their way back.' },
      { title: 'Let images change the pace', description: 'A full, vivid image can act as a pause between denser passages.' },
    ],
    gallery: [
      findProject('editorial-spread'),
      findProject('yellow-editorial'),
      findProject('art-book-stack'),
    ],
  },
];

export function getDesignApproachHref(project: Project): string | undefined {
  const approach = designApproaches.find((item) => item.project.number === project.number);
  return approach ? `/studio-notes/${approach.slug}/` : undefined;
}
