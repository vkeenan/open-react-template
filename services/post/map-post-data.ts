import { updateUserAvatar } from './update-user-avatar';

export function mapPostData(post = {}) {
  const data = { ...post };

  // Clean up the author object to avoid someone having to look an extra
  // level deeper into the node

  if ((data as any).author) {
    (data as any).author = {
      ...(data as any).author.node,
    };
  }

  // The URL by default that comes from Gravatar / WordPress is not a secure
  // URL. This ends up redirecting to https, but it gives mixed content warnings
  // as the HTML shows it as http. Replace the url to avoid those warnings
  // and provide a secure URL by default

  if ((data as any).author?.avatar) {
    (data as any).author.avatar = updateUserAvatar((data as any).author.avatar);
  }

  // Clean up the categories/tags to make them more easy to access

  if ((data as any).categories) {
    (data as any).categories = (data as any).categories.edges.map(
      ({ node }: any) => {
        return {
          ...node,
        };
      }
    );
  }

  if ((data as any).tags) {
    (data as any).tags = (data as any).tags.nodes.map(
      ({ tag }: any) => {
        return {
          ...tag,
        };
      });
  }

  // Clean up the featured image to make them more easy to access

  if ((data as any).featuredImage) {
    (data as any).featuredImage = (data as any).featuredImage.node;
  }

  return data;
}
