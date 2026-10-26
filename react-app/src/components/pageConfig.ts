export type Page = 'home' | 'about' | 'work' | 'contact';

export function getRouteHref(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
}

export const pages: { id: Page; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];
