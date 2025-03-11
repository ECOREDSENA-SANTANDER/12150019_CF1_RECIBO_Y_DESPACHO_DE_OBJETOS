<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Entendiendo el concepto y la naturaleza de la carga
        
      .row.justify-content-center.align-items-center.mb-5
        .col-6.col-md-3.col-lg-1
          img(src='@/assets/curso/temas/t1/ico1.png', alt='')
        .col-sm-12.col-md-12.col-lg-11
          p Entender el concepto y la naturaleza de la carga,  implica comprender qué es la carga y las características que la definen. El concepto hace referencia a los bienes o mercancías que se transportan de un lugar a otro, utilizando diversos medios de transporte. Por otro lado, la naturaleza de la carga se refiere a las propiedades específicas de los productos, como su tamaño, peso, fragilidad o requerimientos especiales. Este entendimiento es clave para optimizar los procesos de manejo, almacenamiento y traslado, garantizando la seguridad y eficiencia en la cadena logística. 

      .etiqueta.sub1.p-2.d-flex.mb-4(data-aos="fade-left")
        h4.mb-0.ps-5.pe-5 Clasificación de las cargas en función de su naturaleza y características

      .row.justify-content-center.align-items-center.mt-5
        .col-lg-12
          TabsB.color-acento-botones
            .py-4.py-md-5(titulo="Carga perecedera" :icono="require('@/assets/curso/temas/t1/tab1-1.png')")
              .row.align-items-center.justify-content-center
                .col-sm-12.col-md-12.col-lg-8.mb-4.mb-md-0
                  p También conocida como carga refrigerada, se refiere a los productos que requieren condiciones especiales para mantener sus características originales, especialmente aquellos de naturaleza alimentaria. Entre estos productos se incluyen:
                  ul.lista-ul--color.fa-al
                    li 
                      i.fas.fa-check-circle
                      span.mb-0 #[b Frutas y verduras:] son productos altamente delicados debido a su rápido deterioro. Es esencial que sean transportados en vehículos adecuados o entregados al consumidor final en el menor tiempo posible.                      .           
                    li 
                      i.fas.fa-check-circle
                      span.mb-0 #[b Carnes y sus derivados:] necesitan un proceso continuo de refrigeración para prevenir el crecimiento de microorganismos, los cuales pueden deteriorar el producto y poner en riesgo la salud del consumidor.        
                    li 
                      i.fas.fa-check-circle
                      span.mb-0 #[b Pescados y productos del mar:] requieren un cuidado especial, al igual que todos sus derivados. Es fundamental mantener la cadena de frío durante su almacenamiento y transporte, ya que, de no ser así, se puede producir una pérdida significativa del producto.        
                    li 
                      i.fas.fa-check-circle
                      span.mb-0 #[b Flores y follaje:] exigen un trabajo coordinado en su empaque, almacenamiento y transporte. Dada su alta sensibilidad a las condiciones de conservación, el tiempo máximo para su entrega es de 48 horas después de su recolección.        
                .col-sm-12.col-md-6.col-lg-3
                  figure
                    img(src='@/assets/curso/temas/t1/img1-1.png', alt='Texto que describa la imagen')
            .py-4.py-md-5(titulo="Carga no perecedera" :icono="require('@/assets/curso/temas/t1/tab1-2.png')")
              .row.align-items-center.justify-content-center
                .col-sm-12.col-md-12.col-lg-8.mb-4.mb-md-0
                  p Se refiere a aquellos productos alimenticios que, debido a sus características, tienen una larga vida útil y no se deterioran fácilmente. Estos productos, como el arroz, la harina, las legumbres, las pastas y las conservas, se caracterizan por su resistencia al paso del tiempo y su capacidad para mantenerse en buen estado sin necesidad de refrigeración o condiciones especiales de almacenamiento. Son fundamentales para la planificación de inventarios a largo plazo, ya que permiten mantener un abastecimiento constante sin riesgos de pérdidas por descomposición. 
                  .cajon.color-acento-contenido.p-4.mb-4
                    p La conservación de estos productos depende generalmente de factores como la humedad, el embalaje adecuado y las condiciones de temperatura. Además, muchas veces, estos alimentos son tratados o procesados para garantizar su durabilidad, lo que los convierte en una opción ideal para almacenar en hogares, comercios o incluso para situaciones de emergencia.              
                .col-sm-12.col-md-6.col-lg-3
                  figure
                    img(src='@/assets/curso/temas/t1/img1-2.png', alt='Texto que describa la imagen')
            .py-4.py-md-5(titulo="Carga frágil" :icono="require('@/assets/curso/temas/t1/tab1-3.png')")
              .row.align-items-center.justify-content-center
                .col-sm-12.col-md-12.col-lg-8.mb-4.mb-md-0
                  p Se entiende como aquella carga que, debido a sus características delicadas y vulnerables, requiere un cuidado extremo a lo largo de todo el proceso de manipulación y transporte. Esta clase de carga puede ser fácilmente dañada por golpes, caídas o presiones inadecuadas, por lo que cada fase, desde su embalaje hasta su entrega final, debe llevarse a cabo con gran precaución. 
                  .cajon.color-acento-contenido.p-4.mb-4
                    p La manipulación de cargas frágiles exige la intervención de personal altamente capacitado, que cuente con las habilidades necesarias para moverla de un lugar a otro sin comprometer su integridad. Además, es fundamental el uso de materiales y técnicas especializadas para garantizar su protección adecuada durante el traslado, reduciendo al máximo cualquier riesgo de deterioro.              
                .col-sm-12.col-md-6.col-lg-3
                  figure
                    img(src='@/assets/curso/temas/t1/img1-3.png', alt='Texto que describa la imagen')
            .py-4.py-md-5(titulo="Carga peligrosa" :icono="require('@/assets/curso/temas/t1/tab1-4.png')")
              .row.align-items-center.justify-content-center
                .col-sm-12.col-md-12.col-lg-8.mb-4.mb-md-0
                  p Se refiere a aquellas mercancías que representan un alto riesgo durante su manipulación y transporte, no solo para el propio producto, sino también para las personas que tengan contacto con él.
                  .cajon.color-acento-contenido.p-4.mb-4
                    p Este tipo de carga se distingue por sus características específicas, entre las que se incluyen sustancias inflamables, venenosas, radioactivas y combustibles, las cuales requieren medidas especiales de seguridad durante todo el proceso de manejo.              
                .col-sm-12.col-md-6.col-lg-3
                  figure
                    img(src='@/assets/curso/temas/t1/img1-4.png', alt='Texto que describa la imagen')




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
