type CloudBrandProps = {
  showSubtitle?: boolean;
};

export function CloudBrand({ showSubtitle = false }: CloudBrandProps) {
  return (
    <span className="inline-flex min-w-0 flex-col leading-none">
      <span className="inline-flex w-fit rounded-md bg-white px-2 py-1 shadow-sm ring-1 ring-black/10">
        <img
          src="/mustelinet-logo.png"
          alt="Mustelinet Cloud"
          className={showSubtitle ? 'h-14 w-auto max-w-72 object-contain' : 'h-7 w-auto max-w-40 object-contain'}
        />
      </span>
      {showSubtitle ? (
        <span className="mt-3 text-sm font-medium text-fd-muted-foreground">Cloud tenant documentation</span>
      ) : null}
    </span>
  );
}
