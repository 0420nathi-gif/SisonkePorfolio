import { useRef } from 'react';

type ProjectImageProps = {
  src: string;
  alt: string;
  contained?: boolean;
};

function ProjectImage({ src, alt, contained = false }: ProjectImageProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        className="project-image-trigger"
        type="button"
        aria-label={`View full image: ${alt}`}
        onClick={() => dialogRef.current?.showModal()}
      >
        <img
          className={`project-art-image${contained ? ' project-art-image-contained' : ''}`}
          src={src}
          alt={alt}
        />
      </button>
      <dialog
        className="project-image-dialog"
        ref={dialogRef}
        aria-label={`Full-size image: ${alt}`}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            dialogRef.current?.close();
          }
        }}
      >
        <button
          className="project-image-close"
          type="button"
          aria-label="Close full-size image"
          onClick={() => dialogRef.current?.close()}
        >
          ×
        </button>
        <img src={src} alt={alt} />
      </dialog>
    </>
  );
}

export default ProjectImage;
