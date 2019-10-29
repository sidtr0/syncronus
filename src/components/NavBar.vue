<template>
	<nav>
		<v-toolbar flat class="primary">
			<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
			<v-toolbar-title>
				<span class="grey--text text--lighten-2">SYNCRONUS</span>
				<span class="black--text text--lighten-2">UTILITIES</span>
			</v-toolbar-title>

			<v-spacer></v-spacer>

			<v-toolbar-items class="hidden-xs-only" v-for="link in links" :key="link.text">
				<v-btn depressed class="primary" router :to="link.route">
					<v-icon left>{{  link.icon  }}</v-icon>
					{{  link.text }}
				</v-btn>
			</v-toolbar-items>
		</v-toolbar>	

		<v-navigation-drawer v-model="drawer" app class="primary">
		  <v-list>
		    <v-list-item v-for="link in links" :key="link.text" link router :to="link.route">
				<v-list-item-icon>
					<v-icon>{{  link.icon  }}</v-icon>
				</v-list-item-icon>
				<v-list-item-content>
					<v-list-item-title>{{  link.text  }}</v-list-item-title>
				</v-list-item-content>
		    </v-list-item>
		  </v-list>
		</v-navigation-drawer>

	</nav>
</template>

<script>
	export default {
		data() {
			return {
				drawer: false,
				links: [
					{icon: 'mdi-home', text: 'Home', route: '/'},
					{icon: 'mdi-account', text: 'Get Started', route: '/getstarted'},
					{icon: 'mdi-help', text: 'About Us', route: '/about'},
					{icon: 'mdi-information', text: 'Our Products', route: '/ourproducts'}
				]
			}
		}
	}
</script>