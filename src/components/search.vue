<template>
	<div>
		<!--Nav section-->
		<div class="navbar">
			<div class="navbar-brand">
				<a href="" class="navbar-item">
					<span class="icon">
						<i class="fa fa-home"></i>
					</span>
				</a>


				<div class="navbar-burger">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</div>

		<!--Hero section-->
		<section class="hero is-primary">
			<div class="hero-body">
				<div class="container">
					<h1 class="title">Movie Finder</h1>
					<h2>Get a random movie to watch</h2>
				</div>
			</div>
		</section>

		<!-- Main Button-->
		<button class="button is-info is-medium center has-shadow" v-on:click="getMovies">Get A Movie</button>
		

		<!--Search Result-->
		<div class="result" v-for="movie in movieDetail">
			<div class="result__poster">
				<img :src="imageUrl" alt="movie poster">
			</div>
			<div class="result__content">
				<h3 class="is-size-3">{{ movie.title }}</h3>
				<div class="result__content__info">
					<p class="tag is-warning">{{ movie.genres["0"].name}}</p>
					<p class="tag is-warning">{{ movie.vote_average }}</p>
					<p class="tag is-warning">{{ movie.runtime }}</p>
					<p class="tag is-warning">{{ movie.release_date }}</p>
				</div>
				<p>{{ movie.tagline }}</p>
				<p>{{ movie.overview }}</p>
			</div>
		</div>

	</div>
</template>

<script>
import axios from 'axios'
	export default {
		name: 'Search',
		data: () => ({
			movieDetail: [],
			imageUrl: ''
		}),

		methods: {
			getMovies: function() {
				this.movieArr = []
				this.imageArr = []
				this.movieDetail = []

				const apiKey = 'bca29f0e4fe9d5267c1f63ae1fc1cc4a'
				const id = Math.floor(Math.random() * 3000) + 1
				const movieApiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
				const imageApiUrl = `https://api.themoviedb.org/3/configuration?api_key=${apiKey}`

				// GET Movie a random movie from api
				axios.all([
					axios.get(movieApiUrl),
					axios.get(imageApiUrl)
				])
				.then(axios.spread((movieResponse, imageResponse) => {
					this.movieArr.push(movieResponse.data)
					this.imageArr.push(imageResponse.data)
					this.movieDetail = this.movieArr

					//console.log(this.movieDetail)
					this.imageUrl = this.imageArr["0"].images.base_url + this.imageArr["0"].images.poster_sizes[6] + this.movieArr["0"].poster_path
				}))
			}
		}
	}
</script>

<style lang="sass">
	@import '../../node_modules/bulma/bulma.sass'

	.icon
		padding-left: 15px

	.center
		display: table
		margin: 0 auto
		margin-top: 10px
		margin-bottom: 10px

	.has-shadow
		&:hover
			box-shadow: 2px 1px 10px 0px rgba(0,0,0,0.8)


	.result
		background-color: #f5f5f5
		width: auto
		height: auto
		display: inline-flex
		&__poster
			width: 300px
			height: 300px
			left: 5%

		&__info
			display: flex
			left: 10px

</style>