/*
	////////////////////////////////////////////////////////////////////////////////
  //
  // CARGA LAS DEPENDENCIAS
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
import React, {Component} from "react";
import { Switch, Route } from 'react-router-dom';
import {Grid, IconButton,Button,MenuItem, Menu, withStyles, Toolbar, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import Busqueda from './Busqueda';
import Stats from './Stats';
// import Perfil from './Perfil';
import PerfilMaterialUI from './PerfilMaterialUI';


let styles = theme => ({
	grow: {
			flexGrow: 1,
	},
    item: {
        maxWidth: 1200
  },
	menuBtn: {
        textTransform: "none"
  }
});


/*
	////////////////////////////////////////////////////////////////////////////////
  //
  // DEFINE LA CLASE PRINCIPAL
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
class Container extends Component{
	/*
	 * C O N S T R U C T O R
	 * ----------------------------------------------------------------------
	 */
	constructor(props){
		super(props);

		//
		// THE STATE
		//
		this.state = {
			isProfile : false,
			profile : {}
		}
	};

	//menu

    handleChange = event => {
        this.setState({ auth: event.target.checked });
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

	/*
	 * R E N D E R
	 * ----------------------------------------------------------------------
	 */
  render(){
		let {classes} = this.props;
  	let show = this.props.location.pathname === "/";
		let { anchorEl } = this.state;
    let open = Boolean(anchorEl);
  	return(
  	  <div id="react-app">
			<Grid container spacing={0} justify="center">
				<Grid item xs={12} className={classes.item}>
					<Toolbar>
						<IconButton color="inherit" aria-label="Menu" component={Button} href="https://plataformadigitalnacional.org/" style={{ paddingTop: '45px', paddingBottom: '40px' }}>
							<h1 className="pdn_l" style={{ width:'110px'}}>Plataforma Digital Nacional</h1>
						</IconButton>
														<Typography variant="h6" color="inherit" className={classes.grow}>

                                </Typography>
																	<IconButton
																			aria-owns={open ? 'menu-appbar' : undefined}
																			aria-haspopup="true"
																			onClick={this.handleMenu}
																			color="inherit"
																	>
																			<MenuIcon style={{ fill: '#999', fontSize: '36px'}}/>
																	</IconButton>
																	<Menu
																			id="menu-appbar"
																			anchorEl={anchorEl}
																			anchorOrigin={{
																					vertical: 'top',
																					horizontal: 'right',
																			}}
																			transformOrigin={{
																					vertical: 'top',
																					horizontal: 'right',
																			}}
																			open={open}
																			onClose={this.handleClose}
																	>

																			<MenuItem component={Button}
																								href= "https://www.plataformadigitalnacional.org/blog"
																								className={classes.menuBtn}
																			>Blog</MenuItem>
																			<MenuItem component={Button}
																				href="https://plataformadigitalnacional.org/faq"
																				className={classes.menuBtn}>
																				Preguntas frecuentes</MenuItem>
																			<MenuItem component={Button}
																				href="https://plataformadigitalnacional.org/about"
																				className={classes.menuBtn}>
																				¿Qué es la PDN?</MenuItem>
																			<MenuItem component={Button}
																					href="https://plataformadigitalnacional.org/faq"
																					className={classes.menuBtn}>
																				Preguntas frecuentes</MenuItem>
																			<MenuItem component={Button}
																				href="https://plataformadigitalnacional.org/terminos"
																				className={classes.menuBtn}>
																			Términos de uso</MenuItem>
																	</Menu>
							</Toolbar>
						</Grid>
				</Grid>
  		  <div className="breadcrumb">
  		    <div className="container">
  		      <Grid container spacing={24}>
  		        <Grid item sm={12}>
  		          {this.breadcrumb()}
  		        </Grid>
  		      </Grid>
  		    </div>
  		  </div>


				<div style={ {display : (show ? "block" : "none")} }>
  				<div className="pdn_b_title">
						<div className="container">
					  	<Grid container justify="center" spacing={24}>
							  <Grid item xs={11} sm={2} style={{zIndex : 1}}>
								  <img alt="logo" src={`${process.env.PUBLIC_URL}/img/1_icono.svg`} width="150px" />
							  </Grid>
							  <Grid item xs={11} sm={6} style={{zIndex : 1}}>
								  <h1><strong>Declaraciones</strong></h1>
								  <p>Consulta, visualiza y descarga los datos de las declaraciones patrimoniales,
								  de intereses y las constancias de la declaración fiscal de los servidores públicos.</p>
							  </Grid>
							</Grid>
						</div>
		  		</div>
				</div>
				{/* <!--ends show --> */}
				{/* <!--section nav--> */}
				<section className="pdn_sis_nav">
					<div className="container">
						<Grid container spacing={24}>
							<Grid item sm={12}>
							<ul className="pdn_cont_nav">
								<li className="current">
									<a href={`${process.env.PUBLIC_URL}/`}>
										<figure><img src={`${process.env.PUBLIC_URL}/img/servidores_declaraciones.svg`} width="60px" alt="" /></figure>
										Buscar un servidor público
									</a>
								</li>
								<li><a href={`${process.env.PUBLIC_URL}/estadistica/edad`}><figure><img src={`${process.env.PUBLIC_URL}/img/estadisticas.svg`} width="60px" alt="" /></figure>Estadísticas</a></li>
							</ul>
							</Grid>
						</Grid>
					</div>
				</section>

			{/* <!--section pdn_m--> */}
		  <section className="pdn_m">
			  <div className="container">
				  <Switch>
				    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Busqueda}/>
				    <Route path={`${process.env.PUBLIC_URL}/perfil/:id/:section/:subsection?`} component={PerfilMaterialUI}/>
				    <Route path={`${process.env.PUBLIC_URL}/estadistica/:section`} component={Stats}/>
				  </Switch>
			  </div>
		  </section>
		  </div>
  	);
  }

  /*
	 * O T H E R   T E M P L A T E S
	 * ----------------------------------------------------------------------
	 */

	/*
	/  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
	/
	/  El breadcrumb
	/
	/  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
	*/
	breadcrumb(){
		if(this.state.isProfile){
			let amigo = this.state.profile.informacion_personal.informacion_general;
			return(
				<ul>
  		    <li><a href="https://plataformadigitalnacional.org/">Plataforma Digital Nacional</a></li>
  		    <li>{amigo.nombres}
  		        {amigo.primer_apellido}
  		        {amigo.segundo_apellido}
  		    </li>
  		  </ul>
			);
		}

		return(
			<ul>
			  <li><a href="https://plataformadigitalnacional.org/">Plataforma Digital Nacional</a></li>
				<li v-if="isProfile"><a href={process.env.PUBLIC_URL}>Declaraciones</a></li>
			</ul>
		);
	}
}

/*
	////////////////////////////////////////////////////////////////////////////////
  //
  // REGRESA EL COMPONENTE
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
export default withStyles(styles)(Container);
