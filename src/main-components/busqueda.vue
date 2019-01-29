<template>
<div class="row">
	<div class="col-sm-12">
		<h2>Busca un servidor público</h2>
		<form v-on:submit.prevent="search(0)">
			<div class="row">
				<div class="col-sm-4">
					<p>
						Nombres
						<input type="text" class="pdn_input" name="names" v-model="names">
					</p>
				</div>
				<div class="col-sm-4">
					<p>
						Primer apellido
						<input type="text" class="pdn_input" name="surname-a" v-model="surnameA">
					</p>
				</div>
				<div class="col-sm-4">
					<p>
						Oficina
						<selectize v-model="office" :settings="settings">
							<option v-for="office in offices" :value="office">{{office}}</option>
						</selectize>
					</p>
				</div>

				<div class="col-sm-8">
					<div class="row">
						<div class="col-sm-3">
							<p>Nivel de gobierno:</p>
						</div>
						<div class="col-sm-9">
							<div class="row">
								<div class="col-sm-3">

									<p>
										<label>
										  <input type="radio" name="nivel" value="" v-model="level">Todos
									  </label>
									</p>
								</div>
								<div class="col-sm-3">
									<p>
										<label>
										  <input type="radio" name="nivel" value="FED" v-model="level">Federal
									  </label>
									</p>
								</div>
								<div class="col-sm-3">
									<p>
										<label>
										  <input type="radio" name="nivel" value="EST" v-model="level">Estatal
									  </label>
									</p>
								</div>
								<div class="col-sm-3">
									<p>
										<label>
										  <input type="radio" name="nivel" value="MUN" v-model="level">Municipal
									  </label>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-sm-4">
					<p><input type="submit" class="pdn_input" name="submit" value="buscar"></p>
				</div>
			</div>
		</form>

		<table v-if="response && response.results.length" class="table">
			<thead>
				<tr>
					<th>nombre</th>
					<th>oficina</th>
					<th>cargo</th>
					<th>estado</th>
					<th>municipio</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="compa in response.results">
					<td>
						<a :href="`${base_url}/perfil/${compa._id}/informacion`">
					    {{compa.informacion_personal.informacion_general.nombres}}
					    {{compa.informacion_personal.informacion_general.primer_apellido}}
					    {{compa.informacion_personal.informacion_general.segundo_apellido}}
					  </a>
					</td>
<!--
					<td>
					  {{compa.metadatos.institucion_responsable}}
				  </td>
					-->
					<td>
					  {{compa.informacion_personal.datos_encargo_actual.ente_publico}}
				  </td>


					<td>
					  {{compa.informacion_personal.datos_encargo_actual.empleo_cargo_comision}}
				  </td>


					<td>
					{{compa.informacion_personal.datos_encargo_actual.direccion_encargo.entidad_federativa.nom_ent}}</td>
					<td>
					{{compa.informacion_personal.datos_encargo_actual.direccion_encargo.municipio.nom_mun}}</td>
				</tr>
			</tbody>


			<!-- paginación -->
			<ul v-if="total && pages > 1">
				<li v-if="page>0">
					<a href="#" v-on:click.prevent="search(page-1)">anterior</a>
				</li>
				<!--
				<li v-for="n in pages">
				  <a href="#" v-on:click.prevent="search(n-1)">{{n}}</a>
			  </li>
			-->
			  <li>
			  	<form v-on:submit.prevent="search(null)">
			  		<p>
			  			<input id="page-select" type="number" min="1" step="1" :value="page+1">
			  			 / {{pages}}
			  		</p>
			  	</form>
			  </li>
			  <li v-if="page < pages-1">
			  	<a href="#" v-on:click.prevent="search(page+1)">siguiente</a>
			  </li>
			</ul>
		</table>

		<p v-if="response && !response.results.length">No hubo resultados :(</p>
	</div>
</div>
</template>

<script>
	import VueNumeric from 'vue-numeric';
	import Selectize from 'vue2-selectize';

	export default {
		components: {
      VueNumeric,
      Selectize
    },
		data(){
			return {
				names    : "",
				surnameA : "",
				surnameB : "",
				//location : "",
				office   : "",
				level    : "",
				response : null,
				pageSize : 20,
				page     : 0,
				total    : 0,
				settings : {}
			}
		},
		methods : {
			search(page){
				if(page == null){
					let p = Number(document.querySelector("#page-select").value);
					if(p && p-1 < this.pages){
						this.page = p-1;
					}
					else{
						document.querySelector("#page-select").value = this.page+1;
						return;
					}
				}
				else{
					this.page = page;
				}
				let connObj   = Object.assign({}, this.fetchObj);
				connObj.body  = this.makeQuery();

				fetch(this.endpoint, connObj)
				  .then(response => response.json())
				  .then(d => {
				  	this.response = d;
				  	this.total    = d.total;
				  	console.log("la respuesta completa: ", this.response);
				  	console.log("un usuario: ", this.response.results[0]);
				  	//console.log("nivel: ", this.response.results.map(d => d.informacion_personal.datos_encargo_actual.nivel_gobierno.codigo));
				  });
			},

			makeQuery(){
				let searchObj   = {query : {}};
				searchObj.limit = this.pageSize;
				searchObj.skip  = this.page * this.pageSize;

				if(this.names) searchObj.query[this.nameKeys.nombres] = this.names;
				if(this.surnameA) searchObj.query[this.nameKeys.apellido1] = this.surnameA;
				if(this.office) searchObj.query[this.nameKeys.ente] = this.office;
				if(this.level) searchObj.query[this.nameKeys.nivelGobierno] = this.level;

				console.log("office: ", this.office);
				return JSON.stringify(searchObj);
			}
		},
		computed : {
			endpoint(){
				return this.$parent.endpoint;
			},
			nameKeys(){
				return this.$parent.names;
			},
			fetchObj(){
				return this.$parent.fetchObj;
			},
			offices(){
				return this.$parent.offices;
			},
			base_url(){
				return this.$parent.base;
			},
			pages(){
				if(!this.total) return 0;
				return Math.ceil(this.total / this.pageSize);
			}
		}
	}
</script>

<style scoped>
	@import "~selectize/dist/css/selectize.bootstrap3.css";
</style>
