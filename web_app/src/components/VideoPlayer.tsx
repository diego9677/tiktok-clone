const link = 'static/videos/video1.mp4';

export const VideoPlayer = () => {
    return (
        <video className="w-full h-full" src={link} controls={false} />
    );
};
