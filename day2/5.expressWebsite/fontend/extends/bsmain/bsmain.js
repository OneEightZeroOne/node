define(["jquery"], function($) {
	var html = `
		<main role="main">
			<section class="jumbotron text-center">
				<div class="container">
					<h1 class="jumbotron-heading"></h1>
					<p class="lead text-muted"></p>
					<p>
						<a href="#" class="btn btn-primary my-2">Main call to action</a>
						<a href="#" class="btn btn-secondary my-2">Secondary action</a>
					</p>
				</div>
			</section>
		
			<div class="album py-5 bg-light">
				<div class="container">
		
					<div class="row">
						
					</div>
				</div>
			</div>
		</main>
	`;
	return $.fn.extend({
		bsmain: function() {
			return this.each(function() {
				$(this).html(html);
				new Promise((resolve, reject) => {
					$.ajax({
						url: "http://localhost:12345/getMainHead",
						success(data) {
							resolve(data);
						}
					})
				}).then((data)=>{
					console.log(data);
					$(".jumbotron-heading").text(data.head);
					$("[class='lead text-muted']").text(data.textMuted);
				})
				
				new Promise((resolve, reject) => {
					$.ajax({
						url: "http://localhost:12345/getMainImg",
						success(data) {
							resolve(data);
						}
					})
				}).then((data)=>{
					console.log(data)
					var html = data.imgs.map((item,index)=>{
						return `
							<div class="col-md-4">
								<div class="card mb-4 box-shadow">
									<img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" style="height: 225px; width: 100%; display: block;" src="${item.url}" data-holder-rendered="true">
									<div class="card-body">
										<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
										<div class="d-flex justify-content-between align-items-center">
											<div class="btn-group">
												<button type="button" class="btn btn-sm btn-outline-secondary">View</button>
												<button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
											</div>
											<small class="text-muted">9 mins</small>
										</div>
									</div>
								</div>
							</div>
						`
					}).join("")
					$(".row").html(html);
				})
				
				new Promise((resolve, reject) => {
					$.ajax({
						url: "http://localhost:12345/middleWare",
						success(data) {
							resolve(data);
						}
					})
				}).then((data)=>{
					console.log(data);
				})
			})
		}
	})
})