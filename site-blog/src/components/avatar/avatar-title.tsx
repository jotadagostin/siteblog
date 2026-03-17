type AvatarTitleProps = {
  children: React.ReactNode;
};
export const Avatartitle = ({ children }: AvatarTitleProps) => {
  return <strong className="text-body-sm text-gray-200">{children}</strong>;
};
