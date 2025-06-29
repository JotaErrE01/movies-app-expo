import { movieApi } from "@/src/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/src/infrastructure/interfaces/moviedb-response.interface";
import { MovieMapper } from "@/src/infrastructure/mappers/movie.mapper";


export const nowPlayingAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>('/now_playing');

    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

    return movies;
  } catch (error) {
    console.error('Error in nowPlayingAction:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
}


