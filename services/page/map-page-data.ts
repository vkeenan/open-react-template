export function mapPageData(page = {}) {
  const data = { ...page };

  if ((data as any).featuredImage) {
    (data as any).featuredImage = (data as any).featuredImage.node;
  }

  if ((data as any).parent) {
    (data as any).parent = (data as any).parent.node;
  }

  if ((data as any).children) {
    (data as any).children = (data as any).children.edges.map(
      ({ node }: any) => node
    );
  }

  return data;
}
