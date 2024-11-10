		<ul class="list"></ul>
const app = Vue.createApp({ });
app.component('app-mypost', // indicating the component tag
{
// defining data to be used in the component
	data:function(){
		return{
			statPosts:[],
			strStatus:'',
		}
	},
	// define the template for the component
	template:
	 `<p>Status: <input v-model="strStatus"><button @click="add(strStatus)">Post</button></p>
	 <ul class="list">
	 			<li v-for="(e,index) in statPosts">{{e}} <button @click="remove(index)">Delete</button></li>
	 </ul>`,
	// your code here

	// defining the methods for add and remove status messages
	methods:{
		add:function(status) {
			this.statPosts.push(status);
			console.log(this.statPosts);
		},
		remove:function(index) {
			//delete status from statPost using index
			this.statPosts.splice(index,1);
			console.log('test2');

		}
	}
});
app.mount('#app')
