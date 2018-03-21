<template>
  <form @enter.prevent="addExercise" class="box">
    <b-field>
      <b-input v-model="name" type="text" placeholder="Exercise Name" expanded></b-input>
      <p class="control">
        <button :class="{'is-loading' : isLoading}" :disabled="!canAddExercise" class="button is-primary" @click="addExercise">
          Save
        </button>
      </p>
    </b-field>
  </form>
</template>

<script>
import { required, minLength, between } from 'vuelidate/lib/validators';
import { db } from '../main';

export default {
  name: 'ExercisesCreateForm',

  data() {
    return {
      name: '',
      exercises: [],
      isLoading: false
    };
  },

  firestore () {
    return {
      exercises: db.collection('exercises').orderBy('name')
    }
  },

  validations: {
    name: {
      required,
      minLength: minLength(4)
    }
  },

  methods: {
    addExercise (event) {
      this.isLoading = true;

      if (this.canAddExercise) {
        db.collection('exercises').add({name: this.name}).then(onResolve => {
          console.log(onResolve)

          this.isLoading = false;
          this.name = '';

        }), (onReject) => {
          console.log(onReject)
        };
      }
    }
  },

  computed: {
    canAddExercise () {
      return !this.$v.$invalid && !this.exerciseAlreadyThere
    },

    exerciseAlreadyThere ()  {
      return !!this.exercises.find(item => item.name === this.name)
    }

  }
};
</script>
