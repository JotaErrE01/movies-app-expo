import { nowPlayingAction } from "@/src/core/actions/movies/now-playing.action"
import { useQuery } from "@tanstack/react-query"


export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ['movies'],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  })

  return {
    nowPlayingQuery,
  }
}

