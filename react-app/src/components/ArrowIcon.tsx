type ArrowIconProps = {
  diagonal?: boolean;
};

function ArrowIcon({ diagonal = false }: ArrowIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={diagonal ? 'arrow-icon arrow-icon-diagonal' : 'arrow-icon'}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M3.5 10h12M10 4.5l5.5 5.5-5.5 5.5" />
    </svg>
  );
}

export default ArrowIcon;
