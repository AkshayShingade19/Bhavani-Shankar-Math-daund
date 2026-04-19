export const GalleryItem1 = ({ className }: { className?: string }) => (
  <img src="https://w0.peakpx.com/wallpaper/230/214/HD-wallpaper-jai-shankar-dhankwadi-god-maharaj.jpg" alt="Gallery 1" className={className} referrerPolicy="no-referrer" />
);

export const GalleryItem2 = ({ className }: { className?: string }) => (
  <img src="https://i.pinimg.com/474x/74/eb/2a/74eb2a1bf0cd0f557fea0dc3a42b0ffb.jpg?nii=t" alt="Gallery 2" className={className} referrerPolicy="no-referrer" />
);

export const GalleryItem3 = ({ className }: { className?: string }) => (
  <img src="https://tse2.mm.bing.net/th/id/OIP.42bOXpLJZxFpoaMm0RqBnAHaJ5?w=736&h=984&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Gallery 3" className={className} referrerPolicy="no-referrer" />
);

export const GalleryItem4 = ({ className }: { className?: string }) => (
  <img src="https://tse1.mm.bing.net/th/id/OIP.Q_NsgkMw4uwxJhrxN8AAygHaMQ?w=577&h=955&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Gallery 4" className={className} referrerPolicy="no-referrer" />
);

export const GalleryItem5 = ({ className }: { className?: string }) => (
  <img src="https://tse2.mm.bing.net/th/id/OIP.Lq7CG95LCq_pyoBkbKCJIAHaN8?w=510&h=960&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Gallery 5" className={className} referrerPolicy="no-referrer" />
);

export const GalleryItem6 = ({ className }: { className?: string }) => (
  <img src="https://i.pinimg.com/736x/ae/ec/72/aeec727bb1aa7a85af652a14ba43bca3.jpg" alt="Gallery 6" className={className} referrerPolicy="no-referrer" />
);

// Helper for dynamic rendering if needed
export const GalleryImagesList = [
  { Component: GalleryItem1, src: "https://picsum.photos/seed/temple1/800/600", alt: "Temple Entrance" },
  { Component: GalleryItem2, src: "https://picsum.photos/seed/temple2/800/600", alt: "Garbhagriha" },
  { Component: GalleryItem3, src: "https://picsum.photos/seed/temple3/800/600", alt: "Devotees" },
  { Component: GalleryItem4, src: "https://picsum.photos/seed/temple4/800/600", alt: "Evening Aarti" },
  { Component: GalleryItem5, src: "https://picsum.photos/seed/temple5/800/600", alt: "Festivals" },
  { Component: GalleryItem6, src: "https://picsum.photos/seed/temple6/800/600", alt: "Prasad Vitran" },
];
