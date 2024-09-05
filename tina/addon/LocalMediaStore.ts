import { Media, MediaStore, MediaList, MediaUploadOptions, MediaListOptions } from 'tinacms'



const TYPES = {
  calm: null,
  gray: 'g',
  crazy: 'c',
  gif: 'gif',
}

export class LocalMediaStore implements MediaStore {
  accept = '*'
  constructor(public maxDim: number = 500) {}

  async persist(files: MediaUploadOptions[]) {
    console.log('You can not persist the cage',files)
    return generateCage({ count: files.length, maxDim: this.maxDim })
  }

  async delete() {
    console.log('You can not delete the cage')
    // You can't delete the cage
  }

  async previewSrc(src: string) {
    return src
  }

  async list(options:MediaListOptions) {
    const limit = 10
    const list: MediaList = {
      items: generateCage({ count: limit, maxDim: this.maxDim }),
      nextOffset: options.offset
    }
    return list
  }
}

function generateCage({
  count,
  maxDim,
}: {
  count?: number
  maxDim: number
}): Media[] {
  return [...new Array(count)].map(() => {
    const config: any = []

    const type = getType()

    if (type !== TYPES.calm) {
      config.push(type)
    }

    config.push(...randomDimensions(500))

    // const url = `${PLACECAGE_HOST}${config.join('/')}`
    const url = `https://static.vecteezy.com/system/resources/previews/022/187/193/original/cctv-camera-3d-icon-illustration-png.png?info=${config.join('&a=')}`


    return {
      id: url,
      filename: url,
      src: url,
      type: 'file',
      directory: '',
      thumbnails:
      {
          '75x75': 'https://static.vecteezy.com/system/resources/previews/022/187/193/original/cctv-camera-3d-icon-illustration-png.png',
          '400x400': 'https://static.vecteezy.com/system/resources/previews/022/187/193/original/cctv-camera-3d-icon-illustration-png.png',
          '1000x1000': 'https://static.vecteezy.com/system/resources/previews/022/187/193/original/cctv-camera-3d-icon-illustration-png.png'
      }
    }
  })
}

function randomDimensions(maxDim: number) {
  const width = Math.floor(Math.random() * maxDim + 100)
  const height = Math.floor(Math.random() * maxDim + 100)
  return [width, height]
}

function getType() {
  const i = Math.floor(Math.random() * 4 + 1)
  switch (i % 4) {
    case 0:
      return TYPES.calm
    case 1:
      return TYPES.crazy
    case 2:
      return TYPES.gif
    case 3:
      return TYPES.gray
    default:
      return TYPES.calm
  }
}

export default LocalMediaStore