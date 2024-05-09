import "styled-components";
import { defaultTheme } from "../styles/themes/default";

//olhar a definição de typeof

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}
