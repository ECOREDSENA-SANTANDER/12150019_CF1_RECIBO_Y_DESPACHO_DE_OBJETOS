<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tipos de carga

    .row.mb-4
      p Los tipos de carga se determinan por su capacidad de ser transportada sin que se alteren sus principales características, garantizando así un manejo adecuado durante todo el proceso logístico. Existen grupos de carga, que se dividen según sus características y necesidades específicas para su transporte:


    .row.align-items-center.mb-5.subt(data-aos="fade-right")
      .col-auto.ico
        img(src='@/assets/curso/temas/subt.svg', alt='')
      .col
        h3.mb-0.p-1.px-3 Carga general

    .row.mt-4.mb-4
      p Como su nombre lo indica, se refiere a cualquier tipo de carga de diversa naturaleza que se transporta de manera conjunta, en pequeñas cantidades y en unidades independientes. La característica principal de este tipo de carga es que su cantidad puede ser contada, ya que se manipula en unidades separadas. Ejemplos de carga general incluyen cilindros, cajas, cartones, botellas, planchas metálicas, entre otros, los cuales se transportan y almacenan de forma conjunta. La carga general, a su vez, se clasifica en las siguientes categorías:

    .row.justify-content-center.align-items-center.mb-5
      .col-6.col-md-6.col-lg-3
        img(src='@/assets/curso/temas/t2/img1.png', alt='')
      .col-sm-12.col-md-12.col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-xl-11.m-auto(titulo="Carga con embalaje")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 Se refiere a aquella carga que, debido a sus características, requiere ser protegida con un recipiente o embalaje para garantizar su seguridad durante el proceso de estiba. Ejemplos de este tipo de carga incluyen cajas de conservas alimenticias, cajones de repuestos para maquinaria, tambores con aceites comestibles, bidones con productos químicos, entre otros.
          .row.col-xl-11.m-auto(titulo="Carga suelta, sin embalaje")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 Se refiere a aquellos artículos o productos que no requieren ningún tipo de embalaje adicional para su transporte o manipulación. Esta carga generalmente está compuesta por materiales y productos que, debido a su naturaleza o tamaño, pueden ser transportados directamente sin riesgo de daños. Ejemplos comunes de carga suelta incluyen planchas de hierro, rieles, tubos, llantas, piezas de maquinaria, entre otros. Este tipo de carga se maneja de manera eficiente y segura mediante grúas, montacargas o sistemas especializados de carga y descarga, debido a sus características voluminosas o pesadas.
          .row.col-xl-11.m-auto(titulo="Carga unitarizada")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-3 Se refiere a la agrupación y embalaje de una carga general en un único bulto, lo que permite su manipulación en una sola operación, con el objetivo de optimizar el proceso de estiba. Ejemplos de este tipo de carga incluyen:
                ul.lista-ul--color.fa-al
                  li 
                    i.fas.fa-shopping-cart
                    span.mb-0 #[b Carga paletizada:] mercancías de la misma clase, con embalaje estandarizado, que se agrupan y aseguran sobre una paleta. De esta manera, se forma un solo bulto que facilita su manipulación de manera más rápida y eficiente.           
                  li 
                    i.fas.fa-shopping-cart
                    span.mb-0 #[b Carga preeslingada:] también cuenta con embalaje estandarizado. En este caso, las cargas están listas para ser enganchadas, y por lo general, forman parte de un gran lote de mercancía.
                  li 
                    i.fas.fa-shopping-cart
                    span.mb-0 #[b Carga contenerizada:] la mercancía se coloca en contenedores estandarizados, optimizando la seguridad y el transporte eficiente.

    .row.align-items-center.mb-5.subt(data-aos="fade-right")
      .col-auto.ico
        img(src='@/assets/curso/temas/subt.svg', alt='')
      .col
        h3.mb-0.p-1.px-3 Carga a granel

    .row.mt-4.mb-4
      p La carga a granel se refiere a productos que se transportan en grandes cantidades y sin embalaje, es decir, en su forma original, sin envoltorios o contenedores individuales. Esta carga se estiba directamente en los compartimientos específicos de la bodega de los buques, los cuales están especialmente diseñados y acondicionados para recibirla de manera eficiente. La carga a granel se clasifica en tres tipos principales según su estado físico:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        TabsA.color-acento-botones
          .tarjeta.color-primario.p-4(titulo="Carga a granel sólida")
            p Incluye productos como granos comestibles, minerales, fertilizantes, abonos y otros materiales que se manejan en estado sólido. Estos productos suelen ser transportados por medio de grúas, cintas transportadoras o sistemas neumáticos para su carga y descarga.
          .tarjeta.color-primario.p-4(titulo="Carga a granel líquida")
            p Comprende sustancias líquidas como petróleo, lubricantes, gasolina, diésel y sebo. Este tipo de carga se transporta en cisternas especializadas, que permiten su almacenamiento y manejo seguro, evitando derrames o contaminaciones.
          .tarjeta.color-primario.p-4(titulo="Carga a granel gaseosa")
            p Se refiere a gases como el propano, butano, y otros gases industriales que se transportan en estado gaseoso. Estos gases se transportan en depósitos presurizados o criogénicos, dependiendo de las condiciones en las que se encuentren durante el transporte.

    .row.align-items-center.mb-5.subt(data-aos="fade-right")
      .col-auto.ico
        img(src='@/assets/curso/temas/subt.svg', alt='')
      .col
        h3.mb-0.p-1.px-3 Carga especial

    .row.mt-4.mb-4
      p Como su nombre lo indica, la carga especial se distingue de las demás debido a sus características particulares que requieren un manejo, manipulación y estiba cuidadosos. Estas diferencias pueden estar relacionadas con factores como el peso, el grado de conservación, la peligrosidad, el alto valor, entre otros. Como resultado, este tipo de carga exige un tratamiento especial en su proceso logístico. Se considera carga especial:

    .row.align-items-center.justify-content-center.fondotema21.mb-4
      .col-sm-12.col-md-12.col-lg-10
        PasosA.color-acento-contenido.mb-0(tipo="l")
          .row.align-items-center.justify-content-center
            .col-lg
              h3 Carga sobredimensionada
              p.mb-0 Son cargas que, por sus dimensiones o volumen, no pueden ser descargadas de manera convencional. Ejemplos incluyen maquinarias y vehículos, que requieren de tratamientos especializados y equipos adecuados para garantizar su seguridad durante el proceso de estiba.
            .col-auto
              figure(data-aos="zoom-in")
                img.d-none.d-lg-block(src='@/assets/curso/temas/t2/ps1-1.png', alt='')
          .row.align-items-center.justify-content-center
            .col-auto
              figure(data-aos="zoom-in")
                img.d-none.d-lg-block(src='@/assets/curso/temas/t2/ps1-2.png', alt='')
            .col-lg
              h3 Carga refrigerada
              p Este tipo de carga incluye productos como carnes, frutas, ciertos medicamentos, entre otros, que deben mantenerse a una temperatura controlada para su conservación. Para ello, se emplean sistemas de refrigeración y vigilancia constante de la temperatura durante el transporte.
          .row.align-items-center.justify-content-center
            .col-lg
              h3 Carga peligrosa
              p.mb-0 Son sustancias que presentan un riesgo para la salud, el medio ambiente o la seguridad, tales como ácidos, peróxidos, productos químicos inflamables, explosivos, entre otros. La manipulación de estas cargas deben seguir estrictas normativas de seguridad, como las dispuestas por la OMI (Organización marítima internacional), para minimizar los riesgos asociados.
            .col-auto
              figure(data-aos="zoom-in")
                img.d-none.d-lg-block(src='@/assets/curso/temas/t2/ps1-3.png', alt='')
          .row.align-items-center.justify-content-center
            .col-auto
              figure(data-aos="zoom-in")
                img.d-none.d-lg-block(src='@/assets/curso/temas/t2/ps1-4.png', alt='')
            .col-lg
              h3 Carga valiosa
              p Incluye artículos de alto valor económico o cultural, como oro, pieles (que requieren calefacción), obras de arte, licores finos, entre otros. Este tipo de carga debe ser tratada con especial atención para garantizar su seguridad durante el transporte y estiba, utilizando medidas adicionales para evitar robos o daños.
          .row.align-items-center.justify-content-center
            .col-lg
              h3 Correo
              p.mb-0 Se refiere a las piezas postales y otros bultos que contienen correspondencia o documentos, los cuales deben ser manejados de acuerdo con normas específicas para asegurar su correcta entrega y confidencialidad.
            .col-auto
              figure(data-aos="zoom-in")
                img.d-none.d-lg-block(src='@/assets/curso/temas/t2/ps1-5.png', alt='')
          .row.align-items-center.justify-content-center
            .col-auto
              figure(data-aos="zoom-in")
                img.d-none.d-lg-block(src='@/assets/curso/temas/t2/ps1-6.png', alt='')
            .col-lg
              h3 Animales vivos
              p Este tipo de carga incluye animales que requieren condiciones específicas para su transporte, como un ambiente adecuado para su bienestar y salud durante el traslado.
          .row.align-items-center.justify-content-center
            .col-lg
              h3 Carga delicada
              p.mb-0 Incluye productos frágiles o con alto riesgo de daño, como obras de arte, vidrios, porcelanas, entre otros. La estiba y el manejo de esta carga requieren una manipulación cuidadosa y el uso de materiales especiales para proteger la integridad de los productos.
            .col-auto
              figure(data-aos="zoom-in")
                img.d-none.d-lg-block(src='@/assets/curso/temas/t2/ps1-7.png', alt='')
    .row
      p.mb-5 La carga especial está compuesta por aquellos productos que, debido a sus características particulares, demandan un tratamiento y cuidado excepcionales durante su transporte y estiba.

    .row.align-items-center.mb-5.subt(data-aos="fade-right")
      .col-auto.ico
        img(src='@/assets/curso/temas/subt.svg', alt='')
      .col
        h3.mb-0.p-1.px-3 Carga contenerizada

    .row.align-items-center.justify-content-center.fondotema22
      .row
        p.ps-5.mt-4 La carga contenerizada se refiere al proceso de transporte de mercancías en contenedores estandarizados, que son cajas metálicas o de fibra de vidrio de un tamaño uniforme. Estos contenedores están diseñados para maximizar la eficiencia en la movilización de carga, permitiendo transportar grandes cantidades de productos en menor tiempo y de forma más segura.
        p.ps-5 Existen diversos tipos de contenedores especializados según el tipo de carga que se desea transportar. Algunos de los más comunes incluyen:
        .col-md-12.col-lg-4.col-12.mb-5
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t2/tar1-1.png' alt='').img220
            .tarjeta.bg1
              .p-5.mt-5
                h4.mb-4.text-center Contenedores #[em reefers]
                p.mb-0.text-center Son contenedores refrigerados, utilizados para el transporte de productos perecederos que requieren control de temperatura durante su traslado, como alimentos, medicamentos o productos químicos sensibles. 
        .col-md-12.col-lg-4.col-12.mb-5
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t2/tar1-2.png' alt='').img220
            .tarjeta.bg2
              .p-5.mt-5
                h4.mb-4.text-center Contenedores #[em flat]
                p.mb-0.text-center Estos contenedores no tienen paredes ni techo y se usan principalmente para el transporte de mercancías de gran tamaño, como maquinaria o cargas pesadas, que no caben en contenedores convencionales.
        .col-md-12.col-lg-4.col-12.mb-5
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t2/tar1-3.png' alt='').img220
            .tarjeta.bg3
              .p-5.mt-5
                h4.mb-4.text-center Contenedores #[em open top]
                p.mb-0.text-center Están diseñados con techos removibles, lo que facilita la carga y descarga de artículos que tienen una altura superior a la de un contenedor estándar. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Además de los contenedores, existen furgones, que son cajas similares a los contenedores, pero con un sistema de ruedas incorporado. Estos furgones permiten un fácil traslado dentro de áreas limitadas o dentro de instalaciones logísticas, como puertos o almacenes, sin necesidad de grúas para moverlos.
        p El uso de la carga contenerizada ha revolucionado el transporte internacional, permitiendo no solo una mayor eficiencia en la carga y descarga, sino también la posibilidad de realizar el transporte de diversas mercancías de manera más segura, organizada y económica.


</template>

<script>
export default {
  name: 'Tema2',
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
