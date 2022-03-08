import { api } from '../api';

export const setsApi = api.injectEndpoints({
  endpoints: (build) => ({
    createOneSet: build.mutation<Set, CreateSetDto>({
      query: (queryArg) => ({
        url: '/sets',
        params: { workoutExerciseId: queryArg.workoutExerciseId },
        method: 'POST',
        body: queryArg.body,
      }),
      invalidatesTags: ['Set', 'WorkoutExercise', 'Workout'],
    }),
  }),
  overrideExisting: false,
});

export type Set = {
  weight: number;
  reps: number;
};

export type CreateSetDto = {
  body: Set;
  workoutExerciseId?: number;
};

export const { useCreateOneSetMutation } = setsApi;
