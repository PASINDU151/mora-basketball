import { Avatar, Typography, Button } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";
import Sidebar from "@/widgets/layout/sidebar";

export function Gallery() {
        const images = [
          'https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
          'https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
          'https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
          'https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
          // Add more image URLs here
        ];
        const captions = [
            'Image 1',
            'Image 2',
            'Image 3',
            'Image 4',
            // Add more image URLs here
          ];
  return (
    <>
      <section className="relative block h-[20vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>

      <section className="relative block h-[20vh] mt-8">
      <div className="grid grid-cols-3 gap-4">
        {images.map((imageUrl, index) => (
          <figure key={index}>
            <img
              className="h-96 w-full rounded-lg object-cover object-center"
              src={imageUrl}
              alt={`Image ${index + 1}`}
            />
            <Typography as="caption" variant="small" className="mt-2 text-center font-normal">
              {captions[index]}
            </Typography>
          </figure>
        ))}
      </div>
    </section>
    </>
  );
}

export default Gallery;
