import i18next from "i18next";
import { OrderItem } from "../types/orderTypes";

export const getItemName = (orderItem: OrderItem): string => {
  if (i18next.language === "en" || !orderItem.orderMenuItem.translations.sk.name) {
    return orderItem.orderMenuItem.translations.en.name;
  } else {
    return orderItem.orderMenuItem.translations.sk.name;
  }
};
