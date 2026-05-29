import AnimateIn from "@/components/AnimateIn";

interface PostSize {
  height: number | null;
  width: number | null;
  mediaUrl: string;
}

interface Post {
  id: string;
  permalink: string;
  mediaUrl: string;
  mediaType: string;
  prunedCaption: string;
  sizes: {
    small: PostSize;
    medium: PostSize;
    large: PostSize;
    full: PostSize;
  };
}

const BEHOLD_FEED_URL = "https://feeds.behold.so/UUFMxwbPVe0iBgqgXWDM";

async function getPosts(): Promise<Post[]> {
  try {
    const res = await fetch(BEHOLD_FEED_URL, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const data = await res.json();
    return (data.posts ?? []).slice(0, 6);
  } catch {
    return [];
  }
}

function getImageUrl(post: Post): string {
  // Prefer Behold's stable CDN over Instagram's expiring URLs
  return post.sizes?.medium?.mediaUrl || post.sizes?.large?.mediaUrl || post.mediaUrl;
}

export default async function InstagramSection() {
  const posts = await getPosts();

  return (
    <section id="instagram" className="bg-white py-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <AnimateIn>
            <h2 className="text-peko-blue font-black text-5xl sm:text-6xl uppercase tracking-tight">
              Seguinos en Instagram
            </h2>
          </AnimateIn>
        </div>

        {/* Photo grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-10">
            {posts.map((post) => (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden bg-peko-cream block"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getImageUrl(post)}
                  alt={post.prunedCaption ?? "Peko Peko"}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-peko-red/0 group-hover:bg-peko-red/60 transition-all duration-300 flex items-end p-3">
                  <p className="text-white text-xs leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-3">
                    {post.prunedCaption}
                  </p>
                </div>
                {/* Carousel badge */}
                {post.mediaType === "CAROUSEL_ALBUM" && (
                  <div className="absolute top-2 right-2 bg-black/40 rounded p-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                      <rect x="2" y="2" width="9" height="9" rx="1" />
                      <rect x="13" y="2" width="9" height="9" rx="1" />
                      <rect x="2" y="13" width="9" height="9" rx="1" />
                      <rect x="13" y="13" width="9" height="9" rx="1" />
                    </svg>
                  </div>
                )}
              </a>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 text-sm mb-10">
            No se pudieron cargar las publicaciones.
          </p>
        )}

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://www.instagram.com/pekopeko.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-peko-blue text-white font-black text-xs tracking-[0.3em] uppercase px-10 py-4 rounded-lg hover:bg-peko-red transition-colors duration-300"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="white" />
            </svg>
            Ver Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
