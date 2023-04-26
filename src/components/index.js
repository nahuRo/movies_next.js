/**
 * el barrel es para cuando yo quera usar mucho archivos de una misma carpeta no tenga que llamar
 a cada archivo por separado y los llamo juntos en una misma linea
 * 
 ej de antes:
    import PosterCollection from "@/components/PosterCollection";
    import MoviesDetail from "@/components/MovieDetail";
    import CardCast from "@/components/CardCast";

 * 
 ej con barrels:
   import {PosterCollection, MoviesDetail, CardCast} from "@/components";
 */

export { default as Card } from "./Card";
export { default as CardCast } from "./CardCast";
export { default as CardCollection } from "./CardCollection";
export { default as ContainerData } from "./ContainerData";
export { default as Links } from "./Links";
export { default as MovieDetail } from "./MovieDetail";
export { default as NavigationPages } from "./NavigationPages";
export { default as PosterCollection } from "./PosterCollection";
