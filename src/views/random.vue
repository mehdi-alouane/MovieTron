<template>
  <div>
    <navbar isActive="true" />

    <section class="section">
      <div class="container">
        <div class="columns" v-for="movie in movieDetail" :key="movie">
          <div class="column is-3">
            <div class="box">
              <img :src="imageUrl">

              <a class="button is-warning is-full" :href="'http://www.imdb.com/title/' + movie.imdb_id">IMDB</a>
            </div>
          </div>

      <div class="column is-6">
        <div class="box">
          <h1 class="title">{{ movie.original_title }}</h1>
          <p class="tag is-warning">{{ movie.genres[0].name }}</p>
          <p class="tag is-warning">{{ movie.genres[1].name }}</p>
<!--           <p class="tag is-warning">{{ movie.genres[2].name }}</p>
 -->          <p>Release Date : {{ movie.release_date }}</p>
          <p class="tag is-info">
            <span class="icon">
              <i class="fa fa-star"></i>
            </span>
            <span>{{ movie.vote_average }}</span>
          </p>
          <p>{{ movie.overview }}</p>
        </div>
      </div>

      <div class="column is-3">
        <div class="box"></div>
      </div>
    </div>
      </div>
    </section>

  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
import navbar from '@/components/navbar'
import config from '@/config/config'

export default {
  components: { navbar },
  data: () => ({
    movieDetail: [],
    movieArr: [],
    imageArr: [],
    imageUrl: null
  }),
  created: function () {
    this.getMovie()
  },
  watch: {
    '$route': 'getMovie'
  },
  methods: {
    getMovie: async function () {
      try {
        const apiKey = config.apiKey
        const id = await Math.floor(Math.random() * 3000) + 1
        const movieApiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
        const imageApiUrl = `https://api.themoviedb.org/3/configuration?api_key=${apiKey}`

        const movieResponse = await axios.get(movieApiUrl)
        const imageResponse = await axios.get(imageApiUrl)

        this.movieArr.push(movieResponse.data)
        this.imageArr.push(imageResponse.data)
        this.movieDetail = this.movieArr
        // console.log(this.movieDetail)

        this.imageUrl = await this.imageArr["0"].images.base_url + this.imageArr["0"].images.poster_sizes[6] + this.movieArr["0"].poster_path


      } catch (err) {
        console.log(err.message)
      }
    }
  }
}
</script>

<style lang="sass">
  .is-full
    width: 100%
</style>

