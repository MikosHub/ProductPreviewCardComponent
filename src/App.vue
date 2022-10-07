<template>
  <div class="flex h-screen">
    <div
      class="bg-white mx-4 my-auto rounded-lg flex flex-col md:flex-row md:mx-auto"
    >
      <img
        src="@/assets/image-product-mobile.jpg"
        alt=""
        class="rounded-t-lg block md:hidden"
      />
      <img
        src="@/assets/image-product-desktop.jpg"
        alt=""
        class="hidden md:inline-block object-scale-down object-left w-80 rounded-l-lg"
      />
      <div class="p-6 md:w-80 inline md:p-8 md:align-bottom">
        <h3 class="text-grayBlue text-xs tracking-widest font-montserrat">
          P E R F U M E
        </h3>
        <h1
          class="text-darkBlue text-3xl font-bold font-fraunces leading-none py-2"
        >
          Gabrielle Essence Eau De Parfum
        </h1>
        <div class="text-grayBlue text-sm font-montserrat py-2">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </div>
        <div class="py-4">
          <span
            class="text-darkCyan text-3xl font-bold font-fraunces align-middle"
            >$149.99</span
          >
          <span class="text-grayBlue text-xs line-through font-montserrat pl-4"
            >$169.99</span
          >
        </div>
        <div
          class="bg-darkCyan cursor-pointer hover:bg-darkCyan-dark rounded-lg py-3 flex justify-center items-center font-bold"
        >
          <img src="@/assets/icon-cart.svg" alt="" />
          <span class="text-white text-sm font-montserrat pl-2"
            >Add to Cart</span
          >
        </div>
      </div>
    </div>

    <div
      class="absolute bottom-2 w-full text-center text-darkBlue font-montserrat text-xs"
    >
      Challenge by
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        class="text-darkCyan hover:text-grayBlue"
        >Frontend Mentor</a
      >. Coded by
      <a
        href="https://github.com/MikosHub"
        target="_blank"
        class="text-darkCyan hover:text-grayBlue"
        >MikosHub</a
      >.
    </div>
  </div>
</template>

<script></script>
