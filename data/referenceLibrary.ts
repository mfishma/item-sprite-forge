/**
 * Official Vanilla Minecraft Reference Assets (Scaled 256x256 & 16x16 with Palettes)
 * Grounding data for Gemini Vision few-shot learning.
 */

export interface ReferenceItem {
  id: string;
  tags: string[];
  type: string;
  material: string;
  description: string;
  palette: string[];
  base64Scaled: string; // 256x256 crisp pixelated PNG on black background
  base64Raw16: string;  // Original 16x16 PNG
}

export const VANILLA_EXAMPLES: ReferenceItem[] = [
  {
    "id": "diamond_sword",
    "tags": [
      "weapon",
      "sword",
      "diamond",
      "cyan",
      "diagonal"
    ],
    "type": "weapon",
    "material": "diamond",
    "description": "Diamond Sword: Cyan/aqua hue ramp, 45-degree diagonal, dark teal selective outline, bright white tip highlight.",
    "palette": [
      "#082520",
      "#281E0B",
      "#0E3F36",
      "#493615",
      "#156355",
      "#684E1E",
      "#1E8A77",
      "#896727",
      "#2BC7AC",
      "#33EBCB",
      "#A4FDF0"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEqUlEQVR4Ae3BMYsgZoEG4NeXIUk1HgdJkcJpNpAy10yxzdyBjdi6XH0Q/4LoL1i5PtvGH5BeWJaFWG6/IIzFGCTI2gUCYxr9D/mKYXif5/lJkn8F+FEub67zmDXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMOsiMOzy5jonXrx+mYf0+aef5UQDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMuAo/Y5c11Trx4/TInnr95lRO/u/55HlIDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMuAg/o8uY6J168fpkTz9+8yonfXf88Jz7/9LOcuL+9y4kGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWZdBA5c3lznxIvXL3Pi+ZtXOfHBk6uc+PzTz3Li/vYuD6kBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkXYdrlzXVOvHj9Mieev3mVEx88ucqJt0+f5cT97V0eswaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZl3kgV3eXOchfff1mzxmlzfXOfHJV1/kxPM3r3LigydXOfH26bOcuL+9y7IGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWZd5JF7/8lVTlzmzHdfv8mJy5vrnPjkqy9y4v4vf82JD55c5cTbp89y4v72Lvx4DTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMusgD++7rNzlxmTP/8cv/yYkfvn2XE5989UVO/OPLr3Liw//7VU68ffosJ+5v78LDaYBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpg1kU48tGv/zcnvvnt/+fEz37/m5x4+/RZTtzf3oXHqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWT9J8q8Mu7y5zon3n1zlxD//8tec+OHbdzlxf3sXdjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMOsij9wvrj/Miauf/j0n/vCndznx3scf5cR7H3+Uh3R/excerwaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZl3kgf3i+sOc+O//+s+c+PKPf8uJ+2++z2P23scf5SHd396Fh9MAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKyLy5vrPKSrn/49J778499y4s/ffJ+HdH97F3goDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMusih959c5cQf/vQuJ+6/+T78ePe3d2FXA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzLn749l1O/PDtuwCPUwPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAs/4NYweFVXoDbB4AAAAASUVORK5CYII=",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAJFBMVEUAAAAOPzYIJSAz68uk/fArx6weincVY1VoTh5JNhUoHguJZycazUdMAAAAAXRSTlMAQObYZgAAAExJREFUGNN1jsENwDAMAgGndpLuv29/jZFa/+4QwkA/ks5jyPky8cHxwyQAxslZNAaYiux9Zlb4A0XjNcVu1r0hvYacGwB0Rq0OSC4ehwkBE0lygnsAAAAASUVORK5CYII="
  },
  {
    "id": "iron_sword",
    "tags": [
      "weapon",
      "sword",
      "iron",
      "metal",
      "diagonal"
    ],
    "type": "weapon",
    "material": "iron",
    "description": "Iron Sword: Light grey metallic blade, dark grey outline, high contrast specularity on blade edge.",
    "palette": [
      "#181818",
      "#281E0B",
      "#493615",
      "#444444",
      "#684E1E",
      "#896727",
      "#6B6B6B",
      "#969696",
      "#BEBEBE",
      "#D8D8D8",
      "#FFFFFF"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEbklEQVR4Ae3BoW12hwEF0Nsro8JKBTYpNDEpCfYfPRKaPbJCloh5JwgOsBUvYdAEVlH0FghOd8gDn6x7zvlbkj8D/CXHceQza4BZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpg1l1g2HEcueL19TW3dH9/nysaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBph1F/jEjuPIFa+vr7ni/f09V3z58iW31ACzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArLvADR3HkSteX19zxfv7e6748uVLrri/v88V53nmigaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZt0FLjiOI1e8vr7mivf391zx8PCQK+7v73PFeZ65pQaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZt2Facdx5IrX19dc8f7+niseHh5yxfPzc644zzOfWQPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAs+5yY8dx5Jbe3t7ymR3HkSteXl5yxfv7e654eHjIFc/Pz7niPM8sa4BZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpg1l0+ucfHx9zS29tbrjiOI1e8vLzkit9//z1XPDw85Irn5+dccZ5n+OsaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBph1lxt7e3vLLX377be54uPjI1e8vLzkip9//jlXfP3117ni+fk5V5znGW6nAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZd+GS77//Plf88MMPueK7777LFc/Pz7niPM/weTXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMOtvSf7MsOM4csXj42Ou+OWXX3LFx8dHrjjPM+xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmDWXT65b776Z674199/zRU//viRK56ennLF09NTbuk8z/B5NcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0w6y439s1X/8wVz//+R674z0+/5Yrz/COf2dPTU27pPM9wOw0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzLo7jiO39K+//5or/vPTb7niv//7I7d0nmfgVhpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmHWXix4fH3PFjz9+5Irz/CP8ded5hl0NMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8y6+/j4yBUfHx8BPqcGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWb9H4cVhhTnWfX/AAAAAElFTkSuQmCC",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAJFBMVEUAAABERET///9ra2soHgtoTh5JNhWJZyeWlpa+vr7Y2NgYGBikrEiaAAAAAXRSTlMAQObYZgAAAExJREFUeNp9zVEOgDAIA1DKNkV6//uaGSP2Y+OHvBLApACo3am+nHvnws9lZM3RIDZDMGO6gmiva0l8DAL8+exGfgkw+uyspzQpUoMb9sgB/CdGlcMAAAAASUVORK5CYII="
  },
  {
    "id": "golden_sword",
    "tags": [
      "weapon",
      "sword",
      "gold",
      "yellow",
      "diagonal"
    ],
    "type": "weapon",
    "material": "gold",
    "description": "Golden Sword: Warm yellow to amber tones, dark brown-gold outline, vibrant specular sheen.",
    "palette": [
      "#281E0B",
      "#3F2E0E",
      "#493615",
      "#684E1E",
      "#825D16",
      "#896727",
      "#DC9613",
      "#E9B115",
      "#EAEE57",
      "#FDFF76",
      "#FFFFFF"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAErklEQVR4Ae3BsYog1mEF0Ovrgaiy2CiaVvgLhjQGdWJVuUmVYhEMyKgI+QaxKiYf4WmMYAXBuEzjSsVUqTWVuhBhDKtNWHtAkEY4/6BXDMM95/wsyd8C/CQ315d5yhpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmHURGHZzfZkTL1+9zmP66OrdnGiAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYNZF4Am7ub7MiZevXufEm7cvcuL9Z7/PY2qAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYNZF4BHdXF/mxMtXr3PizdsXOfH+s9/nxEdX7+bE3f1DTjTArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMOsicODm+jInXr56nRNv3r7IifeefZATH129mxN39w95TA0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzLoI026uL3Pi5avXOfHm7YuceO/ZBznx/Oo2J+7uH/KUNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0w6yKP7Ob6Mo/pi6++z1N2c32ZE5+/+jQn3rx9kRPvPfsgJ55f3ebE3f1DljXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMOsiT9wnH/6YM5c58cVX3+fEzfVlTnz+6tOc+N+3/50T7z37ICeeX93mxN39Q/jpGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaYdZFH9sVX3+fMZU78yz//LSe+/uYXOfH5q09z4n/+48uc+Id/+k1OPL+6zYm7+4fweBpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmHURjvzh3/4uJ/7rt7/LiV/+62c58fzqNifu7h/C09UAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKyLPHFffPV9zlzmxCcf/pgT//6fP8+Jr29vc+Lu/iHsaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpg1kWeuF//6v2c+PNf38mJz27/khMfX/08Jz6+eieP6e7+ITxdDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMusgj+/Wv3s+Jj/7x73Piyz/+KSe+/e6HPGUfX72Tx3R3/xAeTwPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsy5uri/zmP7813dy4ss//iknvv3uhzymu/uHwGNpgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmDWRQ598uGPOfHZ7V9y4tvvfgg/3d39Q9jVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsi6+/+b+c+PqbAE9UA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCz/h8MNobSxqQgzQAAAABJRU5ErkJggg==",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAJFBMVEUAAACCXRb////clhNoTh5JNhUoHguJZyfpsRXq7lf9/3Y/Lg5Vuyq7AAAAAXRSTlMAQObYZgAAAExJREFUeNp9zVEOgDAIA1DK5kR6//uaGSP2Y+OHvBLApACo3am+nHvnws9lZM3RIDZDMGO6gmiva0l8dAL8+RxGfgnQx+yspzQpUoMb9pIB/M5ZjasAAAAASUVORK5CYII="
  },
  {
    "id": "netherite_sword",
    "tags": [
      "weapon",
      "sword",
      "netherite",
      "dark_gray",
      "diagonal"
    ],
    "type": "weapon",
    "material": "netherite",
    "description": "Netherite Sword: Deep charcoal-grey alloy with subtle purple/warm undertones, smooth dark outline.",
    "palette": [
      "#160814",
      "#231012",
      "#2F2122",
      "#322727",
      "#4A2940",
      "#3B393B",
      "#603432",
      "#4F3C3E",
      "#51444E",
      "#734543",
      "#5D565D",
      "#706770",
      "#867B86"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEt0lEQVR4Ae3BsYswdmEG4NeXKxZqTWn88g3hQ5JIykGCWaQOIdwgGW7M35U1Y5ZuboIYwemjlaJNQJSTD4ezBIdKlON0LUT/h/yG43if5/lakr8F+EquL6/ymDXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMOsiMOz68ion3v3g/Tykjz/6MCcaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBph1EXjEri+vcuLdD97PiS/+/EVOvPKtV/KQGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaYdRF4QNeXVznx7gfv58Snv/xFTnzv37+fEx9/9GFO3N7f5UQDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMuAgeuL69y4s333smJT3/5i5z49huv58THH32YE7f3d3lIDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMugjTri+vcuLlt5/lxOe3v8+Jb/zrSznx4x/+R07c3t/lMWuAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYNZFHtj15VUe0icvnucxu768yomvv/rNnPjtr/8nJ549eZoT//2zn+fE7f1dljXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMOsij9zLbz/Lietc5cQnL57nxPXlVU58/dVv5sTnf/hdTjx78jQnbm5ucuL2/i58dQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzLrIA/vkxfOcuM5VTrz53jt5SP/w8pc58fkffpcTz548zYmbm5ucuL2/Cw+nAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZF+HIm++9kxP/+fynOfHsydOcuLm5yYnb+7vweDXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMOsij9wnL57nIb389rOc+Pazf8uJ33z285y4vb8LuxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmHWRR+67r72eE6/8019z4r9+9pOceOutt3LipadPcuKNnLm9vwuPVwPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsy7ywL772us58YPvvJYTP/r0Vzlxe3+XIzc3eUgvPX2SE2/kzO39XXg4DTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMuri+vMpD+su//H9O/OjTX+XE7f1dHtLt/V0e0hthWQPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsy5y6I9f/l9O/OXFn3Li9v4ufHW393dhVwPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsy4++9+bnPjnf/wywOPUALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsvwMxrYXBWDQd1AAAAABJRU5ErkJggg==",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAKlBMVEUAAACGe4ZwZ3BdVl1zRUNRRE5PPD5gNDI7OTtKKUAyJycvISIjEBIWCBTo6UOrAAAAAXRSTlMAQObYZgAAAE9JREFUeNpVzFEOgDAIA9CNCVqs97+u0Wxk5YPwSqBJAVD3TrV1il1tbuLhYxr4mmewdliua8T0CqxcD8X3yUhuPtjISoDrH1lBskk91OAFQM4CosBrRCoAAAAASUVORK5CYII="
  },
  {
    "id": "wooden_sword",
    "tags": [
      "weapon",
      "sword",
      "wood",
      "brown",
      "diagonal"
    ],
    "type": "weapon",
    "material": "wood",
    "description": "Wooden Sword: Oak wood plank color palette, warm browns, stepped pixel bevels.",
    "palette": [
      "#20180A",
      "#281E0B",
      "#372910",
      "#473614",
      "#493615",
      "#594319",
      "#684E1E",
      "#755821",
      "#866526",
      "#896727"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEmklEQVR4Ae3BsWqehwEF0NvL71APolIhJJhCwJsoxXSJ6GK69hW75AE8dkhGb8FZQ3C7BBEyyBAqB1ENcaF9h3yDEPec85sk/wvwq1xdnucxa4BZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpg1ikw7OryPEe8fHGRIy7OnuSIv//jxxzRALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsU+ARu7o8zxEvX1zkiIuzJzni9u5DHlIDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALNOgQd0dXmeI16+uMgRF2dPcsTt3Ycc8er1uxxxfXOfIxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmHUKHHB1eZ4jXr64yBEXZ09yxO3dhxzx6vW7HHF9c5+H1ACzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArFOYdnV5niNevrjIERdnT3LE7d2HHPHq9bsccX1zn8esAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZpzywq8vzPKQ3b9/nMbu6PM8Rz589zREXZ09yxO3dhxzx6vW7HHF9c59lDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMOuWROz875Yiry/Mc8ebt+xxxdXmeI54/e5oj/vT8LEd8+/1djvj6u59zxPXNffj1GmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaYdcoDe/P2fY64ujzPEc+fPc0R725/yRHPnz3NEX/4+Lc54tvv73LE19/9nCOub+7Dw2mAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYNYpHPKXP/4uR/z77kMe0tff/Zwjrm/uw+PVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsUx65N2/f5yGdn51yxPu7/+aIf/1wnyOub+7DrgaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZp3yyP3t849zxGefPs0RX33zU4745OKjHPHJxUd5SNc39+HxaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpg1ikP7G+ff5wj/vrn3+eIL778MUdc39znMfvk4qM8pOub+/BwGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaYdbq6PM9D+uzTpzniiy9/zBH//OE/eUjXN/eBh9IAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKxTDjo/O+WIr775KUdc39yHX+/65j7saoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpg1und7S854t3tLwEepwaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZv0fVSiFH78hVo8AAAAASUVORK5CYII=",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAIVBMVEUAAACJZyeGZSZ1WCFoTh5ZQxlJNhVHNhQ3KRAoHgsgGAq5qgOcAAAAAXRSTlMAQObYZgAAAEtJREFUeNpjgACODiijWQsqYGQFFVBegE2gg4EjCCzQ3tCqClbBERUcBVEZWgoUAMt1QWg2rw6ISOKEVWChDk8GhlVgFRBxIA/KAACwZBM6I7NtewAAAABJRU5ErkJggg=="
  },
  {
    "id": "stone_sword",
    "tags": [
      "weapon",
      "sword",
      "stone",
      "gray",
      "diagonal"
    ],
    "type": "weapon",
    "material": "stone",
    "description": "Stone Sword: Rough cobblestone gray tones with dark charcoal border.",
    "palette": [
      "#281E0B",
      "#212121",
      "#493615",
      "#494949",
      "#684E1E",
      "#5A5A5A",
      "#896727",
      "#787777",
      "#95918D",
      "#B3B1AF"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEhklEQVR4Ae3BMY4YBwEF0M9nc4BFCgUSjuVqK0c0EYKGwoVHch1ugRDnSJEiPXV8gVUOkDgXiOTKYy30qVLDHTLFavXfe79J8r8Av8pxHHnKGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaYdRMYdhxHrnjz+lWuePb8Ra74xz//lSsaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBph1E3jCjuPIFW9ev8oVz56/yBUPHz/kMTXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMOsm8IiO48gVb16/yhXPnr/IFQ8fP+SKr77+Jlec55krGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaYdRO44DiOXPHm9atc8ez5i1zx8PFDrvjq629yxXmeeUwNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8y6CdOO48gVb16/yhXPnr/IFQ8fP+SKr77+Jlec55mnrAFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWTd5ZMdx5DHd39/nKTuOI1d8/vJlrnj2/EWuePj4IVd89fU3ueI8zyxrgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmDWTZ6429vbXHEcR664v7/PFcdx5IrPX77MFX/9y59zxfc//Jgrvn37Nlec5xl+vQaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZt3kkd3f3+eK4zhyxecvX+aK9+/f54rPX77MFX/8w+9zxfc//Jgrvn37Nlec5xkeTwPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAs27CJX//8stc8fCf/+Qxffv2ba44zzM8XQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzLrJE3d/f5/HdHt7myt+/vnnXPHu3btccZ5n2NUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKybPHHHF5/mis8++SlXfPfut7ni7u4uV9zd3eUxnecZnq4GmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWbd5JEdX3yaK/72p9/lin/f/zdXnA+/5Cm7u7vLYzrPMzyeBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFm3RzHkcf02Sc/5Yp/3/83V7x/+CWP6TzPwGNpgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmDWTS66vb3NFd+9+22uOB9+Cb/eeZ5hVwPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAs27ev38fYFMDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALP+D9O5gcyY8lF/AAAAAElFTkSuQmCC",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAIVBMVEUAAACzsa+VkY14d3eJZydaWlpoTh5JSUlJNhUhISEoHgusYD9lAAAAAXRSTlMAQObYZgAAAEtJREFUeNpjgAD2ciijSBIqoKgJFRCagE2gnIHdECxQWlAsDFbBbmlkCVFpHAwUAMtVQmiOzHKISMuCmWCh8iwGhplgFRBxIA/KAADp8xCzhOR0qgAAAABJRU5ErkJggg=="
  },
  {
    "id": "trident",
    "tags": [
      "weapon",
      "trident",
      "prismarine",
      "cyan",
      "diagonal"
    ],
    "type": "weapon",
    "material": "prismarine",
    "description": "Trident: Three prongs, cyan prismarine and brass accent, 45-degree angle.",
    "palette": [
      "#164739",
      "#2E5E50",
      "#407969",
      "#6B6B6B",
      "#589D8E",
      "#969696",
      "#D8D8D8",
      "#FFFFFF"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEgUlEQVR4Ae3BMW6eBwEG4NevfIIOSFVWpD/KEKFOsCQbrFlgzIytHABxAMQFYnOG5ARmyMJgpqpLq98HqGgysHCAcod+g2W9z/NcJPk5wKQGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWZdBg64ubnJEVdXVzni4uIi/HINMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8y6DNNubm5yxNXVVY54eHjIYzqfzznidDrliIuLizymBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmXYYn7ebmJkdcXV3liIeHhxzx/PnzHHE+n3PE6XTKEbe3t3nKGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaYdRmmPTw85Ijnz5/niPP5nCNOp1OOuL29zRHX19d5yhpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmHUZnrTvv/8+R/zj3//MEefzOUecTqcccXt7myOur69zxPl8zhGn0ylHXFxc5IgGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWZdhiftX//7MUe8eP0qR/zpb3/JEX/+7e9zxPX1dY44n8854nQ65Yh3797lMTXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMOsiyc/hyXr59k2O+OrZ13lM//3xPzniw1//niNOp1OOePfuXY54//59HlMDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMukvwcHs2v/vC7HPHim9/kiB++/S6P6Y+//iZP2fv37/OUNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0w6zIc8vLtmxzx1bOvc8QP336XI77c3ecxvb+7D4+nAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZlxn38u2bHPHi9asc8enDxxzx5e4+8Es1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTDrMk/cy7dvcsSL169yxKcPH3PEl7v7wGNpgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmDWZR7Zy7dvcsSL169yxKcPH3PEl7v7wFPVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsyxz08u2bHPHi9asc8enDxxzx5e4+sKoBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFmXL9++yRFfPfs6R3z68DFHfLm7D/DLNMCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0w6/Knz59zxE+fP+eIL3f3AR5HA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCz/g8uVHmIs9tybwAAAABJRU5ErkJggg==",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAbUlEQVQ4y2NgoAeYNm3afxCgSPONGzfABoBoog3DpRkkTrQBZGsGgezs7P96cQH/0TUT7Q2Q5oi5fWBD0DWDDCfKAIfKTDBGdglRmsXcLcEaQTQIgzTBMNE2gzSSHO8wf480zWQHGCy6yNYMBACktqum4kbbjgAAAABJRU5ErkJggg=="
  },
  {
    "id": "mace",
    "tags": [
      "weapon",
      "mace",
      "heavy",
      "metal",
      "diagonal"
    ],
    "type": "weapon",
    "material": "iron",
    "description": "Heavy Mace: Heavy cuboid head, heavy dark metallic bevels, cylindrical handle.",
    "palette": [
      "#1E2229",
      "#2E333B",
      "#234269",
      "#424752",
      "#555C69",
      "#506390",
      "#666C7A",
      "#7C8491",
      "#7A82C4",
      "#99A1AE",
      "#B5A5CA",
      "#BFCEE7"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAFAElEQVR4Ae3BMWud5wGG4TsP5wfYRlRdVINpHdngzRCsKZxFpUNRRBODEXQQGoLBu4dOHrpqKZ6MU0iHQvFuZA7d2y5ZvgYdn+FsxjjJP0j+g9/hQzz3dX0C/Iz0kZaHx8xp9foV+nhBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1Fqja8vCYEQ8fnTDi9r0HzGn1+hUjvjz5mhEf3r9jxOr1K0YESbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVWqArbXl4zIiHj04Y8ebigjn95a9/Y8T6cmLE99N3jPjpxx+YU5BUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0FmtXy8JgRDx+dMOLNxQUjvp++Y8Sn+/vM6e//WjHiz39aMmK7mZhTkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrQUasjw8ZsTDRyeMeHNxwYgP798x4o9ffMWIvb09Rty+94ARz54+ZsRnB58zp+1mYkSQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtBZrV//7zX0Z8ur/PkP195nT73gNGPHv6mDl9eP+OEZ8dfM6cgqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSai3QkNXrV4w5Zk6/+vUuI/b29hjx7Olj5rS+nBhx7foNrrIgqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRanwA/oyvrN7fuMOL3f/iCEevL/zOn9eXEiGvXbzBiZ2eXEevLiRHbzcSIIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWgs0q6PTc0bcvXmfEd9+c8aIa9dvMGJnZ5cR167fYMTOzi4j1pcTI7abiTkFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVWqAhR6fnjLh78z4j/vnvfzBiu5kYcusOc9rZ2WXE+nJixHYzcZUFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVWlDu6PScEWfLA0Y8efGSEW9Xz5nTdjMx5NYdRvz04w+M2G4mmgVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNVacMUdnZ4z4mx5wIgnL14y4u3qOc22mwnNJ0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqdaCmR2dnjPibHnAiCcvXjLi7eo50lUVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUa7E8PGZOd2/eZ8STFy8Z8Xb1HKlVkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrQWDfvu7fUZ8+80ZI7abCUkfJ0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqdZifTkxYn05IelqCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqvULtTaWfQ7XBLMAAAAASUVORK5CYII=",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAJ1BMVEUAAABCR1IuMztVXGmZoa6/zud8hJG1pcp6gsQjQmlQY5BmbHoeIimfHQpmAAAAAXRSTlMAQObYZgAAAE9JREFUeNpdi0EOwCAMw2poOxj9/3unHYbIfLOj2AZMwAPrHN49qtXhLT1OJz3oX2FlZoAUh2rsUy31e1RDfJrs13xf4gd/h6E7q0yo0vAALKYCQcUVkjkAAAAASUVORK5CYII="
  },
  {
    "id": "bow",
    "tags": [
      "weapon",
      "ranged",
      "bow",
      "wood",
      "diagonal"
    ],
    "type": "weapon",
    "material": "wood",
    "description": "Bow: Curved wooden arc, straight white bowstring, smooth diagonal curvature.",
    "palette": [
      "#281E0B",
      "#493615",
      "#444444",
      "#684E1E",
      "#896727",
      "#6B6B6B",
      "#969696"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEMUlEQVR4Ae3BoY5QBwIF0Ls3Y7AkI5DUohAdjXhmfqB/Npp/aAXmCfQqDAmOhJLQpJqimt1/4InJ5J5z/pPkfwEmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0w6ybwhN3f3WbZu//+nSsaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBph1E6bd393mKXvz+nmu+PztRx7TyxfPcsXnv/7JFQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzLoJj+r+7jaP6c3r57ni87cfueLli2e54u27r3nK3n/IJZ++fM8VDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMugmX3N/d5opffv0tV/z75x+54u27r3lM7z/kkk9fvucxHceRK87zzGNqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmDWTcbd393mil9+/S1XvHr1Kld8zDWffn/IsuM4csV5nnnKGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaYdZMn7v7uNlf88utvueLVq1e54uPHj7ni4eEhy47jyBXneWZZA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzbjLu3z//yBUfc83Dw0OWHceRK87zDD+vAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZN3lk93e3ueLN6+e54u27r7ni0+8PWXYcR644zzM8ngaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZt3kifv87Uf4ecdx5IrzPMPT1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArJs8cS9fPMsV7z/kSTuOI1ec5xl2NcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0w6yYX3d/d5oo3r5/nirfvvuaKT1++5zEdx5ErzvMM/KwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWbd5JF9/vYjT9lxHLniPM/AY2mAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYNZNxh3HkSvO8ww8VQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzLrJI3v54lmueP8hl5znGVjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsm1z07r9/54rPf/2TKz59+R7g5zTArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMOv/a7tuR/H+fDgAAAAASUVORK5CYII=",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAZ0lEQVR42mOgK/A0E/2PjEnW1Jmu/j/DTw6EwWwNOW7chqBoQmiAYcKas7OzQRqxanBxcSGsedq0aWAaJk5jzQgDQM4mWzMsoPBoJmw72AACmgm7gL6aMZ2P0EyWAeiaSfcCuYBczQDVGni1FlvOEgAAAABJRU5ErkJggg=="
  },
  {
    "id": "diamond_pickaxe",
    "tags": [
      "tool",
      "pickaxe",
      "diamond",
      "cyan",
      "diagonal"
    ],
    "type": "tool",
    "material": "diamond",
    "description": "Diamond Pickaxe: Curved cyan pick head, wood handle, selective outline.",
    "palette": [
      "#082520",
      "#281E0B",
      "#0E3F36",
      "#493615",
      "#684E1E",
      "#896727",
      "#27B29A",
      "#2BC7AC",
      "#33EBCB"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEXElEQVR4Ae3BMWrnCQEG0G8+Uuw0WwQC08XCPcA0aSx22lzCwiushewBthAGERTtcgErQdJqa2UZGGVmYxBxcQsh6yAL4x3mV/wJ33vvWZIPASY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTDrLJzUp59fhY/3nz/9OXy8BpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmnYVDPv38Kkd89rtf54j3f/06R3z/zbc5pbOL8xzx95/9PEf86L9vc8Tli+c54re/v88pNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0w61mSD+FkPv38Kkf87x//ylN2+frLnNJP/vA6R9zcPuSIu/vHnFIDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALOeJfkQOJHrq4sccf/L3+SI77/5Nkd8/cVXOeL9m3c5pQaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZj1L8iHwka6vLnLE5YvnOeKPf/l3jvjwq1/kiLOL8xzxtx//NEe8f/MuRzTArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMOssTLu+usgRr16e54ib24cccXf/mCM++eKrHHH5+ss8ZQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzDoLT9r11UWOuHzxPEfc3D7kiLv7x3A6DTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMOgsndX11kSNevTzPETe3Dzni7v4xy84uzvOUNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0w6ywccn11kSMuXzzPETe3Dzni7v4xfLxPfniZp6wBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFnPknzIsOurixzx6uV5jri5fcgRd/eP4XQ++ewHOeL9m3c5pQaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZp3libu+usgRly+e54ib24cccXf/GJ6u92/e5SlrgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmDWWU7s+uoiR7x6eZ4jbm4fcsTd/WPgqWqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYNZZTuztP7/LEW9vv8sRd/ePgVUNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8w6y4nd3T8GOI0GmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWb9H/GOczm+xufbAAAAAElFTkSuQmCC",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAHlBMVEUAAAAz68srx6wnspqJZydoTh5JNhUOPzYoHgsIJSBDqdTeAAAAAXRSTlMAQObYZgAAAEVJREFUeNpjwArKywvANLuQsXoqmFU509gDKplkCaHZIowmgBkpDZMnQAQYgAywAMOkCRABhokTIAIMnFABqBYoowPNZgA7zw9D/CrJmgAAAABJRU5ErkJggg=="
  },
  {
    "id": "iron_pickaxe",
    "tags": [
      "tool",
      "pickaxe",
      "iron",
      "metal",
      "diagonal"
    ],
    "type": "tool",
    "material": "iron",
    "description": "Iron Pickaxe: Metallic silver-grey pick head, wood handle, crisp 1-pixel steps.",
    "palette": [
      "#181818",
      "#281E0B",
      "#493615",
      "#444444",
      "#684E1E",
      "#896727",
      "#C1C1C1",
      "#D8D8D8",
      "#FFFFFF"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAETElEQVR4Ae3BoWrfiwEG0K8fmagthMRVXl0THRGTJ+gbTPVdZjcV2GBQO7GIXjGYmdzgilRdCBGpmBnk2u4d+hN/wnfOeZPke4BJDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMOgsndXNzE37czz//HH5cA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzzsIhNzc3OeLLly854uvXrzni27dvOaWLi4sc8enTpxzxu//9J0e8v3ybI/74t8ecUgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAs94k+R5O5ubmJkf88ssvec0+f/6cU/rXX3+fI+7un3LEw+NLTqkBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFlvknwPnMjt1XmO+MOf/5kjvn37liM+fvyYI56fn3NKDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMepPke+AH3V6d54j3l29zxD/+/d8c8ae//D1HXFxc5Ijr6+sc8fz8nCMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBph1FqbdXp3niOsP73LE3f1Tjnh4fMkRHz9+zBGfP3/Oa9YAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKyz8KrdXp3niPeXb3PE3f1Tjnh4fAmn0wCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArLNwUrdX5zni+sO7HHF3/5QjHh5fsuzi4iKvWQPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAs87CIbdX5zni/eXbHHF3/5QjHh5fwo/76aef8po1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTDrTZLvGXZ7dZ4jrj+8yxF390854uHxJZzO5eVljnh+fs4pNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0w6yyv3O3VeY54f/k2R9zdP+WIh8eX8Ho9Pz/nNWuAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYNZZTuz26jxHXH94lyPu7p9yxMPjS+C1aoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpg1llO7Nfn33LEr/e/5YiHx5fAqgaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZp3lxB4eXwKcRgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAs/4PvURzWxoUWXYAAAAASUVORK5CYII=",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAHlBMVEUAAAD////Y2NjBwcGJZydoTh5ERERJNhUoHgsYGBhl7cYfAAAAAXRSTlMAQObYZgAAAEVJREFUeNpjwArS0hLANJuQsVopmJU509gDKllkCaHZI4wmgBklDZMnQAQYgAywAMOkCRABhokTIAIMnFABqBYoowPNZgA3CQ9j/SFa9AAAAABJRU5ErkJggg=="
  },
  {
    "id": "golden_pickaxe",
    "tags": [
      "tool",
      "pickaxe",
      "gold",
      "yellow",
      "diagonal"
    ],
    "type": "tool",
    "material": "gold",
    "description": "Golden Pickaxe: Butter-yellow pick head, warm wooden stick.",
    "palette": [
      "#281E0B",
      "#3F2E0E",
      "#493615",
      "#684E1E",
      "#825D16",
      "#896727",
      "#E9B115",
      "#EAEE57",
      "#FDFF76"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEYUlEQVR4Ae3BMYvfBwEG4DdvDyQOgpEr2fINhCy3FUO229Wt0M0PIXZo8RO4uJ3araNDz8VocOiqnc6peNxQAkUoXHGL3yG/4c/xPs/zKMnbAJMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBph1Fk7qkw/fD+/u48/ehHfXALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCss3DIJx++nyN+/aePcsS3//1Pjnj7j1c5pUcfvMwxf8sRX/77bY549vRxjvj9n29zSg0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzDoLh3z82Zsc84cc8dd//S8P2eefvsoRv/p5DvnBF09yxNX1XR6yBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmnYWT+vizN1n20W/Pc8Qf//IyR3yUVzniiy/fyxE3tzmpBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmPUryNvCOLi/Oc8Szp49zxN//+W2OeP27H+aIRx+8zBG/eHGdI15/9V2OaIBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpg1lmYdnlxniNePH+SI66u73LEze19jvjlb97LEZ9/+ioPWQPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAs87Cg3Z5cZ4jnj19nCOuru9yxM3tfTidBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmnYWTurw4zxEvnj/JEVfXdzni5vY+yx598DLHXOeUGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaYdRYOubw4zxHPnj7OEVfXdzni5vY+vLuf/PhZHrIGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY9SvI2wy4vznPEi+dPcsTV9V2OuLm9D6fzs5/+KEe8/uq7nFIDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALPO8sBdXpzniGdPH+eIq+u7HHFzex8ertdffZeHrAFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWWc5scuL8xzx4vmTHHF1fZcjbm7vAw9VA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzznJiX3/zfY74+vr7HHFzex9Y1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArLOc2M3tfYDTaIBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpg1v8BKglwgnD4fG4AAAAASUVORK5CYII=",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAHlBMVEUAAAD9/3bq7lfpsRWJZyeCXRZoTh5JNhU/Lg4oHgvtX/hPAAAAAXRSTlMAQObYZgAAAERJREFUeNpjwApCQwPANKuQsWoZmBXRYewJlSyygNDsmUYNYEbJhOYGiAADkAEWYGhqgAgwNDZABBg4oAJQLVDGTDSbAQrxDxLqM58SAAAAAElFTkSuQmCC"
  },
  {
    "id": "netherite_pickaxe",
    "tags": [
      "tool",
      "pickaxe",
      "netherite",
      "dark_gray",
      "diagonal"
    ],
    "type": "tool",
    "material": "netherite",
    "description": "Netherite Pickaxe: Dark heavy matte finish, thick silhouette.",
    "palette": [
      "#231012",
      "#2F2122",
      "#4A2940",
      "#3B393B",
      "#603432",
      "#434043",
      "#4F3C3E",
      "#734543",
      "#5D565D",
      "#706770",
      "#867B86"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAENklEQVR4Ae3BMYulBwEF0JvLK1MsJoTEJs6YJrgyxFIstggpVmz8obKNKawCllNMlIWQ4mkQoxDM7Css7OJ/yFcMj3vOeSvJDwEmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0w6xSe1MuPX4Qf7/Ovvgg/XgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAs07hkJcfv8gRv/n9Z7lm3/3nuxzx/Zvvc8TLvMhT+vZ//8gRf/n73/KUGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaYdQqHfP7VFznkDznk63//Ndfs+fPnOeKdX36YI957868c8fX9JdesAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZp/CkPv/qiyx7+9t/5oif5aCffphjHnLNGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaYdQoccHdzmyM+eedZjvjz69c54nmO+fVnv80hf/pjjjhfHnNEA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzTmHa3c1tjvj0o5sc8er+IUecL4855PXrHPG7X/wq16wBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFmncNXubm5zxCfvPMsRr+4fcsT58phr9t677+WaNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0w6xSe1N3NbY749KObHPHq/iFHnC+P4Xo1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTDrFA65u7nNEW+//0GOeHX/kCPOl8ewqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWW8l+SHD7m5uc8S7H97kiG++fMgR58tjeDo/f/aTHHG+POYpNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0w65Qrd3dzmyPefv+DHPHNlw854nx5DNfrfHnMNWuAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYNYpT+zu5jZHfPrRTY54df+QI86Xx8C1aoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpg1ilP7L9vLjni1f1DjjhfHgOrGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaYdcoTO18eAzyNBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFm/R/b0GjRPVPG6gAAAABJRU5ErkJggg==",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAACGe4ZwZ3BdVl1zRUNPPD5DQENgNDI7OTtKKUAvISIjEBKxjxDsAAAAAXRSTlMAQObYZgAAAEVJREFUeNpjwApmzpwApjkFhSxngVmzdwd7M0DAUmsIzVUdvAHMWLJh0waIAMPGDRABCIOrmwHCWAYkuKECUC1Qxm40mwGSfBRqSnvsrAAAAABJRU5ErkJggg=="
  },
  {
    "id": "diamond_axe",
    "tags": [
      "tool",
      "weapon",
      "axe",
      "diamond",
      "cyan",
      "diagonal"
    ],
    "type": "tool",
    "material": "diamond",
    "description": "Diamond Axe: Broad wedge head, cyan palette, wooden shaft.",
    "palette": [
      "#082520",
      "#281E0B",
      "#0E3F36",
      "#493615",
      "#684E1E",
      "#1E8A77",
      "#896727",
      "#27B29A",
      "#2BC7AC",
      "#33EBCB"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEUUlEQVR4Ae3BMYvfhQEG4NeX/2CWQAMHmZpCCXR1uaVD7HhLp36Luoirq65dKnTLF3DqkrVOgosdD4ImPUIplTqIp0EE+x3yG/4c7/M8byX5JcCkBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmnQIH3H9ymXP67rMvwptrgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmDWKUy7/+QyRzz+9JOc0/M//TlHfPfZF1nWALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsU7jT7j+5zBGPP/0kR3z/+Zc54nTxIJxPA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzTuGs7j+5zBGPP/0kR3z/+Zc5p5+/+TZH/P7HFzni0R9/nSP+9veb3GUNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8w6hbP66d//zTmdLh7kiJ+/+TZH/Hj9VY74+sOPcsSL997PsgaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZr2V5JdwZ739+Dc5pz/86jZHfP3hRznix+uvcsS93/02R/zrg49zxOvnL3NODTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMOoU77fXzlzni6vIiRzx6eC9HvHjv/Rxx769/CW+uAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZp3CnXV1e5Ih333mQI54+e5Ujrm9uc8TbH3ycc3r9/GXusgaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZp3CWV1dXuSIRw/v5Yinz17liOub25zT6+cvw5trgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmDWKRxydXmRIx49vJcj/vHP/+WI65vbsKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFmnjLu6vMgR777zIEc8ffYqR1zf3AbeVAPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAs065464uL3LEo4f3csTTZ69yxPXNbeBcGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaYdcqZXV1e5Ih333mQI54+e5Ujrm9uA3dVA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzTjmzF//5IUe8ePZDjri+uQ2saoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpg1ilndn1zG+A8GmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY9X9JWW/P7e4THAAAAABJRU5ErkJggg==",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAIVBMVEUAAAAz68srx6wnspqJZyceindoTh5JNhUOPzYoHgsIJSBnmo+OAAAAAXRSTlMAQObYZgAAAD9JREFUeNpjQAEcDVBGowRUQFgDKmBsngBmLFQOngBmcC03tYLIlU2GMNg9uRZABIAqwAKZUONKcAkwzGRABQB0ogw79ps+WQAAAABJRU5ErkJggg=="
  },
  {
    "id": "iron_axe",
    "tags": [
      "tool",
      "weapon",
      "axe",
      "iron",
      "metal",
      "diagonal"
    ],
    "type": "tool",
    "material": "iron",
    "description": "Iron Axe: Wedge-shaped blade, high-contrast bevel, clean outline.",
    "palette": [
      "#181818",
      "#281E0B",
      "#493615",
      "#444444",
      "#684E1E",
      "#896727",
      "#969696",
      "#C1C1C1",
      "#D8D8D8",
      "#FFFFFF"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAER0lEQVR4Ae3BIY5dhwEF0JurX2AaaeRB8QKCTAYHTMAElAYFp0vIHrqBFhmUBhXUYAwqr6CVYmlYpJHBNyipNGFVugc/8DW655wvkvweYFIDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALNOgQNub29zSe/evQufrwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWacw7fb2Nkfc39/nkr799tsc8e7duyxrgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmDWKTxrt7e3OeL+/j5HvH//Pke8fPkyXE4DzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALNO4aJub29zxP39fY54//59LunTp0854g///XeO+NMfv8oRf/n7Y56zBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmncJF/fLLL7mkly9f5ohPnz7liA8fPuSIn/78c4748YfvsqwBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFlfJPk9PFvX19e5pNdf/S9H/PTnn3PEhw8fcsTXX3+dI77//vsccT6fc0kNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8w6hWftfD7niLubqxzx6vpFjvjxh+9yxF//9o/w+RpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmPVFkt/Ds3V3c5Ujvnn9ZY548/Zjjnh4fMoR19fXuaTz+ZznrAFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWadwUXc3Vzni1fWLHPHm7ccc8fD4lEs6n8/h8zXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMOsUDrm7ucoRr65f5Ih//us/OeLh8SnsaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpg1inj7m6ucsQ3r7/MEW/efswRD49Pgc/VALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsU565u5urHPHq+kWOePP2Y454eHwKXEoDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALNOubC7m6sc8c3rL3PEm7cfc8TD41PguWqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYNYpF/br+bcc8evb33LEw+NTYFUDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALNOubCHx6cAl9EAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKz/A957b4AdrwJoAAAAAElFTkSuQmCC",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAeUlEQVQ4y2NgoAdwcXH5D8Jka4YBkg2BaT548OD/GzdukGYAsmYY9jQT/Z/hJ0ecIRISEmADQDaDNE+bNg1Ma8hxE+8KkCEgDLIZ2RCQGNGGwJwNshnmFaINAGnuTFeHOxvmIpJtJjnuKdaM7OwhYjMIgDSSrZkSAABx5YE7nrv/FQAAAABJRU5ErkJggg=="
  },
  {
    "id": "netherite_axe",
    "tags": [
      "tool",
      "weapon",
      "axe",
      "netherite",
      "dark_gray",
      "diagonal"
    ],
    "type": "tool",
    "material": "netherite",
    "description": "Netherite Axe: Heavy dark axe blade, rich dark charcoal outline.",
    "palette": [
      "#231012",
      "#2F2122",
      "#322727",
      "#4A2940",
      "#3B393B",
      "#603432",
      "#434043",
      "#4F3C3E",
      "#734543",
      "#5D565D",
      "#706770",
      "#867B86"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEO0lEQVR4Ae3Bv4rmBwEF0Jvr1ykSTMQ/EJYZQ2BhZaKlBNkibLF2eQIfzSeQrULKBKuw4gQZCUJGNggREcYh2Md32F/xMdxzzhtJvgswqQFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWafAAc8fP805ffzlp+H1NcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0w6xSmPX/8NEd88NGznNUfc8jHX36aZQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzDqFB+3546c54oOPnuWIzz/7JOfV8PoaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBph1Cmf1/PHTHPHeb9/PEZ9/9kkesrd++U6O+P33f50j/vDnv+Qha4BZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpg1imc1d//9dcc8V7ez0P2w58/yhHffvN1jrj56lWWNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0w640k34UH6xdv/ijn9Jtnv8sR337zdY7453/+nSPe+fFPcsTNzU2OuL2/yzk1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTDrFB602/u7HHF1cZkjvvePv+WIm69e5YgnT56E19cAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKxTeNCuLi5zxIfvXuSIFy+vc8Tt/V0OubnJOd3e3+Uha4BZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpg1imc1dXFZY741Vtv5ogXL69zxO39Xc7p9v4uvL4GmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWadwiFXF5c54u1HFzniT19c54jb+7uwqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWaeMu7q4zBE/+OnPcsSrL65zxO39XeB1NcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0w65QH7uriMke8/egiR7z64jpH3N7fBc6lAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZp5zZ1cVljvjw3Ysc8eLldY64vb8LPFQNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8w65cz+99/7HPHi5XWOuL2/C6xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmDWKWd2e38X4DwaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpj1f6YhZ9obuatuAAAAAElFTkSuQmCC",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAf0lEQVQ4y2NgoAfw0nT4D8Jka26rbgNjkg2Bafa3sQNjkgwAKS5IL4BrBuHYsNj/CSZGxBmiLCCEYgBIM4gGiRPtCpBiEIZpNlJXJ90QfUUlsLNBmmCuIdoAkOZiV2e4BpiLSLaZ5LgHaXZ2cCZfs7Wl9QDZjBxgJAOSQpiaAADLaWMfk0BnhQAAAABJRU5ErkJggg=="
  },
  {
    "id": "diamond_shovel",
    "tags": [
      "tool",
      "shovel",
      "diamond",
      "cyan",
      "diagonal"
    ],
    "type": "tool",
    "material": "diamond",
    "description": "Diamond Shovel: Single scoop blade, diagonal shaft, clean cluster shading.",
    "palette": [
      "#082520",
      "#281E0B",
      "#0E3F36",
      "#493615",
      "#684E1E",
      "#896727",
      "#27B29A",
      "#2BC7AC",
      "#33EBCB"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEJUlEQVR4Ae3BMWrfhwEG0M8f/8GB4kEgyOYO9QG8CJrFXnWA3KJL6dq1vUFmXcC71myFQukUECg0tjCl1JCpKqIE3Dv4NwjxvfeeJfkcYFIDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALNOgSfsxZuLPKb//fPfOeLh9n0eUwPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAs06BR/TizUWOePXuuzym//zl7zniwx/+nCMebt/niAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZp0CB7x4c5EjXr37Lkc8/PghR/zy6ecc8avfvs5T1gCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArFOY9uLNRY549e67HPHw44cc8cunn3PE6fwsyxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmPUsyefAF7q8OM8R//jjn3LE6fwsRzz/zcsc8cM33+aIh9v3eUwNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8w6hWmXF+c54u3rsxzx0+9+nyOe/+37HPHDN9/miIfb93nKGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY9SzJ5/BkXV6c54i3r89yxNX1xxxxc3efI56/+nWOeLh9n2UNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8w6hUd1eXGeI15+/VWOuLr+mCNu7u7zmB5u34cv1wCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArFM45PLiPEe8fX2WI66uP+aIm7v7sKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFmnjLu8OM8RL7/+KkdcXX/METd394Ev1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArFMe2eXFeR7T29dnOeLq+mOOuLm7DzyWBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmnfLEvX19liOurj/miJu7+8BT1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArFMe2fVfP+WIn/713wBfpgFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWac8cTd39wG+TAPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAs/4PRAxjikJqXUsAAAAASUVORK5CYII=",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAHlBMVEUAAABJNhUoHgsz68sIJSAOPzaJZycrx6wnsppoTh6NJ1OoAAAAAXRSTlMAQObYZgAAADhJREFUGFeVyTkCACAMAkFyqv//sG3Ayu0GgJ+qkh2x51KxdiR7zQGmbleDfBwzazH/9vxiwHWgLn4QANVOSXqPAAAAAElFTkSuQmCC"
  },
  {
    "id": "shears",
    "tags": [
      "tool",
      "shears",
      "iron",
      "metal",
      "diagonal"
    ],
    "type": "tool",
    "material": "iron",
    "description": "Shears: Two interlocking curved metal blades, central rivet, diagonal orientation.",
    "palette": [
      "#5C2D1F",
      "#424242",
      "#6F352B",
      "#8B4336",
      "#A64F3F",
      "#707070",
      "#A8A8A8",
      "#D5D5D5"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEXklEQVR4Ae3BsYqlhQEG0G8/phOstjLmCYZbDirphLzDzSOkGsHaylrwIba4XTobyXbGad3biwtJodFOiJ15B//iMnznnBdJfg8wqQFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWXdh2uPDfY746NPPcsTpdMotXa/XHHE+n/OcNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0w6y48a48P9znixV/+miNOp1Nu6Xq95ojz+ZwjLpdLjjifz7mlBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFm3YWbeny4zxHvv/tOjvjzhx/mlq7Xa444n8854nK55IjT6ZTnrAFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWXfhkMeH+xzxwXsvc0T/9vcccTqdcsT1es0R5/M5R1wulxxxOp2yrAFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWXcZ9/hwnyM+eO9ljvjq+x9yxMunp9zS+XzOEZfLJUecTqfc0vV6zXPWALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsu/Csffnll7mly+WSI06nU464Xq854unpKUf8/M9/5DlrgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmDWXZ65x4f7HPHBey9zxFff/5AjXl3f5jl7enrKLX37xec54pfffs0Rr65v85w1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTDrLuP+8+v/suzx4T5H/P7N1zni22++zhG//PZrjnh1fZtlDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMussz99Gnn+WW/v3F5zni8eE+t/T+u+/klr776ccc8er6NvxxDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMusuNXS6XHHE+n3NLn3zySY740/VfuaXvfvoxt/Tq+jbcTgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAs+5yY09PT3nO3rx5kyN+/u+PuaVX17dhVwPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAs14k+T3P2Mcff5xbev36deC5aoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpg1l2eudevXwf4YxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmPV/MrF5VHDj8usAAAAASUVORK5CYII=",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAG1BMVEUAAADV1dWoqKhwcHCmTz+LQzZvNStCQkJcLR/CipSaAAAAAXRSTlMAQObYZgAAAEhJREFUeNqVzDESgEAIQ9EQJHD/EzvoDGypv3spgu+JZjztba6DbRtfr21c/pg7ADR6HYZTNY8FSGOQkiLWgEfUGA5kc8vEn26f6QFCsmQsWgAAAABJRU5ErkJggg=="
  },
  {
    "id": "flint_and_steel",
    "tags": [
      "tool",
      "utility",
      "iron",
      "fire",
      "diagonal"
    ],
    "type": "tool",
    "material": "iron",
    "description": "Flint and Steel: Curved steel arc holding dark flint piece.",
    "palette": [
      "#070707",
      "#161616",
      "#282828",
      "#323232",
      "#333333",
      "#474747",
      "#565656",
      "#717171",
      "#7F7F7F",
      "#9E9E9E",
      "#A8A8A8",
      "#B9B9B9"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEWUlEQVR4Ae3BIW5lBQAF0MtNEwSuCd8hJqPGsAVw9ZjuY1Ywi+hSMONgA8+gSdWYadJkBOIr2ANP/DT3nPNdkn8DTGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYNZdxj08POSWPn/+HLiVBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFm3eWNe3h4yBkfP37MW/b58+fA/9UAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKy73NjDw0PO+PjxY8748uVLznh6esoZv/zyS854eXnJGcdxhF0NMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8y6y7inp6eccRxH4K1qgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmDWXd64L1++5Iwff/wxt3QcR+BWGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaYdZc37q+//spb9vDwkDNeXl5yxnEcecsul0vO+Pr1a5Y1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTDrLjf28vKSW3p8fMwtPT4+5oynp6e8ZZfLJWf8+uuvOeOPP/7IGV+/fs1b1gCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArLvc2HEcecseHx9zxtPTU844jiO3dLlccsb9/X3O+Pvvv3PGt2/fsqwBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFl3eeOO48gt/fnnnznjOI7c0uVyyRk//fRTznj//n3O+PDhQ874559/csbz83POuF6vuaUGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWbdZdxxHHnLLpdLzri/v88t/fbbbznj06dPOeP19TXLGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaYdRem/fzzzznjw4cPOePTp0854/X1Nbf07t27nPH8/JwzrtdrzmiAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYNZd4ITff/89Z7y+vuaM+/v7nPHDDz/kjPfv3+eM5+fn3FIDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALO+S/JvmPX999/njHfv3uWM19fXnPHt27e8ZdfrNbfUALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsuzDter3mjOfn59zS9XoN/18DzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALP+A1LKhO23eYdDAAAAAElFTkSuQmCC",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAAnRSTlMAAHaTzTgAAABhSURBVHjabcsxEcAwCIVhNhyggRlEPAf4iII4Ya6FuOull/ZIL2z/B9BxgF+Pgb3Tmm1gZBskSh2hgTBfZIG1RBqRRJHZ6kyvzPbo+smzv1QqRFcR5QIu6lFOWIWZqcyqGwPEFZXDuhxGAAAAAElFTkSuQmCC"
  },
  {
    "id": "spyglass",
    "tags": [
      "tool",
      "copper",
      "amethyst",
      "diagonal"
    ],
    "type": "tool",
    "material": "copper",
    "description": "Spyglass: Cylindrical copper barrel with purple amethyst lens.",
    "palette": [
      "#331712",
      "#532B0B",
      "#552925",
      "#1E6566",
      "#7E3F39",
      "#A05611",
      "#A85F58",
      "#339090",
      "#BD6A28",
      "#DE923A",
      "#68BDBD",
      "#F4E063",
      "#FFFFFF"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEyklEQVR4Ae3BL68nZoEG0IcnN0FUFUrdpgXFzDA4BITQDZUkNSW1IDBAQLKCBIcBx4bBIPoFarrZZEOCqABDRpH5g5lCqu4wvagRIIDvsK/4ZfKccz6R5F8BJjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMOsqcEFPfvGVnPjw8U0u6c17j/Mia4BZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpg1lXgwJNffCUn/vOPX8iJz9y5nRNfuns3J36b7+fEm/ce55IaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBph1Faa9+87LOfHqW7dy4jP/vJ0TX7p7Nyd+9fWv58R388uc+G2+nxNv3nucEw0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzLoKL7R333k5J7721Vu5pL8+eJgTf8iZ7+ayPvv5T+WSGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaYdRUu6t13Xs6Jr331Vk68+tatnHj6/qOcePjjWzlx+6cPc+IPOfPXBw9z4kd3c1ENMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8y6Chf15PrzOfHNt27lxEuv/TonXn3rOznx9P1HOfHwx7dy5o858bSPcuJzP/x9LqkBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFlX4chP3vhyTtx+/bVc0vO/fCcnnr7/KCc+fHyTEx8+/l1O3Pvgo5x478HzvMgaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBph1lXE/eePLOXH79ddyST/71sOc+Pbbn8iJDx/f5JLuffBRTrz34HmWNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0w6yrjHj19lhO3X38tJx7++S858ejps5z4r1/lyJObj3Pi9Vf+nhPvPXge/v8aYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBph1lRfc23deyolv3HmWEz//v9/kxOc+9elc0pObj3Pi/vVNTty/DhfUALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsq1zY23deyonvvfEfuaQfvHGdE//9wce5pPvXN2FXA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzrnLo7Tsv5cSdV76YM3/LiY+eXefE/zz4R07cv34euJQGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWZd5dCfn30yJ+68kiMfPHg5J/738dOcuH/9PPCiaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpg1lUO3b++yZk/5ZLuX98EVjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMOsqF3b/+ibAZTTArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMOvfZCmPB5UMTAcAAAAASUVORK5CYII=",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAKlBMVEUAAAD////04GNovb3ekjq9aigzkJCoX1igVhF+PzkeZWZVKSVTKwszFxLdsQeLAAAAAXRSTlMAQObYZgAAAFJJREFUeNp9yDsWwCAIBVHCR0F8+99uTpqAjdPdoUtqdnoN6cd5yNOOK68hos3fWf8IfliZy5NZzXZ5RjfljEyUtyMTVDZzdIf5phYiQEcA3XoBJtoCXYU3DgwAAAAASUVORK5CYII="
  },
  {
    "id": "diamond",
    "tags": [
      "resource",
      "gem",
      "diamond",
      "cyan",
      "currency",
      "frontal"
    ],
    "type": "resource",
    "material": "diamond",
    "description": "Diamond Gem: Iconic multifaceted jewel, bright specular highlight, symmetrical frontal view.",
    "palette": [
      "#145E53",
      "#11727A",
      "#1C919A",
      "#1AAAA7",
      "#20C5B5",
      "#2CE0D8",
      "#4AEDD9",
      "#A1FBE8",
      "#D5FFF6",
      "#FFFFFF"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEmElEQVR4Ae3BsavuBQEG4Le3j0st53JFaLhTICJ3THEpaGhosM3gbg01NLRdaegu4aCbNrc0nM3h0GTgEG0NouJ0IcdCWg5H1OGGCPY/+Bs+Du/zPN9J8k2ASQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzDqFs7r36HGWffb2m+F8GmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaYdQqH3Hv0OEfcvPVGbrMneZojfpJjPnv7zfDtNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0w65Rx9x49zhE3b72RI165+STn9PDibo546XSRI+6++uMc8d3rV3PE9eVVljXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMOuUW+7eo8c54uatN3LEKzef5IiHF3dzTi+dLnLEB19/kSMevPBcjnjy21/nnK4vr3KbNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0w6xTO6lenH+SIJ3maIx7k+znklEPeyec54sELz+WI97OtAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZp5zZvUePc8TNW2/kiFduPskR7z7zfI545eaTnNPDi7s5p4///lGOuHP/Ikfc+cUvc8SzOeb68irn1ACzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArFM45Eme5pweXtzNbdb/fplD7l+Eb68BZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFmnjHv3medzxA//+bcc8frLL+Y2e+eLz3NOX336Rfj2GmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaYdcot9yRPc8Tvb/6TIx688FyO+MNf/5Fld166n3P6+oNPs6wBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFmnnNlnb7+ZI356/a8c8fKf3swRH//9oxxx5/5Fln316Rc54s79ixzxvw/fyxHXl1e5zRpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmHXKuH9/+U24vV5/+cUc8dqf/5JlDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMOuWWu768yjl978Wf54gHP/tRzunhxd2c0x/f/zBHvPab3+WI68urLGuAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYNYp464vr3LEsznm/Q/fyzm9n9vt+vIqfHsNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8w6hUOuL68Ct1UDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALP+D+HHdf0uxM7BAAAAAElFTkSuQmCC",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAIVBMVEUAAAD////V//ah++hK7dks4NggxbUaqqcckZoRcnoUXlN/hNeyAAAAAXRSTlMAQObYZgAAAFxJREFUeNqNjzkOxDAMAyORS1n8/4MXyGEnQIpMN1Po2L7S3f3wiMi+O4mUbw4kKK8QGUl6OQmUyldIAhgrhABw1BWSrKqSxjnELEmqucW/I2Ae4kEC8jbxzvubfzBNAqq5tnU2AAAAAElFTkSuQmCC"
  },
  {
    "id": "emerald",
    "tags": [
      "resource",
      "gem",
      "emerald",
      "green",
      "currency",
      "frontal"
    ],
    "type": "resource",
    "material": "emerald",
    "description": "Emerald Gem: Deep lush green hues, bright glint, clean geometric facets.",
    "palette": [
      "#002D00",
      "#005300",
      "#007B18",
      "#009529",
      "#00AA2C",
      "#17DD62",
      "#41F384",
      "#82F6AD",
      "#AFFDCD",
      "#DBFFEB"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAD30lEQVR4Ae3BMaoeaAEF0JvLv4GAEpjKBYyV4OAOLAdeMbVTiOAephAre0Gb1BYJzA6mD6SQ91AwICFF4PmENDZTJHEP+YqfcM85j5J8DDCpAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZl3BdN9n2PFxRA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzLuHMTY68evaQE7/9319zTf/4z79z4j5Pc+R5ONAAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKxL1t3kyKtnDzlx9+FNPmf3L1/kxJM/fZsT9/96miO3mdYAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKxLPnc3OfLq2UNO3H14Ez7d/csXOfHk+29z4v7rpzlym89aA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzLhl39+FNTvzu9Z9zTX/52e9zTT/kbzny8D4n7l++CJ+uAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZlzDt9sfXuaq373Lkpz8Jn64BZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFmX8Fm7/fF1lj35xS9z4j53WdYAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKxLmPbD+3/myN//myNfPA7X0wCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArEdJPmbZTc5882WOPLzPkbfvclVfPM6JP/zmjznx3Vc3OXKbaQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzLpk3fMcusuRb77Mmcc58vZdTjz59a9y4ruvbnLkNhxogFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmDWoyQfw/X8PNtuwxU1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTDrEq7rNnA1DTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPM+j8zpFFWJLVdowAAAABJRU5ErkJggg==",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAIVBMVEUAAADb/+uv/c2C9q1B84QX3WIAqiwAlSkAexgAUwAALQC5+lfcAAAAAXRSTlMAQObYZgAAAENJREFUeNpjwApmzoTQnCKuE8CMiSpuUWABIRW31AUghmqQWhmUYdaGxgg2a4UyPEpBDIZpFe1WEAPTgTJgsGoVVpsBDRwS6h42ddsAAAAASUVORK5CYII="
  },
  {
    "id": "amethyst_shard",
    "tags": [
      "resource",
      "gem",
      "amethyst",
      "purple",
      "diagonal"
    ],
    "type": "resource",
    "material": "amethyst",
    "description": "Amethyst Shard: Sharp crystalline spike, translucent violet to lavender ramp.",
    "palette": [
      "#54398A",
      "#6F4FAB",
      "#8D6ACC",
      "#B38EF3",
      "#CFA0F3",
      "#FECBE6",
      "#FFFDD5"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEV0lEQVR4Ae3BMYvfBwEG4Dcvt7p0cPDKQaC0s91Kh4JkCCgcinXWL+A5Zero5FIyOarU7bIE7JqlyEGXdCpEhIPALVk6dHCM3yG/4c/xPs/zIMnbAJMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBph1Fjjg6vI6vLunzz/PKTXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMOssTLu6vM4RX37xaZb97o//zH3WALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCss3CvXV1e54hHnz3OMT/mlB58/EOO+O6riyxrgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmDWWTipq8vrHPHlF5/miK+/ySFff/OTHPGrq9c54ruvLnLEi29fZVkDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALPOwiFXl9c54ve/fpxjfswpvf9eDvnTb77PERfn/wvvrgFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWWcZd3V5nSMeffY499n77+WQF9++yn128/JFjnh28yT3WQPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAs85yz11dXueIR589zn324OMfcsTf//zvHHFx/jCndPPyRY54dvMkyxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmHWWE7u6vM4RF+cPc8R//vsqp/TLP/wsR/zr6UWO+T6ndPfmNkc8u3kS3l0DzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALPOcmJ3b25zShfnD3PEhx98lCO+/NurHPHhBx/llG5evsgRz26ehNNpgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmDWWe65uze3OeLuzW2OeH13myMuzh/mlO7e3OaIZzdPwv3VALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCss4w7/+nDHHH35jZHXJw/zBH/uP5rjnh28yTsaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpg1oMkb3OP/faTv+SUPvn5L3LE67vbHPH0+eeBd9UAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwHSd5m2NXldU7p6fPPA6fSALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsB0neBpjUALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCs/wNko2qLJtAcZgAAAABJRU5ErkJggg==",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAGFBMVEUAAAD//dX+y+bPoPOzjvONasxvT6tUOYoaPFOGAAAAAXRSTlMAQObYZgAAAE1JREFUeNpjwA7Y0tIgjCQldYiAk6I5RMBFOBwsYOScCmakGJmmFoAEXAxT00ECqaEqYAGGspAQsABDeVlIAYSRHg4xlr00AWpTGqrFAMGSDqxEB/N+AAAAAElFTkSuQmCC"
  },
  {
    "id": "iron_ingot",
    "tags": [
      "resource",
      "ingot",
      "iron",
      "metal",
      "diagonal"
    ],
    "type": "resource",
    "material": "iron",
    "description": "Iron Ingot: Rounded metal brick, silver bevels, soft selective outline.",
    "palette": [
      "#353535",
      "#585858",
      "#5E5E5E",
      "#727272",
      "#828282",
      "#A8A8A8",
      "#D8D8D8",
      "#FFFFFF"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEJklEQVR4Ae3BsW1UCwAEwGXlAgioAaeOXIQbcHZF0Md3AWQ4s1NKIHQB6JBIid0BvwdecDrtzHxI8jfApAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZt0ELuh0OuWSnp+fs6wBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFk34aqdTqdcs4eHh1zSp0+fcsTT01OuWQPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAs24y7nQ65Zo9PDzkiLu7u/Dvvnz5kiOenp5ySQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzLrJQafTKdfs4eEhR9zd3YXrdXd3l0v68uVLjnh6esoRDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMujmdTjni27dvOeJ8Pgcu5fb2Nkfc3t7miLu7u1xSA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzbnLQy8tLjnh8fMwR5/M5XM7t7W2u2fl8zhFfv37NEff39znix48fOaIBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFk3ubCXl5cc8fj4mCPO53Mu6fb2NtfsfD7niNfX1xzx/v6eS/r48WOuWQPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAs25y5V5eXnLE4+NjLul8PueI19fXHPH+/p5l9/f3WdYAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKybHPTr168c8fnz51zS+XzOEa+vrzni/f09y+7v73NJv379yhHfv3/PJb29veWIBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFm3Tw/P+eI0+mUS/r8+XP4dx8/fswl/ffff7lmb29vuWYNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8y6yUHPz8854nQ6ZdmfP39yxO/fv3PN3t7ewuU0wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTDrQ5K/uWKn0ymX9PPnz1zS29tb4F81wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTDrQ5K/ASY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTDrf0CcbrCZ+80tAAAAAElFTkSuQmCC",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAAnRSTlMAAHaTzTgAAABWSURBVHjalc8xEcAwDENRkzKXTgIhCEIjSGbj3sWXXjpG2/ub4mbAX7B5qqrKPLULur51FwPurS46A3aPRGqCR6TtDMjeVGZEQCtIuThFz9YUZF5cfAGg5lJ3ApNkTAAAAABJRU5ErkJggg=="
  },
  {
    "id": "gold_ingot",
    "tags": [
      "resource",
      "ingot",
      "gold",
      "yellow",
      "currency",
      "diagonal"
    ],
    "type": "resource",
    "material": "gold",
    "description": "Gold Ingot: Warm butter-yellow brick, high-contrast shine, amber shadows.",
    "palette": [
      "#752802",
      "#B26411",
      "#DC9613",
      "#E9B115",
      "#FAD64A",
      "#FDF55F",
      "#FFFDE0",
      "#FFFFFF"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEa0lEQVR4Ae3BsYqmBwEF0LvXCWyzxYBWC6YKwVqWkM5yUTKFT2CxVRohICkshu2ETWMjCNuIbzCYJUU6AymC2G6wEIt0CYMEZCDwx3fIV/wM95zzIMn3ASY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTDrInBGN88uc05XL2+zrAFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWRfhXrt5dpn77OkH7+acbvJ5jrh6eZv7rAFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ+SfJ9hN88uc5/96o9X4Xw+/u1Njrh6eZtzaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpg1kUOunl2mfvs6Qfv5ogfvfmTsOvpB+/miN999kmOePH6lCMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBph1cfPsMke89+d/5ojT3XXgXPrweY7o2znkD/+4ziE//2uOaIBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpg1kUO+u7L93PEG2//KUec7q7D+fTh89xnp7vrHPHvv/wtR/z0F+/knBpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmHWRMzvdXeeIPnyeI0531zmnPnye++x0d50jvv70VY749qtT+OEaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBph1kXvuuy/fzxFv/OzjHHL6T4443V3niK8/fZUjvv3qlGWPHjdHXL71JPdZA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzLnLQ7b++yBE/fvOXOafT/36TI77+9FWO+ParU5Y9etwccfnWk5zT73/9Sc7pxetTjmiAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYNbF1cvbHHGTyxzxTl7liMu3noQf7tHj5pw++vCbHPNJzunF61PuswaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZl3koKuXtzniJpc54p33vsgRl3mSc3r0uDniow+/yX324vUpnE8DzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMucmZXL29zxE0uc8znOeLvn/035/Ti9SnwQzXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMOtBku8DTGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYNb/AVrncwsUiXscAAAAAElFTkSuQmCC",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAG1BMVEUAAAD//////eD99V/61krpsRXclhOyZBF1KALSidGuAAAAAXRSTlMAQObYZgAAAE5JREFUeNqVz0ESgDAMQlFMSOH+J3YmrVaX/bvHDpwk/SVSH2WnJeaKBhT5FpGGGI8iBw0xY6rGWAOvqVGkoUpuGoCqhyo357LVSfbBxRs/dgKAjgB7sgAAAABJRU5ErkJggg=="
  },
  {
    "id": "netherite_ingot",
    "tags": [
      "resource",
      "ingot",
      "netherite",
      "dark_gray",
      "diagonal"
    ],
    "type": "resource",
    "material": "netherite",
    "description": "Netherite Ingot: Heavy dark charcoal brick with subtle brownish alloy glint.",
    "palette": [
      "#111111",
      "#271C1D",
      "#31292A",
      "#3C3232",
      "#3B393B",
      "#4C4143",
      "#484548",
      "#4D494D",
      "#5A575A",
      "#737173"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEpElEQVR4Ae3BwYqehQEF0JvLHzQJI7pqY5OCCxvUjdJFhVJKn7x0Z1fZZBJcRaoYDci0Rk1cTd/Bb/Ez3HPOrSTXASY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTDrFDijRw8e5py+/ObrLGuAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYNYp3GiPHjzMTfbhh3/KOd29uMgRj589zU3WALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsU8Y9evAwN9kHH32Sc7p9up1zun7zS474w+/v55weP3uac2qAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYNYpBz168DA32QcffZJzun26nSMu3rnIslc5r989+GOO+CzHPH72NEc0wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTDr9OjBwxzx57/+LUf8+PL7nNOt0+0ccf3mlxxyup0jXv34KkdcvHORm+zinYsccf/9+7nJPssxDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMOuWgH19+nyMeffppjnjx7Yuc06vcbD++/D5HPPr009xkl08uc8T33/wnR9x9970c8dV3L3JEA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzTjnov/+7yhH//tc/c8Rf/v6PHPHi2xc54uKdixxx//37uckun1zmiJ9+eJkjfn79Jud0787bOeI659UAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKxTDrp+607O6YsvvsgRn3/+ec7p8slljvjph5c54ufXb7Ls7rvv5Yjr3GwNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8w65aBbv77OEddv3ck5XT65zBGvfnqVI37571WW3bvzdo64futOjrj16+sccfn8ec7p6uoqRzTArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMOv05Tdf54i7Fxc54l6OuX7rTs7p1q+vc5Pdu/N2zuny+fPcZFdXV7nJGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaYdcpBj589zRGfffRxjriXY17lmFs5r6++e5Gb7OrqKpxPA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzTjmzx8+e5ojPPvo4h7x+kyO++u5Fzunq6irwWzXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMOuUG+7xs6cBfpsGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWb9H57ShtRDfFIVAAAAAElFTkSuQmCC",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAIVBMVEUAAABzcXNaV1pNSU1IRUhMQUM7OTs8MjIxKSonHB0RERGQLp7qAAAAAXRSTlMAQObYZgAAAF1JREFUeNqVzzkSwDAIBEHEsSz8/8EuJAV2aLIeSJA/U/VVRfAld7NTrlRVzZwipREWtstaTqlYs7NYQ7RU5lIdJZkTAByRwIQEHMNEdosIE/s6e/OU5NUt7P7x4gOFEgMZ8911ewAAAABJRU5ErkJggg=="
  },
  {
    "id": "copper_ingot",
    "tags": [
      "resource",
      "ingot",
      "copper",
      "orange",
      "diagonal"
    ],
    "type": "resource",
    "material": "copper",
    "description": "Copper Ingot: Reddish-orange metallic bar with dark copper outline.",
    "palette": [
      "#6D3421",
      "#8A4129",
      "#9C4529",
      "#9C4E31",
      "#C15A36",
      "#E77C56",
      "#FC9982",
      "#FBC3B6"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAE40lEQVR4Ae3BIWvcdwDG8W8f7qCDixlETBRC4AIHnR6sYkxEbXJmYjBRszdQPT1bm5cwGVdRIuJiCmGBHKSBg5lAN8iJwInuPewn/hzP9/N5BnxGUqUgqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWjOkCZ2drpjS63c3NAuSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKo1Q3vt7HTFPlseHjClP75fMeLN+xv2WZBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0Z5c5OV+yzH775mhG3d/eMWG93jFhvd4xYLuaM+OXV10zpzfsbphQk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFRrxqCz0xX7bHl4wIiT4yOmdHt3z4j1dseUlos5I06Oj5jSN18dMOKP71eMePP+hhFBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1ZmenK0b8+tPPjLi8OGfEyfER++z27p4R6+2OKS0Xc0acHB8xpcMXLxlx+OIlI04210wpSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCp1oxBD5trRrz67kdGPGyumdLt3T1TWi7mjDg5PmLE4YuX7LPLi3NGrLc7prR5fGJEkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrRkTu7w4Z8Sr735kxMPmmhEnx0eMOHzxkn32sLlmxO3dPVNab3eM+PT4xIgvD54zpSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFozJrbe7hhycc6Ib3/7nRHP/rpixOXFOSPW2x1TWi7mTGm93THi0+MTU1ou5oz4wJggqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaM/bcertjxKu/rhhxeXHOiPV2x5SWizlTWm93jPj0+MSILw+eM+LD3/8yYvP4xIi3Vx8ZESTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVGv2+t0NI84Yszw8YMR6u2NK6+2OKS0Xc6a03u4Y8eHvf5nS5vGJEW+vPrLPgqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSas0Y9PrdDSPOTlcM+eI5Ix4210xpuZgz4s/bB/bZ26uPaDpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1ngGf2WNnpyum9OGfJ6b09uoj0v8VJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBU6xnwGUmVgqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmr9BxddopEa9GP1AAAAAElFTkSuQmCC",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAG1BMVEUAAAD7w7b8mYLnfFbBWjacTjGcRSmKQSltNCFALkIDAAAAAXRSTlMAQObYZgAAAFdJREFUeNqVzzESxDAIBEGOnQX+/+IryVaVHZqsJ2Ljy1W9VdAPCRv1LXRZdEQlOs5URyklQJmJPVEitSRw72B+ib3c7OBjz0RE4dyezVUsc+v8NfNh4h887AJ1Fj5g/wAAAABJRU5ErkJggg=="
  },
  {
    "id": "nether_star",
    "tags": [
      "resource",
      "artifact",
      "nether_star",
      "white",
      "frontal"
    ],
    "type": "resource",
    "material": "magic",
    "description": "Nether Star: Four-pointed radiant star, pulsing white/cyan core, soft outer aura.",
    "palette": [
      "#556B6B",
      "#649090",
      "#88A4A4",
      "#D2D200",
      "#B9C9C9",
      "#CBD6D6",
      "#E0E277",
      "#DAE2E2",
      "#FDFFA8"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAERElEQVR4Ae3BMWpdiQEF0OuLWkEwSpHCRRiLkFKayo2b2YFhIAtQ52a6bOM3v8sOBFlB6hEEHENCiqAFpEszC3D2MK/4fO45502SbwEmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0w6yZMezqdcsRffvopXK8GmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWbdhKv2dDrliPd3dznix8+fc8Tz+RwupwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWTfhop5Opxzx/u4uR3z6+DHX7Pl8Dr9eA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzbsJVe7i/zxHfvfs5Rzzc3+eILy8v4XIaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBph1k3FPp1Mu6f3dXY54e3ubS3p7e5sjvv/wIdfs+XzONWuAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYNZNrtzT6ZQj3t/d5YiH+/sc8fb2Nst+eHzMEQ/39zni6+trLun5fM4lNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0w6yYX9nQ65Yj3d3c54tPHjzniu3c/55r9+19/yhG//c2fc8S7dw+5rPtcs+fzOUc0wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTDrTZJvuWJPp1OOeH93lyMe7u9zxNvb2xzxv19+yRF/+N1fc8R//vspl/T19TWX9OXlJUc8n8+5pAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZr1J8i3Dfvz8OZf0/YcPOeKHx8cc8fjHf+aIv/399zni6+trjvjy8pJLej6fc80aYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBph1k3HP53Ou2cP9fS7p6+trjvjy8pIjns/n8Os1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTDrJly1r6+vOeLt7WOO+Ue4Xg0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzLoJF/V8PueafXl5yRHP53O4nAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZt2Eq/Z8PueSns/ncL0aYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpj1Jsm3AJMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpj1f5WFXTvzH3lzAAAAAElFTkSuQmCC",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAHlBMVEUAAAD9/6ja4uLg4nfL1ta5ycnS0gCIpKRkkJBVa2uOynhjAAAAAXRSTlMAQObYZgAAAEpJREFUeNpjwA4aoDRHJZTRrj4BwmgVhTA6SkQqQSyOUhcR10qQCkXBZMHwCSARV9NwsL6ZJaKVENVTxaHap7tDGZyVDFAwAdliAFlNENjnSBVaAAAAAElFTkSuQmCC"
  },
  {
    "id": "echo_shard",
    "tags": [
      "resource",
      "sculk",
      "echo_shard",
      "cyan",
      "dark",
      "diagonal"
    ],
    "type": "resource",
    "material": "sculk",
    "description": "Echo Shard: Deep navy to neon sculk-teal fragment, mysterious dark silhouette.",
    "palette": [
      "#0D1217",
      "#111B21",
      "#052A32",
      "#034150",
      "#0A5060",
      "#009295",
      "#29DFEB"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAE6ElEQVR4Ae3BMWschh3G4V/enhEInRR1kcGg0dAMEQQ8eEkh0CFDhy79JIVupWsg3yWjh4IhXjwICurQgBaBQdBb7iyfUHqEOv0O/g+HeH/P8xnwK5IqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1VqwZ0+++Ip9+uXf/0RqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVGvB0JMvvmLi49k5EwcnnzNxdLdhnza3N0j7EiTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVGvBnh2cfM4+bf76FyYOX18yccrM5vYG6VMFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVWrBnu7v3TPzvT39g4nd//DMTP7Ffp8xsbm9QryCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFoLho7uNkzcM3P83fdM/MTM4etLJnZ375n45eSUiVNmNrc36PEKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqtaDc6XffM3F/csrI2TkTH8/Ombhn5pSZze0N2p8gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaC4Y2tzdMnDJzf3LKxNHdhomjuw0T98w8ef4lEztmPpydM7H8+YGJ7XqFPl2QVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtBXu2ub1hYvnzAxO7r79l4uDyRyY+np0z8fDNCyYOX18ysbt7z8TDxUsmlldvmdiuVzQLkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqteCR265XTCzfvGLi/ukzJo6vr5j48AMjB9dXTOyeXzCR1TsmHi5eMrG8esvEdr3iMQuSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKq1oNx2vWJiycz902dMHF9fsU9ZvWOfsnrHxH+fPmNiycx2vWKfgqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSai3QyHa9YmLJzIeLl0wcX18xcXS3YeLD8wsmsnrHxJPnXzLyn1sesyCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFoLtFfb9YqJ5dVbJnZff8vEweWPTBxfXzGxe/F7Jh6+ecHEITPLN6+Y2K5XTARJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNVaoEdtu14xsXzzionN3//GxG9++AcTuf4XE4fM7O7eM3HIfgVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNX6DPgV6RMtf3uGPt12vWKfgqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSai2QBrbrFXq8gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSav0f9Aml5ZIUl6YAAAAASUVORK5CYII=",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAGFBMVEUAAAAp3+sAkpUKUGADQVAFKjIRGyENEhflIjUTAAAAAXRSTlMAQObYZgAAAEpJREFUeNptzzEWgEAMAtE1wOz9b+yz0USdjt+xfkpe24IBUokOrmMIoeTQgfgjsvctW7imBONMIUmaGBzt9YhANaQcea8mVz/fT+83Ae85VRRbAAAAAElFTkSuQmCC"
  },
  {
    "id": "prismarine_shard",
    "tags": [
      "resource",
      "prismarine",
      "cyan",
      "gem",
      "diagonal"
    ],
    "type": "resource",
    "material": "prismarine",
    "description": "Prismarine Shard: Seafoam green to aqua jagged shard.",
    "palette": [
      "#2E6053",
      "#306456",
      "#33695B",
      "#43806E",
      "#539882",
      "#559A8A",
      "#7CB3A4",
      "#91C2AC",
      "#A4D1C2"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEdUlEQVR4Ae3BMYvfBwEG4LcvJ5zTDeFu6datGdy7FMFdKEXBTVSkk+LSsUjHfoGWkiFLl5TDr+AmSItpKKQiPSSQJaHDbVmkfof8hj/H+zzPG0l+DDCpAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZZ7nj3v/s45zS9QcfBe6qBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmnWXcu/fv55DPPs4pXX/wUeB1NcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0w6ywn9ou//imndO/iKke8985VTqmff5JT+vKPH4a7qwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWW8k+TF32M9++36O+PAvf84p/XD7Ikfcu7jKKf3tH3/PKV1/8FF4fQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzDrLuO+ePcsRlxfnOeLexVVO6btnz3JKb7/5Vo741eef5JS+/OOHucsaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBph1ljvuycPrnNLvf/ebHPHD7Yuc0tPnNznivXd+nlO6vDjPEfcurnLI55/kiJt/fZMjvv70ixzRALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCss3DIy9tXOeLy4jxHvLx9lSPevX8/d9m9i6sc8d2zZzniP//8Kkc8fvAop9QAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKyzjHvy8Dqn9Mv338sRlxfnOaUfbl/kiHsXVzmlp89vsqwBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFln4aSePr/JEZcX93NKL29f5ZgXOeLl7asc8d9v/p0jHj94lLusAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZZ+GQJw+vc0pvv/lWjri8OM8RlxfnOeLl7asc8fT5TXh9DTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMOgt32tPnNznmrRzx9PlNTun7r77NEY8fPMqyBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmnYWTevLwOkf85Kfnucu+/+rbHPH4waPw+hpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmHUW7rSvP/0iR/zvD7/OKT1+8CicTgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAs87CtMcPHoVdDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPM+j+tWXYgrnwiqAAAAABJRU5ErkJggg==",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAHlBMVEUAAACk0cKRwqx8s6RVmopTmIJDgG4zaVswZFYuYFNEStN+AAAAAXRSTlMAQObYZgAAAE9JREFUeNpjwAJYA2AMVSgrVVDEAczgFFQUDQAzjARNTcBik5QChUQKgIzJyoqCFhA5JcEIMCNIWRkoA5JTMoUwpppGQIxkD22A2tKBbDcA1moLoYUJByEAAAAASUVORK5CYII="
  },
  {
    "id": "redstone",
    "tags": [
      "resource",
      "dust",
      "redstone",
      "red",
      "magic"
    ],
    "type": "resource",
    "material": "redstone",
    "description": "Redstone Dust: Granular pile of glowing crimson dust.",
    "palette": [
      "#2D0000",
      "#340605",
      "#410500",
      "#5C0700",
      "#720000",
      "#AA0F01",
      "#FF0000"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEXklEQVR4Ae3BsW0d1gEF0PsvyMgwYLBz4xnUu/YA7tRpAdceIV2A1FrAnboMkFqdEXAGDUAYUEIR0M8Qr/gg7jnnkuQaYFIDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALPuwqv2/k1u6o/n8Io1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTDrLtzU+zc58uNzjvz8cMmZa0788RxuqAFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWXfhyPs3OfLrd5ecePd8zYmPOfP5W468zZnHcKIBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFl3Gff+TY78+t0lJ949XXPi48MlJz49XXPi3znzy32OvH3Jkcdsa4BZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpg1l1eufdvcuTX7y65pY8Pl5x493TNkYdLTvzy5ZoTPzVn7nPk7UuOPOZ1a4BZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpg1l1u7P2bHPnxOUfePV9z4uPDJSc+PV1z4sN9jvz76ZoTn3Lmz/sc+e37S0784793OfH260tOPOa2GmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaYdZdX7ueHS078/nTNiZ9z5p858/H7S078/nTNiT/vc1P/+t81J364vuTEc163BpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFm3eXG/vOcI5+/XXPit4dLTrx7uubEx4dLTnx6uubEn/c58tv3l5z48OWaE5+/5chfl/uceclr1gCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArLvc2GPOvH3JkQ9frjnycMmJT0/XnPjzPkd+ao58+HLNLf11uc+J568vOfGY160BZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFl3eeUec+btS478/emaE2/+dp8TP1xfcuLztxz563KfE89fX3LmJSces60BZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFl3GfeY23r79SUnnnNrLznxGG6pAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZd+GmHgO30wCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArP8DLBx2WnlL5K4AAAAASUVORK5CYII=",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAGFBMVEUAAAD/AACqDwFyAABcBwBBBQA0BgUtAAChZ6iRAAAAAXRSTlMAQObYZgAAAElJREFUeNpjwA9YHKAMZxWogKJqAZjhJGQYDhZQUlR1BQk5C5kKB6WDZIyETENAcqWKykGhIBH2IFPXMLC28tSwcgYwKC/HaiEAtf4MFvnbFVwAAAAASUVORK5CYII="
  },
  {
    "id": "lapis_lazuli",
    "tags": [
      "resource",
      "gem",
      "lapis",
      "blue",
      "magic"
    ],
    "type": "resource",
    "material": "lapis",
    "description": "Lapis Lazuli: Ultramarine blue nugget with deep royal blue shadows and gold flecks.",
    "palette": [
      "#052463",
      "#12408B",
      "#1A3D8F",
      "#1C53A8",
      "#345EC3",
      "#5A82E2",
      "#7497EA"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEuElEQVR4Ae3BP4oY+GEG0M8fUxi7NPGfMdawQsjlNlvICzLGJHdImavkBDrBQHCVkAsEHIzZQnY74MZiCChCawmhUsIwRXKH/RXD8L33vpfk/wJMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpg1kV40C6fv8iyD3/7S07c3V5nWQPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsy7Cvbp8/iIn+uOf5cSvv/w69+nV7euc6I9/lhPvc+bu9joPWQPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsy7CkcvnL3Li8ouvcuLpk6ucuPyH7+fEH//015x49+ltTnz++CYnfvLlP+XE+5y5u73OfWqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYNZFxl0+f5ETl198lRNPn1zlxKvb1zlzlRPvPr3Nic8f3+TED370i5z46Q9/nhPv87A1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTDrIhz5za9+mRPffvh7Trz79DZHbvOg/fSHP8+Jp0+ucuLmZR60BpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmXYQj3374e+7TP//jb3Pi3//7Dznx+eObnHj86Fm4Pw0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzLrIA3f5/EVOXH7xVU58c/MyJ3795dc58cc//TUnPn98kxOPHz3LfXr65Con/vN3/5oTd7fXecgaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBph1kXt2+fxFTlx+8VVO/OZXv8yJbz9c5cQ3Ny9z4vPHNznx+NGznHj65Convrl5mRPvbt6G764BZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkXeeD+53//nBNPn1zlxKvb1znx+eObnPjBj36R+/Tq9nXu0/ub3+fE3e11ljXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMOsi9+zD3/6SE19+/S858V9/+I/cp8ePnuXE0ydXOfHq9nVOvPv0Nife3/w+J+5ur8N31wCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArIs8cO8+vc2Jx4+e5cTTJ1c58c3Ny5y4+d2/5SG7u70O96cBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkXuWd3t9c58T5n3ufMzcvcq7vb68B31QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArIs8cHe31wG+mwaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZv0/9MiP5ZI8dyMAAAAASUVORK5CYII=",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAGFBMVEUAAAB0l+paguI0XsMcU6gaPY8SQIsFJGOODZ+qAAAAAXRSTlMAQObYZgAAAEtJREFUeNqNjrEBxDAQwmzQwf4bf/V20kWd1MD6zMxMn45ket3aJvS6RfAJW5hYJ0ib+IQx8su3iAX/EDn4rtaJny+KRdt1aNv1nR/fJgGxD9lgAgAAAABJRU5ErkJggg=="
  },
  {
    "id": "coal",
    "tags": [
      "resource",
      "fuel",
      "coal",
      "black",
      "organic"
    ],
    "type": "resource",
    "material": "coal",
    "description": "Coal: Chunky jagged charcoal-black lump with subtle grey specular facets.",
    "palette": [
      "#101015",
      "#1F1721",
      "#1C1C1E",
      "#261E24",
      "#252525",
      "#2E2E2E",
      "#323232",
      "#363636",
      "#393E46"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEpUlEQVR4Ae3BQW4bVwJF0cunQqhColgK0kYPCO1/XQIHQSuIypbhUhk0mD30HxSId885AFckVQqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqNaEhp9Mzzc7nF3S7gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSak2UO52eGfHHH4+MmKaJPV0uF/Z0Pr+g/QRJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNWauHGn0zMj5vnIiPv7e0bc3T8yYvv2NyPWdWXEPB8ZcTo9M+J8fkH/vyCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFoT5Z6enhjx9vbGiIeHCyMulwsjHh4eGHG5XNjT6fTMiPP5hWZBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1Jsotf/3DiANj3nlnxNPTEyPu7h8ZMX0sjJimiT2dTs+MOJ9fuGVBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1JnZ2Oj0zYp6PjLifZ0as68qIw3ZlxNvbGyOentjV5XJhT58//8mIb99WRizLK3sKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqNXHj5nlmxK+P/2XENP3NiHfeGTHPMyM+Pj7Y07qujDhsV0a8806zIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWhM3bl1XxvzFnuZ5ZsS6rtyyeZ4Z8bF9Z8RhuzLi8++f2NOyvDIiSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCp1kS5dV3Z02G7MuR4YMQ8z4z4WL4zYmVlxI/tJyN++X1ixI+vF25ZkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrYkb9+PrhRHH4x0jrscDezpsV0Z8bN/Z02G7sqfDdqVZkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrYmdnc8vjHh8/A8jPvEbQzaGHI93jLgeD4z48fXCiOPxjlu2bT8Z8WX7xohleWVPQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtSZu3LK8MuSRIZ+OvzFi234yZGNX//v6hWbL8sotC5JqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqjVRblleGfJItWV5RbcrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCp1oSGLMsr0q0KkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iq9S/GmZvi8xTLEAAAAABJRU5ErkJggg==",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAHlBMVEUAAAA5PkY2NjYyMjIuLi4lJSUmHiQcHB4fFyEQEBX7Xk+fAAAAAXRSTlMAQObYZgAAAF9JREFUeNpjwAbYywsgjBJjd4hAkHBoAZihamISDmakBQmZgoRKXVOVXC1BaoVDXMIiQSIurqFuaROAjNBUt4gIIKMiNS0tIwPI4OxIbcvoBOmf0dE5cwKIwTlzArLVAFPNF7pzfq2nAAAAAElFTkSuQmCC"
  },
  {
    "id": "glowstone_dust",
    "tags": [
      "resource",
      "dust",
      "glowstone",
      "yellow",
      "gold",
      "magic"
    ],
    "type": "resource",
    "material": "gold",
    "description": "Glowstone Dust: Shimmering gold and brilliant yellow luminous dust grains.",
    "palette": [
      "#5A391C",
      "#7E4821",
      "#8E562E",
      "#B47140",
      "#EBAA4E",
      "#FFBC5E",
      "#F9D49C"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEnElEQVR4Ae3BP6ufhQEG0MeHi2OQkCHQPyFQChbcimkGswmBQD+AOOnsljmg4Fzo7hbuBxACQrcsl4izgghivUKGENQxDvY79B1+XJ5zzmtJfg8wqQFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWWfhSnt0/3ZO6ZMvvg9XVwPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAs87CST26fztHfPTBWznixvU3ckqffPF9OJ0GmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWadhUMe3b+dIz5++E6OeHXzXg55/jRHvP3mrRzx3i+/5Yjzi8vw/2uAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYNZZxj26fztHfPzwnRzx6ua9HPH686c54sXLn3PEux++n2Me55TOLy6zrAFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWWe54h7dv50jPn74Tk7p9edPc8Srm/dyxI08zRFPPnucI7785occ8d4//pJTOr+4zFXWALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCss5zYo/u3c8RHH7yVI17dvJcjXn/+NEe8ePlzjnj25HGOePfD93PEnbuf55hbOeLdD9/PEd/+9O+c0vnFZU6pAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZZ7niblx/I0e8+PrzHHHj+hs54trf/pkjHlx/miNefP15jnh28WtO6dOHn+aIt9+8lSO++vFlrrIGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWad5cS+++W3HPHkyX9zxIMHf84Rr27eyxH/+exxjrhz91qOeHbxa464c/dajnh28WuOePvNWzni259eZlkDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALPOcmLnF5e5yh48eJoj7ty9liOeXfyaI7785occcyundOfutRxx/q/vcsT5xWWusgaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZr2W5PcMe+/uH3NKf//T9Rzx1z9czyl9+9PLHPHVjy9zSucXl1nWALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCss4w7v7jMVfbVjy9zlZ1fXIbTaYBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpg1lk4qfOLy8CpNMCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0w63/aj4F+hrnJ6gAAAABJRU5ErkJggg==",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAGFBMVEUAAAD51Jz/vF7rqk60cUCOVi5+SCFaORxHN0c3AAAAAXRSTlMAQObYZgAAAElJREFUeNpjwA/YEqCMZDWogKJKAZiRJGToDhZQUlRJAQklC5kIO4aDZIyETNxAciWKzs4uIBF2J5MUZ7C28hDXcgYwKC/HaiEA2vEMUqfTCnYAAAAASUVORK5CYII="
  },
  {
    "id": "slime_ball",
    "tags": [
      "resource",
      "slime",
      "green",
      "bouncy",
      "organic"
    ],
    "type": "resource",
    "material": "organic",
    "description": "Slimeball: Translucent bouncy lime-green jelly sphere.",
    "palette": [
      "#34532F",
      "#477A42",
      "#508049",
      "#57914F",
      "#71AC63",
      "#76BE6D",
      "#8CD782",
      "#C9FECE",
      "#FFFFFF"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEd0lEQVR4Ae3BMYqehwEFwJfHrkS202IJpAQSkc5JGh8gEDW6kw5gSJt7bOfGjQu7MwtmcRoVxk6IJZAsuRPYKpQ75Ct+ljczv0nyIcCkBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmnYWTevrsSZZ9/ukX4XQaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBph1lnFPnz3JKX38yeMccX55kVN6//ZdDnn2JEe8ef4mR1xf3WRZA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzznLLPX32JEd8/MnjHHF+eZEjHjy8n1N69fJ1jvjdn/+QU/r+zt2c0vXVTW6zBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmnWXc+eVFjvjH3/+ZI77+8E2O+Or5ZzniwcP7OaXzy4sc8fgvj3LEf799kWUNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8w6y4k9ffYkR3z8yeMc8eDh/Rzx9YdvckqvXr7OEQ8e3s9tdn55kSN+/9dHOaXrq5ucUgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAs87CIV89/yxHvHr5OrfZq5evc0rv377LEXfv3cmyBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmnWXcq5evc8SDh/dzxIOH93NKr16+zhHv377LEeeXFzni+3+9yBF3793JsgaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZp3llnvx40854lE+yhGv8jpHvH/7LkecX17klM4vL3LEv7/9TzidBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmneXEPv/0ixzx9NmTnNKjfJQjzi8vckrv377LES9+/ClH/PLzrzml7778IUdcX93kNmuAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYNZZbrk3z9/kiN/euZsjXuSnHPJjDvnl51+z7O69O+H/1wCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArLPcctdXN7nN/vS3P+aIu/fu5Db77ssfckrXVzdZ1gCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArLOMu766CadzfXUTTqcBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFln4aSur24Cp9IAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKz/AdqndRNRmie6AAAAAElFTkSuQmCC",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAHlBMVEUAAAD////J/s6M14J2vm1xrGNXkU9QgElHekI0Uy9iH+u5AAAAAXRSTlMAQObYZgAAAFVJREFUeNpjwAo6OqB0iGsniOYIMXYOnwBiOCobu4IYrUYqxi6VIIaxi4lrJojhbOzqDmK0hYS4pIMYHKkuYeUgxZxl6eVlIAbDzLS0mRCjZ87EajMAwtYVZJQJk8IAAAAASUVORK5CYII="
  },
  {
    "id": "magma_cream",
    "tags": [
      "resource",
      "magma",
      "fire",
      "orange",
      "red",
      "orb"
    ],
    "type": "resource",
    "material": "blaze",
    "description": "Magma Cream: Swirling hot magma core enveloped in volcanic crust.",
    "palette": [
      "#61181A",
      "#B4183A",
      "#BD4018",
      "#527529",
      "#C55D18",
      "#D58520",
      "#8BAA41",
      "#EAA727",
      "#A4C64A",
      "#E6CB2F",
      "#C6DC57",
      "#F4E94E",
      "#FEFEFE"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEu0lEQVR4Ae3BsarfBwEG0K8fF02EEDoYUmmhXhTMEqTQobgJcS4puDh1cnFsJh+hq4OCEDCDOLQP4AVXcZM4tF1CRAgXB2MMNCkI9R38DX/Cd855LcnXASY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTDrLJzU3Xu3suzTjz8Lp9MAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKyzjLt771ZO6b13b+aIN968miPOb1zLEY/++TyndP3Bsxxx//JJljXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMOssr7i7927llH730fdzSg+fX80pnd+4liPee/dmjvhzjvnwQQ65f/kkr7IGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWadZdxHP7+dI7717d/nlG7n/ZzSw+dXc8SP3rmRI3723X/liF8+yLQGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWad5cTu3ruVI95792aOuH3tRZZ9+acvcsi7P8wR1//wlxzx2cXLHPFBznPIzRxy//JJTqkBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFlnecW98ebVHPHw+dUccTvv55QePr+aI64/+ipH3P7xixzxn59czxGXFy9zxOt3HuWQi+ZV1gCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArLO84s5vXMspPXx+Nad0+9qLHPHl+TdzxN9/+zBHXF68zBEvPj/PMY+yrAFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWWcZd/vai5zSw+dXc8SXf/oiR/z3e1dyyKOvcsTNO1dyxL/fepQjnl6c55jHeZU1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTDrLCf26cef5ZR+9dNv5IjHr/8gR7z99POc0tM/PssRlxcvc8SVt3LIy3/kkE/yOEfcv3ySV1kDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALPO8oq7/uBZjvhFrueIX7/z15zS337zLEfcvHMlR1x5K4c8vTjPEZ/kcfj/NcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0w67UkX2fYhze/k1P6IG/niNfvPMopPb04zxGf5HFO6f7lkyxrgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmDWWcbdv3ySk7qZYy6a03qcI+5fPgmn0wCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArLNwUvcvnwROpQFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWf8Dp2l/2hAUED4AAAAASUVORK5CYII=",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAKlBMVEUAAAD+/v706U7G3Ffmyy+kxkrqpyeLqkHVhSDFXRhSdSm9QBi0GDphGBr7Q9AfAAAAAXRSTlMAQObYZgAAAFlJREFUeNpjwApWrYLSpaZrQTTXImXjqgsghqGQsgmIsVxRKLn7LJCx1Ei5yXsukLHY2Chjz14QQ8nMoxMkxeXs1j0bpJh3WXbnWRCD4e7JOXchRt+9i9VmAGnfHDd9ZydmAAAAAElFTkSuQmCC"
  },
  {
    "id": "poplar_hanging_sign",
    "tags": [
      "wood",
      "poplar",
      "hanging_sign",
      "sign",
      "yellow_wood",
      "utility"
    ],
    "type": "utility",
    "material": "wood",
    "description": "Poplar Hanging Sign: Warm honey-yellow poplar wood plank suspended by dark iron chain links.",
    "palette": [
      "#323232",
      "#4A4A4A",
      "#5C4F4C",
      "#5F5F5F",
      "#766665",
      "#6F6F6F",
      "#877974",
      "#91857B",
      "#9C9086",
      "#A79B8C",
      "#AAA191"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAE6UlEQVR4Ae3BsWqd9wHG4Z/fniZQF0MGJTgZzFlO4UCGfqNIQNqKriN7MrdzL8CXkDUXcFZ78lJQBoOhFkQZipRj4Uo2PgbLGOce8h8+Du/vee4AH5FUKUiqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqdaCQT/9+JARr693jHh6vmVONzc3jPj2739jxL3P7jKn19c7Rjw93zKnm5sbRvzjm68ZsdvdMuK7H/7JiCCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFoLBl3+7wUj3r55x4izszNGHBwcMOLq6ooRV9sDRlxt/88+Ozs7Y8TBwQEjrq6uGPHrL78x4i9//ZQ5BUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1boDfKTYyckJIzabDZrPyckJIzabDc2CpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqLdhz0zQxp2maGHF6ekqzaZqY0zRNjDg9PWWfBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1VpQbrPZMGKaJjSfzWbDiGmaaBYk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFTrDvCRGf3040Pm9OH2PXP60yd/Rn/ch9v3zOnFi2tGfP+vfzOnIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWgtm9uH2PSN+/s9/GbFaL5nV7pZ99vjRE0Z8+cV9RqzWS+b09s079lmQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtBTPb7W4ZcbG9ZMTF9pIRR8eHjHj86AkjvvziPiNW6yVzutheMqfVesmI65ev2GdBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1Fszs3md3GXF0fMg+Ozo+ZJ8dHR/S7KsHn7PPgqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSai2Y2Yfb98zp+bNzRqzWS0Y8f3bOnFbrJSOePztnxGq9ZMTzZ+eMWK2XjHj75h37LEiqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqdaCme12t4x4/OgJc1qtl4y42F6yzy62l4xYrZeMuNheMmK1XjLi+uUr9lmQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtBTO7e/cTRhwdH7LPjo4P2Wer9ZI5HR0fMqevHnzOPguSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKq1YGa//vIbkuYRJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUa8HMrl++QtI8gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSat0BPiKpUpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq3fAZCaouh7EA59AAAAAElFTkSuQmCC",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAJFBMVEUAAACqoZGnm4wyMjJKSkpfX19vb2+RhXtcT0yckIZ2ZmWHeXR0zaiDAAAAAXRSTlMAQObYZgAAAF1JREFUeNptz4sKwCAIBVB1rXz8///OK2MJ64hcEiSkP7Y5b+MKsRysGPeIhFhURgvJvrJ2HAbMIgwii0DcQDOCwFTx0mwnYPus+oVRXDH2irqavivSVyAaAm8Oxz/FdAP1j11PeAAAAABJRU5ErkJggg=="
  },
  {
    "id": "pale_oak_hanging_sign",
    "tags": [
      "wood",
      "pale_oak",
      "hanging_sign",
      "sign",
      "pale_wood",
      "ash",
      "utility"
    ],
    "type": "utility",
    "material": "wood",
    "description": "Pale Oak Hanging Sign: Ash-white and silvery pale oak board with iron hanging brackets.",
    "palette": [
      "#323232",
      "#4A4A4A",
      "#5F5F5F",
      "#6F6F6F",
      "#887777",
      "#B0A4A4",
      "#C7B8B8",
      "#F0E7E5",
      "#F8F0F0",
      "#FFFBF8"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAE0UlEQVR4Ae3BMWobZgCG4TcfgrZ0aKEypvQEGoxBF6iFN1+qW0m6Zew9jMhi7LGTIWhIwCcIVsEdjBU6uHfoP/yI732eN8ArkioFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVWjDo9d8DI/7Z/82I397+wUxPT0+MeP/2d0b8sPyJmf7Z/82I397+wUxPT0+M+PP9e0YcXp4Z8ePPvzAiSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCp1oJBf93cMeLLfs+Ih4cHRpycnDDi8fGREXc3tzR7eHhgxMnJCSMeHx8Z8eH6mhGnyyUzBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1XoDvFLs6uqKEdvtFs1zdXXFiO12S7MgqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaC47cer1mpvV6zYj7+3uarddrZlqv14y4v7/nmAVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNVaUG673TJivV6jebbbLSPW6zXNgqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSai2Y7PXfAzN9fT4w0zfff4v+v6/PB2Y6vDwz4seff2GmIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWgsm+/p8YMSH62tGXFxumOnw8swx+/Rxx4gv+z0jLi43zHR3c8sxC5JqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqrVgssPLMyNOl0tGfPq4Y8Tq/IwRnz7uGPFlv2fExeWGmU6XS0bc3dwy4uJyw4jPux3HLEiqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqdaCyX5Y/sSI1fkZx2x1fsaIFXOtzs+YacVcv242DHn3jpmCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqLZjs6/OBme5ubhlxcblhxN3NLTNdXG4YcXdzy4iLyw0j7m5uGXFxuWHEl/2eYxYk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFRrwWSHl2dGfPq4Y8TpcslMp8slM93d3DLidLlkptPlkpk+73YcsyCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFoLJvv2u+8ZsTo/45itzs+YacVxW52fMdOvmw1D3r1jpiCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFoLJvtwfY2kOYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmotmOzzboekOYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmq9AV6RVClIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKnWf8XvnCkF1q6BAAAAAElFTkSuQmCC",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAIVBMVEUAAACId3ewpKTw5+XHuLj/+/j48PBvb29fX19KSkoyMjKz5hGCAAAAAXRSTlMAQObYZgAAAFlJREFUeNqFy9EKgDAMQ9GYpNX5/x8s3USHCp6HBgoXb6F13RR9UgDMtjWSfYyuTUMAO3bc8/GIyIySKZSkiikRRbZM2dQyEl08ElFknTkxLZ9JPhNOAOHPAVvOAjS4rzJBAAAAAElFTkSuQmCC"
  },
  {
    "id": "pale_oak_door",
    "tags": [
      "wood",
      "pale_oak",
      "door",
      "ash",
      "pale_wood",
      "utility"
    ],
    "type": "utility",
    "material": "wood",
    "description": "Pale Oak Door: Ghostly desaturated off-white wooden door panel with slender vertical slits.",
    "palette": [
      "#4A4A4A",
      "#5F5F5F",
      "#6F6F6F",
      "#887777",
      "#B0A4A4",
      "#C7B8B8",
      "#DDCECD",
      "#E7E3E1",
      "#FFFBF8"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEN0lEQVR4Ae3BoYqdiQEG0K8fV1VFbGZuRSnE7cLoqCRqRWTdqqZiYWFZVpTCVpSKUhFRqkp9nyRko0JkxL7C5M5DtO+QXwzDd875VZL/BZjUALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsUx641z/9lCNe/fB97tP5fB0+3+3tp9yn3/z2d3nIGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaYdQqHvH/7LjxcT188y7IGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWad8sD9/PFjjvjlr3/LEY8ePQqf75uXL3OfzufrLGuAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYNYpD9zzm5sc8eqH73PE+7fvcsTNV1/miMvlLkdcXT3OEZfLXY64unqcIy6Xu/D5GmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaYdcq48/k6sKoBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFmnPHA/f/yYI17dfsoRT188yxHn83WOeJL79STH/PHb73LE63/8PUfc3n7KsgaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZp3ywD2/ucl9ev/2XZa9+fAhR/z+669zxOt//itH/OXPf8qyBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmnTLufL7Ofbr+4osse/PhQ+7T+XydZQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzDqFe3V19ThHXC53OeLq6nGO+OblyxxxdfU4R1wud+HzNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0w65QH7uePH3PEL99+lyMePXqUI958+JBlP776Q7g/DTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMOuWBe35zkyNe/fB9jnj/9l2OuPnqyxxxudzliKurxznicrnLQ3Z7+ynLGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaYdQqHPH3xLEecz9c54knu15Pcr1/ffgqfrwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWaeM+++//xNY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArP8Dt8RXrcNIlo8AAAAASUVORK5CYII=",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAHlBMVEUAAAD/+/jn4+Hdzs3HuLiwpKSId3dvb29fX19KSkrWSBHzAAAAAXRSTlMAQObYZgAAAERJREFUeNpjwALYlAQFhRRADNXQ0FAQg7O9vNxFACxiYmICZoiiMziBupqgusLDwQxRF/dyhBqoOSZwcxRQ7EoDggQGAJIjD1K7WzE3AAAAAElFTkSuQmCC"
  },
  {
    "id": "oak_door",
    "tags": [
      "wood",
      "door",
      "oak",
      "brown",
      "utility"
    ],
    "type": "utility",
    "material": "wood",
    "description": "Oak Door: Classic warm brown wooden door with rectangular window insets.",
    "palette": [
      "#695433",
      "#7E6237",
      "#6B6F7A",
      "#967441",
      "#9F844D",
      "#808B95"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAADxUlEQVR4Ae3BsWmehwIF0JvLDwGXDhbCrqQJAoGs4DTqsoDK7KBSewjeCqq8wqsC7m0CcQplByc75CvMxz3nfJfknwCTGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaYdcnJ/fbrTzni5x/fBv6r+4fnnFkDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMu4ZD7h+ec2dPjXY64f3jOmT093mVZA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzLjm5vnufYz4GVjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMOuSk/v65UMOefM2Rzw93mXZ0+NdOK8GmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWZdwiH3D885s6fHuxxx//CcM3t6vMuyBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmXXJyffc+x3zMEU+Pd1n29HiXI/74/pcc8fefX3LMxyxrgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmDWJSf39cuHHPLmbY74/OklZ3Zze5UjPn96yTH/yxE/5KA3V1nWALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsS/imrl+/yrLr16/Ct9MAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKxLOOTm9irLbm6vwnk1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTDrkpPru/c55mOO+PzpJWd2c3uVIz5/esmZ3dxeZVkDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMuObmvXz7kkDdv8y1dv36VZdevX4VvpwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWZdwyM3tVZbd3F6F82qAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYNYl4/7/+1+BVQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzPoXa7w50aAJCfoAAAAASUVORK5CYII=",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAT0lEQVR42mMYXCAzxPj//BZfgpigAchiePiYIDu/imQD6O8FuoQBVtzQPfU/VJ6wC+qSzGEYnU+8AdNKHEEYg0/bWAD6ceh6AWEAERjFAABL1AlkwhduNgAAAABJRU5ErkJggg=="
  },
  {
    "id": "oak_leaves",
    "tags": [
      "leaf",
      "leaves",
      "foliage",
      "green",
      "organic",
      "plant"
    ],
    "type": "organic",
    "material": "organic",
    "description": "Oak Leaves: 16x16 natural foliage clusters, crisp multi-shade green canopy with organic edge cutouts.",
    "palette": [
      "#686468",
      "#777577",
      "#989998",
      "#B9BCB9"
    ],
    "base64Scaled": "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",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAD1BMVEUAAAC5vLmYmZh3dXdoZGjJX6haAAAAAXRSTlMAQObYZgAAAGlJREFUeNoFgAERwyAMAD8pAtJ0AgIYaAEBbI1/TTtSNOaPiyCHDqkwtVvIia7tHzB6p1IatFtW8gazuB93e1j7tBwy8PJtR4+OkW+0cDR2exThSqQeASMalo9QZe2iV8XcmbgRp5W8Rf/WMg1MmmHulQAAAABJRU5ErkJggg=="
  },
  {
    "id": "pale_oak_leaves",
    "tags": [
      "leaf",
      "leaves",
      "foliage",
      "pale_oak",
      "pale_green",
      "ash",
      "organic"
    ],
    "type": "organic",
    "material": "organic",
    "description": "Pale Oak Leaves: Desaturated silvery-sage and olive muted leaf canopy with eerie calm tones.",
    "palette": [
      "#3D403D",
      "#585D57",
      "#696E67",
      "#838880",
      "#A0A69C"
    ],
    "base64Scaled": "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",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAElBMVEVpbmcAAACgppyDiIBYXVc9QD0WBTQ6AAAAAnRSTlP/AOW3MEoAAAB4SURBVHjaBcExFoMgEAXA70N7EA6w7IZ+FdIDQh+fyf2vkhmELG7c4cS3xzCPwPgh1ivWF7Zs0SMGVvHLrqbCENfFZouL5HMQOfQ1qQo5uFmksAnwqQo9veBMYN2eBC4L4z0PSGtWy7hhHGymVgGvXqJTBC87N5v/X7MSthY3zosAAAAASUVORK5CYII="
  },
  {
    "id": "leaf_litter",
    "tags": [
      "leaf",
      "leaves",
      "foliage",
      "litter",
      "green",
      "organic"
    ],
    "type": "organic",
    "material": "organic",
    "description": "Leaf Litter: Natural carpet of fallen forest leaves in vibrant woodland greens.",
    "palette": [
      "#4B2F26",
      "#5C3C32",
      "#603D27",
      "#6B442E",
      "#6A4638",
      "#714B35",
      "#754E38",
      "#7F5431",
      "#80573A",
      "#835841",
      "#855A3C",
      "#8B5E3A",
      "#936646",
      "#906949",
      "#996A43",
      "#956D4C",
      "#9C6D41",
      "#A87949",
      "#AB824F",
      "#B9945B"
    ],
    "base64Scaled": "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",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAP1BMVEUAAACFWjx1TjhgPSeVbUyrgk+DWEFrRC6TZkaAVzqcbUGLXjpxSzWQaUl/VDGZakNLLyZqRjhcPDK5lFuoeUkJwNd8AAAAAXRSTlMAQObYZgAAAHdJREFUeNoFwYeBwyAQADAdYPAXx5Tbf9ZIlGgAQJRoWAvXBRENcxl+/y4AtjE6Mtkb9NFvPsmeW2ut93HjZe25ldDvG7DmBCAiwIsIRC2B/KDUQpRakGlPpaLUCtacVOdQ/bDm3pB58P9YazsHmYfngfMmAPAmXzhqBNZyoX48AAAAAElFTkSuQmCC"
  },
  {
    "id": "sugar_cane",
    "tags": [
      "plant",
      "organic",
      "green",
      "sugar_cane",
      "stalk",
      "diagonal"
    ],
    "type": "organic",
    "material": "organic",
    "description": "Sugar Cane: Slender jointed green organic reed stalk with natural notches.",
    "palette": [
      "#2A4C0D",
      "#3B6318",
      "#47821E",
      "#60A028",
      "#7CCC35",
      "#97F544"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAE1ElEQVR4Ae3BMWschh3G4V9ebkowsqYQVHkzWKVjpc1DIFAonUw+QFZ/Bw0iZO3cNbuF6HBkyubJZ43mIuqpPgmT6Ryu9ZAl+Q75D4d4f8/zCfAbkioFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1VogDfzr/18xcffTL0xcXdwwsV7uaBYk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFRrgfbq/PqUiauLGyaeXTxhn64ubphYL3fojwuSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKq1QCPn16dM3L7ZMXF8dsjE0ckBE//+53+YeHbxhIn18jUT59enTBydHDDx/LMf2acgqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaCzRy+2bHxPt3H5k4/fvn7NMXjz5l4urihonz61Mmjk4OmLj76Rcm/vyPB0yslzsmgqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSan0C/Ib25vz6lImjkwMmXr24ZeLtyw9MfPn8mImjkwMmXr24ZWJ1ecfEerljn4KkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmot0Mg33z9h4ujkgIlXL26ZePvyAxOPnz5k4vUPPzNxdXHDPq2XO+6zIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWgvKffP9E/bp1YtbJt6+/MDEl8+P2afV5R0Th59/xsTjpw+ZeHbxgInv/vqafQqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKq1YM/+9u0j7rP37z4y8b///srE46cP2afbNzsmjs8Omfji0adMrC7vmFhdcq8FSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVWrBnm9WWieOzQybev/vIxGa1ZeLs6yMm/vSXB0zcvtkxsbq8Y582qy0T6+WOZkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbUW7Nl6uWPi+OyQic1qy8Tx2SH79PqHn5nYrLZMrJc7dH8FSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVWnDPbVZb7rP37z4ysVltmVgvd6hXkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrQX33Hq5Y5+Ozw6Z2Ky2TKyXO6Q/KkiqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqdYCjWxWWybWyx3SvgRJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNVaoJH1cod0XwVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNX6HQPFpPt1CVReAAAAAElFTkSuQmCC",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAFVBMVEUAAACX9UR8zDVgoChHgh47YxgqTA05cuPmAAAAAXRSTlMAQObYZgAAAFFJREFUeNpjwA4Y1SC0mmICmGYyEVFQBDGYnYSThMBiiqaKZmAR4WA3sICxqVKqEZB2MQlWdk4DMlLcjMxANANLignEGLYUN6gFLAlQBhuqxQDCtwqIu45UGAAAAABJRU5ErkJggg=="
  },
  {
    "id": "sea_pickle",
    "tags": [
      "plant",
      "sea_pickle",
      "organic",
      "green",
      "marine",
      "frontal"
    ],
    "type": "organic",
    "material": "organic",
    "description": "Sea Pickle: Cylindrical ribbed olive-green marine organism with luminescent tip.",
    "palette": [
      "#2E3012",
      "#424618",
      "#4B4F19",
      "#575C1D",
      "#626824",
      "#6C722A",
      "#B4E3B1",
      "#C5F4C2",
      "#D8FFD6"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAADtElEQVR4Ae3BPaqcBQAF0PsuoxJNGiERC/GvUXEHghtQcL8WFoK9iARBSyHxJabR8CApxj34FcNwzzk3Sc4BJjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMOsUrtpv58c54rObL8KuBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFm3SQ5h1k//ftjjvjq/tfhejXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMOsUrtpv58c54o8/fw+7GmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaYdQpX7e+XzwP/VwPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAs05h2rcffBd2NcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0w6ybJOVzMN9+9nyPee/+dHPH222/miMe/vsgRP3z/NFxOA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzTuGi7u7OuWZffPlujvjh+6fhchpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmHUKF/XRJ/dzxF9PXuaIjz99M+xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmDWKVy1u7tzjnh2+0+OePjoQbheDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMOoWL+uvJyxzx8NEbuaTHv74I16sBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFmncFF3d+cccf9BLur57atwvRpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmHUKF3Xv3k2OeHb7Okc8fPRGjvj8y3dyxC8/vwiX0wCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArFO4as9vX+WIe/ducsT9B6dwvRpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmHUKF3V3d84RH3z4Vi7p2e3rcL0aYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpj1HzDGQ0alsiSBAAAAAElFTkSuQmCC",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAHlBMVEUAAADY/9bF9MK047FscipiaCRXXB1LTxlCRhguMBJgmV5nAAAAAXRSTlMAQObYZgAAADlJREFUeNpjYoACJmQGI4zxXwEmIoAuxXAByij2gDIE/kAZl+DmwLTLscDUMEIZn/6im8zHxMDAAAC+lwcgx8RWKQAAAABJRU5ErkJggg=="
  },
  {
    "id": "nether_wart",
    "tags": [
      "plant",
      "nether_wart",
      "crimson",
      "fungi",
      "red",
      "magic"
    ],
    "type": "resource",
    "material": "organic",
    "description": "Nether Wart: Bulbous dark crimson underworld fungus bulb.",
    "palette": [
      "#4E1116",
      "#5C151A",
      "#A62530",
      "#BE3F4A"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAADxElEQVR4Ae3BIY5khQIF0MtN6VEIMr7NV70DPCsgSFb0V4DqdNCIkqzgiwkCg69MqkmotK6Ev4d5ojK555xvkvwbYFIDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALNO4ZDfv/8hR3y+XHLET399yhGvT8854ny75oiXt0t4nAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZp3CIZ8vl3zNzrdrjni/38PXqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWadwyPl2zRHv93uOeH16zhHn2zVH/PbPNUe8Pj3nkX7661OWNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0w65Rxv3//Q474fLnkiPPtmiPOt2uOeL/f80jfffyYI37581P4cg0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzDpl3H//+F+O+HA65ZF+/s9zjvh8ueSID6dTjvjlz0854v1+D1+uAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZ3yT5N3yx16fnHPHr35cc8eF0ytfs5e0SHqcBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFmncMj5ds0jvbxdcsTr03OOON+u4evVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsUzjk5e2SI16fnnPEj99+zBG//n0JuxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmHUKD3W+XXPE+/2eI3775xp2NcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0w6xQe6uXtEniUBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFm/R8xHl/UB4xKjgAAAABJRU5ErkJggg==",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAD1BMVEUAAAC+P0qmJTBcFRpOERZfcSbMAAAAAXRSTlMAQObYZgAAADVJREFUeNpjIA4wKihDGEwKJhAGs5OBEpghZOwgDGY4GypD5JicjaFqHJSh+pVcoAwTAhYBABb7BA1hxFN1AAAAAElFTkSuQmCC"
  },
  {
    "id": "copper_nautilus_armor",
    "tags": [
      "armor",
      "nautilus",
      "nautilus_armor",
      "copper",
      "marine",
      "diagonal"
    ],
    "type": "armor",
    "material": "copper",
    "description": "Copper Nautilus Armor: Unoxidized warm ochre-copper curved shell armor plating with metallic trim.",
    "palette": [
      "#844229",
      "#B65C3D",
      "#D66D48",
      "#E77C56",
      "#FC9982",
      "#FDD4CB"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAE1klEQVR4Ae3BsWocZgJG0auP6QS7CJwFG0KmNdkt7DJCjcECuUyTXXCXZwhsMaW7fYZ0LvwEEiQwjVDKcRGB2gHBGFYDIgHVykP8xY/47jkHwCOSKgVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNVaoGrn70+Y6d3HSzRPkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrQWa6vz9CTOdnrxlpnPmevfxkmZBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1FpQ7f3/CTKcnb5np4PiMmU6Z65y53n28ZKYgqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaCyY7f3/CTKcnb5np4PiMmR6vLpjp4PiMmU6Z68Nuz0xBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1Fjxxr5bPmeng+IwRj1cXzHRwfMZMj1cXPGV3t9eMeP3iGSM2uz0jgqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSai2YbLPbM+L05C0j7m6vGfLpmhFfff1PRhwcnzHi8eqCp+zu9poRn7dfaBYk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFRrQbnP2y/M9IpBn64Z8Y9//8SI/3/6HyM+b7/wlC2PDplps9szIkiqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqdaCQR/evGSmu9trRmx2e0b894f/MOKXy18Z8Wr5nJk+b78w0/LokJm29w88ZUFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbUWH968ZMTrF88YsdntGfHzb78z4sfv/sWIu9trRmx2e0a8Wj5nxOPVBTMtjw4Zsb1/YKbl0SEzbXZ7RgRJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNVaMGiz2zPi9YtnzPTzb7/T7OD4jCGXvzJie//AiOXRITNt7x94yoKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmotVusbZvrw5iUzff/tN8y0vX9gpserC2ZaHh0yYnv/wFO22e0ZsVrfMCJIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKnWgslW6xuaff/tN4y4/+NPRnz1NVNt7x+YabPbM9NqfcNMQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtRaUW61vaPbj3//GTJvdnplW6xuaBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1VqgqVbrG5qt1jdoniCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFoLVG21vkG9gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSav0FbPadoGRI1JEAAAAASUVORK5CYII=",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAFVBMVEUAAACEQim2XD3WbUj8mYLnfFb91MtuXgYIAAAAAXRSTlMAQObYZgAAAFpJREFUeNp1z0EKA0EMA0GpLc3/n5yDJywJrMGHanyxXgf+mMAPz7npy11bEs1liiU5bZbcAO0pMGPJrkMPzIBl7NYNsxc22H4uJHuGhmF9UwCvN5XLJ718/QH6pwG43VSX4gAAAABJRU5ErkJggg=="
  },
  {
    "id": "netherite_nautilus_armor",
    "tags": [
      "armor",
      "nautilus",
      "nautilus_armor",
      "netherite",
      "dark_gray",
      "diagonal"
    ],
    "type": "armor",
    "material": "netherite",
    "description": "Netherite Nautilus Armor: Heavy reinforced dark charcoal alloy shell plate with deep purple undertones.",
    "palette": [
      "#1D0D0F",
      "#2E1E20",
      "#342C2E",
      "#3B393B",
      "#51444E",
      "#706770"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEp0lEQVR4Ae3BMWurZQCG4duHUAdpJAg6FJtDA2eSTIqj/x+30kloOWnoUigfSehgF/0R7/BSnvu6vgP+Q1KlIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWitUbX/7hZnun7+heYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmqt0FT72y/MtPu6p9n98zeaBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1VpRbn/7hZl2X/fMtN3doXnun78xU5BUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0Vk+1vvzDT7uuemba7O2Y6PD4x03Z3R7NlWZgpSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCp1opP7vrmhpm2uztGHB6fmGm7u2Omw+MTn9nr+xsjNpsNI5ZlYUSQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtFZMty8KI3dc9I17f3xjxev/GiJ9/+IkR290dIw6PT3xmr+9vjLi8vNAsSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCp1opyl5cXprphyOv9GyP+2P/BiL/v/2bE5eWFz+xqvWaqZWFEkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrRWDfr3+kZle398YsSwLI37/8y9GPP5zz4jrmxtmury8MNPVes1MH+czn1mQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKt1a/XPzJis9kwYlkWRjw/PDDi9rffGPH6/saIZVkYcX1zw4jD4xMzXa3XjPg4n5npar1mqmVhRJBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0Vg5ZlYcRms2Gm54cHmm13d4x4/OeeER/nMyOu1mtm+jif+cyCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqrY6XE81+2W6Z6eN8ZqbD4xMzXa3XjPg4n/nMlmVhxPFyYkSQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtFZMdLyemOhyY6ZftlhH/Xi4M+eEnZvo4n5lpWRZmOl5OzBQk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFRrRbnj5cRUhwMzfX99zUzLsjDT8XKiWZBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0Vmup4OTHVwwMzHS8nNE+QVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtFap2vJxQryCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFr/A1lkpgM9aplpAAAAAElFTkSuQmCC",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAFVBMVEUAAAAdDQ8uHiA0LC5RRE47OTtwZ3D1pVG2AAAAAXRSTlMAQObYZgAAAFpJREFUeNp1z0EKA0EMA0GpLc3/n5yDJywJrMGHanyxXgf+mMAPz7npy11bEs1liiU5bZbcAO0pMGPJrkMPzIBl7NYNsxc22H4uJHuGhmF9UwCvN5XLJ718/QH6pwG43VSX4gAAAABJRU5ErkJggg=="
  },
  {
    "id": "diamond_nautilus_armor",
    "tags": [
      "armor",
      "nautilus",
      "nautilus_armor",
      "diamond",
      "cyan",
      "diagonal"
    ],
    "type": "armor",
    "material": "diamond",
    "description": "Diamond Nautilus Armor: Brilliant cyan gem-encrusted nautilus shell cuirass.",
    "palette": [
      "#147E7A",
      "#199B91",
      "#1EB7AB",
      "#43DEC9",
      "#A1FBE8",
      "#FFFFFF"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAE1UlEQVR4Ae3BIWul6QGG4XsfvmNWBw4Tkg5VhTVlTdnVU18Zd4gZ2xFrhkAjIsKYitFjhuMq13f8UDdmoFSU9IQMB/IPvsD2R7ziJTz3dX0H/IakSkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbUWVO3Fh/fM9O31GzRPkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrQVN9eLDe2Z6d3nBTG+Z69vrNzQLkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqtVDuxYf3zPTu8oKZdsuWqS4vmOktc317/YaZgqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSai1M9uLDe2Z6d3nBTLtly0z7pyMz7ZYtU11eMNMvhyMzBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1Vp45n549RMz7ZYtI/ZPR2baLVtm2j8dec72hztGbM63jFgPR0YESbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVWphsPRwZsTt/yYj94Y4Re+4YsTt/yYjdsmXE/unIc7Y/3DHi66fPNAuSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKq1UO7rp8/MtH/FkD13jPjn7//EiD//91+M+PrpM8/Z5uyUmdbDkRFBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1FgadXF8x0/5wx4j1cGTE3//2V0a8/fgPRvzw6idm+vrpMzNtzk6Zab1/4DkLkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqtZxcXzFic75lxHo4MuLLx18Z8cfLvzBif7hjxHo4MtP+6chMm7NTRqz3D8y0OTtlpvVwZESQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKthUHr4ciIzfmWmb58/JVmu2XLiLeMWe8fGLE5O2Wm9f6B5yxIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKnW8nhzy0wn11fM9P3PPzLTev/ATPunIzNtzk4Zsd4/8JythyMjHm9uGREk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFRrYbLHm1tmOrm+Yqbvf/6REf/59/8Ycv6Smdb7B2ZaD0dmery5ZaYgqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaC+Ueb26Z6eT6ipn2f/gdM62HIzM93tzSLEiqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqdaCpnq8uWWmL8z1eHOL5gmSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKr1HfAbkioFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTV+j/RaJ8iR1ueqAAAAABJRU5ErkJggg==",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAFVBMVEUAAAAUfnoZm5Eet6uh++hD3sn///9/H2ICAAAAAXRSTlMAQObYZgAAAFpJREFUeNp1z0EKA0EMA0GpLc3/n5yDJywJrMGHanyxXgf+mMAPz7npy11bEs1liiU5bZbcAO0pMGPJrkMPzIBl7NYNsxc22H4uJHuGhmF9UwCvN5XLJ718/QH6pwG43VSX4gAAAABJRU5ErkJggg=="
  },
  {
    "id": "nautilus_shell",
    "tags": [
      "resource",
      "sea",
      "nautilus",
      "white",
      "pink",
      "diagonal"
    ],
    "type": "resource",
    "material": "organic",
    "description": "Nautilus Shell: Spiral sea shell with pastel peach and coral ridges.",
    "palette": [
      "#413C2D",
      "#80411F",
      "#6D533F",
      "#AE4635",
      "#8A6A53",
      "#CA7548",
      "#A6846A",
      "#D48080",
      "#BAAD96",
      "#D4CCC3"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAFgElEQVR4Ae3BsWvW+QHH8Xc+ZCjXG0QeThBFJyEYDx0C3hKHZypNXRwO3DoVBJeOxdEO3QopQqduKQ5Z7jx6y0NJOyh08O4SCUiXYAikxHLD3eGW/g/9Dj8ePu/XawU4R1KlIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWqtoyM7TR+j/9/DJMzSdIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWqssuZ2nj5jSbG2dERdefcGIj35+lyFbc6a0w7QePnlGsyCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpForwDkT2nn6iBGztXVGXL52i2ovFgzZmjOlk6N9RpwdHjDi4ZNnLLMgqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaK8A5A3aePmLEbG2dEZf3/8OQrTnL7ORonxFnhwdMaba2zogLr75gxPG37xnxYXODEQ+fPGNKQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtVaZ2OVrtxhyjTEvFoz46cdXjPj+7n1GnB0eMGK2ts6Uzg4PGHL3PiM+vsuQv+88Z5kFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVWqXd1pwRHzFnxL+//isjZmvrjPhy5zkjrl6aMeL2fM6Is8MDRszW1hnx2Z2bTGl7d48RQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtVYZdHxyyohPXywYsjVnSidH+4w4PjllxGxtnRG/evg5I77cec6IK4cHjDg+OWXEz/7xL4ZsbrDMgqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSaq0ysZNbnzDiwvPfM6Ufvn3PiCubG4z4ZrFgxLvTM0Z8ducmy+zj3/yaEd/96Q8MuXidKQVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNVaZdC70zOGLBaMuD2/z4jL124x4sbnDDk52mfEbG2dEVcOD5jS8ckpI27P50zpxvyXjHj5+g1TCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqrUCnDOhxw/uMeLqpRkjrly+xIjZ2jpT+maxYJndns8Z8cOf/8KID5sbjHj5+g0jtnf3mFKQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtVSa2vbvHiMcP7jHib9+9ZcjX/2RK2398xpAXC4ZszRlxcrTPiA+bG4x4u/iKIRevs8yCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqrTKxxw/uMeLg9L8ss/VLF5nSTz++YsT3R58w4uzwgBHHJ6eMeH/xOiO2d/dYZkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbVWWXK/+PQGI96dnjGlq5dmjHj7u98y4sPmBkMODxjx8vUbprS9u0ezIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWivAOUvs8YN7jPjszk2m9PL1G5pt7+6h6QRJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNVaAc6RVClIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKnW/wDvPb2ZJlv9WgAAAABJRU5ErkJggg==",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAIVBMVEUAAADUzMO6rZbUgICmhGrKdUiKalOuRjVtUz+AQR9BPC3GQlFJAAAAAXRSTlMAQObYZgAAAGtJREFUeNp1z8EOAyEUQtGCPGT8/w9uSCeTLlri5tzowtfvqfsmZwFPEgFgAdTthUKcrQYBayj25A6AGFNUi/vaZOT9CZzZciTzaogJkDV7o0Wkbe66yzkHC9SVx8FQrhuceEtJ1aVI/nz8DUCcArw4/jn9AAAAAElFTkSuQmCC"
  },
  {
    "id": "heart_of_the_sea",
    "tags": [
      "magic",
      "heart_of_the_sea",
      "blue",
      "orb",
      "frontal",
      "marine"
    ],
    "type": "magic",
    "material": "prismarine",
    "description": "Heart of the Sea: Luminous cobalt and aqua sphere containing ancient oceanic power.",
    "palette": [
      "#082054",
      "#0B3A4D",
      "#0D485F",
      "#0F5875",
      "#1D6D8D",
      "#2180A1",
      "#1F96B1",
      "#1DC2D1"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEoklEQVR4Ae3BsaqehQEG4Ne3v6QgDQeNBylEHB16AcWxUxc3915BJq8jk1fgns3FsZNbN4eMBwWRo4ZDJJBS/e095Bt+Du/zPG8l+SPApAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZp3CRT1+8jTLvv/i83A5DTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMOmXc4ydPc0mn9x7liPP1VS6pt3c54vGTp7mk77/4PMsaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBph1yj33+MnTHHF671GOOF9f5Yhz7rfz9VWO6PVVjujtXY74yz//lSN+/frL3GcNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8w65cIeP3maI07vPcoR5+urHHH+20e5pH57E97co7//I5f069df5pIaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBph1Cgz77Zefc8T55YvcZw0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzDrloMdPnuaI03uPcsT5+iqX1G9vwpvr7V3us9OHH+eId3LMq2++yhENMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8w65Z7r7V2OOF9fZVlv78Kbe/j+BznixXfPc0kNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8w65aAX//l3jjh9+HGOePj+BzniFO6z3375OZf08qcfc8TvPzzIJTXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMOuUC/vtu+c54sV3z3NEH76bI3p1nSMevv9Blr386ccccb67zRH/e/4ql/Snv/43h9zkkAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZr2V5I9c0DuffJoj+vDdHHF++SK8ud9/eJD77O2P38kR/3v+Kke8vnmWS2qAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYNYp4/rw3RzRq+ssO32Yizrf3eaI88sXOeZB7rMGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWadcmGvvvkqR7zzyac5og/fzRHnu9sc0avrLDvf3eaI88sXOeL3Hx7kiNc3z3KfNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0w65R77tU3X+WIP3/0WS7p7Y9vc8T55YvcZ7//8CDHPMgRr2+eZVkDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALNOGff65lku67Mc8yD32eubZ+FyGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaYdQoX9frmWeBSGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY9X9k1YXExoz1fQAAAABJRU5ErkJggg==",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAG1BMVEUAAAAdwtEflrEhgKEdbY0PWHUNSF8LOk0IIFSR1f/0AAAAAXRSTlMAQObYZgAAAFlJREFUeNp1j1sKwEAIA+0mxtz/xKUKfcHO3wwqGBtI8qNYC08iVgPdfhwdoF9gxfgAMKsDRgH2SCUxkOkrVClJMmX3kVJd2JZjgrJROV5lfLDVO/Fg25u/TzEUAp4LVS52AAAAAElFTkSuQmCC"
  },
  {
    "id": "weathered_copper_door",
    "tags": [
      "copper",
      "weathered_copper",
      "door",
      "patina",
      "teal",
      "utility"
    ],
    "type": "utility",
    "material": "copper",
    "description": "Weathered Copper Door: Aged copper with dramatic turquoise-green verdigris oxidation patterns.",
    "palette": [
      "#434343",
      "#4D5046",
      "#6A7147",
      "#708050",
      "#70925A",
      "#6C975C",
      "#8D8770",
      "#66A977",
      "#9A947B"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEbElEQVR4Ae3BIauehwEG0CcPn0qZCbuFiogyMSYGEy3EzIyyqcKmrokOZMRM5TdcHwhcHRM9ux8w2BVxpSJUxLVQ16gL2X/oKz4+nnPOgySfAkxqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmDWKRfun//6W464f/KnwK91e32TS9YAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKxTOOT2+iZHvHj9NEe8ev4ml+zF66c54tXzNzni2duXWdYAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKxTLtyHHz7liC+e5KxePX+TI569fZkjbq9vcsSzty9zxKvrm5zTVz+dcsRtLlsDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALNOuXCPv3yQI+5z2W6vb3LEs7cvc8Tt9U24XA0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzDqFi/bs7csccXt9kyOevX2ZI26vb3JOd1f3WdYAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKxTOKsXr5/miFfXNzmn2+ubHPHi9dMc8er5m/DrNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0w60GST7lg3/79rzni22++zjndXd1n2fvbuxxx/Y8nOeLu6j5H3F7f5JI1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTDrlAv3+MsHOae7q/sc8fC773PJ3r/7mCP++Off5Ih//+d/OeLbb77OEbe5bA0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzDpl3N3VfY54+N33OatHD3NeH3PE+3cfc053V/dZ1gCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArFM4r0cPc8l+95ff5pCfP+acPmZbA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzTrlwH374lCO+eJJpj3/5PEd8+OzHHPLoYQ75+WP49RpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmHXKhXv85YMccZ/L9viXz3PEh89+zEV79DBHfPXTKUfc5rI1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTDrFA75+Iff55y+z1GPc05f/XTKOd1d3WdZA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzThl3+u+7cD7vcl6n95nWALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCs/wOHoWoxb7Ut/wAAAABJRU5ErkJggg==",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAhklEQVQ4y2NgGFQgq9D9f9rKcoKYoAEgds70GBSFMD5eA3wD3FBsgLGRxWZNqSbOBeiGkGUANhfQPgxATgRh9JB3dnaGi+N1AUxRQUMAHIMMhtFEhQFc86QoMAZphGGiwgBZMxxDDSUqHSAb0NtegGIISS5A0QzFRIUBNowcO3gNIAYj6wEAns4MpW90fiAAAAAASUVORK5CYII="
  },
  {
    "id": "weathered_copper_lantern",
    "tags": [
      "copper",
      "weathered_copper",
      "lantern",
      "teal",
      "glow",
      "utility"
    ],
    "type": "utility",
    "material": "copper",
    "description": "Weathered Copper Lantern: Patina verdigris copper cage framing glowing warm interior core.",
    "palette": [
      "#3E5E54",
      "#497164",
      "#46824D",
      "#6C8251",
      "#8D8770",
      "#69B26E",
      "#99EB99",
      "#DCF8DC",
      "#FFFFFF"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAD40lEQVR4Ae3BsYqeBQIF0Js7/6I4zchsv0rsREljkSZPkTqlD5Y6D2CTJo1tUOwcFKyHDMiIQUL2HfyKn+Gecx4l+RhgUgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAs05h2rMXz3PEm5evwsPVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsU3jQnr14niMur6/CrgaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZp3Cg3Z5fZUj7m/vwq4GmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWadwoN2f3uXI968fBV2NcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0w61GSj+Fsnr14niMur69yTve3dznizctX4XwaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBph1Cmd1eX2VI+5v73JOl9dX4eFqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmDWoyQfw7/27MXznNO3X33IOf3060XO6c3LV+Hfa4BZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpg1imc1adfvc8RH558mXP6NL/liL9//SScTwPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAs07hkMvrqxzxxZPPcsSTp1/nIfv93V/hfBpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmHUKhzz+/DZHfPP0uxzx/X+/zxE3729yyNMccvH2h3A+DTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMOoUH7eb9TY54/MnjHPH6z9fh4WqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYNYpHHLz7jpHfPjxlxzyNIe8/vN1jnj74y854vd31+F8GmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaYdQqH3N/e5YiLt7c54ue3f+SIL//zvxxx8c8fOeL+9iKcTwPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsx4l+RhgUgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAs/4PwvdNYpelnOAAAAAASUVORK5CYII=",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAHlBMVEUAAAD////c+NyZ65lpsm6Nh3BsglFGgk1JcWQ+XlSe4inOAAAAAXRSTlMAQObYZgAAAD1JREFUeNpjQAEToDRnA5TBAReBKZnRCWV0zoDKTMucAGGUuEMYHM4mEP1shsoJEIaRcAKqFGda2AQGLAAAIcULoUjKfw0AAAAASUVORK5CYII="
  },
  {
    "id": "oxidized_copper_door",
    "tags": [
      "copper",
      "oxidized_copper",
      "door",
      "cyan",
      "green",
      "utility"
    ],
    "type": "utility",
    "material": "copper",
    "description": "Oxidized Copper Door: Fully verdigris jade-cyan aged copper door panel with weathered studs.",
    "palette": [
      "#434343",
      "#4D5046",
      "#396E59",
      "#3E816B",
      "#41866D",
      "#509B76",
      "#53A178",
      "#53A481",
      "#59B292"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEZUlEQVR4Ae3BvYrnBwEF0JubYWDZZeLkAyRFsLERC9sQsFFsgoOwaaZafIGp9xG2dd9gq2ncwq1tRUidJqSRFCFIPiCwBBZifIf9FcOfe855I8nPASY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTDrLCfuw5vrHPGrP34YeF23Vzc5ZQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzDoLh9xe3eSIh88e54jnj57klD189jhHPH/0JEdcv3iaZQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzDrLiXv3y29zyp4/epIjrl88zRG3Vzc54vrF0xxxe3WTu/Tqh++zrAFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWWc5cd988E6OeJDTdnt1kyOuXzzNEbdXN+F0NcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0w6yyctOsXT3PE7dVNjrh+8TRH3F7d5C6dX1xmWQPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAs87CnXr47HGOuL26yV26vbrJEQ+fPc4Rzx89Ca+vAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZbyT5OSfsz3/5U444/+Sj3KXzi8ss++/f/pEjfvHX3+eI84vLHHF7dZNT1gCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArLOcuG8+eCdHvJ9jzi8uc8TXn32RU/bg089zxP/+8Jsc8erv/8ohn3yUZQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzDrLuPOLyxzx9Wdf5C699d693KWfcsyDTz/PXTq/uMyyBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmnYU79dZ793LK3vz4dzniu69e5i49yLYGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWad5cS9++W34fW9ee9+jvjpx5c54u337+eI7756GV5fA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzznLivvngnRzxIKftzXv3c8RPP77MKXv7/fs54tUP32dZA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzzsIhv/ztr3PSLi5zl1798H3u0vnFZZY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTDrLOP+889/B1Y1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTDr/xq6XZaTfuBmAAAAAElFTkSuQmCC",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAh0lEQVQ4y2NgGFTAMi/yf+SmSQQxQQNA7OCFFSgKYXy8BvgGuKHYAGMjiwUvaSTOBeiGkGUANhfQPgxATgRh9JB3dnaGi+N1AUyRY1suHIMMhtFEhQFMY8DsMjAGaYRhosIAWTMM2zVmgzFR6QDZAJCTkQ0hyQXImpENJCsvIMcOXgOIwch6AGlQC5KKLhRuAAAAAElFTkSuQmCC"
  },
  {
    "id": "resin_clump",
    "tags": [
      "resource",
      "resin",
      "resin_clump",
      "orange",
      "amber",
      "diagonal"
    ],
    "type": "resource",
    "material": "copper",
    "description": "Resin Clump: Organic irregular chunk of raw bright orange tree resin.",
    "palette": [
      "#802A1A",
      "#9B3300",
      "#B54006",
      "#E05504",
      "#F3791B",
      "#FAB326",
      "#FFDBB1"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAE50lEQVR4Ae3BoW7dhx2G4befTs/AoOtYOqiyDCoZD6TAMilZ4HjUe6jCzXcJY0GThk1WEg04INhWgGXmIzmeUWRFdqqk95Af+Mv63uf5DviKpEpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtVao2unxGn27F28eecqCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqrdCiTo/XLOlw9wsTm5f7PGXb11dMnB6vmXjx5pElBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1VqhkdPjNROHu1+Y2LzcZ+Lh7J6Jh7N7Ju4ub1jSzsEeI7e3PGVBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1VpQ7PV4z8fd//YeJz+9fMfFwds+S7i5vWNLOwR4Tf/n5r0wcXt4wcXq8ZuLFm0cmgqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSaq144k6P10z88tuPTHx+/4qJ73/6JxPf/8TI5/evmNj8vM+Stq+vmDh/GyaOnu8x8e78KzNbJoKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmqtWNjp8ZqJX377kYnt6yuW9Q8mdg72WNLd5Q1LOr8NE9uPj0zcXd4w84wlBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1VrxxD2c3TNxfhsmDne/sKS7yxsmdg72WNL5bZjYfnxE3y5IqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKnWiqHT4zUTR893mfjf21ua7RzsMXF3ecPE71d/MHH9acNTdn77f56yIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWiuG3n34gYkjuu0c7DFxd3nDxO9XfzBx/WnDxK+HH1jS+W2YePfhByZOLrYsKUiqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqdaKhd1d3jBx9HwPfbvrTxsmfj38wMTm5T4T29dXTBzufmHi6Pl3zGyYOLnYMhEk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFRrxdDJxZaZDSPnX+n2jCWd34aJnbN7JjYv95l4OLtn4t//vWbib8/WTJywYSJIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKnWioWdXGzR03XChonDyxsmzt+Gie3HR5oFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVWiENnFxsmdnQ7PoTIycXWyaCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqrZAWdHKxRcsJkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iq9Sc4IKQXNkeJnwAAAABJRU5ErkJggg==",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAGFBMVEUAAAD/27H6sybzeRvgVQS1QAabMwCAKhq5fJDAAAAAAXRSTlMAQObYZgAAAFpJREFUeNqNzzEOhEAMQ1Em/k7uf+MVYy0g0eDuWU6R43t85kmqCl+mJJD/XnHhuGqtfaGJAQncpJAB4W4mNoieGZ/FyN6G7WOQJIYCpUmsUmeTDO67uJbvJ38WzwJwmi8DxQAAAABJRU5ErkJggg=="
  },
  {
    "id": "resin_brick",
    "tags": [
      "resource",
      "resin",
      "brick",
      "terracotta",
      "orange",
      "diagonal"
    ],
    "type": "resource",
    "material": "copper",
    "description": "Resin Brick: Fired burnt-orange and terracotta composite architectural brick.",
    "palette": [
      "#631C10",
      "#802A1A",
      "#973203",
      "#B54006",
      "#E05504",
      "#F3791B",
      "#FAB326",
      "#FFDBB1"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEyklEQVR4Ae3BP6ufhQEG0CdPb9Oh2eQSyKK0DoV8AjtIFgdxcJCupbjVNbg4CYJL6aqTDu6OmbqIg9m6RRxEapTQeBEkaPEP0X4H3+HH5TnnXEnyS4BJDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMOguc0J1bV3NKL3zwY5Y1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTDrLFxqd25dzWX27DPnOaU7ucgRL3zwYy6zBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmnWXcnVtXc5k9d/upnNIPH32XIz68e5FTevaZ8xxxJxc54oUPfswpNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0w6ywH3bl1NZfZc7efymX24L3PcsS9i2bZ158+zBHPPnM9R7z96L854u//fpwjGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaYdXbn1tUc8dztp3KZ/fDRdzmlrz99mCPuXTSX2c3zn3PEE09fzxG/+/Pvc0rPf3olR7yd3+SIBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmneWgHz76Lkdce/mtHPHtu69k2c3zn3PEE09fzxHXXn4rp/TTJ6/miAfvfZYj7l00R9w8zyEPv7+eIxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmHV2/9HjnNLnr72UI5588/0c8e27r+SUbvz1Dznit3/6R07p89deyhH3LppTuv/olxzzOEfcPL+SU2qAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYNZZLrnPX3spRzz55vs54qdPXs0RD977LEfcu/hLTqs54v6jxzni4ffXc0p/u/lVTumLR//LEQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzDp7+P31nNK9i+aUbnzyao741z//k2OaU7r/6HFO6fk/XskxX+WU3rh7Laf0zpff5IgGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWadvf7xgxxzI0fcfvE8R3x49yJH/PDRd7nMbp7/nCNunl/JKb1x91ous3e+/CaXWQPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAs85y0OsfP8gxN3LE7RfPc0o3z3/OKb1x91ous3e+/CacTgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAs85yYq9//CDH3MgpffHoWk7pnS+/CfxaDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMOssl9/rHDwL8Og0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzPo/R66TKZJ8r+kAAAAASUVORK5CYII=",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAG1BMVEUAAAD/27H6sybzeRvgVQS1QAaXMgOAKhpjHBDsOymxAAAAAXRSTlMAQObYZgAAAFlJREFUeNqVzzESxEAIA0FAGpb/v/hqCa7s0GQ9iogvB28h8VCVQPxVBrA64kryssodKCXZyizjEy2nVJmGbm/w3aDPsSeOoNjVnom4RXC13KKHtpyZDy/+ACVvAlX1f+1KAAAAAElFTkSuQmCC"
  },
  {
    "id": "wind_charge",
    "tags": [
      "magic",
      "wind_charge",
      "breeze",
      "projectile",
      "white",
      "cyan",
      "frontal"
    ],
    "type": "magic",
    "material": "wind",
    "description": "Wind Charge: Swirling vortex of pressurized white and light sky-blue compressed air currents.",
    "palette": [
      "#8494AF",
      "#96A3B9",
      "#ABB1BB",
      "#B7BBC4",
      "#C7CBD4",
      "#BDC9FF",
      "#D7DBE5",
      "#D3DBFF",
      "#E0E6FF",
      "#EBEFFF"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEhUlEQVR4Ae3Bv46nBQEF0Ds30yysZjCrIZvYQUxQSoMWViTSgq1SmxAegdJHML6ADyCWkFAZouh2VPxJLCQLAcL+FGanMY7vwFdMJvecc5bkOsCkBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmnYcb9Yc/vpVlr736Urg5DTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMOktynWHvf3SdI56+l0O+/PJhbtLp9ChHnE6nHPHPzy5zxGuvvhS+vQaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZp1n3F/+9naO+MXPfpkjnr53P0dcXuVW+/7jqxzxxaPrHPHZlznk+WfPcps1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTDrPDfsnfeuc8Rf//Fmjvj+d5sjzvMwR3z88aPcZhcXT+WIZ575cY64vMohf37rzSxrgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmDWeW7YD76XG3X3iTs54nR6lCMuLp7KTbp3736OuLzKIQ8evJsjvnl8lZv0znvXOeLFF85ykxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmHWeG/adJ3PIb3/9co548ODdHHE6nXKbnU6PcsTpdMoR3zy+yhFf/Od/OeI3v3o5R3x9mVutAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZZ0muc4u9/9F1jnj6Xg65vMohV5cPc8Tp9ChHnE6nHPHN46sc8ZPnnssRd568nyO+vswhzz97ltusAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZZ0muM+x3v/9TjvjRD+/miLtP3MlNuri4yBEXF0/liP/mfo74/Ksc8uILZ1nWALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCs84z7+U9fzhEffPh2jrnKEXefuJMjPnn4aY745OGnOeKDf/09R7zx+ivh22uAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYNZZkuvwrb3/0XVu0udf5ZAPPnw7R3z178c54o3XXwk3pwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWWdJrgNMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpg1v8BUzCHCSJRWnAAAAAASUVORK5CYII=",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAIVBMVEUAAADr7//g5v/T2//X2+W9yf/Hy9S3u8SrsbuWo7mElK8vBnL2AAAAAXRSTlMAQObYZgAAAExJREFUeNpjwA9mzoTQhi7pE8CMyUJujQZAOqolLUVoAZBhVeYiVLEUyFAsT0vvVAYymIXcKpwMGIBgRXmKKVhXZHvHAjCD2XQWfgsBsxQQoI8NfmgAAAAASUVORK5CYII="
  },
  {
    "id": "breeze_rod",
    "tags": [
      "magic",
      "breeze_rod",
      "breeze",
      "wind",
      "purple",
      "cyan",
      "diagonal"
    ],
    "type": "magic",
    "material": "wind",
    "description": "Breeze Rod: Twisted spiral rod pulsing with lilac, aqua, and kinetic wind force.",
    "palette": [
      "#2F527F",
      "#3E5E87",
      "#576C9D",
      "#6C76AB",
      "#7A82C4",
      "#958DD3",
      "#B5A5CA",
      "#BFAFC9"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEMElEQVR4Ae3BIXIYaAEG0G+/iYETcABki6/B9AaYuOqKXKCKieIUMTlA1FZlMG3Wt4RBZRkcOziQWbHcYX+R6Xzvve+S/BJgUgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsy4Cwy6vbnLi3//7T058uv2Ql9QAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKyLwDfs8uomJ969eZ0TP/z4nBP//dOfc+Lr3XVONMCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0w6yLwgi6vbnLi/dtXOXH/+JwTD0+fc+Lr3XVeUgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsy4CBy6vbnLi/dtXOfGPf/42Jx6evs+JT7cf8i1rgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmDWRZh2eXWTE+/evM6J+8fnnHh4+j4nPt1+yLIGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWZdhG/a5dVNTrx78zonfvjxOScenj7nxKfbD+HXa4BZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpg1kV4UZdXNznx/u2rnLh/fM6Jh6fPOfHp9kN4OQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzLoIRy6vbnLi/dtXOXH/+HNOfPxynxNf767Dt6sBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkXGXd5dZMT7968zon7x+ec+PjlPie+3l2HXQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzLrIN+7y6iYn3r99lRP3j8858fHLfU58vbsO/FoNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8y6yAu7vLrJifdvX+XE/ePPOfHxy31OfL27DryUBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmXeTQH9/9JSfevXmdE/ePzznx8PQ5J77eXQe+VQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzLrIoT/87vc58a+ffpMTD09/zYlPtx8CqxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmHWRQ5+f/p4Tf/vpKSc+3X4I8Os0wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTDruyS/BJjUALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCs/wMCC3jXg/UzOQAAAABJRU5ErkJggg==",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAWElEQVR42mOgOwjPmfvfLq79P9maty499b+q6ch//aD6/yRr3r/+JEgzyAXkaZ7aexmsmVxnU6yZ/n6Ghzb9o4r+moGBRE5oI0BO2WpEIiEHAJ0M0TwQAABFm4JBm0Q9dgAAAABJRU5ErkJggg=="
  },
  {
    "id": "trial_key",
    "tags": [
      "magic",
      "utility",
      "trial_key",
      "copper",
      "key",
      "diagonal"
    ],
    "type": "magic",
    "material": "copper",
    "description": "Trial Key: Heavy copper skeleton key with skull-like teeth and glowing cyan gem.",
    "palette": [
      "#292828",
      "#54281A",
      "#373B35",
      "#6D3421",
      "#454A42",
      "#84432D",
      "#525A51",
      "#9A5038",
      "#6C716B",
      "#C15A36",
      "#85837A",
      "#D67B5B",
      "#A19E94",
      "#FF9951",
      "#FC9982"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEZ0lEQVR4Ae3Bz6qnBQEG4NeXHxjlqCAqjqJIlIrLihYGkn9aSOFirqNbmEW3MLfhrNq1kVm4CKWNi3NGocFhHCFR0KmoTXYP51schvd5nkeS/BAu7N333goXd+/v93PE2fl5uLgGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWadMu7d997KEVeefCJHvP/O27lM9768nyO++va7HHHlySdymc7Oz7OsAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZp3DIL157LUd8/OlZll199mqOOMtZuLgGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWadwiFffftdjrjx6v0cce1WLtXNN3PItVvhEjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMOsULtW1Wznk/XfezhEff3qWI67dup8jrj57NUec5SxcXAPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsx5J8kO4sF+/8asc8fxLL+SIL7+4l8v0/Esv5Iizv53liLPz83BxDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMOoVDvv/mQY65lyP+8KP/5DL9+Yt74eHVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsUzjk8aeu5Ijvv3mQI5559ckc8Y8H/8oR33/zIEc8/tSVcHkaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBph1Cof89aOPc8Qff/lyLtMzV36SI17P3RzxwUfn4fI0wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTDrFB5qr/z4fzni9r8bdjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMOsUHmpPv/yzHHLn8xzxl/Awa4BZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpg1ik81H7+4is54us7n+eI3736Yo547rFHc5lufHInyxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmHUK09548/c54um7t3PEb17/aY64fvPDcHENMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8w6hWmf3b2dI67f/DCX6YPz++HiGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaYdQoPtc/u3s5l+tO13+aIr+98niOee+zRHHHjkztZ1gCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArFO4VF/987854vrNDwMX1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArP8DjRVuTvM4UYMAAAAASUVORK5CYII=",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAMFBMVEUAAAD8mYL/mVGhnpTWe1uFg3rBWjZscWuaUDhSWlGEQy1FSkJtNCE3OzVUKBopKCi4bYGuAAAAAXRSTlMAQObYZgAAAFpJREFUeNpjYGDg3r37AwMI7DQOnw9mbC0vrwcztmtOmg9hTK6EiPDOvQlRzH9rLYTB+2P9BQYwONHHAAHHYIwjeVDGwYwzUIaIH5Th9wCqxiUHwnj37h0DAwA6LB9nJOgxbwAAAABJRU5ErkJggg=="
  },
  {
    "id": "ominous_trial_key",
    "tags": [
      "magic",
      "utility",
      "trial_key",
      "ominous",
      "purple",
      "crimson",
      "diagonal"
    ],
    "type": "magic",
    "material": "magic",
    "description": "Ominous Trial Key: Darkened ominous key shrouded in cursed magenta and soul-red fire.",
    "palette": [
      "#292828",
      "#373B35",
      "#2F4A42",
      "#9A1E33",
      "#454A42",
      "#36594D",
      "#525A51",
      "#396E59",
      "#3E816B",
      "#6C716B",
      "#DE4058",
      "#85837A",
      "#55A386",
      "#A19E94",
      "#69C09C",
      "#7BDBB0"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAFDklEQVR4Ae3BP4vcdQLH8fd9mDtB2V1J/AO7BiEYTeSaIGjOShJTXBoLsdDHIT4IObC75khxzaWwFOSEaKfgLhaewsyqpNHdI5IJzAwWanH3HPZb/Bg+79frD8D/0JndvHWdbbZebZjSerlhxHyxQGcXJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUa0a5m7euM2Ln8T1GvPH6Dab008kpI/77cMWI0/unTGm+WNAsSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCp1owtd/PWdUasVxtGvPaXa4w4+mZOs/2n9xkxZ86IK5cvM2K+WLDNgqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSas2Y2M1b1xnxwgtXGHF8PGfEk//4hBFvX7zEiHf3f2VKfzt9hBF3733PiE8fZciNv95gSvPFgikFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVmjGx9WrDiOPjOVP6z5vXGPHv+6eMeOP1G4w4+mbOiHc5ZcT+1WuM2D08ZMTx8ZxmQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtWZsube+XTHiwz/vMeLo8JARB88+w4i/3/4nUzp49hlGHB0eMmJ3b4cRb327YsQHj7LVgqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSas2Y2Hq5YcTtCzuM2GXMerlhzE+MyEvPMaWTr35gxHq5YcTu3g4jbl8IQ5ZstSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFozJjZfLBhx5fJlttl6uWHEk+fPMeL35UNGrJcbprRebRixXm4YMV8s2GZBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1Zmy53fM7bLOdq5eY0h/Pn2PEny7uM+K3e6dMaff8Ds2CpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqzdhyX35+xDZ7+eolRjx98YAR9++dMKX5YoGmEyTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVGuGttoTF55iSqsv52h7BUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1ZqhrXbu4AlGPPjxZ0bsvXKFES/vPcaUDu98RLMgqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaM1Tt+WsvMqmLB4z47s5ddHZBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1Zqjaw5MHjPjuzl2m9PXHn6GzC5JqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqjVDW+3hyQOm9Op77zDiwY8/M+KRvccYcXjnI5oFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVmqFJ/br6hRFfvP8vpLMKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iq9X9DKqM5NEA8twAAAABJRU5ErkJggg==",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAM1BMVEUAAAApKCg3OzVFSkJscWtSWlGaHjOhnpSFg3reQFg5bll727BpwJw+gWtVo4YvSkI2WU0yao3pAAAAAXRSTlMAQObYZgAAAGlJREFUeNoFwbFxw0AQBDDsHT3jyGb/XSoW9SsgYKkWAjsjT57iwnYfVMqykav5cbYsQee0lME63sfJYtG0v9e7ORja6qq2DMK//SO4cJBqYQAngAHUuW8YgE9OYQCSvGAA8ekNF9BF4QvEeTNkuErGogAAAABJRU5ErkJggg=="
  },
  {
    "id": "silence_armor_trim_smithing_template",
    "tags": [
      "utility",
      "smithing_template",
      "armor_trim",
      "stone",
      "blue",
      "diagonal"
    ],
    "type": "utility",
    "material": "stone",
    "description": "Silence Armor Trim Template: Ancient dark stone tablet engraved with silent cyan runic inlays.",
    "palette": [
      "#0D1217",
      "#111B21",
      "#052A32",
      "#242424",
      "#034150",
      "#313030",
      "#383737",
      "#414141",
      "#4B4C4F",
      "#40576C",
      "#585858",
      "#077995",
      "#6E6E6E",
      "#209AB8",
      "#4BC9C9",
      "#83F8F8"
    ],
    "base64Scaled": "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",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAM1BMVEUAAACD+PhLyckgmrhubm4HeZVYWFhAV2xLTE9BQUE4NzcxMDADQVAkJCQFKjIRGyENEhcpd/iXAAAAAXRSTlMAQObYZgAAAHlJREFUeNpVy1sSQjEMAtD0IYI3Tbr/1TrXto7yxxmwFYD2G6D3PyIhwV/fji4+lJFzQ+9FjfAtAohalfGMA4WFt8w0s+kQSxGZ65EeVQWVunLcgwyh1gCua3wG4YzmjTqQEdGCZ2DT8x5BB2zOTGr3Q5EbTnKMsfob/nQGXueYxlUAAAAASUVORK5CYII="
  },
  {
    "id": "snout_armor_trim_smithing_template",
    "tags": [
      "utility",
      "smithing_template",
      "armor_trim",
      "stone",
      "piglin",
      "diagonal"
    ],
    "type": "utility",
    "material": "stone",
    "description": "Snout Armor Trim Template: Carved nether stone tablet depicting a piglin snout crest.",
    "palette": [
      "#160F10",
      "#27221C",
      "#312C36",
      "#3C3947",
      "#4E4B54",
      "#5B5861",
      "#077995",
      "#209AB8",
      "#4BC9C9"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAE80lEQVR4Ae3BsYpcZQCG4dePqRwOMlNYGFIJaTYQ0gQEe4tAbPYGBG/AW0jrFdlYBdKkEhUM6BITV1zJmV3O7rR6D/mLw/C9z/MR8B9azbOn56xpnhdGvHj5AzpdQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtTZoyLOn56xpmibW9OzpOSPmeWHEi5c/oA8XJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUa4NWNU0TI5ZlYcQ0TZyyL7/4ihH//vMLI3774x2nLEiqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqdaGcl9+8RUjpmnilC3Lwinb7yfGnHHKfvvjHSOCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqbdCQN28uWdN+P9FsnhfW9PHHn7GmTz+5ZUSQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtDSfu8cMnjNjvJ0b89PW3jPj74ndGnF+8YsSyLKxpnhdG7PcTa7pbDpyyIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWhs05OzRjjGfM+TiFSPmeWFN+/3Emt6++ZM1HY+XrClIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKnWhpU9fviEEdtpxyk7e7RjyI8MeffNd4z4++J3RpxfvGLEsiyMOB4vWdPh/S0jrm6uGREk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFRrQ7l5Xhixf/49I6ZpYsSyLIw4e7RjzOcMuXjFiLdv/kQfLkiqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqdaGQY8fPmHEdtox4m45MGI77Rgxzwsj5nlhTZ8w5uzRjiE/MuR4vGRNh/e3jLi6uWZNQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtTas7G45MGI77Wi2308Mef49I6ZpYsSvP/+C1hMk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFRrw8q2045Ttt9PjJjnhRHzvLCmeV4YcTxesqbD+1tGXN1cc8qCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqbRj019vXjLh3/wEjttOONc3zwprulgMjttOOEXfLAZ2uIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWhsGXd1cM+Y1a7p3/wEjttOOU3a3HBhxPF6ypsP7W0Zc3VzTLEiqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqdaGlV3dXLOu16zp3v0HjNhOO0bcLQfUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqdaGclc316zrNfpwVzfX6MMFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTV+h+EgLRfNqv55AAAAABJRU5ErkJggg==",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAHlBMVEUAAABLyckgmrgHeZVbWGFOS1Q8OUcxLDYnIhwWDxAR5NgPAAAAAXRSTlMAQObYZgAAAGBJREFUeNpVykESgDAMQlGjQJr7X9ihTe3I7r/hWiN19brxJ4IANXYLoKfRJGm2MsudvB+QIj+IG5o9yi1GwKfhNojwKQ3ulKQI7MNsErnBaXN7ZVGqDxZTdh9qOFS1+gXfsgPum74/mgAAAABJRU5ErkJggg=="
  },
  {
    "id": "apple",
    "tags": [
      "food",
      "organic",
      "apple",
      "red",
      "fruit",
      "frontal"
    ],
    "type": "food",
    "material": "organic",
    "description": "Red Apple: Smooth rounded fruit, bright highlight, tiny brown stem at top.",
    "palette": [
      "#54090E",
      "#542409",
      "#9C1017",
      "#752802",
      "#B4131E",
      "#7E370E",
      "#DD1725",
      "#FF1C2B",
      "#FF5E69",
      "#FF969D"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEs0lEQVR4Ae3BsaqehQEG4Nc3vx4EFRcxg1DqZPZCO7W0U8G1t+LYltIxt+DgBWQVnASdOnTuiVAsgkMgLbSx9PCbk9h78Bt+Du/zPK8k+SHApAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZp0CB3z0QXPEw8cvw+U0wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTDrFKb94edv5Yi//et5jrkJl9MAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKxTmHbzn//miEd/fxnurgaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZp3CIR+//W4u6av7T3PEP26vcsRHH5xzSQ8fvww/XgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAs0654z5++90ccf/eVY748M9/zBGf/v5POeKz26sc8dt/vpUjfn31Vo64vj3nkA++zSU9fPwyd1kDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALNeSfJDLujjt9/NEffvXeWID19/M4f85pc55Bc/y532l7/mkM+/zBGf3nyXI75459tc0sPHL3NJDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMOoVjPv8yh3z+ZZZ9/fz7HPHh62/mkKfv5Ygv3vk2d1kDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALNOGff18+9zxPuvvpYjvn7+fY54/9XXcsTXz7/PsgenqxzxyTdv5JhnuaQGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWadcmFf3X+aI+4/fS9HXN+ec5d9evNdLunB6SpHXN+ec8T7r74WfrwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWadwiHXt+fcZQ9OVzni+vacu+z69pxlDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMOuXCHj5+mUM++DZH/Orpe7mkB6erHHF9e84R17fnXNKD01WO+PTmuxzxyf/+nSMe3TzLXdYAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKxTxj15cc4R9+9d5Yjr23Mu6cHpKpd0fXvOEU9enMOP1wCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArFPuuIePX+aI371+kyN+e5VD7t+7yhFPXpxzxJMX5xxx/95Vjnjy4pwjPjvf5IhHN8+yrAFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWaeMe3TzLJf00588zV322Tdv5JIe3TwLP14DzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALNO4ZBHN89yyOPccc/C3dUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKz/A6ummBF2IK+5AAAAAElFTkSuQmCC",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAIVBMVEUAAAD/lp3/Xmn/HCvdFyV+Nw60Ex51KAKcEBdUJAlUCQ5dkieqAAAAAXRSTlMAQObYZgAAAFhJREFUeNp9z0EOgEAIQ1GQ2jLc/8BmxhCNUbv7L2yw7+nR+/g9yNSQrqRzJCh1x+buW1BqWEOwAYEAEKgFIgESvAFnM1jWgkndppwJZoNVMvPsFklV708fJ30CoAEZcEMAAAAASUVORK5CYII="
  },
  {
    "id": "golden_apple",
    "tags": [
      "food",
      "gold",
      "apple",
      "yellow",
      "magic",
      "frontal"
    ],
    "type": "food",
    "material": "gold",
    "description": "Golden Apple: Glowing yellow-gold apple with rich amber shading.",
    "palette": [
      "#541209",
      "#542409",
      "#752802",
      "#B26411",
      "#DBA213",
      "#ECCB45",
      "#EAEE57",
      "#F6F892",
      "#FEFFE6"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEsklEQVR4Ae3BIYvfhwEG4LcvByljUK7fYMT0xEzkNsJEZeXsqkJnZyq2D1CTb1CZ2VARKitKmrpxZuIiFuor7giUJoVx3XfIT/w53ud53kvya4BJDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMOgsc8PlHzRGPX96G02mAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYNZZmPbs0XmOePLt2xzzJpxOA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzzsK07168zhFP/3sb7q4GmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWadhUOePTrPKX334nWO+OF/93LE5x/9klN6/PI2vLsGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWad5Y579ug8R1w8bI64/9f/5IhX//p9jnjy7b0c8emf388Rf/jbn3LEzdVlDvniJqf0+OVt7rIGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWa9l+TXnNCzR+c54uJhc8QHn3ycI377mz/miPfv/SV32dtfnuaIn37+Pke8/vqbHPHlFzc5pccvb3NKDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMOguH/PTz9znip5+/z7K+us4RH3zycY74LN/kiC+/uMld1gCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArLOM66vrHHF7/8Mc0VfXOeL2/oc5oq+us+z84kGO+OHHFznmTU6pAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZZzmx7168zhEXD89zxM3VZY44z4Oc0uuvv8kpnV88yBE3V5c54oP7H4d31wCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArLNwyM3VZe6y84sHOeLm6jJ32c3VZZY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTDrvSS/5g77/KPmiM/+eZ5TOr94kCNuri5zl51fPMgRN1eXOeIff/85Rzy9fpO7rAFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWWcZd/X8NkdcPGyOuLm6zCmdXzzIKd1cXeaIq+e34d01wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTDrLHfc45e3OeKHH9/miE/zfo64eNgccfX8Noc8/3eOuHjYHHH1/DZHPPnqbY54ev0myxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmHWWcU+v3+SQr3LI7178krvsyVf3ckpPr9+Ed9cAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKyzcMjT6zc55Dp33JtwdzXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMOv/LbSY/J/6SvkAAAAASUVORK5CYII=",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAHlBMVEUAAAD+/+b2+JLq7lfsy0XbohOyZBF1KAJUJAlUEglKVtcNAAAAAXRSTlMAQObYZgAAAFhJREFUeNp9z0sOgCAMRVGg70P3v2EDptEY9c3uSSdt3/OjNX8PJE/7SnZOgXZ1jN77CNoFewgWIBAAArnBJECCN+BqBrOVYFF1s1aCKmgpSmeX2M58f/oACs4CWTAWE9cAAAAASUVORK5CYII="
  },
  {
    "id": "bread",
    "tags": [
      "food",
      "organic",
      "bread",
      "wheat",
      "tan",
      "diagonal"
    ],
    "type": "food",
    "material": "organic",
    "description": "Loaf of Bread: Golden-brown crust with baked scoring marks across the top.",
    "palette": [
      "#3F2E0E",
      "#4C3811",
      "#574114",
      "#654B17",
      "#8C661E",
      "#A27924",
      "#BC8927"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEvklEQVR4Ae3BMWrbdwCG4befhYOXohCIQBk9ZCseO6UHUPacQKfqCbq3c9HW0WizwZOxQ01NjQIRNoj2Dv4Nf8T3Ps8PwH9IqhQk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFRrhjRgvVrQ7Nc//uaYBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1Zqho7ZeLZjSxw9vGPH+3SlTenh8YcR6tWDEr3/8zZSCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqzdCk1qsFIz5+eMOIi/Mzup0ypV9++pERm+2OEUFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbVmaMh6tWDEl09zRtw/HRhxebNnShfnZ0xpOT9hxMMjRy1IqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKnWjHLr1YIRXz7NmdJyfsKI5fyMEfdPB0Zc3uwZcXF+xoj7pwPNgqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSas04cuvVghFfPs3R6y3nJ4w5ZUoPjy+MuLp75pgFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVmjGx9WrBiI8f3jDi/unAiIfHF6Z0cX7GMVvOTxhxebNnSl8fXzhmQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtWYcuYvzM6a0nJ8x4v7pwIjLmz0jLs7PmNLlzZ4pXd09M+Lb9wMjNtsdUwqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKo1Y9B6tWDExw9vaLacnzDmlCld3uyZ0tXdMyOub/eM2Gx3HLMgqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaMyb2/t0per3l/IQRlzd7pnR198yI69s9IzbbHc2CpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqzThy908HRiznJxyzy5s9U7q6e2bE9e2eEZvtDr1ekFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrRmDdt8PjHh4fGHE+3enjLh/OjDi4fGFY3Z198yI69s9IzbbHZpOkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrRkTu7p7Rq93dffMiOvbPSM22x06XkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbVmDPrtz38Y8fnntzT7+vjCiG/fD4zYbHeoV5BUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0ZE/v9r38Z8fnnt4z49v3AMdtsd0ivFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVOt/cv6gWlFwH7wAAAAASUVORK5CYII=",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAGFBMVEUAAAC8iSeieSSMZh5lSxdXQRRMOBE/Lg5TtFIkAAAAAXRSTlMAQObYZgAAAFRJREFUeNp1yzESwCAMA0GfpOD//zgFA4Qi6tZzrv8lyUVLzrEB5F5GNuBeBmTkPgbh9PyfPfboFcjgHQBouyKA44p0uR5L/rieeHpvJBnT69J9/ALDfwGjVuZpcwAAAABJRU5ErkJggg=="
  },
  {
    "id": "cooked_beef",
    "tags": [
      "food",
      "organic",
      "meat",
      "beef",
      "brown",
      "diagonal"
    ],
    "type": "food",
    "material": "organic",
    "description": "Steak: Char-grilled beef cutlet, dark grill marks, rich savory browns.",
    "palette": [
      "#2A160D",
      "#3F2116",
      "#4E2719",
      "#522F1F",
      "#673728",
      "#713F2D",
      "#7C4835",
      "#8E523C",
      "#985C43"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAE0UlEQVR4Ae3BsU4dhhmG4befjlJcSxilLspRhBhAOhUVY7cMnRg6cHG5FI/Mnjp0QUJFwkNLI1QIdQMBbHlo7iH/cHT0vc/zG+D/SKoUJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFRrgTRwulrS7N3lDZssSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCp1gJVO10tmTj45i0Tr19tMfH08omJvd+/YZ3eXd6wTkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbUWaKOdrpZMLLa+YmK1t8vE8/NnJu4+PjJxff8TE8udN0ycrhh5d3nDRJBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0FWqvT1ZKJv/zpgHU6O79i4mi5y8Tq27dMvP9wzcT+zjYTVx9/Zp2CpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqLSh3ulqyTsudN0y8/3DNxMnxIRPfHewx8f7DNRNHy10m9ne2mfjn/x7YZEFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbUWbLjT1ZKJxdZXTBwtd5n4+ne/ZeSHH5k4O79i4uT4kInvDvaYuL7/iYnnT1+YuH94YZMFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVWlBuf2ebiYubWyZOjg+ZWH37lokVM2fnV0ycHB8y8fzDFyb+cftfJu6eXpi4uH1knYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmotWLPT1ZKJg2/eMvH61RYTJ3u7TJydXzFxcnzIxPPzZyb2d7aZODu/YuL+4QX9ekFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbUWbLjV3i4Tl9e3TPz7R0ZOjg+ZODu/YmJ/Z5uJ16+2mPjDpy9M3D+8MHH39MLExe0jmyxIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKnWgjV7d3nDOv31z0dMPD9/ZuL5+TMTR8tdJu4+PjLx93/9h3W6e3ph4uL2kWZBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1Fmy4q48/M/H92d+Y+OPyaybuH17YZHdPL6zTxe0j+vWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqLdhwF7ePaH0ubh/R5gqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKq1QCMXt49ImypIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKnWL/lAl0Us3rrHAAAAAElFTkSuQmCC",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAHlBMVEUAAACYXEOOUjx8SDVxPy1nNyhSLx9OJxk/IRYqFg2C15LvAAAAAXRSTlMAQObYZgAAAFVJREFUeNpjIADYywsgjBITdYhAoqorWKhIzShlApAuDxNKdgMy2JNVE1UiQAw3ITXRTpAWw0SVDBCj0FnMGSTDwC6kHAESYOCc1tE5gQHMmjkB2T4APwYSlCSomwUAAAAASUVORK5CYII="
  },
  {
    "id": "sweet_berries",
    "tags": [
      "food",
      "organic",
      "berries",
      "red",
      "bush"
    ],
    "type": "food",
    "material": "organic",
    "description": "Sweet Berries: Cluster of three plump red berries with green leaves.",
    "palette": [
      "#380E0F",
      "#451415",
      "#1D3822",
      "#820B05",
      "#691F21",
      "#A50700",
      "#295230",
      "#286240",
      "#DF467E"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEkklEQVR4Ae3Bsa6WhQEG4Jc3Py61QFJYmjSEpom1kyODabp4A+4u3bgBL4CbYPMSvIGzSAfC6NYOoDG2LucMgLiw0HvgG/6cvM/z3EjyPsCkBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmncJZPbr/INfZk59+DNdXA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzTuGQR/cf5IivP/kqRzx7+jhndf9Bjnjy04/hfBpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmHUKZ/Xs6eOc08vTzRzx4re3uc4e3X+Qc3ry0485pwaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZp1yZp9++VmOeH/nTo74zzff5Zxenm6GD/fo/oMc8fUnX+WIZ08f54gXd+/liIuryxzRALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsU87s/Z07OadPv/wsRzz59vsc8cXde7nOLq4uc8TDW7dzTs+ePs4RL083c501wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTDrlGvuxqtXOeLtL29yThdXlzni4a3bOaeHt27niP/97Q854vUfb+WIF/+6l3O6uLrMOTXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMOuUM7vx6lWOePvLm5zTw1u3c509f/M6R3z65Wc54uMc8/7OnRzx37/nkH9/+32uswaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZt1I8j7X2MNbt3NOv//ooxzxl999nHN68dvbHHFxdZkj/vrPf+Scbrx6lSPe/vImR/z8/IecUwPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAs045sy/u3ssRv757lyOev3mdIx7df5Ajvv7kqxzx7OnjHPF5Drp7L0dcfPNdjvjTwz+HD9cAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKxTDvri7r0c8eu7dzni+ZvXuc6ePX2cc3p5upnr7OfnP4QP1wCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArFPO7Pmb17nOXvz2Nkd8nmNenm4GPlQDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALNOOeji6jLLLq4uc8jde7nOLq4uw/XVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsUziri6vLwLk0wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTDr/y/oftdNLczJAAAAAElFTkSuQmCC",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAHlBMVEUAAADfRn4oYkApUjClBwBpHyGCCwUdOCJFFBU4Dg/vZFoOAAAAAXRSTlMAQObYZgAAAFpJREFUeNpjwApCAyA0q4grlOGSwRAKpI1Y0zJYRRoYGJQMOhqmugEZygWcM4s7gFLmlTOZjQyADM4ZoQ1K5kBGJ6uIB3s5AwPHBJB2IOBg4HDLgFrR0YDVZgCJnBCB7qUD3gAAAABJRU5ErkJggg=="
  },
  {
    "id": "honey_bottle",
    "tags": [
      "food",
      "drink",
      "honey",
      "yellow",
      "glass",
      "bottle",
      "frontal"
    ],
    "type": "food",
    "material": "glass",
    "description": "Honey Bottle: Square glass flask with thick amber-yellow honey inside.",
    "palette": [
      "#973716",
      "#A94725",
      "#BA5F1B",
      "#D76F18",
      "#5D8FC2",
      "#D46D49",
      "#FF9116",
      "#8BADD0",
      "#CCAFA5",
      "#B3CFEC",
      "#FFD32D",
      "#D4E5F7"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAERElEQVR4Ae3BsarfBwEG0O9+XnDtUHRpIUgHIYVSh4x3EETFdhOc0jdwyBs4ZRKiW0fxbkFczKBLKxldXGIpVdJBgqRKqEONYJvrO9zf8Cd855yzJFcBJjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMOs8vNQe/fSHOaW/fPK3HPGTP/w1nE4DzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALPOklyFk3n05HmO+O+ffpuX2T9ufD9HvPv2q+H6GmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaYdR5O6tPPvsgR/3n/ZzmlZ5//O0e89v5H4XQaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBph1luQqvLR+9+d/5Yh33341R9y+9zBHXN65CKfTALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCs8zDt6pffyBHvvQgvsQaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZp0luQon8+jJ8xxx89mtnNQHT3PEey9+kyMu71yE62uAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYNZZkqtwbY+ePM8RN5/dyhEPvvwwR7zxqzfzMrt7436OuLxzkWUNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8w6S3KVYY+ePM8RN5/dyhEPvvwwR3z9F2/llL73nf/llD5+3Bxx98b9HHF55yIvswaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZp2Haa+/8lUO+e43c1KP/xmurwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWecZ9+lnX+SImw+f5og3Hr+ZI/6er+WIb3/rRU7p559c5oi3Pv9RuL4GmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWadZ9z9P36UI95pTur1V77KSX3wNIe8Fk6oAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZZ0muwrXdvvcwR/y6P84pffy4OeLBxe9zxDsPf5Aj7t64nyMu71xkWQPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAs86SXIWTuX3vYbi+yzsX4foaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBph1luQqwKQGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWb9H2rfa0wmAqpCAAAAAElFTkSuQmCC",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJ1BMVEUAAADU5ff/0y2zz+zMr6WLrdD/kRbUbUldj8LXbxi6XxupRyWXNxZSfuqYAAAAAXRSTlMAQObYZgAAAElJREFUeNpjwArYq6EMERcDCMN6D5TBzMEAZWRAGUJqDWCaUXnmDIiA1bLMBghjkiaYYTYrKQrMaJuZBmFwpE2FKGbo6GhAshkALmoPrUvQSeIAAAAASUVORK5CYII="
  },
  {
    "id": "honeycomb",
    "tags": [
      "food",
      "resource",
      "honeycomb",
      "yellow",
      "wax",
      "organic"
    ],
    "type": "resource",
    "material": "organic",
    "description": "Honeycomb: Golden hexagonal wax honeycomb dripping with sweet honey.",
    "palette": [
      "#D56B2B",
      "#E57B24",
      "#EA8E16",
      "#FABF29",
      "#FADE29"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAE4klEQVR4Ae3BIW4j6QKF0S9Xbg21ZBVqMCAxKpQ9zAICsoOGgQ2DGw40nB0EZCdBRunAIMtS6dGRnLeH+UHJut85N8AXWs3n8x1r+v7rN+oVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUa4OGfD7fMWL68Y01fXLHiO+/fqPrFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVGtDuc/nO0ZMP74xYnk9s6bpx44Rn9xxzb7/+k2zIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWhuu3OfzHc229zvWtCx/MGL/eGHInww5LjMj5sORaxYk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFTrBvhiRZ/Pd4yY/vrGmpa3MyO2DzvWtLyeGbG93zFieTuzpu3DjhHvf4cR8+HImoKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmptGPT5fMeI6a9vjHh/CSOm2xMjtg87Rpz++Zc1LcvEiO3DhSFvDNne79B/FyTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVGvDlZtuT1yzZfmDEdPtiRHTjiHLK0O2DzvWtLyeGTNxzYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmptWNnydmbE9mHHmk7//MuI6fZ/jDh9TKxp/3hhxPJ6Zk2nj4kR8+HINQuSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKp1A3yxouPTzIjp9sSaTh8TI6bbEyNOHxNr2v+8MOL97zBi/3hhTe8vYcR8OLKmIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWhtWNh+OjDg+zYzYP14Ysb2/MOL9ZWLE/vHCkD8ZsryeGbF/3DFieTuzrolrFiTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVGvDyo5PMyP2jxdGvL+EEdPtiRH7nztGLK9nhryhYkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbU2lJtuT1yz08fEiP3jhTUtb2dGbO93jHh/CSPmw5FrFiTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVOsG+OKKHZ9mRux/XljT8npmxPZ+x4jl7cyatvc7Rry/hBHz4UizIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWhuu3Hw4MuLIzLomRmzvL6zp9DEx4vTBkPlwRP9dkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrRvgC12t49PMmubDEV2vIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWjfAF5IqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1fo/wEidOTzaOnYAAAAASUVORK5CYII=",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAElBMVEUAAAD63in6vynqjhbleyTVayvu/TBzAAAAAXRSTlMAQObYZgAAAFdJREFUeNp1jLENgEAQwz7xef+VKQ4kKHBnK8pZZs6HSebrkNnV7kNj4+0tCYW4Lpkx9AkQgYQNJIMW3A9BNLZPaW0oeLsE3gFiSz2LCWV9UYueN3p+uADn9AGu+0rk4AAAAABJRU5ErkJggg=="
  },
  {
    "id": "suspicious_stew",
    "tags": [
      "food",
      "stew",
      "soup",
      "wood",
      "bowl",
      "magic",
      "frontal"
    ],
    "type": "food",
    "material": "organic",
    "description": "Suspicious Stew: Hearty vegetable brew in carved wooden bowl with hidden potion effect.",
    "palette": [
      "#1F1502",
      "#302109",
      "#3A2706",
      "#3F2B0B",
      "#45320D",
      "#533909",
      "#714F0F",
      "#8E5FA5",
      "#986A56",
      "#CD8C6F",
      "#CC9978",
      "#C5A45E",
      "#5BF354",
      "#A8D475"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEOElEQVR4Ae3BP6ufBwEG0CcPl6pkcrFFiFBwS5EOBbuFDkUylA7ZnMWvIG5ObmYMRXBxcCsKDiUUhwwOQoeAZFAKclsKtgGj6M2fIrd+B9/hx+U551xL8lWASQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzDoLh9y6eT2czoNHF+H/1wCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArLNccbduXs8pvfvGL3NK33/7fo749PWXc8SNh5/niD99+IMc8+Oc0oNHF7nKGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaYdS3JVzmhWzev54if//ROjrj37tMc8c75qznixsPPc8TXLr6dU7r272c5peevPMkRn77+co74yVu/yBHnjy9zSg0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzDrLFfezu7/NEbc/fC9H3Hj7fo74+t+/mWOe5YjnrzzJEfd++DRHvHP+ao74573nOeL9u+9lWQPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAs85yxb12oznij3/9UY744M9nOeLOm7dzSu//5oMccjeH/CrH3Hnzdo64uHiRZQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzDrLiT14dJEj/vX0Gznire+9lKvsL5/dzxGv3WhO6ZMvvswRv/7D73LEZ//4b444f3yZq6wBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFlnueIe/u1Zjnjynxc5pTe++/sc8Z1vvZRT+uSLL3PERx+/yCmdP77MsgaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZp1l3Pnjy5zWixzx0ccvcpWdP74Mp9MAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKyzcFLnjy8Dp9IAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKz/AQgCay2larafAAAAAElFTkSuQmCC",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAALVBMVEUAAACo1HVb81TFpF7MmXjNjG+YalaOX6VxTw9TOQlFMg0/Kws6JwYwIQkfFQL5qkcoAAAAAXRSTlMAQObYZgAAAEJJREFUeNpjIBFw7969AUxvLxauBrE2K5q4BssBGbuKQ43E1gEZO2alrVp2Dsjg7cjomPMApPrdjM53EP3v3uE3HwDzGBSLNIc1RQAAAABJRU5ErkJggg=="
  },
  {
    "id": "diamond_chestplate",
    "tags": [
      "armor",
      "chestplate",
      "diamond",
      "cyan",
      "frontal"
    ],
    "type": "armor",
    "material": "diamond",
    "description": "Diamond Chestplate: Symmetrical cuirass, broad shoulder pauldrons, cyan palette.",
    "palette": [
      "#082520",
      "#0E3F36",
      "#1AAAA7",
      "#20C5B5",
      "#4AEDD9",
      "#A1FBE8",
      "#FFFFFF"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEWElEQVR4Ae3BsaqWhwEG4NeXQ8hkwKVDlgwJBNeAa66hWTKl92EcJEPMfbidtXMLCWRoHEonEXRwsWAH4f8nESG9h/MNP4f3eZ47Sf4MMKkBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFlXOejutw/CzZ1/e5Zld799EG7u/NuzHNEAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKyrXNjp1z9yxNOPb3PE9fmUI37/7odwOadf/8gRTz++zRHX51OO+P27H3JJDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMusqFPf34Nkdcn0+5pHtPHueQH3/KEeffnuWS7n77IEfce/I4Rzz9+DZHXJ9PWdYAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKyrXNj1+ZTb7KcH3+SIx08e55Aff8ol3XvyOEfc//rLHHF9PoWba4BZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpg1lUu7D///HeO+OTzuzni/tdf5oi/Xf0lhzz4Jof84++5pOvzKbfZ8xevcsSHN+fcZg0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzLrKQR/++78c8e7Rwxxx7+dfcsT3Dz7LEU8/vs0lXZ9P4eY+vDnniHePHuY2a4BZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpg1lUOev/ydS7p3aOHOeSv/8olXZ9P4XLePXqYI96/fJ3brAFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWVcZd30+5Yjv734WLuf5i1fh5hpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmHUVDrk+nwK3VQPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAs64y7vmLVzni/tdfhpt7/uJVuJwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWZdZdyHN+cc8TyvwuV8eHMON9cAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKw7Sf7MsE+/+iJH3Pv5lxzxyed3s+zDm3OOePfoYY54//J1ljXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMOtOkj/DjX361Rfhct6/fB1urgFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWVfhkPcvXwduqwaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZv0fw66FSSbMzCYAAAAASUVORK5CYII=",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAGFBMVEUAAAD///+h++hK7dkgxbUaqqcOPzYIJSASzXVWAAAAAXRSTlMAQObYZgAAAFNJREFUeNqNz0EOgEAIBEGkB/j/j806JmuMB/vE1I34Ua+eRx+J4T46QR3RSgxAqluAocSRmYBqwUx5Qs3Earxhwg0GbeAF8t5QuiqDZW/L1fevJzKqAlDbFhetAAAAAElFTkSuQmCC"
  },
  {
    "id": "iron_chestplate",
    "tags": [
      "armor",
      "chestplate",
      "iron",
      "metal",
      "frontal"
    ],
    "type": "armor",
    "material": "iron",
    "description": "Iron Chestplate: Symmetrical silver cuirass with defined neck and shoulder cuts.",
    "palette": [
      "#191919",
      "#2D2D2D",
      "#6B6B6B",
      "#969696",
      "#C6C6C6",
      "#D8D8D8",
      "#FFFFFF"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEE0lEQVR4Ae3BsW1jhwIEwPWCFThzBQ4OAlSDmjkocD1XgVPWIpzAgBUwMV4L//egFxDCzswfSf4XYFIDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMuOenl5SV83efnZ5a9vLyEr/v8/MwZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMuuTJfv/+nTPu93vOOI4jZ/z8+TM8z+/fv3PG/X7PGcdx5IyfP3/mmRpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmHXJk93v95xxHEee6f39PWf8+vUrZ3x+fuaZXl5ecsb7+3vOuN/vOeM4jixrgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmDWJU92HEe+s7e3tzzTr1+/8kzv7+854/X1NWccxxG+rgFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWZc82b///pszfvz4kTNeX19zxt9//51nent7yzMdx5Hv7OPjI2fcbrd8Zw0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzLrkpP/++y9nXK/XPNPb21vOuN/veabjOMLX3W63nHG9XvOdNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0w65KTHo9Hnul6veaMf/75J890HEd4nuv1mjMej0e+swaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZl0y7jiOnPHnn3+G5/n4+Ahf1wCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArEs45TiOwHfVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsS8Z9fHzkjNfX1/B1Hx8f4XkaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBph1ybjb7Ra+r9vtFr6uAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZl3xzj8cjZ1yv1zzTjx8/sux2u+WM6/WaMx6PR5Y1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTDrjyT/C1/2119/hed5PB7h6xpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmHUJpzwej8B31QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArP8DJuCFtqWy2MUAAAAASUVORK5CYII=",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAAnRSTlMAAHaTzTgAAABaSURBVHjajY85EYAAEANjIyKi7PxEUjScGxg4hm8o2Cq7XfADbdyHlo5wG+rEAuTOhCRtyckRylm6O4lLAMgaTYrEBg8PMTATfIW8gsevUN4p4ixPB7jz/XUF4chIZvUULX8AAAAASUVORK5CYII="
  },
  {
    "id": "netherite_chestplate",
    "tags": [
      "armor",
      "chestplate",
      "netherite",
      "dark_gray",
      "frontal"
    ],
    "type": "armor",
    "material": "netherite",
    "description": "Netherite Chestplate: Heavy dark armor plate with deep charcoal shading.",
    "palette": [
      "#171111",
      "#271C1D",
      "#241F20",
      "#352D2D",
      "#373537",
      "#473E3F",
      "#4D494D",
      "#5D565D",
      "#766A76"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAE40lEQVR4Ae3BwWqcZQCF4dfjIImCRAyxgTRtoaS0UPEGXLgUdy68SBfuvABXLtwIguJQaBsD6QyxM6Y0GQpG7yHf4mc47/O8B/yHpEpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtWYMenjvPrq9Zy9f0Ozhvfvo9p69fMGIIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWjMm9vjJU0a8e3vJiPX1hhF/LxdoOp8efMaIvd0dRnzw0ceM+OP335hSkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrRkTe/f2khHr6w0jDvYPGPH3csGIR0d3GfHn2V9M6dHRXUb8y5iD/QNGLC+WjNhjuwVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNWaMbH19YYRN5srRrx7e8mIx0+eMuKP339jxKOju0zp3/ffZ8TjJ08Z8e7tJSNuNleMWLPdgqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSas2Y2MmDE0Yc7h8y4qdffmLEyZ1jRnz7zXeM+OHH75nSt998x4jzi3NGzC+WjPjqy68ZcX5xzoiflwumFCTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVOs94D8GPLx3nxFvLv9hxPHRESOy8yEj9nZ3GHFw55gRh/uHTOn84pwRy1enjFhfbxhxs7lixOnZGVNarFaMCJJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqjVj0LOXL9hmXzz9nBEHd44ZsX6zZput36wZcXDnmCGvThnx67M5IxarFdssSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCp1oxy6+sNI9bP54w4eXDCiMP9Q7bZ/PkcTSdIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKnWjHJ7uztMaf58zoj58znbbG93B00nSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCp1oxy6+sNI/Z2dxhx8uCEEYf7h0zp/OKcEctXp4xYX2/Q7QVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNWaUe5mc8WI15srmi1fnTLi9eo1mk6QVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtGVtusVrRbH29YUo3mytGnJ6dMaXFakWzIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWjPKLVYrRnz2ySeMOD07Q7e3WK3Q7QVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNWaoSGL1QppWwVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNX6H0+CsZmfxmm5AAAAAElFTkSuQmCC",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAHlBMVEUAAAB2anZdVl1NSU1HPj83NTc1LS0kHyAnHB0XERElrX5TAAAAAXRSTlMAQObYZgAAAGhJREFUeNpjwATs5eUMDOXlBQzsJuEMDKXOQIareQNHcQiQEeZc0W6SCmQoBokXqgoBGdNCFIVcMycwMHA6GSmrAGkGzlBFoVAwwyU01AXMAKkBM9KcVNJADIaZqWEzwbZxzpw5AclyALL0GIDADuxaAAAAAElFTkSuQmCC"
  },
  {
    "id": "armadillo_scute",
    "tags": [
      "resource",
      "scute",
      "armadillo",
      "brown",
      "organic"
    ],
    "type": "resource",
    "material": "organic",
    "description": "Armadillo Scute: Hard textured leathery brown dorsal protective plate.",
    "palette": [
      "#5C2D30",
      "#713E3E",
      "#824848",
      "#965954",
      "#A06460",
      "#B67B76",
      "#C68884"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAADx0lEQVR4Ae3BsW1dBQAF0MvVb225ChQIoRSUoUiG8DpZgMILZIkMkdoFtVGoUBbwpwgK4BZ2yCu+rHvO+SbJfwEmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0w6xSetbvb2zxnv3z4EC6nAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZp3BRd7e3OeKH77/LES++fZFLussxv3z4EL5eA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzTuGQu9vbHPHm9atc0s3VdS7pzetXOeLt01OOeHd/n2UNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8w6hYs6P56z7ObqOkf8/NPLHPE2x7y7v89z1gCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArFPG3d3e5og3r1/lkm6urnNJf3z6lCNurq5zxNO//4Sv1wCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArFM45Px4znN2c3WdI57+/SdH/PX3l1zSn5+/ZFkDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALNOGff56SlHvPn2RY64ubrOEQ+/PeSIH1++zCWdH8854tffP+WI9x8fsqwBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFmncMj58Zwjzo/nXNL58Zwjfv39Uy7p/ceH8PUaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBph1yrh39/c54m2O+fPzlzxn7z8+hOerAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZp3DIu/v7wHPVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCs/wFW4E4OBDdHJQAAAABJRU5ErkJggg==",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAGFBMVEUAAADGiIS2e3agZGCWWVSCSEhxPj5cLTBo7+IFAAAAAXRSTlMAQObYZgAAADxJREFUeNpjwA9YQ6GMYKUAiICSoBqEYawknABiBCkKi4AZwUYiKgUgRpKIijlYTbKJeQGYwVZewEAcAAAJEAdusewTWQAAAABJRU5ErkJggg=="
  },
  {
    "id": "turtle_scute",
    "tags": [
      "resource",
      "scute",
      "turtle",
      "green",
      "organic"
    ],
    "type": "resource",
    "material": "scute",
    "description": "Turtle Scute: Scaled moss-green sea turtle shell segment.",
    "palette": [
      "#206A43",
      "#297D49",
      "#388D3A",
      "#3FA442",
      "#47BF4A"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAADt0lEQVR4Ae3BsW1VBwAF0MuVJR4VdCC5QUrFHK5YxTtQZQevkspzpEJyYyl0oeJDk+zAK76se855leS/AJMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBph1E0759OVzuJ6///wr/L4GmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWbdZNynL59zxtt333PG6/dHzjhuj1zT5fmSM35+u+SMj/d3OePp4THLGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaYdZMX7tOXzznj7bvvOeP1+yNnHLdHXrLj9sg1fciPnHJ/lzOeHh7zkjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMOsmV/bx/i5nvH33PWe8fn/kjOP2CL/vuD1yTR/yI6fc3+WMp4fHXFMDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALNuwimX50vOOG6PLLs8X3JN3/99m3N+5SVrgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmDWTa7s6eExp9zf5ZSvOeXDHz9yTcftkWu6PF9yxs9vl5zxz9c3OedXznh6eMxL1gCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArJu8cE8Pj7mq+7uc8jUn/cx1vco5b3LG08Nj+H0NMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8y6Cac8PTwGXqoGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWb9DweXP2kXRAg3AAAAAElFTkSuQmCC",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAATklEQVR42mMYBTQCmrWe/7FhojVb9Fr9t1/i9N99vxcIg9hgMYUs5/+kaibeEKAEuma8huAzAJcLwBjoSvyuAGJ8YYChGY9BmHg0fWIHAKmfg0uBQ3q/AAAAAElFTkSuQmCC"
  },
  {
    "id": "wolf_armor",
    "tags": [
      "armor",
      "wolf_armor",
      "armadillo",
      "leather",
      "brown"
    ],
    "type": "armor",
    "material": "leather",
    "description": "Wolf Armor: Tailored canine armor forged from linked armadillo scute scales.",
    "palette": [
      "#5C2D30",
      "#713E3E",
      "#824848",
      "#795E47",
      "#965954",
      "#A06460",
      "#997B60",
      "#AD716D",
      "#B67B76",
      "#C68884"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEcUlEQVR4Ae3BscvnBQEH4I8fXofzDzClDAdxK4SCoDlQml0EOdqCwMEtIRoCOegPcGqQQ2jJ/Q6cHAK3C5ssWuTIOw/e8Pfee6P9Ed/hx8vneZ7nknwfYFIDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMucsP96a23csQf793LEZ++/16OOJ1OOeLFH7yYI55dP8sRt164lSN+/eGfw/k0wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTDrIgd9+v57OeLWC7dyxLPrZzni3Yff5IjT6ZQjrp9e5ZgXc8TpdMoRt164lSPe/ckbOeL1H76UI37+s5/miMePHueI1197LUf88vd/yBENMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8y6yEGn0ynn9Oib/+Yme3J5lSNezTHXT69yxONHOavL6+sc8fjR4xxx/fQqN1kDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMuctBv/vJxjvjonbdzxJPLq5zT9dOrHPHVw29yxI9/9FK4uf53+i7n1ACzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArIuc2e/++rcc8cHtN3PIwxzy5PIqN9nf//nvHPGrX7yRc/r28rsc8Y+v/pMjvr38Lkf86+HjnFMDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMucsO9+srLOeLO3fs54t28kXP67IsHOafPvniQIz758kHO6YPbb+aITz7/PDdZA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzLnLD/fbDj3NOn3z5IOf0we03c8Sdu/ez7NVXXs6yBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmPZfk+wCTGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaYdZFxH73zdo74+vlTjrhz9344n4/eeTtHfP38KUfcuXs/59QAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKyLjHtyeZUj7ty7H26uJ5dXOeLOvfu5yRpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmPVcku8DTGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYNb/AT7OhrVazXFbAAAAAElFTkSuQmCC",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAIVBMVEUAAADGiIS2e3atcW2Ze2CgZGCWWVR5XkeCSEhxPj5cLTA4I3JnAAAAAXRSTlMAQObYZgAAAEtJREFUeNpjwAI4mIOMQDSz8tKkoBWqAgysZkubUleGCTD9NmJUBkoIMDHMZ2JwYHQpYGBg4Vq1iqEArI+dgcEBxaB0KGZoAGNiAABtWgykz0PucgAAAABJRU5ErkJggg=="
  },
  {
    "id": "elytra",
    "tags": [
      "armor",
      "wings",
      "elytra",
      "gray",
      "purple",
      "diagonal"
    ],
    "type": "armor",
    "material": "organic",
    "description": "Elytra Wings: Folded beetle-wing flight gliders in dusky charcoal and lavender.",
    "palette": [
      "#353535",
      "#4B4B4B",
      "#696969",
      "#706E8D",
      "#737373",
      "#7F7F98",
      "#8C8C8C",
      "#8F8FB3"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEdklEQVR4Ae3BMWpdBwIF0JtrhYHMF+NpXDjgTowW4F2IWW3QBtJ+NVMG10ngN0mwoiaYzB78io+455xvkvwdYFIDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALNuMu7h4SGv2eVyyTW9e/cur9nj42OWNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0w6yZX9vDwkGu6v7/PEafTXY54evohR7x79y6v2ceP/80Rz8+f8po9Pj7mmhpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmHWTgx4eHnLE/f19jjid7nLE27ff55oul0uOOJ/PuaaHh4cc8fbt9zni7dvvc8TpdJcjnp8/5ZoeHx9zRAPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAs25yZafTXY64vX3OEV++/JQj3rz5T7ieL19+yhG3tznoLkdcLj/mmhpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmHWTK7u9fc41ff58yjE/h6/3++8/55hTjri9fc4Rt7fPec0aYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBph1kyv79ddfc8TpdJdr+uO3P8PX++O3P3PEv/79zxzx+fMpRzw/f8pr1gCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArJtc2el0lyOenz/lut6H63l+/pRrOp3ucsyPuaYGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWbd5Moul//liO+++y5HfPnrfXi9vvz1Pke8+faXHPH09ENeswaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZt3koMfHxxzx8PCQIz58+JAj/vFtDnnz7S9ZdrlccsT9/S854stf73PEy8tLjrhcLjnifD7nmhpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmHWTK7tcLjniw4cPuaaXl5fw9V5eXnLEP74NBzTArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMOsmV3Y+n3NNHz/mkKenpxxxPp/zmp3P51zTx4855OnpKUecz+e8Zg0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzLrJuKenpxxxPp/D1zufz+F6GmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY9U2SvwNMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpg1v8BfAyD97pEz4YAAAAASUVORK5CYII=",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAG1BMVEUAAACPj7OMjIx/f5hzc3Nwbo1paWlLS0s1NTXBGAVdAAAAAXRSTlMAQObYZgAAAFpJREFUeNqNT0kOwEAIgtEO/P/DNrWxvQ4XFtFEnEGSLemzGZIUKbXPIA2IjBQWUEU0WMUOwPX4RRSwWrxBDxKYDUwjwAmyWftKA85ruxvE3Bh4+6dWHj569AbZrwlib1Ty2AAAAABJRU5ErkJggg=="
  },
  {
    "id": "totem_of_undying",
    "tags": [
      "magic",
      "totem",
      "gold",
      "emerald",
      "artifact",
      "frontal"
    ],
    "type": "magic",
    "material": "gold",
    "description": "Totem of Undying: Golden winged figure clutching green emerald eyes, magical relic.",
    "palette": [
      "#85400F",
      "#A05B23",
      "#00BB46",
      "#C58742",
      "#41E67F",
      "#D1A75D",
      "#EADB84",
      "#F8EEA5",
      "#FDFBEE"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEuElEQVR4Ae3BIa8fdgEF0MvNkwtmc8+UTGDm+AITTUYIQc3VDEFIMChUzQQoDJULgiKWIFALYdTASxCYViIWMjrES8VW0W5uJPAd9hP/NPec860k/wswqQFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWVfhyMN7b4bLee/DT8M31wCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArKuMe3jvzZz4wfs/DpfzML/Lifc+/DTLGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaYdZVxt7df5JJev/OzXNLXX36cS3r5/GlO3N5+Eb65BpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmXYUjzx5/khPPHv88J777zvdz4uXzpznx7PEn4dXVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsq3DkrXcf5MTdzx/kxG8e/SWX9Na7D3Li7ucPcuLuB+FAA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzrsKRu58/yIm//fMfOfHWu3/Iia+//Dgn7n7+ICf+9s9/5MTdcKIBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFlX4cgvf//3nHjtznVOfP3lxznx8vnTnPjN43/nxFef/TcnbsKJBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmXeXQw3tvZtnNoyc58fY7OfLy+dNc0lef3ebEzaMnOXF9/UZOPLz3Rl5l7334aU40wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTDrKhf2g/d/nBPPHn+SE3/64KOc+Mlvf5ETzx5/khP/+uNfc0mv3bnOibffyZGbR09y4u13vpcTr925zok/ffBRLqkBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFlXOfTeh5/mxK9uf51Lur5+Iye+/fp3cuL1d3+WE19/+XFOvHz+NJf0LGeur/+TEzePnuTMk5y4f/Mil9QAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKyrXNj9mxe5pIf33siJl8+f5sSzRz/Psq8+u82J29svcuL+zYssa4BZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpg1lXG3d5+kRN/fv93gVdVA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzrjLu/s2LnPjV2znyw5/+KCe++uw2r7KbR09y4v7Ni/DNNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0w6ypw4LU71znzJFxOA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzrsKR+zcvcuajvNqe5MT9mxfhchpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmPV/OgmcwZfB3qoAAAAASUVORK5CYII=",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAHlBMVEUAAAD9++747qXq24TRp11B5n/Fh0IAu0agWyOFQA8RGs9sAAAAAXRSTlMAQObYZgAAAF1JREFUeNptzkkOwDAMAsDYEGr+/+FK6RJXKjfPATz+UyvtxsoWIyIT3kAmyAYxyZgN5hE5jwZigvKetAD5ni7QoERZV69dGQmw7PcxklQrrRWPLZTk8QV6dPFTeAJoLQLslSF6LQAAAABJRU5ErkJggg=="
  },
  {
    "id": "ender_pearl",
    "tags": [
      "magic",
      "ender_pearl",
      "cyan",
      "dark_green",
      "orb",
      "frontal"
    ],
    "type": "magic",
    "material": "ender",
    "description": "Ender Pearl: Mysterious dark teal-green orb with cyan glowing center.",
    "palette": [
      "#032620",
      "#063931",
      "#0C3730",
      "#0B4D42",
      "#105E51",
      "#1B7B6B",
      "#258474",
      "#349988",
      "#2CCDB1",
      "#8CF4E2"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAElUlEQVR4Ae3BsaqehQEG4NfXky0igQitkzpYx+gSL6Bb6WYhkxQXF1EvwaE30DsQZ2+jYKAYt+JPIwcKdjgpMcTSIRzsPfgNP4f3eZ6XkvwSYFIDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMuwo12+/693GQ/P/wunE8DzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMuwiG379/LOb3z0YOc07OrJzni3zmvnx9+l2UNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8y6yLjb9+/liHc+epBzenb1JEdcnR7nnH77x9/nnH54+lOOuD5d5iZrgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmDWRW642/fv5Yh3PnqQI55dPckRH3/+aY748vtHOeLFw29zTlenxzmntz78IEf88NXXOeL6dJlzaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpg1kU45OPPP80RX37/KEecPvki/HpXp8dZ1gCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArIuc2e3793LEOx89yBHPrp7kiC+/f5QjTp98kSOu//M0y27dvZMjXjx9liNeef/dHPE8x1yfLnNEA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzLnJm/3v6U87p6vQ4R7x4+G24uV6//16OuDo9zk3WALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsi9xwz66eBH6tV1+7myOuTo9zkzXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMOsiZ3Z9uswRP3z1dY5468MPcsSPD7/NEbfu3smyW3fv5Ig3v/gsh/z9Hzni+TePcsT16TLn1ACzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArItwyK07r+aIF0+f5Yhbd+/kJnvzi89yxJ9/926O+Mtfv8yyBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmvZTklwx7+e03csRv/vSHHPHff/2YI148fZYjXr//Xo549bW7Oad//u1hjnj+zaMccX26zE3WALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsl5L8En61l99+I+f0yvvv5iZ7/s2jnNP16TLLGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaYdREOuT5d5pye52a7Pl2G82mAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYNZFuNGuT5eBX6sBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFn/B2sQj0CMs/suAAAAAElFTkSuQmCC",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAIVBMVEUAAACM9OIszbE0mYglhHQbe2sQXlELTUIMNzAGOTEDJiC5a2thAAAAAXRSTlMAQObYZgAAAFtJREFUeNpjwAo4OqB0swmE1WyS5rIAJGAiVJ7mBWIYas4szwLJOM1aNb0MKLc4HchwAzKWgBhmQAaXe+XMIisGIMOtvFwRpJhhabozUAYktCxtFZACsVYh2wwA2BYa2KT1S0MAAAAASUVORK5CYII="
  },
  {
    "id": "blaze_rod",
    "tags": [
      "magic",
      "blaze_rod",
      "fire",
      "orange",
      "yellow",
      "diagonal"
    ],
    "type": "magic",
    "material": "blaze",
    "description": "Blaze Rod: Glowing fiery cylindrical wand, bright yellow to scorching orange.",
    "palette": [
      "#953300",
      "#AE3C00",
      "#9B5607",
      "#B15B10",
      "#BF5A00",
      "#A86D1B",
      "#B36B19",
      "#B9931C",
      "#D8AE26",
      "#FFC100",
      "#FFF32D",
      "#FFF87E"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAELUlEQVR4Ae3BsYoeaAEF0Ls3PwG7JdiEPE2qbaYKooVlsBryGkHY2ioQUoVkOwlYjO1AbLaw3MJGRlYQtEqxWOg77FcMwz3nfJXkfwEmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0w6xIY9un6aU7881//zonfffdT7lMDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMugQfsw6tnOXH1+klO3Lx7lBN/+NtdTlx/nyMNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8y6BO7Rp+unOXH17cucuHnzNie+fLzLievvc68aYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBph1CRz48OpZTlx9+zInfvjTh5x4/PkuJ765zYPWALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsS5j26fppTly9fpITN2/e5sTjz3c58fx9pjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMOsSHrQPr57lxNXrJzlx8+4/OfH4811OPH8fDjTArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMOsS7tWHV89y4jffvsyJmzdvc+Lx57uceP4+3KMGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWZdwpFP109z4ur1k5y4efM2J758vMuJb27DA9YAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKxLxn26fpoTV7/+MSdu3j3KiS8f73LixW0Y1gCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArEseuA+vnuXE1esnOXHz7lFOfPl4lxMvbgM/WwPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsy65Z5+un+bE1a/+kRM3777KiS8f73LixW3g3jTArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMOuSQ3/87dc5cfX7X+bEzbtHOfH4811OfHMbeLAaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBph1yaF+/Yuc+OHPP+XE4893OfH8fWBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzLjn097/8mBP//euPOfHiNsDP1ACzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArEsOXX8f4IFqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmDW/wGDAmUpUEIXPgAAAABJRU5ErkJggg==",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAbklEQVR42mOgO9icLfl/dhj7f7I0r8iV/v//s+7/nZNl/k81ZvhPss3/f9SBNa+zAWom0Waw5hvr1P7vjyLdZpizgZpJt5kizTA/U+bsdTbkaD7IQHZoD5DNG6MFyAxthO2IREIOAKZriLMHAgAAbgx59s0hcWsAAAAASUVORK5CYII="
  },
  {
    "id": "potion",
    "tags": [
      "magic",
      "potion",
      "bottle",
      "glass",
      "frontal"
    ],
    "type": "magic",
    "material": "glass",
    "description": "Glass Potion Bottle: Corked neck, glass highlights, liquid volume inside.",
    "palette": [
      "#973716",
      "#A94725",
      "#5D8FC2",
      "#D46D49",
      "#8BADD0",
      "#CCAFA5",
      "#B3CFEC",
      "#D4E5F7"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAD5UlEQVR4Ae3BoW6ehwEF0PtfhYSbZaAPEFC/gOk0YFQw5EcYMCgvLzAtN5vUkaCyyXAkBW7BNqkoqlRFVQe6jHnv4A/8su4555TkKcCkBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmvQov2uNf/pRz+uGf/84Rf/7uX+F8GmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaYdUryFM7m8cOnHPG/f/wtL9nPn/0xR1xfXoTna4BZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpg1qtwVj/98nuO+O83X+Wcfv3tPzniD9/8GM6nAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZpyRP4cV69/5jjri+vMgRN3cPOeL+9iqcTwPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAs05JnsLZPH74lCPevnmdl+zm7iFH3N9ehedrgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmDWKclTeLbHD59yxNs3r3PEu/cfc8T15UVespu7hxxxf3uVZQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzDolecqwxw+fcsTbN69zxLv3H3PE9eVFeL6bu4cccX97lZesAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZrzLup19+zzldX15k2dfffp8jvvzi8/B8DTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMepVxf/37j4FVDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMOiV5Cs92c/eQI+5vr/KSff3t9zniyy8+zxE3dw854v72KssaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBph1SvIUzubm7iE83/3tVXi+BpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmnZI8BZjUALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCs/wNftVOs7xV8pQAAAABJRU5ErkJggg==",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAbElEQVQ4y2NgGNTgSq7nfxBe6a76n3TNT7//P7N+KRxvPv+GNENAGkA2g/B0czHSDYAZAqJj+w/9JysMKDIAFAbIfJIMgWlG9zdRhuDSTLQhFBuAS2P32gvEBSguBUQbgE0RSZqRDUHHNMlwADOSe7Rn5KNOAAAAAElFTkSuQmCC"
  },
  {
    "id": "book",
    "tags": [
      "document",
      "book",
      "leather",
      "paper",
      "brown",
      "diagonal"
    ],
    "type": "document",
    "material": "leather",
    "description": "Vanilla Book: Brown leather binding, cream parchment pages, crisp angled edge.",
    "palette": [
      "#161005",
      "#312104",
      "#44250A",
      "#522E10",
      "#543E13",
      "#654B17",
      "#5B5B5B",
      "#999999",
      "#B7B7B7",
      "#D6D6D6"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAFM0lEQVR4Ae3BMWpd6QGG4Vefj22IdYiMwKl8zSFExXSCIZXLbCCFCy9gKlcBgzfgwgMBtwbXZgzZQsrg1uBSzUUX0sgMoxklDIwEyh7yF4fL9z7PAXCLpEpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1JlTtdJnYZ5+3N+j/FyTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVGtCqzpdJta0zIeMOH58nxE/Xd0w5mdGfN7e0CxIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKnWRLnTZWJNy3zIiOPH99lnD+eJEd9+c8yYHxnxeXvDPguSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKo1sbLTZWJNy3zIiOPH99ln27MrRiwnM/vs22+OGfMjIz5vb1hTkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrel0mVjTMh8yIkd3GPFwnmi2nMyM2J5dMWI5mdlnf3z8e8b8zIjP2xtGBEm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1ZoYtMyHjMjRHUY8nCfWtD27YsRyMrPPlpOZEduzK0YsJzNrejhPjDie7jHidGFIkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrYlB26v/MGLhkCHzxJqWk5kR27MrRiwnM/tsOZlZ0/bsijX94c9/ZcQ/P3xgRJBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq2JlX33/Q+MeP/qOSOOH99nTcvJTLPt2RVrevbyLSM2mw0jdrsdIz58+MCIIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWtO/fzpgxNPNA0Y8efKEEd99/wMj3r96zogc3WHEw3liTduzK9b07OVbRmw2G9a02+0Y8e7NC0b85U+/Y0SQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVCpJqBUm1gqRaQVKtA+CWAY+O7jLi6eYBI15//MSI8/NzRrx/9ZwRv/z6G2t69vItIzabDWva7XaMePfmBSOOp3uM+PL1mjUFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCpVpBUK0iqFSTVOgBuWdGjo7uMeLp5wIjXHz8x4vz8nBG73Y4Rm82GNe12O0a8e/OCEcfTPUZ8+XrNmi4ur1lTkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrQPglj326OguI55uHjDi9cdPjDg/P2fEbrdjxD/+/jfW9OXrNWu6uLymWZBUK0iqFSTVCpJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0D4JZij47uMuLp5gEjfvn1N9b05es1a7q4vEbrCZJqBUm1gqRaQVKtIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqjVR7uLymhH/4r/ss4vLa9QrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWkFSrSCp1oSGXFxeI+2rIKlWkFQrSKoVJNUKkmoFSbWCpFpBUq0gqVaQVCtIqhUk1QqSagVJtYKkWv8DVHObFTOBPHIAAAAASUVORK5CYII=",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAIVBMVEUAAADW1ta3t7eZmZlbW1tlSxdUPhNSLhBEJQoxIQQWEAXuGgy6AAAAAXRSTlMAQObYZgAAAFNJREFUeNp1zzkOwCAMRNGJiZfx/Q8cEYyAgunel1wY15E86Wo82MedUaXTVKsYgd8xS3A/0IgXIMW12KQB6Y+4DUpjVJnMxCgbZ4lileIqmdevPwDZA8LCX6b6AAAAAElFTkSuQmCC"
  },
  {
    "id": "music_disc_pigstep",
    "tags": [
      "utility",
      "music_disc",
      "record",
      "black",
      "red",
      "frontal"
    ],
    "type": "utility",
    "material": "netherite",
    "description": "Pigstep Music Disc: Grooved black vinyl record featuring a blood-red Nether center label.",
    "palette": [
      "#1F0707",
      "#4F1717",
      "#572121",
      "#692525",
      "#723232",
      "#854242",
      "#965D37",
      "#E97D15",
      "#F9B122",
      "#FDF55F"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAEc0lEQVR4Ae3BMYqtBwEG0M+PC/ElDFzfYBWCDtYuwV0EZgGBmCXE0s7Cxs4EXMADsRGs7NxAQIQ0YXjFFAGHXHiIDIi6h/zFZfjOOT9I8r8AkxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmHUKh9zf3YXv783DQ7ieBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmnXJl93d3eclen0454tXNTV6yf797lyPu7+7ykr15eMhL1gCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArFMOur+7yxGvT6cc8ermJi/Z7fmcI54ulxxxez7nkPM5R7y6XHJN/373Lkfc393liDcPD7mmBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmne7v7nLE69MpR7y6uckRt+dzrulHH/4rR/zy9x/lmI9yTV989nWOeLrkkNvzOUc85ZjX797liPu7uxzx5uEhRzTArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMOuUg17d3OSI2/M5RzxdLrmmz//88xzxz9/8JUd8+mVzxJef/jdHfPLxTY741T/OOeLpcskRt+dzjnjKQd99l2tqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmDWKVf2dLnkiNvzOUc8XS454ovPvs4Rn3x8kyP+9PkvcsR//vq3HPGHP/44R9yeP8g1PV0uWdYAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKxTDvrm8TFH/OzDD3PE0+WSa/ru8YMc8dvffZAjnn799xxxe/5pjni6XHLMJS/ZN4+POeKH77+fa2qAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYNbpzcNDjvjJe++Fl+vpcsk1ffP4mJfsq8slR7z99ttcUwPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAs0456O3zcw65XMKury6XvGRvn5/zkjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMOuUK3v7/JwX7XIJ39/b5+dwPQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzDqFQ94+PwdeqgaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZv0fF5Z77fb5bn4AAAAASUVORK5CYII=",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAIVBMVEUAAAD99V/5sSLpfRWWXTeFQkJyMjJpJSVXISFPFxcfBwcnqMJbAAAAAXRSTlMAQObYZgAAAFJJREFUeNqdzzEOgEAMA8HkOC/n/P/BKJGQqJnO2zn+Ou27buB+2ywhdZuNtDNzoykHQV6+FogJiL1ybYkJBiQE4BMRZZtmu6JVlVvV7FHt960HlPgDErTE6DkAAAAASUVORK5CYII="
  },
  {
    "id": "spectral_arrow",
    "tags": [
      "weapon",
      "arrow",
      "spectral",
      "gold",
      "magic",
      "diagonal"
    ],
    "type": "weapon",
    "material": "gold",
    "description": "Spectral Arrow: Broad arrowhead infused with shimmering gold outline tracking luminescence.",
    "palette": [
      "#7B3F05",
      "#CF8C27",
      "#DAB930",
      "#FFFF77",
      "#FFFFFF"
    ],
    "base64Scaled": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAD1UlEQVR4Ae3BIY6kCQEG0G+/FBhuQTJBkTQnoNWsIkHsSUCMoCXVivQd2uNQPYo6wQrSZibhGogSxR32F5XO9977IcktwKQGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWadAsO+vT3kiE+ff84RT4+/zhHnyzVHNMCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0w6xS4o29vDzni0+cfc0/fv/4hH1kDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALNOgTt6fX7PET/953854uGvf84Rr8/vOeJ8ueaeGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaYdQrc0U9/+m2O+Oe//psjfvP7tyxrgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmDWKXDAt7eHHPH6/J4jzpdrjnnPEefLNR9ZA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzTmHa7fYlRzw9vuSI8+WaezpfrlnWALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsU/jQbrcvOeLp8SVHnC/X8HE1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTDrFO7q29tDjnh6fMkR58s17GqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYNYpHPLzP36XI16f33PE+XIN/FINMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8w65YO73b7kiO9f33LE6/N7jjhfroF7aYBZDTCrAWY1wKwGmNUAsxpgVgPMaoBZDTCrAWY1wKwGmNUAsxpg1il3drt9yRHfv77liE+ff8whz++Bj6oBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8xqgFmn3NnT40uO+Pu//5Ijnh5fcsT5cg18VA0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzPohyS0f2N/++Ksccb5cA6saYFYDzGqAWQ0wqwFmNcCsBpjVALMaYFYDzGqAWQ0wqwFmNcCsBph1ygd3vlwD/DINMKsBZjXArAaY1QCzGmBWA8xqgFkNMKsBZjXArAaY1QCzGmBWA8z6P4jqWY2qQpMAAAAAAElFTkSuQmCC",
    "base64Raw16": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAU0lEQVQ4y2NgGHLg1k6D/yBQbc/6nwyN5WAMYpNsAEjD+R51sAEkawYBkGaQRrJsR9ZEsmaynUyxZrL8ih5gZDmZbJthmsn2N0gTRYFGVhxTAwAAr05eQrRilucAAAAASUVORK5CYII="
  }
];

/**
 * Finds the top 2-3 most relevant scaled reference examples for any request,
 * analyzing the user prompt text, item type, and material to pull the most
 * structurally and materially accurate grounding assets from the ingested vanilla items.
 */
export const getFewShotExamples = (
  prompt: string = '', 
  itemType: string = 'adaptive', 
  material: string = 'adaptive'
): ReferenceItem[] => {
  const promptTokens = (prompt || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(t => t.length > 2);

  const typeLower = (itemType || '').toLowerCase();
  const matLower = (material || '').toLowerCase();

  const scored = VANILLA_EXAMPLES.map(item => {
    let score = 0;

    // Check itemType
    if (typeLower !== 'adaptive' && typeLower !== '' && item.tags.includes(typeLower)) {
      score += 5;
    }
    // Check material
    if (matLower !== 'adaptive' && matLower !== '' && item.tags.includes(matLower)) {
      score += 5;
    }

    // Check prompt tokens against tags and ID
    for (const token of promptTokens) {
      if (item.tags.includes(token)) score += 3;
      if (item.id.includes(token)) score += 4;
      if (item.description.toLowerCase().includes(token)) score += 1;
    }

    return { item, score };
  });

  scored.sort((a, b) => b.score - a.score);

  const top = scored.filter(s => s.score > 0).map(s => s.item);
  if (top.length >= 2) return top.slice(0, 2);
  if (top.length === 1) {
    const fallback = VANILLA_EXAMPLES.find(i => i.id !== top[0].id && (i.id === 'diamond_sword' || i.id === 'gold_ingot'));
    return fallback ? [top[0], fallback] : top;
  }

  // Fallback to iconic vanilla items (diamond sword + gold ingot)
  const fallbacks = VANILLA_EXAMPLES.filter(i => i.id === 'diamond_sword' || i.id === 'gold_ingot');
  return fallbacks.length >= 2 ? fallbacks.slice(0, 2) : VANILLA_EXAMPLES.slice(0, 2);
};
