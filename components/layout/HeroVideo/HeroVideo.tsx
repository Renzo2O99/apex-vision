import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export function HeroVideo() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/hEdzv7D4CbQ"
        thumbnailSrc="https://www.tworeality.com/wp-content/uploads/2016/12/Realidad-virtual-two-reality-oculus-rift-htc-vive-play-station-google-earth-vr.jpg"
        thumbnailAlt="Hero Video"
      />

    </div>
  );
}