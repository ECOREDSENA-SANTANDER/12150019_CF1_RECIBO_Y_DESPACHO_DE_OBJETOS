<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Preparación y organización de áreas para recibo y despacho

    .row.align-items-center.justify-content-center.mb-4
      .col-2.col-md-2.col-lg-1
        img(src='@/assets/curso/temas/t7/ico1.png', alt='')
      .col-sm-12.col-md-12.col-lg-11
        p Es fundamental considerar que el proceso de recepción y despacho varía según el tipo de producto y su empaque. Dependiendo de las características del empaque, se requiere el uso de equipos específicos para la movilización, tales como estibas o paletas, así como tanques para almacenar productos a granel (líquidos o sólidos). Además, es importante destacar que las empresas diseñan sus espacios logísticos según sus necesidades particulares.

    .etiqueta.sub9.p-2.d-flex.mb-4(data-aos="fade-left")
      h3.mb-0.ps-5.pe-5 Características de las áreas de recibido

    p.mb-4 Existen múltiples características a tener en cuenta, ya que, como se ha mencionado a lo largo del material, todo depende de la naturaleza del producto y de la infraestructura disponible. A continuación, se mencionan algunos aspectos clave a considerar para diferentes tipos de productos.
    
    .row.mb-3
      .col-lg-6.col-sm-12.col-md-12
        h3.p-2.bggris Aspectos claves a considerar en el área de recibo de mercancías

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

    .etiqueta.sub10.p-2.d-flex.mb-4(data-aos="fade-left")
      h3.mb-0.ps-5.pe-5 Recibo de alimentos
 
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

    .etiqueta.sub11.p-2.d-flex.mb-4(data-aos="fade-left")
      h3.mb-0.ps-5.pe-5 Variables que influyen en el espacio de recibo



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
