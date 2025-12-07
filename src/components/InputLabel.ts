export default `<div class="inputLabelWrapper">
  <label for="{{id}}" class="label">{{label}}</label>
  {{> Input name=this.name id=this.id type=this.type placeholder=this.placeholder value=this.value class="inputLabel"}}
  <p class="inputError">{{error}}</p>
</div>`;
