import { merge } from "theme-ui";
import originalTheme from "@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui/index";

const theme = merge(originalTheme,{
    initialColorModeName: `light`,
    config: {
    useCustomProperties: true,
    },
    colors: {
        primary: `#F6B352`,
        modes: {
        dark: {
            primary: `#F6B352`,
            secondary: `#7f8ea3`,
            background: `#1F2124`,
            divide: `#383A3F`,
        },
        },
    },
    fonts: {
        body: `"Montserrat", "Nanum Gothic" ,-apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
    },
    styles: {
        p: {
            fontSize: [1,"1.1rem",2,2],
            letterSpacing: `-0.003em`,
            lineHeight: `body`,
            "--baseline-multiplier": 0.179,
            "--x-height-multiplier": 0.35,
            wordBreak: `break-word`,
        },
        h1: {
            variant: `text.heading`,
            fontSize: [5, 6, 6, 6],
            mt: 4,
          },
        h2: {
            variant: `text.heading`,
            fontSize: [4, 5, 5, 5],
            mt: 4,
          },
        h3: {
        variant: `text.heading`,
        fontSize: [3, 4, 4, 4],
        mt: 4,
        },
    },
});

export default theme;