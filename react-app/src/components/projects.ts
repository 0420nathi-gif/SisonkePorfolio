import carouselImage from '../assets/Images/Img1 for Carousel.svg';
import modularIdentityImage from '../assets/Images/0d2eeed4-8e54-4d5f-8394-f5e6c3280559.webp';
import graphicPosterImage from '../assets/Images/5760cb51-3ad7-44f9-98cf-6e65d07dbd42.webp';
import practicePosterImage from '../assets/Images/764842a6-6633-41d4-8e3a-de603a4c32bf.webp';
import portraitArtDirectionImage from '../assets/Images/8fc0be87-b9c6-4a60-8965-7c83bd61072a.webp';
import takadanobabaPosterImage from '../assets/Images/c5539073-43c4-476f-b3ce-44ab761531d5.webp';
import theatrePosterImage from '../assets/Images/d7f6ab58-fd41-47fa-b826-7d6719da68f3.webp';
import streetSceneVideo from '../assets/Images/output.mp4';

export type Project = {
  number: string;
  title: string;
  category: string;
  className: string;
  mark: string;
  description: string;
  image?: string;
  imageAlt?: string;
  containImage?: boolean;
  video?: string;
};

const projects: Project[] = [
  {
    number: '01',
    title: 'Sunday Supply',
    category: 'Brand identity · E-commerce',
    className: 'project-art-sunday',
    mark: 'SUNDAY',
    description: 'A brighter kind of everyday.',
    image: carouselImage,
  },
  {
    number: '02',
    title: 'Modular Identity',
    category: 'Graphic design · Typography',
    className: '',
    mark: '',
    description: '',
    image: modularIdentityImage,
    imageAlt: 'Blue modular letterform identity with a geometric grid',
    containImage: true,
  },
  {
    number: '03',
    title: 'Grid Type Experiment',
    category: 'Typography · Graphic design',
    className: '',
    mark: '',
    description: '',
    image: graphicPosterImage,
    imageAlt: 'Black typographic forms arranged in an editorial grid',
    containImage: true,
  },
  {
    number: '04',
    title: 'Design Practice Poster',
    category: 'Poster design · Art direction',
    className: '',
    mark: '',
    description: '',
    image: practicePosterImage,
    imageAlt: 'Orange and cream poster asking, “Want to practice graphic design?”',
    containImage: true,
  },
  {
    number: '05',
    title: 'Portrait Art Direction',
    category: 'Art direction · Portrait',
    className: '',
    mark: '',
    description: '',
    image: portraitArtDirectionImage,
    imageAlt: 'Portrait overlaid with white geometric shapes on a blue background',
    containImage: true,
  },
  {
    number: '06',
    title: 'Takadanobaba Poster',
    category: 'Poster design · Composition',
    className: '',
    mark: '',
    description: '',
    image: takadanobabaPosterImage,
    imageAlt: 'Abstract Takadanobaba poster in black, grey, and peach',
    containImage: true,
  },
  {
    number: '07',
    title: 'Theatre Poster Series',
    category: 'Editorial · Poster design',
    className: '',
    mark: '',
    description: '',
    image: theatrePosterImage,
    imageAlt: 'A series of minimalist theatre posters in black and cream',
    containImage: true,
  },
  {
    number: '08',
    title: 'Street Scene',
    category: 'Video · Editing',
    className: '',
    mark: '',
    description: '',
    video: streetSceneVideo,
  },
];

export default projects;
