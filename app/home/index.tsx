import MainSlideShow from '@/src/presentation/components/movies/MainSlideShow';
import MoviePoster from '@/src/presentation/components/movies/MoviePoster';
import { useMovies } from '@/src/presentation/hooks/useMovies';
import { ActivityIndicator, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const { nowPlayingQuery } = useMovies();
  const safeArea = useSafeAreaInsets();

  if(nowPlayingQuery.isLoading) {
    return (
      <View className='justify-center items-center flex-1'>
        <ActivityIndicator className='text-indigo-700' />
      </View>
    );
  }

  return (
    <View className='mt-2' style={{ paddingTop: safeArea.top, paddingBottom: safeArea.bottom }}>
      <Text className='text-3xl font-bold px-4 mb-2'>Movies</Text>

      {/* carousel de imagenes */}
      <MainSlideShow 
        movies={nowPlayingQuery.data ?? []} 
        eachItemWidth={150}
        eachItemHeight={350}
        renderItem={(item) => <MoviePoster id={item.id} poster={item.poster} />}
      />
    </View>
  )
}

export default HomeScreen;