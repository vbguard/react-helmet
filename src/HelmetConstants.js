export const ATTRIBUTE_NAMES = {
    BODY: "bodyAttributes",
    HTML: "htmlAttributes",
    TITLE: "titleAttributes"
};

export const TAG_NAMES = {
    BASE: "base",
    BODY: "body",
    HEAD: "head",
    HTML: "html",
    LINK: "link",
    META: "meta",
    NOSCRIPT: "noscript",
    SCRIPT: "script",
    STYLE: "style",
    TITLE: "title"
};

export const TAG_PROPERTIES = {
    CHARSET: "charset",
    CSS_TEXT: "cssText",
    HREF: "href",
    HTTPEQUIV: "http-equiv",
    INNER_HTML: "innerHTML",
    ITEM_PROP: "itemprop",
    NAME: "name",
    PROPERTY: "property",
    REL: "rel",
    SRC: "src"
};

export const REACT_TAG_MAP = {
    "charset": "charSet",
    "class": "className",
    "http-equiv": "httpEquiv",
    "itemprop": "itemProp"
};

export const HELMET_PROPS = {
    DEFAULT_TITLE: "defaultTitle",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate"
};

export const HTML_TAG_MAP = {
    "charSet": "charset",
    "className": "class",
    "httpEquiv": "http-equiv",
    "itemProp": "itemprop"
};

export const SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];

export const HELMET_ATTRIBUTE = "data-react-helmet";
