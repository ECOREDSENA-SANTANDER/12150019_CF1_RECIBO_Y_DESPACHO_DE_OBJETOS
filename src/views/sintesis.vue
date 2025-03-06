<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La carga, en su naturaleza, se refiere al conjunto de mercancías o materiales que se trasladan de un lugar a otro, pudiendo presentarse en diversos tipos como carga pesada o frágil. Para su manejo, es fundamental comprender características de los objetos, como las bandas transportadoras que facilitan su traslado. Los procesos de recibido y despacho son clave en la logística, buscando eficiencia en la recepción de mercancías y su posterior distribución. Esto involucra métodos de extracción y técnicas específicas, organizando áreas destinadas tanto al recibo como al despacho de los productos, asegurando una correcta preparación y organización para la operación. 
    

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.png", alt="La carga se refiere a mercancías que se trasladan, y su manejo depende de tipos y características como las bandas transportadoras. Los procesos de recibido y despacho son esenciales para garantizar eficiencia en la recepción y distribución de productos. Esto incluye métodos de extracción y una correcta organización de las áreas involucradas.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
