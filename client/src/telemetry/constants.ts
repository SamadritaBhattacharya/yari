import { ViewportBreakpoint } from "./glean-context";

export const ARTICLE_ACTIONS_COLLECTION_SELECT_OPENED =
  "article_actions_collection_select_opened";
export const ARTICLE_ACTIONS_NEW_COLLECTION = "article_actions_new_collection";
export const ARTICLE_ACTIONS_COLLECTIONS_OPENED =
  "article_actions_collections_opened";
export const COLLECTIONS_BANNER_NEW_COLLECTION =
  "collections_banner_new_collection";
export const NEW_COLLECTION_MODAL_SUBMIT_ARTICLE_ACTIONS =
  "new_collection_modal_submit_article_actions";
export const NEW_COLLECTION_MODAL_SUBMIT_COLLECTIONS_PAGE =
  "new_collection_modal_submit_collections_page";
export const NEW_COLLECTION_MODAL_UPGRADE_LINK =
  "new_collection_modal_upgrade_link";
export const OFFER_OVERVIEW_CLICK = "offer_overview_click";
export const SIDEBAR_CLICK = "sidebar_click";
export const TOP_NAV_ALREADY_SUBSCRIBER = "top_nav_already_subscriber";
export const TOP_NAV_GET_MDN_PLUS = "top_nav_get_mdn_plus";
export const TOGGLE_PLUS_OFFLINE_DISABLED = "toggle_plus_offline_disabled";
export const TOGGLE_PLUS_OFFLINE_ENABLED = "toggle_plus_offline_enabled";
export const TOGGLE_PLUS_ADS_FREE_DISABLED = "toggle_plus_ads_free_disabled";
export const TOGGLE_PLUS_ADS_FREE_ENABLED = "toggle_plus_ads_free_enabled";
export const BANNER_BLOG_LAUNCH_CLICK = "banner_blog_launch_click";

export const PLUS_UPDATES = Object.freeze({
  EVENT_COLLAPSE: "plus_updates_event_collapse",
  EVENT_EXPAND: "plus_updates_event_expand",
  FILTER_CHANGE: "plus_updates_filter_change",
  MDN_PLUS: "plus_updates_mdn_plus",
  PAGE_CHANGE: "plus_updates_page_change",
});

export const BREADCRUMB_CLICK = "breadcrumb_click";

export const VIEWPORT_BREAKPOINTS: readonly [ViewportBreakpoint, number][] =
  Object.freeze([
    ["xxl", 1441],
    ["xl", 1200],
    ["lg", 992],
    ["md", 769],
    ["sm", 426],
    ["xs", 0],
  ]);
