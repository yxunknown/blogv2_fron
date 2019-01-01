import {Injectable} from '@angular/core';
import {Error} from 'tslint/lib/error';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor() { }

  async analyze(src: string): Promise<{color: string, count: number}[]> {
    const data = await getImageData(src, 1);
    return getCount(data);
  }
}


const getContext = (width, height) => {
  const canvas = document.createElement('canvas');
  canvas.setAttribute('width', width);
  canvas.setAttribute('height', height);
  return canvas.getContext('2d');
};

const getImageData = (src: string, scale: number = 1): Promise<Uint8ClampedArray> => {
  const img = new Image();
  src = src || img.src;
  if (src.startsWith('data')) {
    // base64 encoding data
    img.crossOrigin = 'Anonymous';
  }
  return new Promise(((resolve, reject) => {
    img.onload = function () {
      const width = img.width * scale;
      const height = img.height * scale;
      const ctx = getContext(width, height);
      ctx.drawImage(img, 0, 0, width, height);
      const {data} = ctx.getImageData(0, 0, width, height);
      resolve(data);
    };
    // init image object
    const errorHandler = () => reject(new Error('An error occurred to load image'));
    img.onerror = errorHandler;
    img.onabort = errorHandler;
    img.src = src;
  }));
};


const getCount = (data: Uint8ClampedArray): [] => {
  let color = '';
  const countMap = {};
  let rgbComponents = [];
  let alpha = 0;
  for (let i = 0; i < data.length; i += 4) {
    // get rgba from each pixel
    rgbComponents = Array.from(data).splice(i, 3);
    alpha = data[i + 3];
    if (alpha === 0) {
      // skip transparent color
      continue;
    }
    color = alpha && alpha !== 255 ? `raga(${[...rgbComponents, alpha].join(',')})` : `rgb(${rgbComponents.join(',')})`;
    if (rgbComponents.indexOf(undefined) !== -1) {
      // this pixel contains undefined data
      continue;
    }
    countMap[color] = countMap[color] ? { color, count: countMap[color].count + 1} : {color, count: 1};
  }
  const counts = Object.values(countMap) as [];
  return counts.sort((a: any, b: any) => a.count - b.count);
};
