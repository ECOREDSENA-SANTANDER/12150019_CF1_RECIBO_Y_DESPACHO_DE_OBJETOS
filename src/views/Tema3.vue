<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Características de objetos

    .row.align-items-end.justify-content-center.mb-5
      .col-sm-12.col-md-12.col-lg-5
        .row.bggris
          p.p-4 Todos los productos cuentan con una serie de características específicas que influyen en su manipulación y traslado, estos factores son fundamentales durante los procesos de recepción, manejo y despacho. Además, según el tipo de producto, se requieren empaques y embalajes especializados que aseguren la protección de sus propiedades físicas y químicas, garantizando así su integridad a lo largo de toda la cadena de suministro.
      .col-6.col-md-6.col-lg-3
        img(src='@/assets/curso/temas/t3/img1.png', alt='')
      .col-sm-12.col-md-12.col-lg-4
        .row.align-items-center
          .col-3
            img(src='@/assets/curso/temas/t3/ico1.png', alt='')
        .row.mt-3
          p Este ajuste mejora la claridad y la estructura, manteniendo el enfoque en la importancia de un manejo adecuado según las características del producto.

    .row.fondotema31.align-items-center.p-4.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center

          .tarjeta.tarjeta--blanca.p-4.py-3(data-aos="fade-down")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-sm-12.col-md-12.col-lg-7
                  h3.mt-4 Características físicas
                  p.mb-4 Son fundamentales para garantizar su adecuada manipulación, almacenamiento y transporte. Entre las principales características a tener en cuenta se encuentran:
                  p.mb-4 #[b Peso:] el peso de un objeto determina los procedimientos y equipos necesarios para su manipulación, carga, descarga y despacho. Dependiendo del peso, se deben establecer las normas de seguridad para evitar lesiones y daños, tanto en el personal como en los productos. También influye en la capacidad de almacenamiento, ya que los objetos más pesados requieren estructuras de estanterías o sistemas de carga específicos para soportar su peso.
                  p #[b Material:] el material con el que están fabricados los productos influye directamente en la forma en que deben ser tratados. Algunos materiales requieren cuidados especiales para evitar daños durante su manipulación, como el vidrio, que es frágil y puede romperse fácilmente, o el acero, que es más resistente pero puede ser susceptible a la corrosión. Además, el tipo de material puede influir en la forma en que se deben empaquetar, almacenar y transportar los productos, considerando factores como la temperatura, la humedad y la exposición a sustancias corrosivas.
                .col-6.col-md-6.col-lg-4
                  img.mt-5(src='@/assets/curso/temas/t3/sly1-1.png' alt='')
              .row.justify-content-center.align-items-center
                .col-sm-12.col-md-12.col-lg-7
                  h3.mt-4.mb-4 Características químicas
                  .cajon.color-acento-contenido.p-4.mb-4
                    p Las características químicas de los productos son tan cruciales como sus propiedades físicas en los procesos de recepción y despacho. 
                  p.mb-4 Es fundamental considerar aspectos adicionales como la corrosión, la fermentación, la combustión y la inflamabilidad, ya que estos factores pueden influir de manera significativa en la seguridad y en la calidad del manejo de los productos. Según las condiciones químicas de cada material, es necesario establecer parámetros específicos para su almacenamiento, transporte y manipulación. Además, resulta indispensable proporcionar formación adecuada al personal que maneja directamente los productos, asegurando que estén capacitados para reconocer y prevenir riesgos asociados a las reacciones químicas que puedan presentarse. Esta capacitación no solo optimiza la seguridad, sino que también minimiza posibles pérdidas o daños durante todo el ciclo logístico.
                .col-6.col-md-6.col-lg-4
                  img.mt-5(src='@/assets/curso/temas/t3/sly1-2.png' alt='')
              .row.justify-content-center.align-items-center
                .col-sm-12.col-md-12.col-lg-7
                  h3.mt-4.mb-4 Tipos de equipos de movilización de objetos
                  p.mb-4 El proceso de recepción y despacho de mercancías no solo abarca la documentación y la verificación de cantidades y condiciones de los productos, sino que también implica la utilización de equipos especializados que facilitan su manejo. Estos equipos permiten a los trabajadores que tienen contacto directo con la mercancía realizar su manipulación de manera eficiente y segura, tanto para las personas involucradas como para los productos mismos.
                  p.mb-4 Los equipos de movilización son herramientas o dispositivos diseñados para el traslado y manejo de mercancías dentro y fuera de las bodegas o áreas de almacenamiento. Estos equipos son fundamentales para garantizar una operación segura y ágil en el proceso logístico.
                .col-6.col-md-6.col-lg-4
                  img.mt-5(src='@/assets/curso/temas/t3/sly1-3.png' alt='')
              .row.justify-content-center.align-items-center
                .col-sm-12.col-md-12.col-lg-11
                  h3.mt-4.mb-4 Tipos de equipos de movilización
                  p.mb-4 Los equipos de movilización varían en función del producto a manipular, las cantidades involucradas y su uso específico, ya sea interno o destinado al cargue, alistamiento y descargue de objetos. Existen varios tipos de equipos, entre los cuales se destacan aquellos con movimiento y sin traslado.
                  img.mt-5(src='@/assets/curso/temas/t3/sly1-4.png' alt='')

    p.mb-4.mt-5 A continuación, se describen los más representativos:

    Separador  
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.1 Bandas transportadoras


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
