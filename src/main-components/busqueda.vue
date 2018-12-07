<template>
<div class="row">
	<div class="col-sm-12">
		<h2>Busca un servidor público</h2>
		<form v-on:submit.prevent="search(0)">
			<div class="row">
				<div class="col-sm-3">
					<p>
						Nombres
						<input type="text" class="pdn_input" name="names" v-model="names">
					</p>
				</div>
				<div class="col-sm-3">
					<p>
						Primer apellido
						<input type="text" class="pdn_input" name="surname-a" v-model="surnameA">
					</p>
				</div>
				<div class="col-sm-3">
					<p>
						Oficina
						<input type="text" class="pdn_input" name="office" v-model="office">
					</p>
				</div>
				<div class="col-sm-3">
					<p><input type="submit" class="pdn_input" name="submit" value="buscar"></p>
				</div>
			</div>
		</form>

		<table v-if="response && response.results.length">
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
						<a :href="`/perfil/${compa._id}/informacion`">
					    {{compa.informacion_personal.informacion_general.nombres}}
					    {{compa.informacion_personal.informacion_general.primer_apellido}}
					    {{compa.informacion_personal.informacion_general.segundo_apellido}}
					  </a>
					</td>
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

			<ul v-if="total">
				<li v-for="n in pages">
				  <a href="#" v-on:click.prevent="search(n-1)">{{n}}</a>
			  </li>
			</ul>
		</table>

		<p v-if="response && !response.results.length">No hubo resultados :(</p>
	</div>
</div>
</template>

<script>
	export default {
		data(){
			return {
				names    : "",
				surnameA : "",
				surnameB : "",
				//location : "",
				office   : "",
				response : null,
				pageSize : 20,
				page     : 0, 
				total    : 0
			}
		},
		methods : {
			search(page){
				this.page     = page;
				let connObj   = Object.assign({}, this.fetchObj);
				connObj.body  = this.makeQuery();

				fetch(this.endpoint, connObj)
				  .then(response => response.json())
				  .then(d => { 
				  	this.response = d;
				  	this.total    = d.total;

				  	console.log("la respuesta completa: ", this.response);
				  	console.log("un usuario: ", this.response.results[0]); 
				  });
			},

			makeQuery(){
				let searchObj   = {query : {}};
				searchObj.limit = this.pageSize;
				searchObj.skip  = this.page * this.pageSize;

				if(this.names) searchObj.query[this.nameKeys.nombres] = this.names;
				if(this.surnameA) searchObj.query[this.nameKeys.apellido1] = this.surnameA;
				if(this.office) searchObj.query[this.nameKeys.institucionResponsable] = this.office;
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
			pages(){
				if(!this.total) return 0;
				return Math.ceil(this.total / this.pageSize);
			}
		}
	}
</script>

