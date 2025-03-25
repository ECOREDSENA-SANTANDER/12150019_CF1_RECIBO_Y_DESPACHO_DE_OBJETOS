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
        img(src='@/assets/curso/temas/t5/img3.png', alt='').d-none.d-lg-block
      .col-sm-12.col-md-12.col-lg-4
        .row
          .col-6.col-md-3.col-lg-3
            img(src='@/assets/curso/temas/t5/ico2.png', alt='')
        .row.align-items-center.justify-content-center
            p #[b Las mercancías pasan por diversas manipulaciones antes de ser entregadas al cliente o enviadas al punto de venta, a continuación se presenta el proceso:]
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

    p.mb-5 #[b En cuanto a las técnicas de rotulado, se distinguen las siguientes:]

    .row.justify-content-center.bg5.mb-5(data-aos="fade-down") 
      .row.justify-content-center(data-aos="fade-down") 
        .col-sm-6.col-xl-4.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.bonita(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5
                .row.justify-content-center.align-items-center
                  .col-11
                    h4.text-center.bgprimario Manual
                p.text-center Es realizada por el operario encargado de la tarea, quien se encarga de preparar el tipo de rótulo adecuado para cada producto.
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t5/tar1-1.png')})`}")
        .col-sm-6.col-xl-4.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.bonita(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5
                .row.justify-content-center.align-items-center
                  .col-11
                    h4.text-center.bgprimario Mecánica
                p.text-center Funciona a través de un programa que permite ajustar la velocidad de etiquetado, codificación o rotulación, así como modificar el tamaño del rótulo según lo que se desee indicar en el empaque del producto. 
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t5/tar1-2.png')})`}")

    p.mb-4 Para el manejo de la mercancía, se emplean pictogramas, que son símbolos que indican la forma correcta de manipular los productos.

    .row.justify-content-center.bg6.mb-2(data-aos="fade-down") 
      .row.justify-content-center.mt-4.mb-4(data-aos="fade-down") 
        .col-lg-6.col-sm-12.col-md-12
          .titulo-sexto.color-acento-contenido
            h5 Figura 2. 
            | Forma correcta de manipular los productos
          figure
            img(src='@/assets/curso/temas/t5/fig2.png', alt='Conjunto de iconos rojos que indican instrucciones de manipulación para paquetes: frágil, temperatura máxima y mínima, proteger del sol y la humedad, lado hacia arriba, no apilar, no comprimir, no usar palancas ni ganchos.')

    .row.align-items-center.justify-content-center.mb-4
      .col-sm-12.col-md-12.col-lg-7
        p Para la gestión de la información, las empresas han optado por implementar un sistema logístico de información, que les permite recopilar, almacenar y procesar datos con el objetivo principal de tomar decisiones informadas ante los requerimientos de los clientes en el centro de distribución.
        p Las actividades de almacenamiento requieren un manejo de información preciso y oportuno, que permita conocer de manera óptima las cantidades, ubicaciones y características de las mercancías. Para ello, se necesita un sistema de control que facilite la gestión del centro de distribución y permita hacer un seguimiento detallado de cada una de sus actividades.
        .row.bggris
          p.p-4 En la ejecución de los procesos dentro del centro de distribución se emplea el código de barras, que ofrece grandes ventajas como rapidez, seguridad, alta densidad de información y capacidad de lectura a distancia. Estas características lo hacen ideal para el control de mercancías. Además, en la actualidad también se utilizan tecnologías como el GPS y el RFID.
      .col-6.col-md-10.col-lg-5
          img(src='@/assets/curso/temas/t5/img4.png', alt='')

    .row.justify-content-center.align-items-center(data-aos="zoom-in")
      .col-sm-12.col-md-12.col-lg-12
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/t5/img5.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-2.mt-2 Las empresas modernas hacen uso del EDI (Intercambio Electrónico de Datos), un conjunto de datos estructurados según normas específicas que pueden ser transmitidos electrónicamente. Estos formatos son procesados de manera segura, garantizando la integridad de la información. El EDI actúa como interfaz entre sistemas locales y permite el intercambio estructurado de información comercial, lo que asegura que los procesos se basen en datos claros y sin ambigüedades.
            br 
            br 
            p Por otro lado, las empresas que han optado por vender a través de internet han optimizado sus procesos internos, lo que les permite responder más eficientemente a las necesidades de los clientes, basándose en la información proporcionada por los proveedores. Esta modalidad les ha exigido manejar grandes volúmenes de datos para tomar decisiones rápidas y oportunas, lo que a su vez hace que toda la cadena de suministro sea más eficiente.

    .row.align-items-end.justify-content-center.mb-4
      .col-sm-12.col-md-12.col-lg-9.bggris
        p.p-4 Las áreas de recibo están determinadas según la naturaleza del producto y la cantidad de instalaciones asignadas para tal fin. Siempre deben considerarse aspectos como la naturaleza del material, las cantidades recibidas y el destino del objeto. Sin embargo, disponer de varias zonas de recibo puede representar un inconveniente si no se cuenta con el equipo humano adecuado. Generalmente, este tipo de infraestructura se encuentra en centros de distribución, grandes empresas de producción o aquellas cuyo tipo de productos o sus características requieren espacios amplios para llevar a cabo esta operación.
      .col-6.col-md-6.col-lg-3
        img(src='@/assets/curso/temas/t5/img6.png', alt='')

    .row.align-items-center.justify-content-center
      .col-2.col-md-2.col-lg-1
        img(src='@/assets/curso/temas/t5/ico3.png', alt='')
      .col-sm-12.col-md-10.col-lg-11
        p Cuando existen diversas áreas de recibo, es crucial informar al proveedor sobre el lugar específico donde se realizará la recepción. Esto favorece una buena relación y optimiza el proceso, minimizando posibles inconvenientes por errores en el lugar de recepción. No obstante, se debe tener especial cuidado en el manejo de los inventarios, ya que, a mayor cantidad de áreas de recepción, mayor es la complejidad en el control de los almacenes.

    Separador  
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.1 Las áreas de recibo más reconocidas

    .row.fondotema31.align-items-center.p-4.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center

          .tarjeta.tarjeta--blanca.p-4.py-3(data-aos="fade-down")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-sm-12.col-md-12.col-lg-7
                  h3.mt-4 Oficina de recibo
                  p.mb-4 Está compuesta por los elementos y espacios necesarios para que el equipo de trabajo realice las actividades administrativas relacionadas con el proceso. En algunas empresas, existe una oficina única destinada tanto para recibo como para despacho.
                .col-6.col-md-6.col-lg-4
                  img.mt-5(src='@/assets/curso/temas/t5/sly1-1.png' alt='')
              .row.justify-content-center.align-items-center
                .col-sm-12.col-md-12.col-lg-7
                  h3.mt-4 Muelle de descarga
                  p.mb-4 Es el espacio designado para que los vehículos se estacionen en la posición adecuada para ser descargados. El número de muelles varía según factores internos relacionados con los costos y la infraestructura de la organización.
                .col-6.col-md-6.col-lg-4
                  img.mt-5(src='@/assets/curso/temas/t5/sly1-2.png' alt='')
              .row.justify-content-center.align-items-center
                .col-sm-12.col-md-12.col-lg-7
                  h3.mt-4 Área de ubicación de equipos de movilización de mercancía
                  p.mb-4 Este espacio se destina a la ubicación de los equipos de movilización de mercancía cuando no están en uso o al finalizar la jornada laboral. 
                .col-6.col-md-6.col-lg-4
                  img.mt-5(src='@/assets/curso/temas/t5/sly1-3.png' alt='')
              .row.justify-content-center.align-items-center
                .col-sm-12.col-md-12.col-lg-7
                  h3.mt-4 Espacios asignados para la ubicación de la mercancía recibida
                  p.mb-4 Esta área puede considerarse transitoria, ya que depende de la rapidez en el proceso de recepción, el cual está determinado por la naturaleza del producto y las características de la infraestructura disponible.
                .col-6.col-md-6.col-lg-4
                  img.mt-5(src='@/assets/curso/temas/t5/sly1-4.png' alt='')
              .row.justify-content-center.align-items-center
                .col-sm-12.col-md-12.col-lg-7
                  h3.mt-4 Espacio asignado para la revisión de cantidad en unidades, peso y/o especificaciones
                  p.mb-4 En algunos casos, el área destinada para la ubicación de la mercancía es la misma utilizada para la revisión, lo que optimiza el uso de los espacios.
                .col-6.col-md-6.col-lg-4
                  img.mt-5(src='@/assets/curso/temas/t5/sly1-5.png' alt='')
              .row.justify-content-center.align-items-center
                .col-sm-12.col-md-12.col-lg-7
                  h3.mt-4 Espacio asignado para material recibido pendiente de ubicación
                  p.mb-4 Este espacio se utiliza para almacenar temporalmente la mercancía que aún no ha sido organizada en su ubicación final. Por otro lado, el área de devoluciones está destinada para la mercancía que no cumple con las especificaciones y debe ser retornada al proveedor. Es importante señalar que, cuando el proveedor entrega la mercancía directamente, en ocasiones se puede realizar la devolución de inmediato, lo que evita la necesidad de almacenamiento transitorio hasta que el producto sea retirado. En ciertos casos, la empresa debe asumir el costo de la devolución y devolver los artículos no conformes al proveedor.
                .col-6.col-md-6.col-lg-4
                  img.mt-5(src='@/assets/curso/temas/t5/sly1-6.png' alt='')

    Separador  
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.2 Procedimiento de recepción de objetos:

    .row.align-items-center.justify-content-center
      .col-2.col-md-2.col-lg-1
        img(src='@/assets/curso/temas/t5/ico4.png', alt='')
      .col-sm-12.col-md-10.col-lg-11
        p Las organizaciones suelen tener procedimientos establecidos para la recepción de productos provenientes de proveedores (ya sea mediante transporte del proveedor o transporte propio) y los productos fabricados internamente. Una adecuada organización implica que los productos de los proveedores se reciban en el orden de llegada. Sin embargo, algunas organizaciones optan por programar citas con los proveedores para facilitar la planificación y alistamiento de los espacios de recepción. El procedimiento general es el siguiente:

    .row.align-items-center.justify-content-center.mb-4
      .col-6.col-md-6.col-lg-3
        img(src='@/assets/curso/temas/t5/img7.png', alt='')
      .col-sm-12.col-md-12.col-lg-9
        .cajon.color-acento-contenido.p-4
          p.p-2 #[b Orden de compra:] es el documento que recoge la información sobre las necesidades de la organización respecto a determinados productos. Este documento debe incluir toda la información necesaria para que el área de recepción pueda planificar y preparar las áreas adecuadas antes de la llegada de la mercancía.
        p.mt-3.mb-3 Recepción y verificación de documentos (nombre de la empresa, NIT, cantidades, descripción, referencia) y, si es necesario, de la certificación de calidad del material. Iniciar el proceso de descarga e informar al departamento de calidad sobre la llegada de la mercancía, si se requiere su validación.
        .cajon.color-acento-contenido.p-4
          p.p-2 #[b Verificación de la mercancía:] abrir cajas o embalajes para revisión, realizando un muestreo aleatorio o verificando solo cantidades en unidades o peso. Si se detectan problemas, se puede devolver parte o todo el lote, completando los documentos correspondientes e informando a los departamentos pertinentes.

    .row.justify-content-center.bg7
      .row.align-items-center.justify-content-center.mb-0
        .col-sm-12.col-md-12.col-lg-7
          p.mx-5 Si no se requiere devolución, se verifica la factura con los productos recibidos. Si hay errores, se anotan los datos correctos o se deja la remisión hasta que el proveedor envíe la factura corregida, ya que el departamento financiero no acepta facturas con correcciones. Finalmente, se entregan los documentos firmados al proveedor y se identifica la mercancía según las políticas de la organización.
          p.mx-5 Registro de la información en el sistema de inventarios y acomodación de la mercancía en las áreas asignadas. Cuando el producto es recogido del proveedor, algunos transportadores realizan una inspección preliminar, pero la inspección completa se hace en el área de recibo. 
          p.mx-5 Si el producto es fabricado internamente, se siguen los mismos procedimientos de recepción: verificación de cantidad y calidad, aunque los documentos varían.
        .col-6.col-md-10.col-lg-5
          img(src='@/assets/curso/temas/t5/img8.png', alt='')
      .row.justify-content-center.align-items-center
        .col-4.col-md-3.col-lg-3
          img(src='@/assets/curso/temas/t5/img9.png', alt='').d-none.d-lg-block
        .col-sm-12.col-md-8.col-lg-8
          .row.bggris.mt-5.mx-2
            p.p-3 No contar con un procedimiento específico puede generar problemas como inventarios erróneos, ingreso de material no conforme, y productos con empaque deteriorado. Esto puede ocasionar inconvenientes y pérdidas económicas.
            p.px-3 El método de recibo depende del empaque, ya sea por conteo de unidades o peso. En el caso de productos como combustibles, el vehículo transportador se pesa antes y después de la descarga, y la diferencia es la cantidad recibida.



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
