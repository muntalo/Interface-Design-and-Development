//create new vue instance
Vue.createApp({
	//**************  data  ****************
	data() {
		return {
			msg:'Start guessing.',
			number:Math.floor(Math.random() * 100) + 1,
		}
	},//passing variables into vue app

	//**************  computed   ***************
	computed:{
    //filter function
    filterMarks: function(){
		return this.allMarks.filter(m=>
			m.sName.toLowerCase().match(this.stuObj.sName.toLowerCase()) &&
			m.subject.toLowerCase().match(this.stuObj.subject.toLowerCase())
			);
		}
	},
	methods:{
		checkguess:function() {
			//this.msg=this.guess;
			if (this.guess > this.number) {this.msg='Guess lower.'}
			else if (this.guess < this.number) {this.msg='Guess higher.'}
			else {this.msg='You got it!.'};
		},
		giveup:function() {
			this.msg='The number is ' + this.number + ".";
		},
		startover:function() {
			this.number=Math.floor(Math.random() * 100) + 1;

			this.msg="A new number has been picked. Start guessing.";
		}
	}

}).mount('#app');
