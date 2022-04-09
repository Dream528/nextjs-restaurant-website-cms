import Cosmic from 'cosmicjs';

const BUCKET_SLUG = process.env.COSMIC_BUCKET_SLUG
const READ_KEY = process.env.COSMIC_READ_KEY

const bucket = Cosmic().bucket({
  slug: BUCKET_SLUG,
  read_key: READ_KEY,
});

const is404 = (error) => /not found/i.test(error.message);

export async function getPreviewDataBySlug(slug) {
  const params = {
    slug,
    props: 'slug',
    status: 'all',
  }

  try {
    const data = await bucket.getObject(params)
    return data.object
  } catch (error) {
    if (is404(error)) return
    throw error
  }
}

export async function getAllDataWithSlug() {
  const params = {
    type: 'menu',
    props: 'slug',
  }
  const data = await bucket.getObjects(params)
  return data.objects
}

export async function getInfoForHome(preview) {
  const params = {
    type: 'header',
    props: 'title,slug,metadata,created_at',
    sort: '-created_at',
    ...(preview && { status: 'all' }),
  }
  const data = await bucket.getObjects(params)
  return data.objects
}

export async function getDataAndMoreData(slug, preview) {
  const singleObjectParams = {
    slug,
    props: 'slug,title,metadata,created_at',
    ...(preview && { status: 'all' }),
  }
  const moreObjectParams = {
    type: 'posts',
    limit: 3,
    props: 'title,slug,metadata,created_at',
    ...(preview && { status: 'all' }),
  }
  const object = await bucket.getObject(singleObjectParams).catch((error) => {
    if (is404(error)) return
    throw error
  } )
  
  const moreObjects = await bucket.getObjects(moreObjectParams)
  const moreData = moreObjects.objects
    ?.filter(({ slug: object_slug }) => object_slug !== slug)
    .slice(0, 2)

  return {
    post: object?.object,
    moreData,
  }
}