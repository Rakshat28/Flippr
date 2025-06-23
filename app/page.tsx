// imports
import Dropzone from '@/components/dropzone';

export default function Home() {
  return (
      <div className="space-y-16 pb-8">
          {/* Title + Desc */}
          <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-medium text-center">Convert Files Instantly and for Free</h1>
              <p className="text-muted-foreground text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
                  Experience seamless file conversion with <strong>Flippr</strong> your all in one solution for fast, unlimited, and free multimedia transformation. Effortlessly convert images, audio, and videos in just a few clicks. No limits. No cost. Just Flippr it.
              </p>
          </div>

          {/* Upload Box */}
          <Dropzone />
      </div>
  );
}
