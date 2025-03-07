<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Entendiendo el concepto y la naturaleza de la carga
        
      .row.justify-content-center.align-items-center.mb-5
        .col-sm-4.col-md-4.col-lg-1
          img(src='@/assets/curso/temas/t1/ico1.png', alt='')
        .col-sm-12.col-md-12.col-lg-11
          p Entender el concepto y la naturaleza de la carga,  implica comprender qué es la carga y las características que la definen. El concepto hace referencia a los bienes o mercancías que se transportan de un lugar a otro, utilizando diversos medios de transporte. Por otro lado, la naturaleza de la carga se refiere a las propiedades específicas de los productos, como su tamaño, peso, fragilidad o requerimientos especiales. Este entendimiento es clave para optimizar los procesos de manejo, almacenamiento y traslado, garantizando la seguridad y eficiencia en la cadena logística. 

      mb-4.d-flex.ps-lg-0
        .d-flex.flex-wrap.align-items-center.pe-3.bg-img-gris
          h3.col.px-4.mb-0.text-black.bg-img-gris(data-aos="zoom-in-left") Clasificación de las cargas en función de su naturaleza y características
          img.icon(src='@/assets/curso/temas/icono.svg') 



  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
