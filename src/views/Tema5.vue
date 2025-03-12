<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Métodos y técnicas de extracción de objetos

    .row.align-items-center.justify-content-center.mb-4
      .col-sm-10.col-md-10.col-lg-5
        img(src='@/assets/curso/temas/t5/img1.png', alt='')
      .col-sm-12.col-md-12.col-lg-7
        .row.bggris.px-5.py-3.mb-4
          ul.lista-ul--color.fa-al
            li 
              i.fas.fa-shopping-cart
              span.mb-0 #[b Manual:] cargue y descargue, carretillas, gatos hidráulicos.
            li 
              i.fas.fa-shopping-cart
              span.mb-0 #[b Mecanizado:] utilización de montacargas, bandas transportadoras.
            li 
              i.fas.fa-shopping-cart
              span.mb-0 #[b Automatizado:] sistemas neumáticos.
        .row.align-items-center.justify-content-center
          .col-6.col-md-2.col-lg-2
            img(src='@/assets/curso/temas/t5/ico1.png', alt='')
          .col-sm-10.col-md-10.col-lg-10
            p En los centros de distribución, la preparación de los pedidos implica la planificación y coordinación de diversas actividades, como alistamiento, acondicionamiento, cargue y descargue, entre otras.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/t5/img2.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p El sistema de recogida debe estar diseñado para cumplir con los objetivos del centro de distribución, lo cual incluye garantizar una respuesta eficiente al cliente y el control de costos. Esto requiere optimización del tiempo, gestión efectiva del personal y los equipos, así como un manejo adecuado de la información. La preparación de los pedidos comienza con la clasificación y agrupación de los pedidos recibidos de los clientes, y con la determinación de cómo deben ser preparados para su despacho.
            br
            br
            p En cuanto a la extracción de mercancías, se pueden adoptar dos enfoques: permitir que el operario se desplace hacia los productos, o bien, transportar los productos hacia los operarios, quienes permanecerán en un lugar fijo.

    p.mb-4 Dentro del almacén, se diseñan actividades secuenciales y lógicas para responder eficazmente a los pedidos de los clientes. La extracción de los productos, conforme a las solicitudes de los clientes, se organiza mediante rutas de reparto, zonas geográficas y empresas de transporte.

    .row.align-items-center.justify-content-center.mb-4
      .col-sm-12.col-md-12.col-lg-5
        .row.bgsecundario.px-5.py-4.mb-4
          h4.bgacentocontenido.p-2.mt-4 La preparación de pedidos incluye las siguientes operaciones:
          ul.lista-ul--color.fa-al.mt-2
            li.mb-0
              i.fas.fa-shopping-cart
              span.mb-0 Recopilación de pedidos (captura de datos).
            li.mb-0 
              i.fas.fa-shopping-cart
              span.mb-0 Gestión de los pedidos (sistema de preparación).
            li.mb-0
              i.fas.fa-shopping-cart
              span.mb-0 Elaboración de los documentos de preparación.
            li.mb-0 
              i.fas.fa-shopping-cart
              span.mb-0 Extracción (#[em picking]).
            li.mb-0
              i.fas.fa-shopping-cart
              span.mb-0 Traslado a la zona de expedición.
            li 
              i.fas.fa-shopping-cart
              span.mb-0 Verificación y acondicionamiento de los pedidos.
      .col-3.col-md-6.col-lg-3
        img(src='@/assets/curso/temas/t5/img3.png', alt='')
      .col-sm-12.col-md-12.col-lg-4
        .row
          .col-6.col-md-3.col-lg-3
            img(src='@/assets/curso/temas/t5/ico2.png', alt='')
        .row.align-items-center.justify-content-center
            p #[b Las mercancías pasan por diversas manipulaciones antes de ser entregadas al cliente o enviadas al punto de venta, a continuación se muestra el proceso:]
            ul.lista-ul--color.fa-al
              li.mb-0 
                i.fas.fa-shopping-cart
                span.mb-0 #[em Picking].
              li.mb-0 
                i.fas.fa-shopping-cart
                span.mb-0 Embalaje, etiquetado y pesado.
              li.mb-0 
                i.fas.fa-shopping-cart
                span.mb-0 Consolidación del pedido.
              li.mb-0 
                i.fas.fa-shopping-cart
                span.mb-0 Traslado a la zona de expedición.
              li.mb-0 
                i.fas.fa-shopping-cart
                span.mb-0 Agrupación por destinos.
              li.mb-0 
                i.fas.fa-shopping-cart
                span.mb-0 Verificación.

    p #[b En cuanto a las técnicas de rotulado, se distinguen las siguientes:]

    .row.justify-content-center(data-aos="fade-down") 
        .col-sm-6.col-xl-4.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5
                h4.text-center.bgprimario Manual
                p.text-center Es realizada por el operario encargado de la tarea, quien se encarga de preparar el tipo de rótulo adecuado para cada producto.
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t5/tar1-1.png')})`}")
        .col-sm-6.col-xl-4.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5
                h4.text-center.bgprimario Mecánica
                p.text-center Funciona a través de un programa que permite ajustar la velocidad de etiquetado, codificación o rotulación, así como modificar el tamaño del rótulo según lo que se desee indicar en el empaque del producto. 
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t5/tar1-2.png')})`}")


</template>

<script>
export default {
  name: 'Tema5',
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
