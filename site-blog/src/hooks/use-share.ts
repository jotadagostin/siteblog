import { ShareConfig } from "./social-providers";

type useShareProps = ShareConfig & {
  clipeboardTimeout?: number;
};

export const useShare = ({
  url,
  title,
  text,
  clipboardTimeout = 2000,
}: useShareProps) => {
  const shareConfig = {
    url,
    ...(title && { title }),
    ...(text && { text }),
  };
  return {};
};
