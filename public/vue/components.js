Vue.component('box',{
    props: ['title','text1','text2','text3', 'link', 'linktext'],
    template: `<div class="card mb-4 shadow-sm">
    <div class="card-header">
    <h4 class="my-0 font-weight-normal">{{ title}}</h4>
</div>
<div class="card-body">

    <ul class="list-unstyled mt-3 mb-4">
    <br>
<li>{{ text1 }}</li>
<li>{{ text2 }}</li>
<li>{{ text3 }}</li>
<br><br>

</ul>

<a v-bind:href="link"><button type="button" class="btn btn-lg btn-block btn-primary">{{ linktext}}</button></a>
</div>
</div>`
});

window.onload = function() {
    var main = new Vue({
        el: '#app'
    })
};





