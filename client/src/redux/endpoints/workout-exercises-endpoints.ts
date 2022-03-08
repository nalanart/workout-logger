import { api } from '../api';

export const workoutExercisesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getManyWorkoutExercises: build.query<WorkoutExercise[], void>({
      query: () => ({
        url: '/workout-exercises',
      }),
      providesTags: ['WorkoutExercise'],
    }),
    createOneWorkoutExercise: build.mutation<
      WorkoutExercise,
      CreateWorkoutExerciseDto
    >({
      query: ({ workoutId, body }) => ({
        url: '/workout-exercises',
        method: 'POST',
        params: { workoutId },
        body,
      }),
      invalidatesTags: ['WorkoutExercise', 'Workout'],
    }),
    deleteExercise: build.mutation<void, number>({
      query: (id) => ({
        url: `/workout-exercises/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['WorkoutExercise', 'Workout'],
    }),
  }),
  overrideExisting: false,
});

export type WorkoutExercise = {
  id?: number;
  name: string;
};

export type CreateWorkoutExerciseDto = {
  workoutId?: number;
  body: WorkoutExercise;
};

export const {
  useGetManyWorkoutExercisesQuery,
  useCreateOneWorkoutExerciseMutation,
  useDeleteExerciseMutation,
} = workoutExercisesApi;
