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
            img(src='@/assets/curso/temas/t3/ico1.png', alt='').d-none.d-lg-block
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

    p.mt-5 A continuación, se describen los más representativos:

    Separador  
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.1 Bandas transportadoras

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        TabsA.color-acento-botones
          .tarjeta.color-primario.p-4(titulo="Características")
                ul.lista-ul--color.fa-al
                  li 
                    i.fas.fa-shopping-cart
                    span.mb-0 Pueden estar fijas al suelo o al techo, dependiendo de la configuración del espacio y la necesidad de transporte.
                  li 
                    i.fas.fa-shopping-cart
                    span.mb-0 Son ideales para el transporte continuo y permanente de mercancías.
                  li 
                    i.fas.fa-shopping-cart
                    span.mb-0 En su versión de rodillos, aprovechan la gravedad para facilitar el movimiento de los productos (bandas transportadoras de rodillo).
                  li 
                    i.fas.fa-shopping-cart
                    span.mb-0 En las instalaciones fijas al techo, se optimiza el uso del espacio vertical.
          .tarjeta.color-primario.p-4(titulo="Desventajas")
                ul.lista-ul--color.fa-al
                  li 
                    i.fas.fa-shopping-cart
                    span.mb-0 Limitan la utilización de otros equipos de manipulación interna, ya que su sistema es fijo.
                  li 
                    i.fas.fa-shopping-cart
                    span.mb-0 Para los sistemas fijos al techo, es necesario contar con una infraestructura elevada en el techo para permitir el desplazamiento adecuado de los productos.
          .tarjeta.color-primario.p-4(titulo="Usos comunes")
                ul.lista-ul--color.fa-al
                  li 
                    i.fas.fa-shopping-cart
                    span.mb-0 Transporte de productos a granel.
                  li 
                    i.fas.fa-shopping-cart
                    span.mb-0 Manejo de algunas autopartes.
                  li 
                    i.fas.fa-shopping-cart
                    span.mb-0 Bandas transportadoras industriales para diversos tipos de carga.
                  li 
                    i.fas.fa-shopping-cart
                    span.mb-0 Este tipo de equipo es esencial en entornos donde la eficiencia en el transporte de mercancías es clave, aunque su instalación y limitaciones deben ser evaluadas según las características del espacio y el tipo de operación.

    .row.align-items-center.mb-5.subt(data-aos="fade-right")
      .col-auto.ico
        img(src='@/assets/curso/temas/subt.svg', alt='')
      .col
        h3.mb-0.p-1.px-3 Equipos para movimiento y traslado de mercancías

    .row
      p Los equipos diseñados para el movimiento y traslado de mercancías incluyen transpaletas (manuales y motorizadas), apiladores (manuales y motorizados), carretillas, elevadores y montacargas. Estos equipos son fundamentales para facilitar el manejo de cargas dentro de almacenes, fábricas y centros de distribución.
      p Las transpaletas son dispositivos mecánicos utilizados principalmente para el traslado y, en algunos casos, la elevación de estibas o paletas con mercancías. Existen dos tipos principales:

    .tarjeta--container.row.mb-5
        .col-md.tarjeta.color-secundario.p-4.p-md-4.p-lg-5(data-aos="fade-right")
          .row.justify-content-center.mb-4
            .col-12
              .row.align-items-end
                .col-lg-3.mb-4
                  img.img-a.img-t(src='@/assets/curso/temas/t3/tar1-1.png', alt='Imagen decorativa.')
                .col-lg-7
                  h2.mb-4.bgnegro.text-white.text-center Transpaletas manuales
              p.mb-0 Son operadas por una persona mediante un sistema de palanca o bomba hidráulica. Son fáciles de usar, de bajo costo de mantenimiento y muy adecuadas para espacios con pisos lisos. Sin embargo, requieren esfuerzo físico por parte del operario.
        .col-md.tarjeta.color-primario.p-4.p-md-4.p-lg-5(data-aos="fade-left")
          .row.justify-content-center.mb-1
            .col-12
              .row.align-items-end
                .col-lg-3.mb-4
                  img.img-a.img-t(src='@/assets/curso/temas/t3/tar1-2.png', alt='Imagen decorativa.')
                .col-lg-7
                  h2.mb-4.bgnegro.text-white.text-center Transpaletas motorizadas
              p.mb-0 Incorporan un sistema eléctrico o de combustión que facilita tanto el movimiento como la elevación de la carga. Son más eficientes en operaciones de mayor volumen o en distancias largas, ya que reducen el esfuerzo humano y mejoran la velocidad de trabajo. 

    .row.align-items-center.justify-content-center.mb-5.bggris
      .col-4.col-md-2.col-lg-1
        img(src='@/assets/curso/temas/t3/ico2.png', alt='')
      .col-sm-12.col-md-12.col-lg-11
          p.mt-4 Por otro lado, los apiladores cumplen una función similar, pero con la capacidad adicional de apilar las cargas a diferentes alturas. Los apiladores pueden ser manuales o motorizados, y son ideales para lugares con poco espacio, ya que permiten apilar estibas de manera vertical. 
          p.mb-4 El uso adecuado de estos equipos depende de las necesidades operativas de cada empresa y de las características del espacio de trabajo, como el tipo de suelo y las cargas que se manipulan.


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
