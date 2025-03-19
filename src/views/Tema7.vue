<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Preparación y organización de áreas para recibo y despacho

    .row.align-items-center.justify-content-center.mb-4
      .col-4.col-md-2.col-lg-1
        img(src='@/assets/curso/temas/t7/ico1.png', alt='')
      .col-sm-12.col-md-12.col-lg-11
        p Es fundamental considerar que el proceso de recepción y despacho varía según el tipo de producto y su empaque. Dependiendo de las características del empaque, se requiere el uso de equipos específicos para la movilización, tales como estibas o paletas, así como tanques para almacenar productos a granel (líquidos o sólidos). Además, es importante destacar que las empresas diseñan sus espacios logísticos según sus necesidades particulares.

    .row.align-items-center.mb-5.subt(data-aos="fade-right")
      .col-auto.ico
        img(src='@/assets/curso/temas/subt.svg', alt='')
      .col
        h3.mb-0.p-1.px-3 Características de las áreas de recibido

    p.mb-4 Existen múltiples características a tener en cuenta, ya que, como se ha mencionado a lo largo del material, todo depende de la naturaleza del producto y de la infraestructura disponible. A continuación, se mencionan algunos aspectos clave a considerar para diferentes tipos de productos.
    
    .subt-2.px-5.py-1.mb-4(data-aos='fade')
      h4.mb-0 Aspectos claves a considerar en el área de recibo de mercancías

    .tarjeta--container.row.mb-5
        .col-md.tarjeta.color-secundario.p-4.p-md-4.p-lg-5(data-aos="fade-right")
          .row.justify-content-center.mb-4
            .col-12
              .row.align-items-end
                .col-lg-3.mb-4
                  img.img-a.img-t(src='@/assets/curso/temas/t7/tar1-1.png', alt='Imagen decorativa.')
                .col-lg-7
                  h2.mb-4.bgnegro.text-white.text-center Despeje del área de recibo
              p.mb-0 Es fundamental mantener el área despejada para facilitar el flujo constante de mercancía, evitando de esta manera represamientos que afecten la eficiencia de la operación.
        .col-md.tarjeta.color-primario.p-4.p-md-4.p-lg-5(data-aos="fade-left")
          .row.justify-content-center.mb-1
            .col-12
              .row.align-items-end
                .col-lg-3.mb-4
                  img.img-a.img-t(src='@/assets/curso/temas/t7/tar1-2.png', alt='Imagen decorativa.')
                .col-lg-7
                  h2.mb-4.bgnegro.text-white.text-center Espacio adecuado 
              p.mb-0 El tamaño del espacio de recibo debe estar determinado por el volumen de mercancía y el tiempo de descarga, el cual debe ser el más breve posible para reducir costos operativos.

    .row.align-items-center.mb-5.subt(data-aos="fade-right")
      .col-auto.ico
        img(src='@/assets/curso/temas/subt.svg', alt='')
      .col
        h3.mb-0.p-1.px-3 Recibo de alimentos
 
    .row.justify-content-center.align-items-center.mb-4
      .col-6.col-md-6.col-lg-3
        img(src='@/assets/curso/temas/t7/img1.png', alt='')
      .col-sm-12.col-md-12.col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-xl-11.m-auto(titulo="Control de la cadena de frío")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 Algunos productos, especialmente los alimentos, requieren mantener una temperatura específica durante todo el proceso de recepción y almacenamiento para evitar su descomposición y la proliferación de bacterias, lo que podría representar un riesgo para la salud del consumidor. Es esencial contar con un área definida y adecuada para este tipo de mercancía.
          .row.col-xl-11.m-auto(titulo="Control de materias primas")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 Es necesario contar con un área de básculas calibradas para garantizar la precisión en el pesaje de las materias primas y minimizar pérdidas. Además, se deben clasificar correctamente estas materias primas, y algunas empresas demarcan sus áreas de recibo conforme a especificaciones específicas.
          .row.col-xl-11.m-auto(titulo="Requisitos de almacenamiento")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 Algunas materias primas requieren condiciones especiales de almacenamiento, como refrigeración o espacios con control de humedad. Es crucial identificar y definir estos espacios según las necesidades específicas de cada producto.

    .row.align-items-center.mb-5.subt(data-aos="fade-right")
      .col-auto.ico
        img(src='@/assets/curso/temas/subt.svg', alt='')
      .col
        h3.mb-0.p-1.px-3 Variables que influyen en el espacio de recibo

    .row
        TabsC.color-acento-botones.mb-5(data-aos="zoom-in-left")
          .py-3.py-md-5(titulo="Cantidad")
            .row.justify-content-center
              .col-lg-5.col-md-5.col-5.mb-4
                img(src='@/assets/curso/temas/t7/tab1-1.png', alt='')
              .col-lg-5.col-md-12.col-sm-12
                h4.mt-2 Cantidad de referencias
                p El espacio debe estar diseñado para recibir diversas referencias de productos de manera ordenada.
          .py-3.py-md-5(titulo="Frecuencia")
            .row.justify-content-center
              .col-lg-5.col-md-5.col-5.mb-4
                img(src='@/assets/curso/temas/t7/tab1-2.png', alt='')
              .col-lg-5.col-md-12.col-sm-12
                h4.mt-2 Frecuencia de entrega
                p La cantidad de entregas periódicas también influye en la organización del área de recibo..
          .py-3.py-md-5(titulo="Especificaciones")
            .row.justify-content-center
              .col-lg-5.col-md-5.col-5.mb-4
                img(src='@/assets/curso/temas/t7/tab1-3.png', alt='')
              .col-lg-5.col-md-12.col-sm-12
                h4.mt-2 Especificaciones técnicas de manipulación
                p Cada tipo de producto tiene requisitos específicos de manejo que deben ser considerados al definir los espacios de almacenamiento.
          .py-3.py-md-5(titulo="Recibo")
            .row.justify-content-center
              .col-lg-5.col-md-5.col-5.mb-4
                img(src='@/assets/curso/temas/t7/tab1-4.png', alt='')
              .col-lg-5.col-md-12.col-sm-12
                h4.mt-2 Recibo de productos a granel
                p Este tipo de mercancía requiere áreas específicas, como silos de almacenamiento. Dependiendo de la infraestructura de la empresa, estos espacios pueden estar ubicados dentro o fuera de las instalaciones.
                p Es importante que la organización del área de recibo se base en una planificación eficiente que minimice costos operativos, garantice la calidad de los productos y cumpla con las normativas de seguridad y salud.

    .row.align-items-center.mb-5.subt(data-aos="fade-right")
      .col-auto.ico
        img(src='@/assets/curso/temas/subt.svg', alt='')
      .col
        h3.mb-0.p-1.px-3 Espacios y procesos para la recepción de productos

    p.mb-4 La correcta recepción de productos depende en gran medida de la naturaleza de la mercancía, y se requiere que los espacios y procesos sean adecuados para garantizar su correcto manejo.

    .row.justify-content-center.align-items-center.mb-4
      .col-6.col-md-5.col-lg-5.p-0.bgprimario
        img(src='@/assets/curso/temas/t7/img2.png', alt='')
      .col-12.col-md-12.col-lg-7.bgprimario
        h4.mx-4.mt-5.mb-4.bgacentocontenido.p-2 Recepción de productos líquidos o en grandes volúmenes
        p.mx-4.mb-5 En el caso de productos líquidos o a granel, como los combustibles en estaciones de servicio, la recepción se realiza generalmente mediante sistemas específicos, como los tanques subterráneos. Estos tanques permiten una adecuada manipulación del producto y reducen el riesgo de derrames o pérdidas.
        h4.mx-4.mt-4.mb-4.bgacentocontenido.p-2 Recepción de productos en arrume o bultos sueltos
        p.mx-4.mb-4 Cuando los productos llegan en cajas, bultos sueltos o arrume, es fundamental contar con espacios adecuados para su recepción, a fin de facilitar el proceso de verificación. Estos productos suelen estar menos organizados en su embalaje, lo que puede generar dificultades durante la recepción si no se tiene un orden adecuado.

    p.mt-4 Para evitar errores en la verificación de la mercancía, se recomienda establecer un sistema de clasificación claro y ordenado. 

    .row.justify-content-center.align-items-end.mb-4
      .col-lg-9.col-sm-12.col-md-12
        p Es común el uso de estibas para organizar y facilitar el traslado de estos productos. Las estibas ayudan a mantener la mercancía ordenada y protegen su integridad durante el manejo y el transporte dentro del almacén.
        .row.justify-content-center.align-items-center.mb-2
          .col-lg-8
          .col-6.col-md-5.col-lg-5.p-0.bgprimario
            img(src='@/assets/curso/temas/t7/img3.png', alt='')
          .col-12.col-md-12.col-lg-7.bgsecundario
            h4.mx-5.mt-4.mb-2.bgacentocontenido.p-2 Acomodación de cajas y otros productos
            p.mx-5.mb-2 El proceso de acomodación de las cajas debe hacerse de manera que se garantice su seguridad y accesibilidad. Dependiendo de las características del producto, las cajas pueden organizarse por tamaño, peso, tipo o fecha de caducidad, lo que facilita tanto el proceso de recepción como el de almacenamiento.
      .col-lg-3.col-sm-6.col-md-6
        img(src='@/assets/curso/temas/t7/img4.png', alt='')

    .row.align-items-center.mb-5.subt(data-aos="fade-right")
      .col-auto.ico
        img(src='@/assets/curso/temas/subt.svg', alt='')
      .col
        h3.mb-0.p-1.px-3 Características del área de despacho

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.col-sm-12.col-md-12
        p El área de despacho debe ser lo suficientemente amplia para permitir el alistamiento de los pedidos que serán despachados durante el día o en determinadas franjas horarias. Esto garantiza que no haya riesgo de confusión durante el proceso de carga. Además, es recomendable contar con un espacio exclusivo para almacenar la mercancía que será devuelta debido a no conformidades en los productos.
        p Otra característica fundamental es el espacio destinado para el picking o alistamiento, el cual dependerá de la naturaleza de los productos, las cantidades solicitadas, el número de referencias, así como de las especificaciones técnicas y de manipulación de la mercancía. Es crucial contar con áreas adecuadas y suficientes para el uso de equipos de movilización tanto durante el alistamiento como en el proceso de carga de los productos.
        p En caso de contar con muelles de carga, se debe asegurar que el área esté despejada para permitir que las operaciones se realicen de manera eficiente y en el menor tiempo posible.
      .col-lg-5.col-6.col-md-10
        img(src='@/assets/curso/temas/t7/img5.png', alt='')

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.col-sm-12.col-md-12
        .cajon.color-acento-contenido.p-4.mb-4
          p #[b Observación:] Al igual que en el proceso de recepción, se deben tener en cuenta las características específicas de las áreas de despacho, especialmente para productos alimenticios. En este caso, la zona de alistamiento debe disponer de los equipos necesarios para mantener la cadena de frío cuando sea necesario. Además, si se realizan despachos a granel o se entregan productos en arrume, deben tomarse en cuenta las condiciones adecuadas para garantizar su correcta manipulación.

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
