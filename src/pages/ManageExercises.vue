<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ $t('manage_exercises.title') }}</h1>
          <h2 class="subtitle">
            {{ $t('manage_exercises.subtitle', {count: exercises.length}) }}
          </h2>
        </div>
      </div>
    </section>


  <section class="section">
    <div class="container">
      <exercises-create-form></exercises-create-form>

      <b-table :data="exercises">
        <template slot-scope="props">
          <b-table-column field="name" label="Name">
              {{ props.row.name }}
          </b-table-column>
          <b-table-column label="Created at">
              {{ props.row.created_at }}
              das
          </b-table-column>
          <b-table-column label="Action" :numeric="true">
              <button class="delete" @click="removeExercise(props.row.id)">Remove</button>
          </b-table-column>
        </template>

        <template slot="empty">
          <section class="section">
            <div class="content has-text-grey has-text-centered">
              <p>
                <b-icon pack="fas" icon="user" size="is-large"></b-icon>
              </p>
              <p>Nothing here.</p>
            </div>
          </section>
        </template>
      </b-table>

    </div>
  </section>
  </div>
</template>

<script>
import { db } from '../main';
import ExercisesCreateForm from '@/components/ExercisesCreateForm.vue';

export default {
  name: 'HelloWorld',

  components: {
    ExercisesCreateForm
  },

  data() {
    return {
      exercises: [],
    };
  },

  firestore () {
    return {
      exercises: db.collection('exercises').orderBy('name')
    }
  },

  methods: {
    removeExercise (id) {
      db.collection('exercises').doc(id).delete()
    }
  },
};
</script>
