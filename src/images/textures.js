import {TextureLoader} from "three";

import {dirtImg,
  glassImg,
  grassImg,
  woodImg,
  logImg,}
  from './images';


const dirtTexture = new TextureLoader(dirtImg);
const glassTexture = new TextureLoader(glassImg);
const grassTexture = new TextureLoader(grassImg);
const woodTexture = new TextureLoader(woodImg);
const logTexture = new TextureLoader(logImg);
const groundTexture = new TextureLoader(glassImg);