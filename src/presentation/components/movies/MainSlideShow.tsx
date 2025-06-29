import { ReactElement } from 'react';
import { useWindowDimensions, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

interface Props<T> {
  movies: T[];
  eachItemWidth?: number;
  eachItemHeight?: number;
  renderItem: (item: T) => ReactElement;
}


const MainSlideShow = <T,>({ movies, renderItem, eachItemWidth = 150, eachItemHeight = 300 }: Props<T>) => {
  const width = useWindowDimensions().width;

  return (
    <View className='flex-1 justify-center items-center w-full'>
      <Carousel 
        data={movies}
        width={eachItemWidth}
        height={eachItemHeight}
        autoPlay={true}
        autoPlayInterval={3000}
        loop={true}
        mode="parallax"
        renderItem={({ item }) => renderItem(item)}
        style={{ justifyContent: 'center', alignItems: 'center', width }}
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 0,
        }}
        // pagingEnabled={true}
        // snapEnabled={true}
      />
    </View>
  )
}

export default MainSlideShow;