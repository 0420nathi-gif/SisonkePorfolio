import modularIdentityImage from '../assets/Images/0d2eeed4-8e54-4d5f-8394-f5e6c3280559.webp';
import graphicPosterImage from '../assets/Images/5760cb51-3ad7-44f9-98cf-6e65d07dbd42.webp';
import practicePosterImage from '../assets/Images/764842a6-6633-41d4-8e3a-de603a4c32bf.webp';
import portraitArtDirectionImage from '../assets/Images/8fc0be87-b9c6-4a60-8965-7c83bd61072a.webp';
import takadanobabaPosterImage from '../assets/Images/c5539073-43c4-476f-b3ce-44ab761531d5.webp';
import theatrePosterImage from '../assets/Images/d7f6ab58-fd41-47fa-b826-7d6719da68f3.webp';
import artBookStackImage from '../assets/Images/ed1ce66e-f1a8-4ca9-b124-0fcb6570c87a.webp';
import editorialSpreadImage from '../assets/Images/a0146f54-90b2-4bc8-9de0-95c7a9b60475.webp';
import awardsPosterImage from '../assets/Images/99efc472-09d3-4a03-acbb-d9f7c7615ab7.webp';
import textureTypographyImage from '../assets/Images/4799207a-d610-441a-bc74-e4edb7ed227b.webp';
import yellowEditorialImage from '../assets/Images/353625a7-bffc-4d4b-b1d6-bf0637fe2398.webp';
import streetSceneVideo from '../assets/Images/output.mp4';

export type Project = {
  number: string;
  title: string;
  category: string;
  className: string;
  mark: string;
  description: string;
  summary: string;
  image?: string;
  imageAlt?: string;
  containImage?: boolean;
  video?: string;
};

const projects: Project[] = [
  {
    number: '01',
    title: 'Modular Identity',
    category: 'Graphic design · Typography',
    className: '',
    mark: '',
    description: '',
    summary: 'A grid-built letterform study using oversized characters, technical labels, and a deep blue palette.',
    image: modularIdentityImage,
    imageAlt: 'Blue modular letterform identity with a geometric grid',
    containImage: true,
  },
  {
    number: '02',
    title: 'Grid Type Experiment',
    category: 'Typography · Graphic design',
    className: '',
    mark: '',
    description: '',
    summary: 'An editorial typography experiment pairing oversized black forms with fine grid lines and a restrained cream palette.',
    image: graphicPosterImage,
    imageAlt: 'Black typographic forms arranged in an editorial grid',
    containImage: true,
  },
  {
    number: '03',
    title: 'Design Practice Poster',
    category: 'Poster design · Art direction',
    className: '',
    mark: '',
    description: '',
    summary: 'A poster concept that puts an oversized orange headline and a simple directional mark at the center of the composition.',
    image: practicePosterImage,
    imageAlt: 'Orange and cream poster asking, “Want to practice graphic design?”',
    containImage: true,
  },
  {
    number: '04',
    title: 'Portrait Art Direction',
    category: 'Art direction · Portrait',
    className: '',
    mark: '',
    description: '',
    summary: 'A graphic portrait composition pairing monochrome photography with a vivid blue field and geometric overlays.',
    image: portraitArtDirectionImage,
    imageAlt: 'Portrait overlaid with white geometric shapes on a blue background',
    containImage: true,
  },
  {
    number: '05',
    title: 'Takadanobaba Poster',
    category: 'Poster design · Composition',
    className: '',
    mark: '',
    description: '',
    summary: 'An abstract poster study built from layered shapes, bold type, and a limited black, grey, and peach palette.',
    image: takadanobabaPosterImage,
    imageAlt: 'Abstract Takadanobaba poster in black, grey, and peach',
    containImage: true,
  },
  {
    number: '06',
    title: 'Theatre Poster Series',
    category: 'Editorial · Poster design',
    className: '',
    mark: '',
    description: '',
    summary: 'A theatre poster series with modular layouts, restrained typography, and a consistent editorial rhythm.',
    image: theatrePosterImage,
    imageAlt: 'A series of minimalist theatre posters in black and cream',
    containImage: true,
  },
  {
    number: '07',
    title: 'Art Book Stack',
    category: 'Editorial · Book design',
    className: '',
    mark: '',
    description: '',
    summary: 'A vivid green art-book cover presented as a stacked mockup, emphasizing its bold type and sculptural form.',
    image: artBookStackImage,
    imageAlt: 'Stack of vivid green art books with bold black typography',
    containImage: true,
  },
  {
    number: '08',
    title: 'Editorial Spread',
    category: 'Editorial · Layout',
    className: '',
    mark: '',
    description: '',
    summary: 'A close-up editorial composition exploring large-scale letterforms, page turns, and bright green color.',
    image: editorialSpreadImage,
    imageAlt: 'Close-up of an open green editorial spread with large black lettering',
    containImage: true,
  },
  {
    number: '09',
    title: 'Dutch Design Awards',
    category: 'Poster design · Art direction',
    className: '',
    mark: '',
    description: '',
    summary: 'A geometric awards poster shown in its architectural setting, where the installation echoes the design’s bold shapes.',
    image: awardsPosterImage,
    imageAlt: 'Geometric Dutch Design Awards poster displayed on a building',
    containImage: true,
  },
  {
    number: '10',
    title: 'Texture Typography',
    category: 'Typography · Identity',
    className: '',
    mark: '',
    description: '',
    summary: 'A typography specimen presenting a custom-looking wordmark alongside the grid and spacing behind its construction.',
    image: textureTypographyImage,
    imageAlt: 'Black “texture” wordmark above a typographic construction grid',
    containImage: true,
  },
  {
    number: '11',
    title: 'Yellow Editorial',
    category: 'Editorial · Art direction',
    className: '',
    mark: '',
    description: '',
    summary: 'A two-page editorial spread using a saturated yellow ground, dense text, and a strong typographic hierarchy.',
    image: yellowEditorialImage,
    imageAlt: 'Open editorial spread with yellow pages and bold black typography',
    containImage: true,
  },
  {
    number: '12',
    title: 'Street Scene',
    category: 'Video · Editing',
    className: '',
    mark: '',
    description: '',
    summary: 'A short street-scene video edit shaped by layered reflections and a muted, cinematic palette.',
    video: streetSceneVideo,
  },
];

export default projects;
