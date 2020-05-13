const WHITE = "#FFFF";
const BLACK = "#161617";
const GRAY = "#F8F8F9";

const themeLight = {
    background:  GRAY,
    body: BLACK
}

const themeDark = {
    background: BLACK,
    body: WHITE
};

const theme = mode => ( mode === "dark" ? themeDark : themeLight);

export default theme;