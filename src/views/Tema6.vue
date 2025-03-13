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

    p Las áreas de despacho o entrega de mercancía están determinadas por la naturaleza del producto y la infraestructura de la organización, al igual que las áreas de recepción. Es fundamental que la empresa solicite información precisa sobre el lugar de entrega, ya que en algunas organizaciones existen diferentes puntos de recepción, a continuación se describen las áreas de despacho: 

    .row.align-items-center.mb-4(data-aos="fade-down")

      .col-lg-4.col-md-7.col-9
        img(src='@/assets/curso/temas/t6/img2.png', alt='')

      .col-lg-8.col-md-12.col-12.px-lg-5.px-4
            SlyderF.custom(columnas="col-lg-6 col-md-6 col-xl-6")
              .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
                .row.justify-content-center.mb-3
                  .col-8.my-2
                    img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/temas/t6/tar1-1.png' alt='AvatarTop')
                .bgprimario.p-2.mb-4
                  h4.text-center.mb-0 Oficina de despacho
                p.mb-0.text-center(data-aos="fade-right") Es el espacio designado para llevar a cabo las actividades administrativas relacionadas con el despacho de mercancías.     
              .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
                .row.justify-content-center.mb-3
                  .col-8.my-2
                    img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/temas/t6/tar1-2.png' alt='AvatarTop')
                .bgprimario.p-2.mb-4
                  h4.text-center.mb-0 Muelles de carga
                p.mb-0.text-center(data-aos="fade-right") Son las áreas destinadas para el cargue y descarga de los vehículos.   
              .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
                .row.justify-content-center.mb-3
                  .col-8.my-2
                    img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/temas/t6/tar1-3.png' alt='AvatarTop')
                .bgprimario.p-2.mb-4
                  h4.text-center.mb-0 Área de alistamiento o preparación (#[em Picking]) 
                p.mb-0.text-center(data-aos="fade-right") Es el espacio destinado a la preparación de los pedidos que deben ser despachados, considerando las unidades, cajas o productos a granel según corresponda.  
              .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
                .row.justify-content-center.mb-3
                  .col-8.my-2
                    img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/temas/t6/tar1-4.png' alt='AvatarTop')
                .bgprimario.p-2.mb-4
                  h4.text-center.mb-0 Área de verificación y salida
                p.mb-0.text-center(data-aos="fade-right") Es el espacio donde se consolidan las mercancías, se verifican las referencias y cantidades, y, una vez confirmados, se procede al empaque, utilizando materiales adecuados según la naturaleza de los productos y el medio de transporte.


    .etiqueta.sub8.p-2.d-flex.mb-4(data-aos="fade-left")
      h3.mb-0.ps-5.pe-5 Procedimiento de despacho de objetos

    p.mb-4 Al igual que en el proceso de recepción de mercancía, el procedimiento de despacho está determinado por la naturaleza y el tipo de carga. En términos generales, el proceso sigue los siguientes pasos:

    .row.align-items-center.justify-content-center.fondotema61.mb-4
      .col-sm-12.col-md-12.col-lg-10
        PasosA.color-acento-contenido.mb-0(tipo="l")
          .row.align-items-center.justify-content-center
            .col-lg
              h3 Recepción del pedido
              p.mb-0 Se verifica que el documento contenga toda la información necesaria para llevar a cabo el despacho de manera correcta.
            .col-auto
              figure(data-aos="zoom-in")
                img.d-none.d-lg-block(src='@/assets/curso/temas/t6/ps1-1.png', alt='')
          .row.align-items-center.justify-content-center
            .col-auto
              figure(data-aos="zoom-in")
                img.d-none.d-lg-block(src='@/assets/curso/temas/t6/ps1-2.png', alt='')
            .col-lg
              h3 Verificación en el sistema de inventarios
              p Se confirma que las referencias y cantidades estén disponibles en el inventario para ser entregadas.
          .row.align-items-center.justify-content-center
            .col-lg
              h3 Programación del despacho
              p.mb-0 Se organiza el despacho según la ciudad de destino y el medio de transporte elegido, asegurando la correcta planificación de los tiempos y rutas.
            .col-auto
              figure(data-aos="zoom-in")
                img.d-none.d-lg-block(src='@/assets/curso/temas/t6/ps1-3.png', alt='')
          .row.align-items-center.justify-content-center
            .col-auto
              figure(data-aos="zoom-in")
                img.d-none.d-lg-block(src='@/assets/curso/temas/t6/ps1-4.png', alt='')
            .col-lg
              h3 Preparación del pedido (#[em Picking])
              p Se realiza la preparación de los pedidos solicitados, unificando los distintos pedidos si es necesario, y asegurando la correcta documentación, referencias y cantidades solicitadas.
          .row.align-items-center.justify-content-center
            .col-lg
              h3 Trasladar los productos
              p.mb-0 A la zona de alistamiento para su despacho o zona de #[em picking].
            .col-auto
              figure(data-aos="zoom-in")
                img.d-none.d-lg-block(src='@/assets/curso/temas/t6/ps1-5.png', alt='')
          .row.align-items-center.justify-content-center
            .col-auto
              figure(data-aos="zoom-in")
                img.d-none.d-lg-block(src='@/assets/curso/temas/t6/ps1-6.png', alt='')
            .col-lg
              h3 Realizar el acondicionamiento final de los pedidos
              p Lo cual incluye una nueva verificación de los mismos.
          .row.align-items-center.justify-content-center
            .col-lg
              h3 Coordinar el envío de la mercancía
              p.mb-0 Ya sea mediante transporte propio, transporte del cliente o una empresa transportadora.
            .col-auto
              figure(data-aos="zoom-in")
                img.d-none.d-lg-block(src='@/assets/curso/temas/t6/ps1-7.png', alt='')
          .row.align-items-center.justify-content-center
            .col-auto
              figure(data-aos="zoom-in")
                img.d-none.d-lg-block(src='@/assets/curso/temas/t6/ps1-8.png', alt='')
            .col-lg
              h3 Identificar el pedido del cliente
              p Mediante un rótulo y asegurarse de que todos los documentos necesarios para la entrega de la mercancía estén listos.
          .row.align-items-center.justify-content-center
            .col-lg
              h3 Al recibir el vehículo para el cargue
              p.mb-0 Verificar que cumpla con las condiciones necesarias, de acuerdo con las especificaciones para el cargue y traslado de los productos.
            .col-auto
              figure(data-aos="zoom-in")
                img.d-none.d-lg-block(src='@/assets/curso/temas/t6/ps1-9.png', alt='')
          .row.align-items-center.justify-content-center
            .col-auto
              figure(data-aos="zoom-in")
                img.d-none.d-lg-block(src='@/assets/curso/temas/t6/ps1-10.png', alt='')
            .col-lg
              h3 Realizar el cargue de los productos en el vehículo de forma adecuada. 
          .row.align-items-center.justify-content-center
            .col-lg
              h3 Mantener una comunicación constante 
              p.mb-0 Con el transportista para garantizar la correcta entrega del producto. Este proceso se denomina trazabilidad.
            .col-auto
              figure(data-aos="zoom-in")
                img.d-none.d-lg-block(src='@/assets/curso/temas/t6/ps1-11.png', alt='')

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
