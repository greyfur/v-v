 <template>
<div>
	<!-- 这里的Form是父组件向子组件传值的demo! -->
	<!-- headbar -->
	<mt-header fixed title="just a demo"></mt-header>
	 
	 <div class="temp">
		 <a href="../demo/details.html">多页面跳转</a>
	<div><a href="../family/alert.html">alert页面</a></div>
	 <div><a href="../family/calendar.html">calendar页面</a></div>
	 <div><a href="../family/button.html">button页面</a></div>
		  
	 </div>
		 
		 <Form :formData="listData"></Form>
	 
	<!-- tabbar -->
	<nav class="mui-bar mui-bar-tab ">
			<a class="mui-tab-item">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">2页</span>
			</a>
			<a class="mui-tab-item">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">3页</span>
			</a>
			<a class="mui-tab-item">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">4页</span>
			</a>
		</nav>
	</div>
	
</template>

<script>
	import Form from '../../../components/Form'
	export default{
		components:{
			Form
		},
		data(){
			return{
				listData:{
					name:"abc",
					psw:"123456"
				}
			}
		}
	}
 
</script>

<style scoped>
	.temp{
		margin-top: 100px;
		/* margin-bottom: 100px; */
	}
    
  
</style>