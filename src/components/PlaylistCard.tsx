interface PlaylistCardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick?: () => void;
}

export const PlaylistCard = ({ title, description, imageUrl, onClick }: PlaylistCardProps) => {
  return (
    <div 
      onClick={onClick}
      className="group relative flex flex-col p-4 bg-spotify-darkgray rounded-lg transition-all hover:bg-opacity-80 cursor-pointer animate-scaleIn"
    >
      <div className="relative aspect-square w-full mb-4 rounded-md overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <h3 className="font-semibold text-sm text-spotify-white mb-1 truncate">{title}</h3>
      <p className="text-xs text-spotify-lightgray line-clamp-2">{description}</p>
    </div>
  );
};