import { Movie } from '@/src/infrastructure/interfaces/movie.interface';
import { Link } from 'expo-router';
import { FC } from 'react';
import { Image } from 'react-native';

interface Props {
  id: Movie['id'];
  poster: Movie['poster'];
}

const MoviePoster: FC<Props> = ({ id, poster }) => {
  return (
    <Link href={`/movies/${id}`} className='active:opacity-90'>
      <Image
        src={poster}
        alt="Movie Poster"
        className='w-[150px] h-[250px] rounded-lg object-cover'
        // style={{ width: 150, height: 250, borderRadius: 10 }}
        // resizeMode='cover'
      />
    </Link>
  )
}

export default MoviePoster;
