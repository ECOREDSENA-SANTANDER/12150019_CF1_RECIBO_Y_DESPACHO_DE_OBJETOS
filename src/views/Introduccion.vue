<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center
      .col-sm-12.col-md-12.col-lg-7
        p El proceso de recepción y despacho de productos ha adquirido una relevancia significativa, requiriendo una atención minuciosa por parte de todas las personas involucradas. Esta importancia radica en la gestión adecuada de la información y el manejo preciso de los productos recibidos. Más allá de la simple verificación de cantidades, existe una fase crucial que antecede a las actividades de recibo y despacho: el alistamiento de las áreas físicas destinadas para ello.
        .cajon.color-acento-contenido.p-4.mb-4
          p Es fundamental considerar diversos factores clave, como el tipo de producto a recibir, sus características específicas, la manera en que debe movilizarse la mercancía y la cantidad involucrada, para garantizar un proceso eficiente y eficaz. 
      .col-sm-12.col-md-12.col-lg-5
        img(src='@/assets/curso/temas/introduccion.png', alt='')
    
    .row.fondo1.justify-content-center.align-items-center           
      .col-sm-12.col-md-12.col-lg-10.mt-4
        figure
          .video
            iframe.borde-redondo(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
