import { logger } from '@/lib/logger';
import {
  sortStickyPosts,
  getAllPosts,
  getPostsByAuthorSlug,
  getPagesCount,
  getPostsByCategoryId,
  getPostsPerPage
} from '@/services/post'
import {
  getAllCompanies,
  getAllProductCategories,
  getAllProducts,
  getAllServices,
  getCompaniesPerPage,
  getProductCategoriesPerPage,
  getProductsPerPage,
  getServiceCategoriesPerPage,
  getServicesPerPage,
  getAllServiceCategories,
} from '@/services/map';

export async function getPaginatedServices({ currentPage = 1 } = {}) {
  logger.debug(`👉getPaginatedServices: ${currentPage}`);
  const { services } = await getAllServices();
  const servicesPerPage = getServicesPerPage();
  const pagesCount = Math.ceil(services.length / servicesPerPage);

  let page = Number(currentPage);

  if (typeof page === 'undefined' || isNaN(page)) {
    page = 1;
  } else if (page > pagesCount) {
    return {
      services: [],
      pagination: {
        currentPage: undefined,
        pagesCount,
      },
    };
  }

  const offset = servicesPerPage * (page - 1);
  logger.debug(`👈getPaginatedServices`);
  return {
    services: services.slice(offset, offset + servicesPerPage),
    pagination: {
      currentPage: page,
      pagesCount,
    },
  };
}

export async function getPaginatedProducts({ currentPage = 1 } = {}) {
  logger.debug(`👉getPaginatedProducts: ${currentPage}`);
  const { products } = await getAllProducts();
  const productsPerPage = getProductsPerPage();
  const pagesCount = Math.ceil(products.length / productsPerPage);

  let page = Number(currentPage);

  if (typeof page === 'undefined' || isNaN(page)) {
    page = 1;
  } else if (page > pagesCount) {
    return {
      products: [],
      pagination: {
        currentPage: undefined,
        pagesCount,
      },
    };
  }

  const offset = productsPerPage * (page - 1);
  logger.debug(`👈getPaginatedProducts`);
  return {
    products: products.slice(offset, offset + productsPerPage),
    pagination: {
      currentPage: page,
      pagesCount,
    },
  };
}

export async function getPaginatedPosts({ currentPage = 1, ...options } = {}) {
  logger.debug(`👉getPaginatedPosts: ${currentPage}`);
  const { posts } = await getAllPosts(options);
  const postsPerPage = await getPostsPerPage();
  const pagesCount = await getPagesCount(posts, postsPerPage);
  let page = Number(currentPage);

  if (typeof page === 'undefined' || isNaN(page)) {
    page = 1;
  } else if (page > pagesCount) {
    return {
      posts: [],
      pagination: {
        currentPage: undefined,
        pagesCount,
      },
      basePath: 'posts',
    };
  }

  const offset = postsPerPage * (page - 1);
  const sortedPosts = sortStickyPosts(posts);
  logger.debug(`👈getPaginatedPosts`);
  return {
    posts: sortedPosts.slice(offset, offset + postsPerPage),
    pagination: {
      currentPage: page,
      pagesCount,
    },
  };
}

export async function getPaginatedServiceCategories({ currentPage = 1 } = {}) {
  logger.debug(`getPaginatedServiceCategories: ${currentPage}`);
  const { categories: data } = await getAllServiceCategories();
  const dataPerPage = getServiceCategoriesPerPage();
  const pagesCount = Math.ceil(data.length / dataPerPage);

  let page = Number(currentPage);

  if (typeof page === 'undefined' || isNaN(page)) {
    page = 1;
  } else if (page > pagesCount) {
    return {
      categories: [],
      pagination: {
        currentPage: undefined,
        pagesCount,
      },
    };
  }

  const offset = dataPerPage * (page - 1);
  logger.debug(`getPaginatedServiceCategories`);
  return {
    categories: data.slice(offset, offset + dataPerPage),
    pagination: {
      currentPage: page,
      pagesCount,
    },
  };
}

export async function getPaginatedProductCategories({ currentPage = 1 } = {}) {
  logger.debug(`getPaginatedProductCategories: ${currentPage}`);
  const { categories: data } = await getAllProductCategories();
  const dataPerPage = getProductCategoriesPerPage();
  const pagesCount = Math.ceil(data.length / dataPerPage);

  let page = Number(currentPage);

  if (typeof page === 'undefined' || isNaN(page)) {
    page = 1;
  } else if (page > pagesCount) {
    return {
      categories: [],
      pagination: {
        currentPage: undefined,
        pagesCount,
      },
    };
  }

  const offset = dataPerPage * (page - 1);
  logger.debug(`getPaginatedProductCategories`);
  return {
    categories: data.slice(offset, offset + dataPerPage),
    pagination: {
      currentPage: page,
      pagesCount,
    },
  };
}

export async function getPaginatedCompanies({ currentPage = 1 } = {}) {
  logger.debug(`👉getPaginatedCompanies: ${currentPage}`)
  const data = await getAllCompanies();
  const companiesPerPage = getCompaniesPerPage();
  const pagesCount = Math.ceil(data.length / companiesPerPage);

  let page = Number(currentPage);

  if (typeof page === 'undefined' || isNaN(page)) {
    page = 1;
  } else if (page > pagesCount) {
    return {
      companies: [],
      pagination: {
        currentPage: undefined,
        pagesCount,
      },
    };
  }
  const offset = companiesPerPage * (page - 1);
  logger.debug(`👈getPaginatedCompanies`)
  return {
    companies: data.slice(offset, offset + companiesPerPage),
    pagination: {
      currentPage: page,
      pagesCount,
    },
  };
}

export async function getPaginatedCategoryPosts({
  categoryId = 0,
  currentPage = 1,
} = {}) {
  const { posts } = await getPostsByCategoryId(categoryId);
  if (!Array.isArray(posts)) {
    return {
      posts: [],
      pagination: {
        currentPage: undefined,
        pagesCount: undefined,
      },
    };
  }
  const postsPerPage = await getPostsPerPage();
  const pagesCount = await getPagesCount(posts, postsPerPage);

  let page = currentPage;

  if (typeof page === 'undefined' || isNaN(page)) {
    page = 1;
  } else if (page > pagesCount) {
    return {
      posts: [],
      pagination: {
        currentPage: undefined,
        pagesCount,
      },
    };
  }

  const offset = postsPerPage * (page - 1);
  return {
    posts: posts.slice(offset, offset + postsPerPage),
    pagination: {
      currentPage: page,
      pagesCount,
    },
  };
}

export async function getPaginatedAuthorPosts({
  authorSlug = '',
  currentPage = 1,
} = {}) {
  const { posts } = await getPostsByAuthorSlug(authorSlug);
  if (!Array.isArray(posts)) {
    return {
      posts: [],
      pagination: {
        currentPage: undefined,
        pagesCount: undefined,
      },
    };
  }
  const postsPerPage = await getPostsPerPage();
  const pagesCount = await getPagesCount(posts, postsPerPage);

  let page = currentPage;

  if (typeof page === 'undefined' || isNaN(page)) {
    page = 1;
  } else if (page > pagesCount) {
    return {
      posts: [],
      pagination: {
        currentPage: undefined,
        pagesCount,
      },
    };
  }

  const offset = postsPerPage * (page - 1);
  return {
    posts: posts.slice(offset, offset + postsPerPage),
    pagination: {
      currentPage: page,
      pagesCount,
    },
  };
}

