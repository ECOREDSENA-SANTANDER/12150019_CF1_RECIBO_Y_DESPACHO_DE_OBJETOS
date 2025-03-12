<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Concepto de Despacho

    .row.align-items-end.justify-content-center.mb-4
      .col-sm-12.col-md-12.col-lg-4
        .row.align-items-center
          .col-auto
            img(src='@/assets/curso/temas/t6/ico1.png', alt='')
        .row.mt-3
          p El despacho es el proceso de alistamiento y preparación de productos para ser cargados o entregados al cliente, según los documentos proporcionados por el departamento de ventas, que detallan la referencia, cantidad y datos generales del cliente.
      .col-6.col-md-6.col-lg-3
        img(src='@/assets/curso/temas/t6/img1.png', alt='')
      .col-sm-12.col-md-12.col-lg-5
        .row.bgsecundario
          p.mt-3 #[b Características:]
          ol.lista-ol--cuadro.lista-ol-.fa-ol
            li
              .lista-ol--cuadro__vineta
                span.text-black #[b a]
              span.mb-0 Esta operación se lleva a cabo una vez se recibe la orden de pedido del cliente.
            li
              .lista-ol--cuadro__vineta
                span.text-black #[b b]
              span.mb-0 Puede incluir o no la facturación, dependiendo de la disponibilidad física de los productos.
            li
              .lista-ol--cuadro__vineta
                span.text-black #[b c]
              span.mb-0 Es necesario contar con el equipo humano y los medios de transporte adecuados, según las características de los productos a despachar.

    .etiqueta.sub7.p-2.d-flex.mb-4(data-aos="fade-left")
      h3.mb-0.ps-5.pe-5 Áreas de despacho




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
