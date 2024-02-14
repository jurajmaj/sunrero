import { useTranslation } from "react-i18next";

export const formatState = (state: string) => {
  const { t } = useTranslation();

  return t(state);
};
