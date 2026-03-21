import Image from "next/image";
import { Instagram } from "lucide-react";

const posts = [
  { id: 1, imageUrl: "https://picsum.photos/seed/kaia1/400/500", username: "@kaia_taller", avatarUrl: "https://picsum.photos/seed/avatar1/100/100" },
  { id: 2, imageUrl: "https://picsum.photos/seed/kaia2/400/500", username: "@kaia_prints", avatarUrl: "https://picsum.photos/seed/avatar2/100/100" },
  { id: 3, imageUrl: "https://picsum.photos/seed/kaia3/400/500", username: "@kaia_brand", avatarUrl: "https://picsum.photos/seed/avatar3/100/100" },
  { id: 4, imageUrl: "https://picsum.photos/seed/kaia4/400/500", username: "@kaia_official", avatarUrl: "https://picsum.photos/seed/avatar4/100/100" },
  { id: 5, imageUrl: "https://picsum.photos/seed/kaia5/400/500", username: "@kaia_studio", avatarUrl: "https://picsum.photos/seed/avatar5/100/100" },
  { id: 6, imageUrl: "https://picsum.photos/seed/kaia6/400/500", username: "@kaia_taller", avatarUrl: "https://picsum.photos/seed/avatar6/100/100" },
  { id: 7, imageUrl: "https://picsum.photos/seed/kaia7/400/500", username: "@kaia_prints", avatarUrl: "https://picsum.photos/seed/avatar7/100/100" },
  { id: 8, imageUrl: "https://picsum.photos/seed/kaia8/400/500", username: "@kaia_brand", avatarUrl: "https://picsum.photos/seed/avatar8/100/100" },
];

const PostCard = ({ post }: { post: typeof posts[0] }) => (
  <div className="flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm shrink-0">
    <div className="relative aspect-[4/5] w-full">
      <Image
        src={post.imageUrl}
        alt={post.username}
        fill
        className="object-cover"
        unoptimized
      />
    </div>
    <div className="flex items-center justify-between p-3 sm:p-4">
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden relative shrink-0 border border-gray-200">
          <Image
            src={post.avatarUrl}
            alt={post.username}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <span className="text-xs sm:text-sm font-semibold text-gray-900">{post.username}</span>
      </div>
      <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600" />
    </div>
  </div>
);

export function InstagramFeed() {
  // We duplicate the posts to create an infinite scroll effect
  const col1 = [...posts.slice(0, 4), ...posts.slice(0, 4)];
  const col2 = [...posts.slice(4, 8), ...posts.slice(4, 8)];
  const col3 = [...posts.slice(2, 6), ...posts.slice(2, 6)];
  const col4 = [...posts.slice(0, 2), ...posts.slice(6, 8), ...posts.slice(0, 2), ...posts.slice(6, 8)];

  return (
    <section className="w-full mt-24 md:mt-32">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-12">
        <h2 className="text-[2.75rem] sm:text-[4.5rem] font-bold tracking-tighter leading-none">
          Follow Us!
        </h2>
        <a href="#" className="hidden lg:inline-block text-lg font-medium underline underline-offset-4 hover:text-gray-600 transition-colors">
          @Instagram
        </a>
      </div>

      <div className="relative h-[600px] sm:h-[800px] overflow-hidden rounded-3xl">
        {/* Gradient overlays for smooth fade effect at top and bottom */}
        <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 h-full">
          {/* Column 1 - Scrolling Up */}
          <div className="flex flex-col gap-4 sm:gap-6 animate-marquee-up">
            {col1.map((post, i) => (
              <PostCard key={`col1-${i}`} post={post} />
            ))}
          </div>

          {/* Column 2 - Scrolling Down */}
          <div className="flex flex-col gap-4 sm:gap-6 animate-marquee-down">
            {col2.map((post, i) => (
              <PostCard key={`col2-${i}`} post={post} />
            ))}
          </div>

          {/* Column 3 - Scrolling Up (Desktop only) */}
          <div className="hidden lg:flex flex-col gap-6 animate-marquee-up" style={{ animationDelay: '-5s' }}>
            {col3.map((post, i) => (
              <PostCard key={`col3-${i}`} post={post} />
            ))}
          </div>

          {/* Column 4 - Scrolling Down (Desktop only) */}
          <div className="hidden lg:flex flex-col gap-6 animate-marquee-down" style={{ animationDelay: '-5s' }}>
            {col4.map((post, i) => (
              <PostCard key={`col4-${i}`} post={post} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center lg:hidden">
        <a href="#" className="text-base font-medium underline underline-offset-4 hover:text-gray-600 transition-colors">
          @Instagram
        </a>
      </div>
    </section>
  );
}
