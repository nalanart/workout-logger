import { api } from '../api';

export const workoutsApi = api.injectEndpoints({
  endpoints: (build) => ({
    createWorkout: build.mutation<Workout, CreateWorkoutDto>({
      query: (body) => ({
        url: '/workouts',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Workout'],
    }),
    getWorkout: build.query<Workout, number>({
      query: (id) => ({
        url: `/workouts/${id}`,
      }),
      providesTags: ['Workout'],
    }),
    updateWorkout: build.mutation<
      Workout,
      Partial<Workout> & Pick<Workout, 'id'>
    >({
      query: ({ id, ...patch }) => ({
        url: `workouts/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: ['Workout'],
    }),
  }),
  overrideExisting: false,
});

export type Set = {
  weight: number;
  reps: number;
};

export type WorkoutExercise = {
  id: number;
  name: string;
  sets: Set[];
};
export type Workout = {
  id: number;
  exercises: WorkoutExercise[];
};

export type CreateWorkoutDto = {};

export type UpdateWorkoutDto = {
  id: number;
  exercises: WorkoutExercise[];
};

export const {
  useCreateWorkoutMutation,
  useGetWorkoutQuery,
  useUpdateWorkoutMutation,
} = workoutsApi;
